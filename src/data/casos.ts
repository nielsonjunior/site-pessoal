/**
 * "Qual é o seu caso?" — situações na VOZ DO CLIENTE (leigo), levantadas das
 * buscas reais do Google. Cada caso vira um card na home: frase de dor + link
 * para a página detalhada + WhatsApp. As 12 dores foram agrupadas em blocos
 * (ex.: vender/financiar/herança viram um guarda-chuva de documentação).
 *
 * `icon` é o nome do ícone (lucide) — o componente faz o de-para para o React.
 */
export interface CasoCard {
  id: string;
  frase: string;
  tag: string;
  icon: string;
  href: string;
  waMsg: string;
}

export const casos: CasoCard[] = [
  {
    id: "documentacao",
    frase: "“Quero vender ou financiar, mas a papelada trava”",
    tag: "Regularização / habite-se",
    icon: "FileCheck",
    href: "/servicos/regularizacao-imoveis",
    waMsg:
      "Olá! Preciso regularizar a documentação do meu imóvel pra vender/financiar. Pode me ajudar?",
  },
  {
    id: "construir",
    frase: "“Quero construir, mas não sei por onde começar”",
    tag: "Projeto + financiamento de obra",
    icon: "HardHat",
    href: "/servicos/consultoria-engenharia",
    waMsg:
      "Olá! Quero construir e não sei por onde começar (nem se consigo financiamento). Pode me orientar?",
  },
  {
    id: "embargo",
    frase: "“A prefeitura embargou minha obra”",
    tag: "Regularização de obra / alvará",
    icon: "AlertTriangle",
    href: "/servicos/regularizacao-imoveis",
    waMsg:
      "Olá! Minha obra foi embargada pela prefeitura por falta de alvará. Preciso regularizar.",
  },
  {
    id: "art",
    frase: "“Vou reformar/construir — preciso de engenheiro?”",
    tag: "ART",
    icon: "Ruler",
    href: "/o-que-e-art",
    waMsg:
      "Olá! Vou fazer uma obra e preciso de ART / engenheiro responsável. Pode me ajudar?",
  },
  {
    id: "avcb",
    frase: "“Meu comércio travou no alvará do Bombeiro”",
    tag: "AVCB",
    icon: "Flame",
    href: "/servicos/regularizacao-imoveis/avcb",
    waMsg:
      "Olá! Preciso do AVCB / alvará do Corpo de Bombeiros pro meu comércio. Pode me ajudar?",
  },
  {
    id: "ambiental",
    frase: "“Tenho oficina/lava-jato e preciso legalizar a água e o descarte”",
    tag: "Licenciamento ambiental",
    icon: "Droplets",
    href: "/orcamento",
    waMsg:
      "Olá! Tenho oficina/lava-jato e preciso legalizar o descarte e a licença ambiental. Pode me ajudar?",
  },
  {
    id: "usucapiao",
    frase: "“A casa é minha, mas não está no meu nome”",
    tag: "Usucapião",
    icon: "KeyRound",
    href: "/servicos/regularizacao-imoveis/usucapiao",
    waMsg:
      "Olá! Moro num imóvel que não está no meu nome. Dá pra resolver por usucapião?",
  },
  {
    id: "desdobro",
    frase: "“Quero dividir meu terreno pra vender uma parte”",
    tag: "Desdobro",
    icon: "Scissors",
    href: "/servicos/regularizacao-imoveis/desdobro",
    waMsg:
      "Olá! Quero dividir meu terreno (desdobro) pra vender uma parte. Pode me ajudar?",
  },
  {
    id: "laudo",
    frase: "“Apareceram rachaduras — é perigoso?”",
    tag: "Laudo técnico",
    icon: "Search",
    href: "/servicos/laudos-tecnicos",
    waMsg:
      "Olá! Apareceram rachaduras no meu imóvel e quero um laudo técnico. Pode avaliar?",
  },
];
