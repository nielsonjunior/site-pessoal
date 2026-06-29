# Home focada em regularização (linguagem leiga) + AVCB — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline)
> ou subagent-driven-development. Steps usam checkbox (`- [ ]`).

**Goal:** Fazer a home comunicar, logo de cara e em linguagem leiga, as dores que o
engenheiro resolve (regularização + AVCB), com gancho de valorização (até 30%) e
credibilidade honesta.

**Architecture:** Novas seções de home leem `src/data/regularizacao.ts` (que ganha o
campo `leigoSituacao` e um 7º item, AVCB). Reutiliza a infra de página-filha/SSG/sitemap.
Credibilidade fictícia trocada por credenciais reais.

**Tech Stack:** React 19 + TS + Vite + Tailwind + shadcn + framer-motion. Testes: Vitest + Playwright.

## Global Constraints
- SSG/`renderToString`: sem `React.lazy`/Suspense em rotas; conteúdo no estado inicial.
- Toda rota nova entra em sitemap (auto, via dados) + `tests/e2e/routes.ts` + prerender (auto).
- Não inventar números; usar credenciais reais (CREA 5071806455, Cáceres-MT + 12 cidades, etc.).
- Manter WhatsApp/CTAs; cores da marca (#1B3B6C, #0F1A2E, #F4C430, #25D366).
- Antes de "pronto": `npm run test:all` verde + `npm run build:static`. Commit + push por tarefa.
- Copy/termos técnicos = rascunho (validar com o dono); ver spec 2026-06-29.

---

### Task 1: Dados — campo `leigoSituacao` + serviço AVCB
**Files:** Modify `src/data/regularizacao.ts` · Test `src/data/regularizacao.test.ts`

- [ ] **Step 1:** No teste, mudar a expectativa para **7 tipos**, incluir `avcb` na lista de
  slugs esperados, e adicionar asserção de que todo item tem `leigoSituacao` não-vazio.
- [ ] **Step 2:** Rodar `npx vitest run src/data/regularizacao.test.ts` → FAIL.
- [ ] **Step 3:** Em `regularizacao.ts`: adicionar `leigoSituacao: string;` à interface
  `RegularizationType`; preencher nos 6 existentes (vozes do cliente da spec); adicionar o
  7º item AVCB (slug `avcb`, icon `Flame`, conteúdo PASPA da spec, `leigoSituacao:
  "Meu comércio precisa do alvará do Bombeiro"`). Importar `Flame` no map de ícones onde necessário
  (RegularizacaoDetalhe/RegularizacaoImoveis usam iconMap — adicionar `Flame`).
- [ ] **Step 4:** Rodar o teste → PASS. Atualizar `tests/e2e/routes.ts` (dynamicRoutes):
  adicionar `/servicos/regularizacao-imoveis/avcb`.
- [ ] **Step 5:** Adicionar `Flame` ao `iconMap` de `RegularizacaoImoveis.tsx` e
  `RegularizacaoDetalhe.tsx` (import + entrada). Rodar `npm test` → PASS.
- [ ] **Step 6:** Commit: `feat(dados): leigoSituacao + servico AVCB na regularizacao`.

### Task 2: Bug do dropdown "Serviços"
**Files:** Modify `src/components/shared/Header.tsx` · Test `tests/e2e/navigation.spec.ts`

- [ ] **Step 1:** Reproduzir: subir dev, abrir dropdown (hover/click em "Serviços"),
  screenshot. Identificar causa (provável: fundo translúcido herdado / z-index / opacidade do
  AnimatePresence sobre hero).
- [ ] **Step 2:** Adicionar teste e2e: ao passar o mouse/clicar em "Serviços", o item
  "Todos os Serviços" fica **visível** e o container do dropdown tem fundo opaco
  (`backgroundColor` != transparente).
- [ ] **Step 3:** Corrigir no `Header.tsx`: garantir `bg-white` sólido no dropdown,
  `z-[60]` acima do conteúdo, e remover qualquer herança de opacidade. (No mobile o submenu
  já é estático; foco no desktop.)
- [ ] **Step 4:** `npx playwright test navigation` → PASS. Screenshot confirmando.
- [ ] **Step 5:** Commit: `fix(header): dropdown de servicos opaco e acima do conteudo`.

### Task 3: Seção "Qual é o seu caso?" (SituacoesRegularizacao) + Home
**Files:** Create `src/components/sections/SituacoesRegularizacao.tsx` ·
Modify `src/pages/Home.tsx` · Test `tests/e2e/home.spec.ts` (novo)

**Interfaces:** consome `regularizationTypes` (com `leigoSituacao`, `slug`, `title`, `icon`).

- [ ] **Step 1:** Criar `tests/e2e/home.spec.ts` com teste: na home, existe heading
  "Qual é o seu caso" (ou similar); aparecem ≥7 cards; cada um tem link para
  `/servicos/regularizacao-imoveis/<slug>`; existe ao menos 1 link `wa.me/5565996946861`.
- [ ] **Step 2:** Rodar → FAIL (seção ainda não existe).
- [ ] **Step 3:** Criar `SituacoesRegularizacao.tsx`: heading + chamada (spec), grade
  mapeando `regularizationTypes` → card com `leigoSituacao` (destaque), `title` (rótulo),
  ícone, link "Saiba mais" → página-filha, e CTA WhatsApp (mensagem por tipo). Usar
  variants de `src/lib/motion.ts`.
- [ ] **Step 4:** Em `Home.tsx`, inserir `<SituacoesRegularizacao />` logo após `<Hero />`.
- [ ] **Step 5:** `npx playwright test home` → PASS. `npm test` → PASS.
- [ ] **Step 6:** Commit: `feat(home): secao 'Qual e o seu caso' (situacoes leigas)`.

### Task 4: Seção "Você sabia?" + faixa de valorização (home)
**Files:** Create `src/components/sections/VoceSabia.tsx` · Modify `src/pages/Home.tsx` ·
Test `tests/e2e/home.spec.ts`

- [ ] **Step 1:** Em `home.spec.ts`, adicionar teste: existe heading "Você sabia"; aparecem
  os 4 fatos (usucapião / 30% / AVCB / metade-do-terreno); existe a faixa "valoriza até 30%".
- [ ] **Step 2:** Rodar → FAIL.
- [ ] **Step 3:** Criar `VoceSabia.tsx` com os 4 cards de consciência (textos da spec) +
  uma faixa enxuta azul-escuro "Imóvel regularizado valoriza até 30%" (acento amarelo) + CTA WhatsApp.
- [ ] **Step 4:** Inserir `<VoceSabia />` após `<SituacoesRegularizacao />` no `Home.tsx`.
- [ ] **Step 5:** `npx playwright test home` → PASS.
- [ ] **Step 6:** Commit: `feat(home): secao 'Voce sabia' + faixa de valorizacao`.

### Task 5: Credibilidade honesta + rebaixar serviços + verificação final
**Files:** Modify `src/components/sections/Testimonials.tsx`, `src/components/sections/Hero.tsx`,
`src/pages/Home.tsx` · Test `tests/e2e/home.spec.ts`

- [ ] **Step 1:** Em `home.spec.ts`, adicionar teste: a home **não** contém os textos
  fictícios ("500+", "0 Reclamações"/"Reclamações"); contém credenciais reais
  ("CREA 5071806455" e "12 cidades" ou "Cáceres").
- [ ] **Step 2:** Rodar → FAIL.
- [ ] **Step 3:** Em `Testimonials.tsx`: substituir o bloco de stats fictícios por
  credenciais reais (CREA, Cáceres-MT + 12 cidades, responsável técnico, orçamento grátis 24h).
  Em `Hero.tsx`: ajustar trust indicators ("100% Comprometimento" → "Cáceres-MT e região";
  manter CREA; "24h" → "Resposta em 24h"). Marcar com comentário as frases de depoimento a
  validar pelo dono (não remover agora).
- [ ] **Step 4:** Em `Home.tsx`: mover `<Services />` para depois das novas seções
  (faixa "Também atuo em"); ajustar a linha de apoio do Hero para mencionar
  "regularize e valorize seu imóvel".
- [ ] **Step 5:** `npm run test:all` → PASS. `npm run build:static` → ok. Screenshots da home.
- [ ] **Step 6:** Commit + push: `feat(home): credibilidade honesta + reordena home p/ foco em regularizacao`.

---

## Self-Review
- Cobertura da spec: situações leigas (T3), Você sabia (T4), valorização (T4),
  credibilidade honesta (T5), AVCB serviço+página (T1, auto via SSG), dropdown (T2),
  campo leigoSituacao (T1), reordenação da home (T5). ✔
- Sem placeholders de implementação (copy vem da spec, citada por tarefa).
- Consistência de tipos: `leigoSituacao` definido na T1 e consumido na T3/T4.
