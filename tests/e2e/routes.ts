/**
 * Fonte unica das rotas conhecidas da aplicacao (espelha src/App.tsx).
 * Ao adicionar uma rota nova, inclua-a aqui e os smoke tests passam a cobri-la.
 */
export interface RouteFixture {
  path: string;
  /** Trecho (case-insensitive) que deve aparecer no <title> da pagina. */
  titleContains?: string;
}

export const staticRoutes: RouteFixture[] = [
  { path: "/", titleContains: "Engenheiro Civil" },
  { path: "/servicos" },
  { path: "/servicos/regularizacao-imoveis" },
  { path: "/sobre" },
  { path: "/contato" },
  { path: "/orcamento" },
  { path: "/cidades" },
  { path: "/faq" },
  { path: "/landing" },
  { path: "/o-que-e-art" },
  { path: "/por-que-contratar-engenheiro" },
  { path: "/requisitos-legais" },
  { path: "/privacidade" },
  { path: "/termos" },
  { path: "/plano-de-reforma", titleContains: "Plano de Reforma" },
  { path: "/blog", titleContains: "Blog" },
];

// Rotas dinamicas com um slug valido conhecido.
export const dynamicRoutes: RouteFixture[] = [
  { path: "/servicos/art-anotacao-responsabilidade-tecnica" },
  { path: "/servicos/regularizacao-imoveis/desdobro" },
  { path: "/servicos/regularizacao-imoveis/usucapiao" },
  { path: "/servicos/regularizacao-imoveis/avcb" },
  { path: "/cidades/caceres" },
  { path: "/blog/plano-de-reforma-nbr-16280", titleContains: "NBR 16280" },
];

export const allRoutes = [...staticRoutes, ...dynamicRoutes];
