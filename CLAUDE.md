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

## Stack

- **React 19** + **TypeScript** (strict) + **Vite 7**
- **Tailwind CSS 3.4** + **shadcn/ui** (componentes em `src/components/ui`, ~53 arquivos — tratá-los como dependência de terceiros; não testar nem editar sem necessidade)
- **react-router-dom 7** (SPA, BrowserRouter)
- **react-helmet-async** para `<title>`/meta por página (SEO)
- **framer-motion** para animações
- **lucide-react** (ícones), **recharts**, **sonner** (toasts)
- Deploy: **Vercel** (`vercel.json` faz rewrite SPA de tudo para `/index.html`)
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
    sections/              Blocos da Home (Hero, Services, About, Testimonials, CTA, Cities)
    shared/                Header, Footer, SEO, WhatsAppButton
    ui/                    shadcn/ui (terceiros)
  data/                    Conteúdo tipado: services, cities, testimonials, faq (+ helpers getXBySlug)
  hooks/                   use-mobile
  lib/                     utils (cn = clsx + tailwind-merge)
  test/                    Infra de testes (setup.ts, test-utils.tsx) — ver docs/TESTING.md
tests/e2e/                 Testes Playwright (smoke, navigation, routes fixture)
```

### Rotas (espelhadas em `tests/e2e/routes.ts`)

`/` · `/servicos` · `/servicos/:slug` · `/sobre` · `/contato` · `/orcamento`
· `/cidades` · `/cidades/:slug` · `/faq` · `/landing` · `/o-que-e-art`
· `/por-que-contratar-engenheiro` · `/requisitos-legais` · `/privacidade`
· `/termos` · `*` (NotFound)

`/contato` e `/orcamento` renderizam a **mesma** página (`Budget`).

`/servicos/regularizacao-imoveis` é **especializada**: renderiza a página-pilar
`RegularizacaoImoveis` (hub de vendas) em vez do `ServiceDetail` genérico — a rota
estática é declarada antes de `/servicos/:slug`. Conteúdo dos 6 tipos de
regularização em `src/data/regularizacao.ts`. Estratégia: `docs/REGULARIZACAO-ESTRATEGIA.md`.

## Comandos

```bash
npm install              # 1ª vez (instala deps + devDeps de teste)
npx playwright install   # 1ª vez (baixa o navegador Chromium para E2E)

npm run dev              # dev server em http://localhost:5173
npm run build            # tsc -b && vite build (typecheck + bundle); prebuild gera sitemap
npm run build:static     # build + prerender (HTML estático por rota) — usar p/ produção/Vercel
npm run prerender        # só o prerender (requer dist já buildado + Chromium)
npm run gen:sitemap      # regenera public/sitemap.xml a partir de src/data
npm run gen:og           # regenera public/images/og-image.jpg (Playwright)
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
- Cores da marca: azul `#1B3B6C`, amarelo/accent `#F4C430`, WhatsApp verde `#25D366`.

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

## SEO / Rendering (ver `docs/SEO-PLAN.md`)

- **SSG por pré-render (Playwright):** `scripts/prerender.mjs` serve o `dist`, visita
  cada rota no Chromium e salva HTML estático (com as meta do Helmet) em
  `dist/<rota>/index.html`. Para produção use **`npm run build:static`**. Na Vercel,
  Build Command = `npx playwright install chromium && npm run build:static`.
- **Fonte única de domínio/NAP:** `src/config/site.ts` (usado por SEO, canonical,
  sitemap, Analytics e — futuramente — JSON-LD). Domínio: `https://www.npcastilho.eng.br`.
- **SEO por página:** componente `SEO` (`src/components/shared/SEO.tsx`) gera title,
  description, OG/Twitter, **canonical automático** (via rota) e og absoluto. O
  `index.html` NÃO tem `<title>`/`description` (Helmet é a fonte única).
- **Analytics:** `Analytics.tsx` (GA4) ativa só com a env `VITE_GA_MEASUREMENT_ID`.
- **Ao adicionar rota nova:** registrar em `tests/e2e/routes.ts`, em `scripts/gen-sitemap.mjs`
  e em `scripts/prerender.mjs` (lista de rotas estáticas). Rotas de serviço/cidade saem
  automaticamente de `src/data`.
