export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  /** o que o cliente recebe (concreto, sem promessa genérica) */
  benefits: string[];
  icon: string;
  image: string;
  slug: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Anotação de Responsabilidade Técnica (ART)",
    shortDescription: "O documento do CREA que diz qual engenheiro é o responsável pela obra ou pelo serviço.",
    fullDescription: "A prefeitura, o banco, o cartório e o condomínio pedem a ART para aceitar uma obra, uma reforma, um laudo ou um projeto. Ela mostra no CREA qual engenheiro responde pelo serviço.\n\nAntes de emitir, eu vou ao local e confiro o que está sendo feito. Só assino o que eu vi e o que está de acordo com as normas.",
    benefits: [
      "ART emitida no CREA",
      "Visita ao local antes de assinar",
      "Serve para prefeitura, banco, cartório e condomínio",
    ],
    icon: "FileCheck",
    image: "/images/engineer-office.jpg",
    slug: "art-anotacao-responsabilidade-tecnica",
    keywords: ["ART", "Anotação de Responsabilidade Técnica", "engenheiro ART", "regularização ART", "CREA"],
    metaTitle: "ART - Anotação de Responsabilidade Técnica | Engenheiro Civil",
    metaDescription: "ART emitida por engenheiro civil registrado no CREA, com visita ao local. Para obra, reforma, laudo e projeto em Cáceres-MT.",
  },
  {
    id: "2",
    title: "Regularização de Imóveis",
    shortDescription: "Habite-se, construção no documento, medida do terreno e imóvel no seu nome.",
    fullDescription: "Imóvel com papel atrasado não pode ser vendido, financiado nem passado para os filhos sem problema. Os casos mais comuns são casa sem habite-se, construção que não está na matrícula, medida do terreno errada e imóvel que nunca foi para o nome do dono.\n\nEu meço o terreno e a casa, faço a planta e o memorial, emito a ART e acompanho na prefeitura e no cartório até sair.",
    benefits: [
      "Medição do terreno e da casa",
      "Planta e memorial descritivo",
      "ART",
      "Acompanhamento na prefeitura e no cartório",
    ],
    icon: "Home",
    image: "/images/engineer-site.jpg",
    slug: "regularizacao-imoveis",
    keywords: ["regularização de imóveis", "habite-se", "imóvel irregular", "regularização de obra", "engenheiro regularização"],
    metaTitle: "Regularização de Imóveis | Habite-se e Documentação",
    metaDescription: "Habite-se, construção na matrícula, medida do terreno e imóvel no seu nome. Medição, planta, memorial e ART em Cáceres-MT.",
  },
  {
    id: "3",
    title: "Projetos de Reforma",
    shortDescription: "Projeto, orçamento e ART para reformar sem risco para a estrutura.",
    fullDescription: "Antes de quebrar parede, trocar telhado ou mexer em banheiro e cozinha, eu vou ao local e vejo o que pode ser mexido. Algumas paredes seguram a casa e não podem sair sem reforço.\n\nFaço o projeto da reforma, o orçamento do material e da mão de obra e a ART. Em apartamento, faço também o plano de reforma que o condomínio pede.",
    benefits: [
      "Visita ao local",
      "Projeto da reforma",
      "Orçamento",
      "ART",
      "Plano de reforma do condomínio, quando for apartamento",
    ],
    icon: "Hammer",
    image: "/images/hero-house.jpg",
    slug: "projetos-reforma",
    keywords: ["projeto de reforma", "reforma residencial", "reforma comercial", "engenheiro reforma", "reforma apartamento"],
    metaTitle: "Projetos de Reforma Residencial e Comercial",
    metaDescription: "Projeto de reforma, orçamento e ART. Vejo antes o que pode ser mexido sem risco para a estrutura. Cáceres-MT e região.",
  },
  {
    id: "4",
    title: "Ampliação de Imóveis",
    shortDescription: "Quarto, garagem, área gourmet ou mais um andar, com projeto e alvará.",
    fullDescription: "Primeiro eu vejo se o terreno e as regras da prefeitura deixam aumentar e se a estrutura da casa aguenta, principalmente para subir um andar.\n\nDepois faço o projeto da parte nova, o cálculo da estrutura e os projetos de água, esgoto e elétrica, aprovo na prefeitura e acompanho a obra. No fim, a área nova entra no documento do imóvel.",
    benefits: [
      "Análise do terreno e da estrutura",
      "Projeto e cálculo da estrutura",
      "Alvará",
      "ART",
      "Área nova no documento",
    ],
    icon: "Maximize2",
    image: "/images/about-detail.jpg",
    slug: "ampliacao-imoveis",
    keywords: ["ampliação de imóveis", "aumentar casa", "construir segundo andar", "ampliação residencial", "engenheiro ampliação"],
    metaTitle: "Ampliação de Imóveis | Projetos de Ampliação Residencial",
    metaDescription: "Quarto, garagem ou mais um andar: confiro se a estrutura aguenta, faço o projeto, aprovo na prefeitura e coloco a área nova no documento.",
  },
  {
    id: "5",
    title: "Laudos Técnicos",
    shortDescription: "Rachadura, infiltração, vistoria para compra e avaliação do imóvel.",
    fullDescription: "Rachadura, infiltração, mofo e piso que afunda têm causa. Eu vou ao local, descubro o que está acontecendo e explico no laudo, com fotos, o que precisa ser feito.\n\nTambém faço vistoria antes de comprar um imóvel, laudo de vizinhança antes de uma obra grande ao lado e laudo de avaliação, que diz quanto o imóvel vale para venda, herança ou divisão de bens.",
    benefits: [
      "Vistoria no local",
      "Laudo com fotos",
      "O que fazer para resolver",
      "ART do laudo",
    ],
    icon: "ClipboardCheck",
    image: "/images/about-engineer.jpg",
    slug: "laudos-tecnicos",
    keywords: ["laudo técnico", "avaliação estrutural", "vistoria de imóveis", "perícia judicial", "laudo engenheiro"],
    metaTitle: "Laudos Técnicos | Rachadura, Vistoria e Avaliação",
    metaDescription: "Laudo de rachadura e infiltração, vistoria antes da compra e avaliação de imóvel, com fotos e ART. Cáceres-MT e região.",
  },
  {
    id: "6",
    title: "Consultoria em Engenharia",
    shortDescription: "Uma visita para tirar dúvidas antes de comprar, construir ou reformar.",
    fullDescription: "Às vezes você só precisa de uma opinião técnica antes de decidir: se vale comprar um terreno ou uma casa, se a obra que está sendo feita está certa, se o orçamento do pedreiro faz sentido.\n\nEu vou ao local, olho com você e explico o que vi. Se precisar, passo por escrito.",
    benefits: [
      "Visita ao local",
      "Explicação do que foi visto",
      "Relatório por escrito, se precisar",
    ],
    icon: "Users",
    image: "/images/engineer-site.jpg",
    slug: "consultoria-engenharia",
    keywords: ["consultoria engenharia", "consultoria construção civil", "assessoria técnica obra", "gestão de obras"],
    metaTitle: "Consultoria em Engenharia Civil | Visita Técnica",
    metaDescription: "Visita técnica para decidir antes de comprar, construir ou reformar. Engenheiro civil em Cáceres-MT.",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map((service) => service.slug);
};
