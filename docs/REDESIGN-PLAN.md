# Plano de Modernização Visual — npcastilho.eng.br

> Plano para **estudo e aprovação** (gerado por análise do código). Foco: visual
> mais atual e profissional, mantendo a identidade azul/amarelo, a conversão
> (WhatsApp/orçamento) e o SEO/SSG. Nada implementado ainda.

## Diagnóstico
O site é tecnicamente sólido (SSG, SEO, boa arquitetura). O que "data" é o
**acabamento visual** (cara de template Tailwind genérico):
- **Tipografia** Poppins+Inter (par mais batido); sem sistema de escala/tracking.
- **Cores hardcoded** (`[#1B3B6C]`) em vez dos tokens do Tailwind (subutilizados);
  excesso de cinzas chapados; seções "lavam" umas nas outras.
- **Sombras genéricas** (`shadow-xl` preto) em vez de sombras de marca suaves.
- **Amarelo em blocos grandes** (CTA, faixa de valorização) cansa e baixa o "premium".
- **Hero sobrecarregado** (grid + 2 blobs + badge + 3 features + 3 stats + card +
  stat flutuante + scroll indicator) e imagem genérica de banco.
- **Ícone de card** em quadradinho `bg/10` (cliché 2021); raios inconsistentes.
- **Micro-animações** todas iguais (fade+translateY); sem hierarquia.
- **Lixo do boilerplate** em `App.css`.
- ⚠️ **Credibilidade**: números possivelmente inventados (500+ clientes, 4.9, 98%,
  "0 reclamações", contadores 100%/24h) — visual mais polido com número falso
  quebra confiança. **Validar dados reais com o dono.**

## Direção: "Engenharia confiável, acabamento premium"
Amarelo como **acento cirúrgico** (não em blocos), **seções escuras** como âncoras,
mais **respiro**, tipografia com caráter técnico.

- **Tipografia:** trocar display para **Space Grotesk** ou **Sora** (manter Inter no
  corpo); escala definida + `tracking-tight` + `text-balance`.
- **Tokens:** migrar cores hardcoded para tokens de marca (`primary/accent/...`);
  superfícies intencionais (clara / cinza-azulada / escura); raios via `--radius`;
  **sombras de marca** (azul suave) no lugar de `shadow-xl`.
- **Hero:** simplificar (badge, h1, lead, 2 CTAs, trust enxuta), altura controlada
  (`min-h-[88vh]`), fundo único elegante (avaliar **hero escuro**), **foto real** do
  Nielson/obra tratada (duotone azul para coesão).
- **Cards/ícones:** repensar ícone (sem quadradinho), hover mais rico (borda accent +
  seta), timing "caro".
- **Inverter blocos amarelos** → azul escuro com número/acento em amarelo (mais premium).
- **Micro-animações:** variants reutilizáveis (`fadeUp`, `stagger`), hierarquia de
  movimento, respeitar `prefers-reduced-motion`.

## Plano faseado (impacto × esforço)
- **Fase 0 — Fundação (baixo risco):** limpar `App.css`; definir tokens reais
  (cor/superfície/sombra/tipografia) apontando p/ cores atuais; variants framer-motion.
- **Fase 1 — Vitórias rápidas:** trocar tipografia; corpo `gray-600`→`slate-700`;
  sombras/raios de marca; inverter blocos amarelos. *(alto impacto, poucos arquivos)*
- **Fase 2 — Hero + cards:** redesenhar Hero (1ª impressão); refinar ícones/cards;
  refinar topo das páginas de regularização (pilar de SEO). *(maior impacto visual)*
- **Fase 3 — Coesão:** ritmo claro/escuro das seções; Header/Footer/WhatsAppButton;
  trocar números genéricos por reais.
- **Fase 4 — A11y/detalhes:** contraste WCAG AA; foco visível; reduced-motion.

## Restrições a preservar
- **SSG/`renderToString`:** sem `React.lazy`/Suspense em rotas; conteúdo principal
  renderiza no servidor. framer-motion `initial/whileInView` continua OK.
- **SEO:** não mexer em `SEO.tsx`/JsonLd/breadcrumbs/rotas/headings das páginas-pilar.
- **Conversão:** não alterar a lógica de WhatsApp/CTAs/mensagens; só a aparência.
- **Performance/LCP:** hero é o LCP; evitar mais `blur-3xl`; fontes com `display=swap`.

## Arquivos-chave
`src/index.css` · `tailwind.config.js` · `src/components/sections/Hero.tsx` ·
`src/pages/RegularizacaoImoveis.tsx` + `RegularizacaoDetalhe.tsx` ·
`src/components/sections/{CTA,Services,Testimonials,Cities,About}.tsx`.
