# Plano de SEO — Nielson Pinheiro Engenheiro Civil (Cáceres-MT)

> Documento para **estudo e aprovação**.
> Objetivo: tornar o site bem visível na busca, com foco em **SEO local**
> (engenheiro civil em Cáceres-MT e região) e geração de leads via WhatsApp.

## Decisões tomadas (2026-06-27)
- **Rendering:** Opção A — SSG com `vite-react-ssg`.
- **Domínio:** o dono já possui (informar o domínio real para Fase 1).
- **Analytics:** GA4 (precisa do Measurement ID `G-XXXXXXX`).
- **Execução:** começar pela **Fase 0**.

## Diagnóstico do estado atual

O que já existe de bom:
- Componente `SEO` (react-helmet-async) com title, description, keywords, Open
  Graph, Twitter, canonical (opcional), robots e geo tags.
- NAP consistente no Footer (telefone, e-mail, Cáceres-MT, horário, Instagram).
- Conteúdo rico: 6 serviços + ~13 cidades + FAQ, tudo tipado em `src/data`.
- Títulos/descriptions por página razoáveis.

Problemas encontrados (por gravidade):

| # | Problema | Impacto |
|---|----------|---------|
| 1 | **SPA 100% client-side** — o HTML inicial é só `<div id="root">`. As meta tags do Helmet só existem após o JS rodar. | 🔴 Crítico. Crawlers e previews (WhatsApp, Facebook, Bing) podem ver página vazia/sem meta. É o maior bloqueador. |
| 2 | **Número de WhatsApp errado** (`5511999999999`, placeholder de SP) em 9 lugares; o certo é `5565996946861`. | 🔴 Crítico. Perde lead e quebra consistência de NAP (sinal de SEO local). |
| 3 | **Sem `robots.txt` e sem `sitemap.xml`**. | 🔴 Crítico. Dificulta descoberta/indexação. |
| 4 | **Sem dados estruturados (JSON-LD)**. | 🟠 Alto. Sem LocalBusiness/FAQ/Breadcrumb = sem rich results e SEO local mais fraco. |
| 5 | **`canonicalUrl` nunca é passado**; `/contato` e `/orcamento` renderizam a mesma página. | 🟠 Alto. Risco de conteúdo duplicado. |
| 6 | **`<html lang="en">`** no `index.html` (shell estático). | 🟠 Médio. Idioma errado no HTML inicial. |
| 7 | **`og:image` aponta para `/images/og-image.jpg` que não existe**. | 🟠 Médio. Compartilhamentos sem imagem. |
| 8 | **Sem favicon / apple-touch-icon / theme-color** no `index.html`. | 🟡 Médio. Marca/UX na SERP e abas. |
| 9 | **Bundle único de 650 KB (192 KB gzip), sem code-splitting**; imagens `.jpg` sem `width/height`, `loading` nem formato moderno. | 🟡 Médio. Core Web Vitals (LCP/CLS) é fator de ranqueamento. |
| 10 | **Páginas de cidade podem ter conteúdo repetido** (thin/duplicate content). | 🟡 Médio. Atrapalha o SEO multi-cidade. |
| 11 | **Sem Search Console / Google Business Profile / Analytics**. | 🟠 Alto (ações do dono). GBP é provavelmente o maior ROI local. |

---

## Decisão central a estudar: como gerar HTML para os crawlers

O item #1 governa tudo. Três caminhos:

### Opção A — Pré-renderização estática (SSG) com `vite-react-ssg` *(recomendado)*
- Gera um `.html` real por rota no build (HTML completo com meta tags e conteúdo).
- Integra com o React Router atual; rotas dinâmicas (serviços/cidades) via
  `getStaticPaths` lendo `src/data`.
- Continua hospedado como site estático na Vercel. SEO praticamente "como SSR".
- **Custo:** refatorar o ponto de entrada e a definição de rotas (médio).

### Opção B — Pré-render pós-build com Playwright *(menor risco)*
- Já temos o Chromium do Playwright instalado. Um script roda após `vite build`,
  visita cada rota no `preview`, e salva o HTML renderizado em `dist/<rota>.html`.
- **Zero refatoração** do app; aproveita a harness existente.
- **Custo:** baixo. **Contras:** "hack" de build, hidratação a validar, menos
  idiomático que SSG.

### Opção C — Migrar para React Router v7 framework mode (SSR/SSG nativo)
- Mais poderoso e à prova de futuro, mas **migração pesada** da estrutura atual.
- Provavelmente exagero para um site institucional estático.

> **Recomendação:** começar pela **Opção A** (SSG) — melhor relação benefício/risco
> para conteúdo estático e data-driven. Se preferir risco mínimo agora, **Opção B**.

---

## Roadmap por fases (ordem de execução sugerida)

Cada fase entra com **testes Playwright/Vitest** que validam o resultado no HTML
renderizado (meta tags, JSON-LD, canonical, sitemap acessível). Nada é "entregue"
sem `npm run test:all` verde — conforme a harness.

### Fase 0 — Correções críticas rápidas ✅ CONCLUÍDA (2026-06-27)
- [x] Trocar `wa.me/5511999999999` → `wa.me/5565996946861` (10 ocorrências em 7 páginas);
      guarda de regressão em `src/test/contact-info.test.ts`.
- [x] `index.html`: `lang="pt-BR"`, favicon + `apple-touch-icon` (logo.png), `theme-color`.
- [x] `og-image.jpg` (1200×630) gerada via `scripts/gen-og-image.mjs` (Playwright);
      já era a referência padrão do componente `SEO`.
- [x] Testes E2E em `tests/e2e/seo.spec.ts` (lang, favicon/og sem 404, OG/Twitter tags).
- Verificado: build limpo + 16 unit + 50 E2E verdes.
- ⏳ Pendente p/ Fase 1: tornar `og:image` URL **absoluta** (precisa do domínio).
- 🔎 Achado p/ Fase 3: a home tem mais de um `<h1>` (o logo no Header usa `<h1>`).

### Fase 1 — Fundação de indexação ✅ CONCLUÍDA (2026-06-28)
- [x] Rendering: **pré-render com Playwright** (Opção B; vite-react-ssg não suporta
      React Router 7). `scripts/prerender.mjs` gera HTML estático por rota em `dist/`
      (captura tudo antes de escrever p/ não contaminar o fallback SPA).
- [x] `public/robots.txt` apontando para o sitemap.
- [x] `sitemap.xml` gerado de `src/data` (`scripts/gen-sitemap.mjs`, roda no `prebuild`);
      29 URLs (11 estáticas + 6 serviços + 12 cidades).
- [x] Canonical automático em toda página via `SEO` (usa `useLocation` + `src/config/site.ts`);
      `/contato` canonicaliza para `/orcamento`. `og:image`/`og:url` absolutos.
- [x] Domínio canônico definido: `https://www.npcastilho.eng.br`.
- [x] GA4 via `src/components/shared/Analytics.tsx` (env `VITE_GA_MEASUREMENT_ID`; no-op sem ID).
- [x] `index.html`: removidos `<title>`/`description` estáticos (Helmet é fonte única → 1 title/página).
- [x] Testes: `tests/e2e/seo.spec.ts` (canonical/og/robots/sitemap) + `tests/e2e/prerender.spec.ts`
      (valida HTML estático). 16 unit + 66 E2E verdes.

> **Build de produção (Vercel):** usar `npm run build:static` (= build + prerender) com o
> Chromium instalado. Definir o Build Command na Vercel como
> `npx playwright install chromium && npm run build:static`. O `vercel.json` (rewrite SPA)
> continua válido: a Vercel serve o arquivo estático da rota e usa o rewrite só como fallback.
>
> **Falta do dono:** preencher `VITE_GA_MEASUREMENT_ID` (env na Vercel) com o ID do GA4.

### Fase 2 — Dados estruturados (JSON-LD) ✅ CONCLUÍDA (2026-06-28)
- [x] `ProfessionalService` (LocalBusiness) global: nome, telefone, e-mail, endereço
      (Cáceres-MT), `areaServed` (todas as cidades), `founder`, `sameAs` (Instagram).
- [x] `WebSite` global. (Construtores em `src/lib/jsonld.ts`, componente `JsonLd`.)
- [x] `BreadcrumbList` nas páginas internas (serviços, pilar e filhas de regularização).
- [x] `Service` em cada página de serviço e de regularização (pilar + 6 filhas).
- [x] `FAQPage` na página de FAQ (lê `src/data/faq`).
- [x] Testes: unit (`src/lib/jsonld.test.ts`) + e2e (`tests/e2e/jsonld.spec.ts`, valida
      JSON e @type por página). 28 unit + 112 E2E verdes.
- Pendente (opcional): `BreadcrumbList` nas páginas de cidade.

### Fase 3 — On-page / conteúdo
- [ ] Garantir exatamente 1 `<h1>` por página e hierarquia correta de headings.
- [ ] `alt` descritivo e com termos locais em todas as imagens.
- [ ] Títulos/descrições únicos e dentro dos limites (~60/~155 caracteres).
- [ ] Conteúdo **único** por página de cidade (parágrafos específicos da cidade)
      para evitar conteúdo duplicado.
- [ ] Revisar links internos (âncoras descritivas).

### Fase 4 — Performance / Core Web Vitals
- [ ] Code-splitting por rota (`React.lazy` + `Suspense`) para reduzir o bundle.
- [ ] Imagens: `width`/`height` (anti-CLS), `loading="lazy"`/`decoding="async"`,
      converter para `webp`, `preload` da imagem LCP (hero).
- [ ] Conferir `manualChunks` para vendor (framer-motion, recharts, radix).
- [ ] Medir com Lighthouse antes/depois.

### Fase 5 — Off-page e ferramentas (ações do dono, fora do código)
- [ ] **Google Business Profile** (Perfil da Empresa) — maior ROI local; pedir avaliações.
- [ ] Google Search Console: verificar domínio e enviar o sitemap.
- [ ] Bing Webmaster Tools.
- [ ] Analytics (GA4 ou Plausible) — decidir qual.
- [ ] NAP consistente em diretórios locais.

---

## O que eu preciso de você para executar

1. **Domínio final** do site (para canonical, sitemap, JSON-LD, og:url).
2. **Endereço público** a exibir? (Cáceres-MT já consta; rua/CEP fortalecem o
   LocalBusiness, mas só se você quiser tornar público.)
3. **Decisão de rendering**: Opção A (SSG, recomendada), B (Playwright) ou C.
4. **Analytics**: GA4, Plausible, ou nenhum por enquanto.
5. Confirmar o **e-mail/telefone/Instagram** oficiais para o schema
   (atual: nielsin.junior@gmail.com · (65) 99694-6861 · @npcastilho.eng).

## Como a qualidade será garantida (alinhado à harness)
- Testes E2E que fazem `fetch` do HTML renderizado e verificam: `<title>`,
  `meta description`, `canonical`, `og:*`, `lang="pt-BR"`, e o bloco JSON-LD
  presente e **válido**.
- Teste que valida o `sitemap.xml` (todas as rotas presentes, sem 404).
- Lighthouse/CWV como verificação de performance na Fase 4.
