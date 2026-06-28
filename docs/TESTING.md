# Harness de Testes

Dois níveis, cada um com seu papel. A regra: **toda entrega passa por testes
antes de ser considerada pronta** — isso evita shipar layout quebrado ou função
que não funciona.

| Nível | Ferramenta | O que cobre | Onde ficam |
|-------|-----------|-------------|------------|
| Unit / Componente | **Vitest** + Testing Library (jsdom) | lógica pura, helpers de `data/`, integridade dos dados, comportamento de componentes isolados | `src/**/*.test.{ts,tsx}` (colocados) |
| E2E / Integração | **Playwright** (Chromium desktop + mobile) | a app rodando de verdade: rotas carregam, navegação, SEO/titles, 404, regressão de layout | `tests/e2e/*.spec.ts` |

## Pré-requisitos (uma vez)

```bash
npm install              # instala deps + devDeps de teste
npx playwright install   # baixa o Chromium usado pelo Playwright
```

> Node v24 já está instalado. Se um terminal antigo não achar `node`/`npm`,
> recarregue o PATH (ver CLAUDE.md) ou abra um terminal novo.
> Status verificado: 14 testes unitários + 44 E2E passando; build limpo.

## Rodando

```bash
npm test                 # Vitest (run único) — rápido, roda em jsdom
npm run test:watch       # Vitest em watch durante desenvolvimento
npm run test:coverage    # Vitest + relatório de cobertura em ./coverage
npm run test:e2e         # Playwright — sobe o dev server (porta 5173) sozinho
npm run test:e2e:ui      # Playwright modo UI (debug visual)
npm run test:e2e:report  # abre o último relatório HTML do Playwright
npm run test:all         # unit + e2e em sequência
```

## Arquitetura

### Vitest (`vitest.config.ts`)
- Reusa `vite.config.ts` via `mergeConfig` (herda o alias `@/`).
- Ambiente `jsdom`, `globals: true`, setup em `src/test/setup.ts`.
- `src/test/setup.ts` carrega os matchers do `@testing-library/jest-dom` e faz
  `cleanup()` após cada teste.
- `src/test/test-utils.tsx` exporta **`renderWithProviders`** — use no lugar do
  `render` para que o componente tenha `MemoryRouter` + `HelmetProvider`
  (necessário para qualquer componente que use `Link`/`useLocation`/Helmet).
  Aceita `initialEntries` para simular a rota atual.
- Cobertura ignora `components/ui/**` (shadcn), barris `index.ts` e `main.tsx`.

Exemplo:
```tsx
import { renderWithProviders, screen } from "@/test/test-utils";
import { MeuComponente } from "./MeuComponente";

it("faz algo", () => {
  renderWithProviders(<MeuComponente />, { initialEntries: ["/servicos"] });
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
```

### Playwright (`playwright.config.ts`)
- `testDir: tests/e2e`. Sobe `npm run dev` automaticamente (`webServer`) e
  reaproveita um server já rodando em dev local.
- Dois projetos: `chromium` (Desktop Chrome) e `mobile-chrome` (Pixel 5).
- Screenshot só em falha; trace na primeira retentativa.
- **`tests/e2e/routes.ts`** é a fonte única das rotas (espelha `src/App.tsx`).
  Ao criar uma rota nova, adicione-a lá e o smoke test passa a cobri-la.

Specs atuais:
- `smoke.spec.ts` — cada rota carrega (HTTP < 400, header/main/footer visíveis,
  **zero erros de console/runtime**), titles de SEO não vazios, 404 funciona.
- `navigation.spec.ts` — navegação real pelo Header (desktop e menu mobile), CTA
  de orçamento, logo volta para a home.

## Como escrever testes para novas features (fluxo recomendado)

1. **TDD** (skill `test-driven-development`): escreva o teste que falha antes do código.
2. Lógica/dados → Vitest. Fluxo de usuário/layout/rota → Playwright.
3. Rota nova? Adicione em `tests/e2e/routes.ts`.
4. Rode `npm run test:all` e **confirme verde** antes de dizer que terminou.
5. Mudança visual relevante? Considere screenshot via Playwright para conferir.

## Convenções

- Unit tests colocados ao lado do arquivo (`utils.ts` → `utils.test.ts`).
- Importe `describe/it/expect` explicitamente do `vitest` (mesmo com globals on).
- Não teste `src/components/ui/**` (terceiros).
- Prefira queries por papel/acessibilidade (`getByRole`, `getByAltText`) a CSS.
- Testes de integridade de dados (ver `src/data/services.test.ts`) são baratos e
  pegam erros de conteúdo (slug duplicado, campo faltando) — replique o padrão
  para `cities`, `faq` e `testimonials` quando mexer neles.
