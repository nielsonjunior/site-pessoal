# CLAUDE.md — Guia interno do projeto

> Este arquivo é a memória do projeto para o Claude Code. Leia antes de começar
> qualquer tarefa. Mantenha-o atualizado quando algo estrutural mudar.

## O que é este projeto

Site institucional/landing de **Nielson P. de Castilho Júnior — Engenheiro Civil**,
CREA 5071806455, atendendo **Cáceres-MT e região**. Foco em geração de leads
(orçamento via WhatsApp) e SEO local para serviços de engenharia.

⚠️ **Atenção a dados desatualizados:** `info.md` e a imagem `map-sao-paulo.jpg`
mencionam São Paulo, mas o conteúdo real do site é de **Cáceres-MT** (telefone
(65), CREA-MT, cidades de MT). Use sempre o conteúdo real como fonte de verdade.
Telefone/WhatsApp oficial: **+55 65 99694-6861** (`https://wa.me/5565996946861`).

## Repositório & fluxo de entrega

- **GitHub:** `https://github.com/nielsonjunior/site-pessoal` (público), branch `main`,
  remote `origin`. **Conectado à Vercel** → todo push no `main` dispara deploy automático.
- `gh` CLI instalado e autenticado (conta `nielsonjunior`).
- **O dono acompanha pelo deploy:** ao concluir uma fase/feature (com testes verdes),
  fazer `git commit` e `git push origin main`. Nunca commitar com testes vermelhos.
- **Build na Vercel:** os scripts em `scripts/` não importam `.ts` (leem slugs por texto
  em `scripts/site-routes.mjs`) para o build não depender da versão do Node.

## Stack

- **React 19** + **TypeScript** (strict) + **Vite 7**
- **Tailwind CSS 3.4** + **shadcn/ui** (componentes em `src/components/ui`, só os 6 usados — button, checkbox, input, label, select, textarea; adicione outros com o CLI do shadcn quando precisar — tratá-los como dependência de terceiros; não testar nem editar sem necessidade)
- **react-router-dom 7** (SPA, BrowserRouter)
- **react-helmet-async** para `<title>`/meta por página (SEO)
- **framer-motion** para animações
- **lucide-react** (ícones), **recharts**, **sonner** (toasts)
- Deploy: **Vercel** (sem rewrite SPA: toda rota é pré-renderizada e endereço desconhecido recebe `dist/404.html` com status 404); funções em `api/` com **@vercel/blob**
- **Fontes:** Montserrat **variável, hospedada no site** (`@fontsource-variable/*`, importadas no `src/index.css`). A home usa **Montserrat** variável (`@fontsource-variable/montserrat`, importada em `src/components/home/home.css`). Não voltar para o Google Fonts.
- Alias de import: **`@/` → `./src/`**

> **Node v24** está instalado em `C:\Program Files\nodejs`. Se um terminal já
> aberto não reconhecer `node`/`npm`, o PATH dele está velho — recarregue com:
> `$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")`
> (ou abra um terminal novo).

## Estrutura

```
src/
  main.tsx                 Entry point (StrictMode + App)
  App.tsx                  Rotas (react-router) + layout (Header/Footer/WhatsAppButton)
  index.css / App.css      Estilos globais; classes utilitárias custom (container-custom, btn-accent)
  pages/                   Uma página por rota (Home, Services, ServiceDetail, About, Budget, Cities, CityDetail, FAQ, LandingPage, WhatIsART, WhyHireEngineer, LegalRequirements, Privacy, Terms, NotFound)
  components/
    home/                  Home atual (17/11/2026): topo preso, história da casa própria pela rolagem, serviços, casos, mapa. CSS próprio em home.css, todo preso a .nh (carregado no AppShell)
    sections/              Blocos da home antiga (não usados na home; podem servir a outras páginas)
    shared/                Header, Footer, SEO, WhatsAppButton
    ui/                    shadcn/ui (terceiros)
  data/                    Conteúdo tipado: services, cities, testimonials, faq (+ helpers getXBySlug)
  lib/                     utils (cn = clsx + tailwind-merge)
  test/                    Infra de testes (setup.ts, test-utils.tsx) — ver docs/TESTING.md
tests/e2e/                 Testes Playwright (smoke, navigation, routes fixture)
tests/api/                 Testes Vitest das funções serverless
api/                       Funções serverless da Vercel (upload/limpeza de imagens do Instagram)
```

### Rotas (espelhadas em `tests/e2e/routes.ts`)

`/` · `/servicos` · `/servicos/:slug` · `/sobre` · `/contato` · `/orcamento`
· `/cidades` · `/cidades/:slug` · `/faq` · `/landing` · `/o-que-e-art`
· `/por-que-contratar-engenheiro` · `/requisitos-legais` · `/privacidade`
· `/termos` · `/plano-de-reforma` · `/blog` · `/blog/:slug` · `*` (NotFound)

`/contato` e `/orcamento` renderizam a **mesma** página (`Budget`).

`/servicos/regularizacao-imoveis` é **especializada**: renderiza a página-pilar
`RegularizacaoImoveis` (hub de vendas) em vez do `ServiceDetail` genérico — a rota
estática é declarada antes de `/servicos/:slug`. Conteúdo dos 6 tipos de
regularização em `src/data/regularizacao.ts`. Estratégia: `docs/REGULARIZACAO-ESTRATEGIA.md`.

`/plano-de-reforma` é a página de vendas do serviço **online** de Plano de Reforma
NBR 16280 + ART para condomínios em **SP e MT** (público fora de Cáceres). O texto
fala a língua do leigo ("documento de engenheiro que o condomínio pede"); "NBR 16280"
aparece só como explicação.

**Títulos (SEO):** o `SEO` acrescenta só `| NP Castilho Engenharia` — o Google mostra
~60 caracteres, então ponha as palavras-chave no começo do `title` da página.
Páginas `noIndex` (privacidade, termos) ficam FORA do sitemap.
Artigos do blog em `src/data/blog.ts` (slugs lidos por `scripts/site-routes.mjs`).

## Imagens para redes sociais (`public/social/`)

Pasta pública usada para publicar no Instagram (o Instagram busca a imagem por URL).
Tudo que for colocado em `public/social/` fica em `https://www.npcastilho.eng.br/social/<arquivo>`.
Só JPG 1080x1350 dos posts; não é página do site, não entra no sitemap nem nas rotas.

## API serverless (`api/`) — upload de imagens do Instagram

Funções da Vercel (Node), fora do bundle do Vite. Usadas por uma rotina automática
que **não tem acesso ao GitHub**: ela manda o JPG por HTTP em vez de commitar em
`public/social/`. As imagens vão para o **Vercel Blob** (não para o repositório).

| Rota | O que faz |
|---|---|
| `POST /api/social-upload?name=<arquivo>.jpg` | Corpo = JPEG cru (`Content-Type: image/jpeg`), até 8 MB, nome só `[a-z0-9-_.]` terminando em `.jpg`/`.jpeg`. Grava em `social/<name>` no Blob, público, sem sufixo aleatório (sobrescreve). Responde `{ "url": "<url pública>" }`. |
| `GET /api/social-upload` | 405, não lista nada. |
| `GET /api/social-cleanup` | Apaga blobs de `social/` com mais de 30 dias. Roda pelo **Cron da Vercel** toda segunda 09:00 UTC (`crons` no `vercel.json`). |

- **Autenticação:** `Authorization: Bearer <SOCIAL_UPLOAD_TOKEN>` (comparação em tempo
  constante). Sem token ou errado → 401. Validação falhou → 400 `{ "error": "..." }`.
  O cleanup aceita `CRON_SECRET` (que a Vercel manda no Cron) ou o `SOCIAL_UPLOAD_TOKEN`.
- **Variáveis de ambiente — só na Vercel, nunca no código/repositório:**
  `SOCIAL_UPLOAD_TOKEN` (segredo do upload), `BLOB_READ_WRITE_TOKEN` (criado pela
  Vercel ao conectar o Blob Store ao projeto) e `CRON_SECRET` (para o Cron se autenticar).
- **Limite real de tamanho:** a Vercel recusa corpo de função acima de **4,5 MB**
  (413) antes do código rodar; os JPG 1080x1350 dos posts ficam bem abaixo disso.
- O `vercel.json` não tem rewrite SPA, então `/api/*` nunca é capturado por ele.
- Testes: `tests/api/*.test.ts` (Vitest, ambiente node, `@vercel/blob` mockado).
  Arquivos dentro de `api/` viram função — **não** coloque testes nem helpers lá
  (helper, se precisar, em `api/_nome.ts`: prefixo `_` não vira rota).
- Nos E2E, o smoke responde vazio para `/_vercel/*` (scripts do Analytics só existem na Vercel).

## Comandos

```bash
npm install              # 1ª vez (instala deps + devDeps de teste)
npx playwright install   # 1ª vez (baixa o navegador Chromium para E2E)

npm run dev              # dev server em http://localhost:5173
npm run build            # tsc -b && vite build (typecheck + bundle); prebuild gera sitemap
npm run build:static     # build + build:server (SSR) + prerender — usado pela Vercel
npm run build:server     # bundle SSR (vite --ssr) usado pelo prerender
npm run prerender        # só o prerender (requer dist/ e dist-server/ já buildados)
npm run gen:sitemap      # regenera public/sitemap.xml a partir de src/data
npm run gen:og           # regenera public/images/og-image.jpg (Playwright)
node scripts/gen-webp.mjs # gera os .webp exibidos no site a partir dos originais (Playwright)
npm run lint             # eslint

npm test                 # Vitest (unit/componente), modo run
npm run test:watch       # Vitest em watch
npm run test:coverage    # Vitest + cobertura (v8)
npm run test:e2e         # Playwright (sobe o dev server automaticamente)
npm run test:e2e:ui      # Playwright modo UI
npm run test:all         # unit + e2e
```

## Convenções

- **Conteúdo vem de `src/data/*`**, tipado por interfaces. Ao adicionar serviço/
  cidade/FAQ, edite o data file — as páginas e os testes de integridade leem dele.
- Imports usam o alias `@/` (ex.: `import { Button } from "@/components/ui/button"`).
- Componentes exportados via `index.ts` de barril em `sections/`, `shared/`, `pages/`, `data/`.
- SEO por página: usar `react-helmet-async` (ver `components/shared/SEO.tsx`).
- TS é **strict** com `noUnusedLocals`/`noUnusedParameters` — não deixe imports/vars sem uso.
- Cores da marca (desde 17/11/2026, site todo): preto `#000000`, grafite `#1A1D22`/`#111418`, laranja `#F28A2E` (hover `#E07A20`), texto sobre laranja `#0F141B`, WhatsApp verde `#25D366`. Fonte única: Montserrat variável. Botões `.btn-*` em caixa alta com espaçamento. Não voltar ao azul/amarelo/verde-limão antigos.
- **Home (história da casa própria):** textos em `src/data/home.ts`; imagens em `public/images/historia/<id>-1280.webp` e `-640.webp` (cenas geradas, ilustrativas). Sem instruções óbvias ("role", "toque") e sem números de enfeite: o dono pediu texto sem cara de IA. Com movimento reduzido (e no HTML pré-renderizado) os capítulos aparecem empilhados.

## Como o Claude deve trabalhar aqui (instruções do dono)

1. **Use as superpowers (skills)** para tarefas mais complexas — em especial
   `brainstorming` antes de criar features, `test-driven-development` ao
   implementar, `systematic-debugging` ao investigar bugs, e
   `verification-before-completion` antes de afirmar que algo está pronto.
2. **Qualidade é garantida por testes, não por inspeção visual.** Antes de
   entregar qualquer mudança:
   - Adicione/atualize testes (Vitest para lógica/componentes, Playwright para
     fluxo/rotas/regressão de layout).
   - Rode `npm run test:all` e confirme que passa. **Nunca** afirme que está
     funcionando sem ter rodado os testes e visto o resultado (regra da skill
     `verification-before-completion`).
   - Para mudanças visuais, rode o Playwright (smoke garante que nenhuma rota
     quebrou) e, quando útil, capture screenshot da página afetada.
3. **Ao adicionar uma rota nova**, registre-a em `tests/e2e/routes.ts` para que
   os smoke tests passem a cobri-la automaticamente.
4. **Ao mudar algo estrutural** (stack, scripts, estrutura de pastas, rotas),
   atualize este `CLAUDE.md`.
5. Não testar nem refatorar `src/components/ui/**` (shadcn) sem motivo claro.

Detalhes do harness de testes: **`docs/TESTING.md`**.

## Regras de texto (pedido do dono, 17/11/2026)

- Linguagem simples, frases curtas, primeira pessoa do singular (é um engenheiro só: nada de "nossa equipe", "atendemos").
- Sem frase feita de IA: "soluções completas", "excelência", "transformar seu projeto em realidade", "qualidade garantida", "apaixonado por", "Não perca tempo".
- Sem instrução óbvia ("role a tela", "toque numa opção", "confira") e sem número ou promessa sem base (prazo em horas, "garantia em todos os serviços", forma de pagamento, bairros não conferidos).
- A mesma informação não se repete na mesma tela: CREA fica no cabeçalho e no rodapé; contato fica no rodapé; região fica no mapa e na página de cidades.
- O cabeçalho não tem mais a faixa de cima (telefone/CREA/região). O mini-diagnóstico da regularização saiu (repetia a lista de casos).

## SEO / Rendering (ver `docs/SEO-PLAN.md`)

- **SSG por pré-render (SSR Node-only, sem navegador):** `npm run build:static` =
  build cliente + `build:server` (bundle SSR `vite build --ssr src/entry-server.tsx`)
  + `scripts/prerender.mjs`, que usa `prerender` (react-dom/static, espera o `React.lazy`)/`StaticRouter`/Helmet para gerar
  `dist/<rota>/index.html` (e `dist/404.html` a partir da rota `*`) com conteúdo + título/meta/canonical/JSON-LD. **Roda só em
  Node** (Chromium do Playwright NÃO funciona no build da Vercel). O `vercel.json` já
  define `buildCommand: npm run build:static`. `AppShell` é o app sem Router (usado por
  `App.tsx`/BrowserRouter no cliente e `entry-server.tsx`/StaticRouter no SSR).
- **Performance (auditoria 17/11/2026):** cada página é um `React.lazy` em `AppShell.tsx`
  (JS por rota); o cliente usa `hydrateRoot` quando o HTML veio pré-renderizado
  (`main.tsx`). **O topo das páginas não pode começar com `opacity: 0`** (framer-motion
  `initial`): use a classe CSS `hero-in` (`index.css`), que já começa visível e não espera o
  JS — senão o LCP piora. `whileInView` só abaixo da dobra. Imagens exibidas em **WebP**
  com `srcSet` (`scripts/gen-webp.mjs`); originais .jpg/.png ficam para favicon/og/JSON-LD.
  `/images/*` tem cache de 7 dias e `/assets/*` imutável (`vercel.json`). E2E que lê o DOM
  logo após `goto` deve esperar `main h1` (página carrega sob demanda no dev).
- **Fonte única de domínio/NAP:** `src/config/site.ts` (usado por SEO, canonical,
  sitemap, Analytics e — futuramente — JSON-LD). Domínio: `https://www.npcastilho.eng.br`.
- **SEO por página:** componente `SEO` (`src/components/shared/SEO.tsx`) gera title,
  description, OG/Twitter, **canonical automático** (via rota) e og absoluto. O
  `index.html` NÃO tem `<title>`/`description` (Helmet é a fonte única).
- **Analytics:** `Analytics.tsx` (GA4) ativa só com a env `VITE_GA_MEASUREMENT_ID`.
- **Ao adicionar rota nova:** registrar em `tests/e2e/routes.ts`, em `scripts/gen-sitemap.mjs`
  e em `scripts/prerender.mjs` (lista de rotas estáticas). Rotas de serviço/cidade saem
  automaticamente de `src/data`.
