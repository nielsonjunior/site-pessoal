# Auditoria de Segurança, Arquitetura e Hardening

Data: 2026-07-02 · Alvo: site `npcastilho.eng.br` (Nielson P. de Castilho Jr. — Engenheiro Civil)

Referências: OWASP Top 10 (2021), OWASP ASVS, MDN Web Security, práticas DevSecOps 2025–2026.

---

## 1. Arquitetura atual (resumo)

- **Tipo:** site **estático** (marketing/geração de leads). **Não há backend, banco de dados, autenticação, sessão nem API própria.**
- **Stack:** React 19 + TypeScript (strict) + Vite 7. Tailwind 3 + shadcn/ui (Radix). react-router-dom 7 (SPA), react-helmet-async (meta/SEO), framer-motion.
- **Renderização:** SSG por pré-render (SSR Node em build → HTML estático por rota em `dist/`). Sem runtime de servidor.
- **Hospedagem:** Vercel (CDN global, HTTPS/TLS automático, HTTP/2+HTTP/3, Brotli/gzip automáticos). Deploy por push no `main`.
- **Integrações externas (client-side):** Google Analytics 4 (gtag), Google Fonts (`@import`), FormSubmit.co (envio do formulário de orçamento via `fetch`), links `wa.me`/`tel:` (WhatsApp/telefone).
- **Dados do usuário:** apenas o formulário de orçamento (nome, e-mail, telefone, cidade, mensagem), enviado a) por WhatsApp (URL `encodeURIComponent`) e b) por e-mail via FormSubmit. **Nada é armazenado pelo site.**

### Implicação central
A maior parte de um checklist de AppSec pressupõe **backend/DB/auth**. Aqui a superfície de ataque é a de um **site estático**: cabeçalhos HTTP, conteúdo de terceiros, XSS no cliente, supply chain e configuração de deploy. Os itens de backend são marcados **N/A** com justificativa (seção 7).

---

## 2. Nível de risco: antes → depois

| Área | Antes | Depois |
|---|---|---|
| Cabeçalhos de segurança | **Ausentes** (nenhum) | CSP restritiva + HSTS + 7 outros |
| Dependências | 3 vulnerabilidades **altas** | **0 vulnerabilidades** |
| XSS (JSON-LD) | serialização sem escape | escape de `< > &` (defesa em profundidade) |
| Clickjacking | sem proteção | `frame-ancestors 'none'` + `X-Frame-Options: DENY` |
| DevSecOps (CI, Dependabot, CodeQL) | inexistente | pipeline com gate de auditoria + CodeQL + Dependabot |
| **Risco geral** | **Médio** | **Baixo** |

Nenhuma das mudanças altera funcionalidade: build + 194 testes (unit + E2E) verdes após cada etapa.

---

## 3. Vulnerabilidades encontradas e correções

### 3.1 Dependências vulneráveis (CORRIGIDO)
`npm audit` (produção) apontava 3 advisories **altas**:
- **lodash ≤ 4.17.23** (transitiva): prototype pollution + code injection em `_.template`.
- **react-router / react-router-dom 7.0–7.15** (7 advisories): open redirect via `//`, XSS em redirect (RSC/Location), CSRF em document requests, DoS.
  - **Nota de exploitabilidade:** a maioria desses advisories afeta o React Router no **modo framework/servidor** (loaders/actions, single-fetch, `__manifest`, RSC) — **não usado aqui** (SPA puro + StaticRouter no pré-render). Ainda assim, atualizar é a prática correta (o open redirect `//` toca o roteamento client).
- **Correção:** `npm audit fix` → `react-router-dom` 7.13 → **7.18.1**, lodash corrigido. **`npm audit` = 0 vulnerabilidades.** Build/testes verdes.

### 3.2 Ausência total de cabeçalhos de segurança (CORRIGIDO)
`vercel.json` não definia nenhum header. Implementados (seção 4).

### 3.3 JSON-LD sem escape de `<` (CORRIGIDO — defesa em profundidade)
`JsonLd.tsx` fazia `JSON.stringify(data)` dentro de `<script type="application/ld+json">`. Os dados são 100% internos (sem input de usuário), então o risco real é ~nulo hoje; mas, por defesa em profundidade, passamos a escapar `<`, `>` e `&` (`<`…), impedindo qualquer quebra do contexto `<script>` caso algum dado passe a vir de fonte externa no futuro.

### 3.4 `dangerouslySetInnerHTML` em `components/ui/chart.tsx` (SEM AÇÃO — não exposto)
Componente shadcn (chart) injeta CSS de cores. **Não é usado em nenhuma página do site** e o conteúdo é derivado de config estática (sem input de usuário). Risco desprezível. Recomendação: remover componentes shadcn não usados (seção 9).

---

## 4. Security Headers implementados (`vercel.json`)

| Header | Valor | Para que serve |
|---|---|---|
| **Content-Security-Policy** | ver abaixo | Restringe de onde scripts/estilos/conexões/imagens podem carregar — principal defesa contra XSS e injeção de conteúdo. |
| **Strict-Transport-Security** | `max-age=63072000; includeSubDomains; preload` | Força HTTPS por 2 anos (inclui subdomínios); elegível à lista de preload dos navegadores. |
| **X-Content-Type-Options** | `nosniff` | Impede o navegador de "adivinhar" o MIME (evita que um arquivo seja executado como script). |
| **X-Frame-Options** | `DENY` | Anti-clickjacking (navegadores antigos que não leem `frame-ancestors`). |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Não vaza caminho/query completos para outros sites; envia só a origem. |
| **Permissions-Policy** | câmera/mic/geo/USB/etc. `()` desativados; `interest-cohort=()` | Desliga APIs de dispositivo não usadas e opta por sair do FLoC. |
| **Cross-Origin-Opener-Policy** | `same-origin` | Isola o contexto de navegação (mitiga ataques cross-window/Spectre). |
| **Cross-Origin-Resource-Policy** | `same-origin` | Evita que outros sites embutam nossos recursos como subresource. |
| **X-DNS-Prefetch-Control** | `on` | Performance (prefetch de DNS) sem custo de segurança. |
| **Cache-Control** (`/assets/*`) | `public, max-age=31536000, immutable` | Assets com hash no nome → cache eterno seguro (mais performance/menos superfície). |

**CSP aplicada:**
```
default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none';
form-action 'self'; frame-src 'none';
img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com;
font-src 'self' https://fonts.gstatic.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://formsubmit.co;
manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests
```

### Por que `'unsafe-inline'` em `script-src` e `style-src` (e como evoluir)
- **`style-src 'unsafe-inline'`**: o framer-motion aplica **estilos inline** nos elementos (animações). Sem isso, o layout/animações quebram.
- **`script-src 'unsafe-inline'`**: há **2 scripts inline legítimos** — o `config` do gtag (GA4) e os blocos **JSON-LD** (SEO). Em site **estático** não há servidor para gerar **nonce por requisição**, e usar **hash** é inviável porque os blocos JSON-LD variam por página. Bloquear inline quebraria o GA e, pior, **removeria os dados estruturados (dano de SEO)** — o que o próprio escopo proíbe.
- **Mitigação do risco residual:** a superfície de XSS é mínima (React escapa tudo por padrão; sem `innerHTML` com dado de usuário; JSON-LD escapado). Ainda assim `'unsafe-inline'` enfraquece a CSP.
- **Evolução recomendada (futuro):** adotar **Vercel Edge Middleware** para injetar um **nonce por requisição** e trocar por `script-src 'self' 'nonce-…' 'strict-dynamic'`. Isso exige sair do estático puro para HTML processado na edge — mudança de arquitetura, proposta como melhoria futura (seção 9), não aplicada agora para não arriscar a estabilidade.

> **Rollout seguro:** como os cabeçalhos só valem no deploy da Vercel (não no `vite dev`/`preview`), **valide a CSP no primeiro deploy** (DevTools → Console). Se algum recurso legítimo for bloqueado, o ajuste é adicionar o host à diretiva — ou publicar primeiro como `Content-Security-Policy-Report-Only` e promover a enforcing após 1–2 dias sem violações.

---

## 5. HTTPS / TLS / Mixed Content
- **HTTPS, TLS 1.3, HTTP→HTTPS e HTTP/3:** fornecidos automaticamente pela **Vercel** (não exigem configuração no código). Confirmado: o certificado e o redirecionamento já estão ativos.
- **HSTS + preload:** adicionado via header (seção 4). Após validar em produção, o domínio pode ser submetido a `hstspreload.org`.
- **Mixed Content:** o site já usa apenas recursos `https://`; `upgrade-insecure-requests` na CSP força o upgrade de qualquer `http://` remanescente. **Sem conteúdo misto.**

---

## 6. Formulários, sanitização e proteções de aplicação
- **Formulários:** orçamento (`/orcamento`) e landing (`/landing`). Inputs são **estado controlado do React**; a saída vai para (a) URL `wa.me` via `encodeURIComponent` e (b) JSON para o FormSubmit. **React escapa por padrão na renderização** → sem XSS refletido/armazenado/DOM.
- **XSS (Refletido/Stored/DOM):** sem sink de injeção (sem `innerHTML`/`document.write` com dado de usuário; único `dangerouslySetInnerHTML` é dado estático e não usado). JSON-LD agora escapado. **Mitigado + CSP como segunda camada.**
- **CSRF:** **N/A** — não há endpoint autenticado nem cookies de sessão. O envio ao FormSubmit é uma ação anônima idempotente.
- **Open Redirect:** **N/A** — não há redirecionamento que consuma input do usuário. (O advisory `//` do react-router foi eliminado no upgrade.)
- **Clickjacking:** mitigado (`frame-ancestors 'none'` + `X-Frame-Options: DENY`).
- **SQL/NoSQL Injection, SSRF, Path Traversal, LFI/RFI, Command Injection, Mass Assignment, IDOR, Prototype Pollution (app):** **N/A** — sem backend, sem DB, sem sistema de arquivos exposto, sem ORM, sem objetos vindos do cliente para persistência. (Prototype pollution transitiva já corrigida via `audit fix`.)
- **Upload de arquivos:** **N/A** — o site não aceita upload.
- **Recomendação de robustez (não é vulnerabilidade):** as libs `zod` e `react-hook-form` já estão instaladas; dá para adicionar **schema validation** (formato de e-mail/telefone) para melhorar UX e endurecer a entrada. Proposto na seção 9.

---

## 7. Itens do checklist que NÃO se aplicam (com justificativa)

| Item | Por quê é N/A | Alternativa/observação |
|---|---|---|
| Cookies (HttpOnly/Secure/SameSite), rotação de sessão | Não há autenticação nem cookies próprios | Se um dia houver área logada, usar cookies `HttpOnly; Secure; SameSite=Lax/Strict` + rotação |
| Rate limiting / Anti-brute-force / enumeração | Não há login nem API própria para limitar | A Vercel + CDN já absorvem flood estático; FormSubmit tem anti-spam/limite próprio; Cloudflare (seção 8) traz rate limit se desejado |
| WAF (AWS/Cloudflare) no app | Sem origem dinâmica para proteger | Recomendado só se migrar o DNS para Cloudflare (seção 8) — traz WAF/anti-DDoS/bot na borda |
| RLS/Supabase, privilégios de DB, queries parametrizadas | Não há banco de dados | — |
| APIs (authz, CORS, schema, payload) | Não há API própria | CORS de terceiros (GA/FormSubmit) é controlado por eles |
| Backup/retenção/restore de DB | Não há dados persistidos | Código versionado no GitHub = "backup" do produto; conteúdo é estático no repo |
| DAST | Sem endpoints dinâmicos para fuzzing | Um scan leve (ex.: ZAP baseline) pode rodar contra o site publicado como verificação de headers; opcional na seção 9 |
| Anti-bot (Turnstile) | Não há login/checkout; o único form já passa pelo anti-spam do FormSubmit | Se surgir spam, adicionar **Cloudflare Turnstile** no formulário |

---

## 8. Infra / CDN / DDoS / Monitoramento (recomendações)
- **CDN + Anti-DDoS:** já atrás da CDN da Vercel (mitigação L3/L4 inclusa). Para WAF + anti-DDoS L7 + rate limit + bot management, a opção mais custo-efetiva é **apontar o DNS para o Cloudflare** (proxy laranja) na frente da Vercel — sem mudar código. Ativa: regras de WAF gerenciadas, Bot Fight Mode, rate limiting, Turnstile e Analytics.
- **Monitoramento (sugerido, sem custo/baixo custo):**
  - **UptimeRobot / Better Stack** — monitor de disponibilidade + alerta (queda/latência).
  - **Cloudflare Web Analytics** — métricas sem cookies (privacidade) e sinais de ataque.
  - **Sentry** (opcional) — captura de erros de runtime no cliente. Ponderar o peso de JS extra vs. benefício num site estático; se adotar, usar `tracesSampleRate` baixo e `denyUrls` para não vazar PII.
- **Alertas recomendados:** indisponibilidade, pico de erros 4xx/5xx na Vercel, e (se usar Cloudflare) picos de tráfego/regras de WAF disparadas.

---

## 9. DevSecOps / Supply Chain (implementado + a ativar)
Implementado neste commit:
- **`.github/workflows/ci.yml`** — em cada push/PR no `main`: `npm ci` → **`npm audit --audit-level=high` (bloqueia deploy em vuln alta+)** → lint → `build:static` → testes unitários → E2E (Playwright). Atende ao requisito "bloquear deploy se houver vulnerabilidade crítica".
- **`.github/workflows/codeql.yml`** — SAST com CodeQL (`security-extended`) em push/PR + semanal.
- **`.github/dependabot.yml`** — PRs semanais de atualização (npm + GitHub Actions), agrupando minor/patch.

**A ativar no painel do GitHub (configuração de repositório, não dá para versionar em arquivo):**
1. **Branch protection** no `main`: exigir PR, exigir os checks `CI` e `CodeQL` verdes antes do merge, exigir 1 revisão, bloquear force-push. Via UI (Settings → Branches) ou:
   ```bash
   gh api -X PUT repos/nielsonjunior/site-pessoal/branches/main/protection \
     -F required_status_checks.strict=true \
     -f 'required_status_checks.contexts[]=quality' \
     -f 'required_status_checks.contexts[]=analyze' \
     -F enforce_admins=true \
     -F 'required_pull_request_reviews.required_approving_review_count=1' \
     -F restrictions=  # (dispensável em conta individual)
   ```
   > Observação: como hoje o deploy é por push direto no `main`, exigir PR muda o fluxo de trabalho — recomendado, mas é decisão do dono.
2. **Secret scanning + push protection**: Settings → Code security → ativar "Secret scanning" e "Push protection".
3. **Dependabot alerts + security updates**: ativar em Code security (o `dependabot.yml` cuida das atualizações de versão; os *alerts* são um toggle do repo).

**Supply chain / SBOM:**
- `package-lock.json` versionado + `npm ci` na CI garantem builds reproduzíveis.
- **SBOM** sob demanda: `npm sbom --sbom-format cyclonedx > sbom.json` (ou a action `anchore/sbom-action`). Útil se o projeto crescer; hoje é opcional.

---

## 10. SEO técnico (preservado)
- `robots.txt` e `sitemap.xml`: inalterados e válidos.
- **Dados estruturados (JSON-LD):** continuam sendo emitidos; o escape `<` é transparente para os parsers (o `JSON.parse` reverte). A CSP **permite** inline (`'unsafe-inline'`) justamente para não remover o JSON-LD.
- Core Web Vitals / Lighthouse: os cabeçalhos não adicionam JS nem bloqueiam render; o cache imutável de `/assets` **melhora** repeat-view. Nada regride.
- Compartilhamento social (OG): CORP `same-origin` não afeta crawlers (que fazem GET direto), então previews continuam funcionando.

---

## 11. Recomendações futuras (priorizadas)
1. **Validar a CSP no deploy** e, se limpo, submeter o domínio ao **HSTS preload**. (rápido)
2. **Cloudflare na frente da Vercel** → WAF + anti-DDoS L7 + rate limit + Turnstile + analytics sem cookie. (maior ganho de segurança de borda)
3. **Nonce por requisição via Edge Middleware** para remover `'unsafe-inline'` do `script-src` (CSP nível A+). (mudança de arquitetura)
4. **Validação com zod** nos formulários (e-mail/telefone) — robustez + UX.
5. **Sentry + UptimeRobot** para observabilidade/alertas.
6. **Limpeza de dependências não usadas** (muitos componentes shadcn/Radix, recharts, embla, vaul, input-otp, etc. não são usados) → menor superfície de supply chain e bundle. Fazer com verificação de testes.
7. **Migrar o botão "E-mail" da /landing** de `mailto:` para o mesmo envio via FormSubmit já usado em `/orcamento` (consistência + não expor cliente de e-mail).

---

## 12. Resumo executivo
O site é estático e de baixa complexidade de ataque. Os riscos reais eram **(a) dependências desatualizadas** e **(b) ausência de cabeçalhos de segurança** — ambos corrigidos agora, sem quebrar nada (build + 194 testes verdes). Adicionamos uma **pipeline DevSecOps** (auditoria que bloqueia, CodeQL, Dependabot). O restante do checklist clássico de AppSec é majoritariamente **N/A** por não haver backend/DB/auth, com as devidas justificativas e caminhos caso o projeto evolua. Risco geral: **Médio → Baixo.**
