# Design — Home focada em regularização (linguagem leiga) + AVCB

Data: 2026-06-29 · Status: aprovado (verbal), aguardando revisão da spec.

> ⚠️ Toda a copy abaixo é **marketing em linguagem leiga**. Os termos
> técnico-jurídicos (especialmente desdobro × remembramento × unificação, e os
> detalhes do AVCB) devem ser **validados pelo Nielson** antes de publicar.

## Objetivo
Quando o cliente abre o site, ele precisa **na hora** reconhecer a própria dor e
ver que existe solução — sem precisar saber o nome técnico. Reposicionar a home
em torno do nicho de **regularização + compliance** (incluindo AVCB do Bombeiro),
com forte gancho de **valorização (até 30%)** e **credibilidade honesta** (o dono
está começando — sem números inventados).

## Restrições (preservar)
- **SSG/`renderToString`**: sem `React.lazy`/Suspense em rotas; componentes novos
  renderizam conteúdo no estado inicial (framer-motion `initial/whileInView` OK).
- **SEO**: não quebrar `SEO`/JsonLd/breadcrumbs/rotas existentes; novas rotas entram
  em sitemap + prerender + `tests/e2e/routes.ts`.
- **Conversão**: manter WhatsApp/CTAs e mensagens pré-preenchidas.

## Nova estrutura da Home (`src/pages/Home.tsx`)
Ordem: `Hero` → **`SituacoesRegularizacao`** → **`VoceSabia`** → **faixa Valorização
(até 30%)** → **`PorQueComigo`** (credibilidade honesta) → `Services` (rebaixado/enxuto:
"Também atuo em") → `About` → `Testimonials` (números corrigidos) → `Cities` → `CTA`.

## Componentes novos

### 1. `src/components/sections/SituacoesRegularizacao.tsx` — "Qual é o seu caso?"
- Lê `regularizationTypes` de `src/data/regularizacao.ts` (que passará a ter 7 itens,
  incluindo AVCB).
- Chamada: *"Você não precisa saber o nome técnico. Me diga sua situação que eu cuido de tudo."*
- Grade de cards. Cada card mostra a **fala do cliente** (destaque) + **rótulo técnico**
  (discreto) + link "Saiba mais" → página detalhada + CTA WhatsApp (mensagem por tipo).
- Voz do cliente por card (campo novo `leigoSituacao` em `regularizacao.ts`):
  - Desdobro → "Quero dividir meu terreno em 2 (ou mais)"
  - Remembramento → "Comprei os terrenos do lado e quero juntar num só"
  - Usucapião → "A casa é minha, mas não está no meu nome"
  - Retificação → "A medida da escritura não bate com o terreno"
  - Unificação → "Tenho mais de um documento do mesmo imóvel"
  - Instituição de condomínio → "Tenho vários imóveis num terreno e quero vender separado"
  - AVCB → "Meu comércio precisa do alvará do Bombeiro"

### 2. `src/components/sections/VoceSabia.tsx` — "Você sabia?"
4 cards de consciência (educativo → ação):
- "Você pode **colocar a casa no seu nome** mesmo sem escritura, se mora nela há anos." (usucapião)
- "Imóvel **com tudo documentado pode valer até 30% mais** — e pode ser financiado."
- "**Comércio sem o AVCB** do Bombeiro pode ser multado ou interditado."
- "**Não dá pra vender 'metade'** de um terreno sem fazer o desdobro."

### 3. Faixa de valorização (na home)
Faixa enxuta azul-escuro com "Imóvel regularizado **valoriza até 30%**" (acento amarelo)
+ CTA WhatsApp. (Mesma linguagem visual já usada na página-pilar.)

### 4. `PorQueComigo` (credibilidade honesta) — substitui números fictícios
4 itens reais: **CREA 5071806455** · **Cáceres-MT + 12 cidades atendidas** ·
**Responsável técnico** · **Orçamento grátis — resposta em 24h**.
- Onde aplicar: substituir o bloco de stats fictícios do `Testimonials.tsx`
  (500+/4.9/98%/0) e ajustar os "trust indicators" do `Hero.tsx`
  ("100% Comprometimento" → "Cáceres-MT e região"; manter CREA; "24h" → "Resposta 24h").
- Depoimentos (frases) que não forem reais: **marcar para revisão do dono**
  (não inventar). Nesta entrega, focar nos números; sinalizar as frases.

## AVCB — novo serviço
Adicionar como **7º item** em `src/data/regularizacao.ts` (reusa a página-filha
`RegularizacaoDetalhe`, sitemap, prerender e testes automaticamente).
Rota: `/servicos/regularizacao-imoveis/avcb`. Conteúdo PASPA (rascunho, validar):
- title: "Regularização no Corpo de Bombeiros (AVCB)"
- leigoTitle: "O alvará do Corpo de Bombeiros que seu comércio precisa para funcionar legalizado"
- painHook: "Seu comércio precisa do alvará do Bombeiro e você não sabe por onde começar?"
- symptoms: fiscalização pedindo o AVCB; vai abrir/reformar comércio; medo de multa/interdição.
- whatIsIt: documento que comprova as medidas de segurança contra incêndio exigidas por lei;
  obrigatório para a maioria dos comércios/prédios/locais com público.
- ifNotResolved: multa, alvará de funcionamento negado, interdição e risco real de segurança.
- howWeSolve: vistoria → projeto de prevenção/combate a incêndio + ART → protocolo e
  acompanhamento no Corpo de Bombeiros → emissão do AVCB.
- benefit: comércio legalizado, sem risco de multa/interdição, seguro para clientes/funcionários.
- icon: `Flame` · keywords: AVCB, Corpo de Bombeiros, alvará do bombeiro, AVCB Cáceres, projeto de incêndio.
- leigoSituacao: "Meu comércio precisa do alvará do Bombeiro".

> Nota: como AVCB é "compliance" e não exatamente "regularização de imóveis",
> ele aparecerá também na página-pilar. Aceitável (serviço adjacente). Se preferir,
> futuramente separamos numa rota própria `/servicos/avcb`.

## Bug — dropdown "Serviços"
O menu suspenso aparece semitransparente/"fantasma" sobre o hero. Investigar no
`Header.tsx` (AnimatePresence/opacity, `bg-white` sólido, z-index acima do conteúdo).
Corrigir para o dropdown ficar 100% opaco e acima de tudo.

## Dados (`src/data/regularizacao.ts`)
- Adicionar campo `leigoSituacao: string` à interface `RegularizationType` (fala do cliente).
- Preencher nos 6 existentes + adicionar AVCB (7º).

## Testes / verificação
- e2e: nova seção visível na home; cada situação linka para a página detalhada;
  AVCB carrega em `/servicos/regularizacao-imoveis/avcb` (smoke + dados de teste).
- unit: `regularizacao.test.ts` passa a esperar 7 tipos + campo `leigoSituacao`.
- e2e dropdown: menu "Serviços" abre opaco e clicável (já há teste de navegação;
  adicionar verificação do dropdown).
- `npm run test:all` verde + screenshots da home nova + build:static (prerender) ok.

## Fora de escopo (agora)
- Redesign do Hero (Fase 2 do redesign) — só ajuste de copy aqui.
- Conteúdo long-form por cidade.
