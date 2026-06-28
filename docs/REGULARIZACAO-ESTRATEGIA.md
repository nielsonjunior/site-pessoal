# Estratégia de Vendas — Regularização de Imóveis (para leigos)

> Documento para **estudo e aprovação**. Nada implementado ainda.
> Objetivo: vender regularização atacando a **dor** do dono do imóvel e o desejo
> de **valorizar o bem** (até ~30% com documentação em dia), reposicionando o
> Nielson como **solucionador de problemas**, não apenas "quem constrói".

> ⚠️ As explicações abaixo são em **linguagem de marketing/leiga**. Os termos
> técnico-jurídicos devem ser revisados por você (Nielson) antes de publicar.

## 1. A virada de posicionamento

**Hoje** o site fala como engenheiro de obra ("transformo ideias em realidade").
**Problema:** o leigo só lembra do engenheiro quando vai *construir*. Ele não
sabe que tem um problema (imóvel irregular) nem que isso custa dinheiro a ele.

**Nova mensagem central (a "big idea"):**
> "Seu imóvel pode estar te custando dinheiro — e valer até 30% menos — só por
> falta de papelada. Eu resolvo isso e coloco seu patrimônio em ordem."

Três pilares de comunicação:
1. **Dor:** "Você não consegue vender, financiar, herdar ou dormir tranquilo."
2. **Ganho:** "Imóvel regularizado vale mais (até ~30%) e vira dinheiro de verdade."
3. **Confiança:** engenheiro registrado (CREA), responsável técnico, faz tudo (ART + planta + processo).

## 2. Framework de copy (use em toda página de serviço)

Padrão **Dor → Agitação → Solução → Prova → Ação** (PASPA):

1. **Gancho de dor** (título): fala a dor na língua do cliente.
   - Ex.: "Quer dividir seu terreno entre os filhos mas não sabe como?"
2. **Você se identifica?** (checklist de sintomas) — 3 a 5 marcadores:
   - "❌ Não consigo vender só uma parte do lote"
   - "❌ O cartório não aceita meu documento"
   - "❌ A metragem da escritura não bate com a real"
3. **O que é, em português claro** (sem juridiquês).
4. **O que acontece se você NÃO resolver** (consequência/custo de ficar parado).
5. **Como eu resolvo** (passo a passo simples: 1-vistoria, 2-planta+ART, 3-processo, 4-documento novo).
6. **Quanto seu imóvel valoriza** (gancho dos 30% + "vira garantia de financiamento").
7. **Prova** (depoimento/CREA/casos).
8. **CTA único:** WhatsApp — "Me mande uma foto da sua escritura que eu te digo o que dá pra fazer."

## 3. Os 6 serviços de regularização (explicação leiga + dor + ganho)

> Para cada um teremos uma **página própria** (alvo de busca local) seguindo o
> framework acima.

### 3.1 Desdobro de lote — "repartir o terreno"
- **Leigo:** transformar 1 terreno em 2 ou mais, cada um com documento próprio.
- **Dor:** quer vender um pedaço, dividir entre filhos ou construir e vender parte,
  mas é tudo um documento só → ninguém compra "metade no papel".
- **Ganho:** dois lotes legalizados valem mais que um grande "informal"; viабiliza venda e financiamento.
- **Busca-alvo:** "como dividir um terreno", "desdobro de lote Cáceres".

### 3.2 Remembramento / Unificação de lotes — "juntar terrenos"
- **Leigo:** juntar 2 ou mais terrenos vizinhos (seus) em um só documento.
- **Dor:** comprou os lotes ao lado para fazer uma obra maior (galpão, casa grande),
  mas são documentos separados → trava o projeto e a aprovação.
- **Ganho:** um lote maior e único vale e vende melhor; libera projetos maiores.
- **Obs.:** "remembramento" (urbanístico) x "unificação de matrículas" (cartório) —
  alinhar com você qual termo/serviço destacar; podem virar 1 página ou 2.

### 3.3 Usucapião (extrajudicial) — "a casa é minha mas não está no meu nome"
- **Leigo:** você mora/usa um imóvel há muitos anos, ele é "seu" na prática, mas não
  tem escritura no seu nome. A usucapião coloca no seu nome.
- **Dor (emocional, forte):** medo de perder, não pode vender, não pode financiar,
  briga de família/herança. Anos de posse sem segurança.
- **Ganho:** vira patrimônio de verdade, com documento, podendo vender/financiar.
- **Papel do engenheiro:** planta, memorial descritivo, georreferenciamento e ART —
  peças que viabilizam a usucapião no cartório.
- **Busca-alvo:** "usucapião Cáceres", "como colocar a casa no meu nome".

### 3.4 Retificação administrativa de área/registro — "a metragem não bate"
- **Leigo:** o tamanho/limites no documento são diferentes do terreno real. Corrige isso.
- **Dor:** divergência trava venda e financiamento; confusão de divisa com vizinho.
- **Ganho:** documento "limpo" e confiável = vende mais rápido e por mais.
- **Busca-alvo:** "retificação de área", "metragem da escritura errada".

### 3.5 Instituição de condomínio — "cada casa/apê com seu documento"
- **Leigo:** num mesmo terreno existem várias casas/apartamentos; cada unidade passa
  a ter documento próprio.
- **Dor:** não consegue vender uma unidade isolada nem passar para o nome de cada um.
- **Ganho:** cada unidade vira um imóvel vendável/financiável → destrava patrimônio.
- **Busca-alvo:** "instituição de condomínio", "documento individual de apartamento".

## 4. Estrutura proposta no site

1. **Página-pilar "Regularização de Imóveis"** (`/servicos/regularizacao-imoveis`,
   já existe) reescrita como hub: explica a dor geral + os 30% + lista os 6 tipos,
   cada um linkando para sua página.
2. **6 páginas-filhas** (uma por tipo) seguindo o framework PASPA. Boas para SEO
   (cada uma mira uma busca específica) e para o leigo se reconhecer.
3. **Lead magnet de conversão:** bloco "Descubra em 1 minuto o que seu imóvel
   precisa" — mini-diagnóstico (3-4 perguntas sim/não) que termina em CTA de
   WhatsApp já com o contexto. Aumenta muito a taxa de contato.
4. **Reforço de valor recorrente:** selo/box "Imóvel regularizado valoriza até 30%"
   presente nas páginas.
5. **FAQ** ampliado com as dúvidas leigas de cada tipo (também vira FAQPage no SEO).

### Encaixe técnico (como construir)
- Modelar os 6 tipos em `src/data` (ex.: `regularizationTypes.ts` tipado), do mesmo
  jeito que `services.ts` — assim páginas, sitemap, prerender e testes leem da mesma fonte.
- Novas rotas entram em `App.tsx`, `tests/e2e/routes.ts`, `scripts/gen-sitemap.mjs`
  e `scripts/prerender.mjs` (já documentado no CLAUDE.md).
- JSON-LD `Service` + `FAQPage` por página (casa com a Fase 2 do SEO).
- Tudo entregue com testes (conteúdo presente, rotas, SEO) + verificação visual.

## Progresso

- ✅ **Decisões (2026-06-28):** estrutura pilar + 6 páginas dedicadas; mini-diagnóstico SIM.
- ✅ **Dados** dos 6 tipos: `src/data/regularizacao.ts` (+ teste de integridade).
- ✅ **Página-pilar** `src/pages/RegularizacaoImoveis.tsx` (rota `/servicos/regularizacao-imoveis`,
  especializada antes de `/servicos/:slug`): dor → faixa 30% → 6 tipos (cards PASPA) →
  teaser de diagnóstico. CTAs WhatsApp com mensagem pré-preenchida por tipo.
  Testes em `tests/e2e/regularizacao.spec.ts`. 22 unit + 80 E2E verdes.
- ✅ Bônus: Header `<h1>`→`<span>` (1 h1 por página) + teste de h1 único na home.
- ✅ **6 páginas-filhas** `RegularizacaoDetalhe` (rota `/servicos/regularizacao-imoveis/:tipo`):
  PASPA completo (você se identifica? → o que é → se não resolver → passo a passo →
  valorização → CTA + outros tipos). Cards do pilar com "Saiba mais". Sitemap (35 URLs)
  + prerender (37 rotas) + smoke + spec dedicado. 22 unit + 100 E2E verdes.
- ✅ **GA4** ativo em produção: `G-YV10KJ308S` em `src/config/site.ts` (Analytics só com
  `import.meta.env.PROD`, então dev/testes ficam limpos).
- ✅ **Mini-diagnóstico interativo** `RegularizacaoDiagnostico` (embutido no pilar):
  o leigo escolhe a situação → vê o tipo recomendado + CTA WhatsApp (com contexto) +
  link para a página-filha. Testado (fluxo + refazer).
- ⏳ **Próximo:** JSON-LD (Service/FAQPage/LocalBusiness — Fase 2 do SEO).

## 5. Ordem de execução sugerida
1. Validar com você os textos/termos de cada tipo (1 rodada de revisão técnica).
2. Modelar dados + página-pilar reescrita.
3. As 6 páginas-filhas (copy PASPA).
4. Mini-diagnóstico (lead magnet) + selo de valorização.
5. FAQ + JSON-LD + testes + screenshots.

## 6. O que preciso de você
- Confirmar os **6 serviços** e termos (especialmente remembramento x unificação).
- Um número/faixa real de **valorização** que você se sente confortável em afirmar
  (uso "até ~30%"? citar fonte fortalece e evita problema).
- 2-3 **casos reais/depoimentos** de regularização (mesmo anônimos) para prova social.
- Se quer o **mini-diagnóstico** interativo (recomendo) ou só páginas + CTA.
