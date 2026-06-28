export interface City {
  name: string;
  state: string;
  slug: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  {
    name: "Cáceres",
    state: "MT",
    slug: "caceres",
    description: "Cidade sede do escritório. Atendimento completo em Cáceres e toda a região com serviços de engenharia civil de alta qualidade, incluindo ART, regularização, reformas e laudos técnicos.",
    neighborhoods: [
      "Centro", "Jardim Guanabara", "Nova Esperança", "Coophamil",
      "Jardim Ipanema", "São Luís", "Jardim Expander", "Aeroporto"
    ]
  },
  {
    name: "Mirassol d'Oeste",
    state: "MT",
    slug: "mirassol-doeste",
    description: "Atendimento em Mirassol d'Oeste para regularização de imóveis, ART, projetos de reforma e laudos técnicos. Engenheiro civil com conhecimento da legislação local.",
    neighborhoods: [
      "Centro", "Residencial dos Lagos", "Jardim Paulista", "Vila Nova", "Jardim Florianópolis"
    ]
  },
  {
    name: "Araputanga",
    state: "MT",
    slug: "araputanga",
    description: "Serviços de engenharia civil em Araputanga para projetos residenciais, comerciais e regularização de imóveis junto à prefeitura local.",
    neighborhoods: [
      "Centro", "Jardim Brasil", "Vila Esperança", "Jardim das Palmeiras"
    ]
  },
  {
    name: "São José dos Quatro Marcos",
    state: "MT",
    slug: "sao-jose-quatro-marcos",
    description: "Engenheiro civil em São José dos Quatro Marcos para ART, regularização de imóveis, reformas e laudos técnicos com atendimento rápido.",
    neighborhoods: [
      "Centro", "Jardim Bela Vista", "Vila Industrial", "Residencial Primavera"
    ]
  },
  {
    name: "Barra do Bugres",
    state: "MT",
    slug: "barra-do-bugres",
    description: "Atendimento em Barra do Bugres para projetos e regularização de imóveis, reformas residenciais e comerciais com garantia de qualidade.",
    neighborhoods: [
      "Centro", "Jardim Primavera", "Vila Operária", "Jardim das Acácias"
    ]
  },
  {
    name: "Lambari d'Oeste",
    state: "MT",
    slug: "lambari-doeste",
    description: "Serviços completos de engenharia civil em Lambari d'Oeste, com atendimento personalizado para regularização e projetos de reforma.",
    neighborhoods: [
      "Centro", "Jardim Novo Mundo", "Vila São Francisco"
    ]
  },
  {
    name: "Porto Esperidião",
    state: "MT",
    slug: "porto-esperidiao",
    description: "Engenheiro civil em Porto Esperidião e região da fronteira com a Bolívia. Atendimento para projetos rurais, urbanos e regularização.",
    neighborhoods: [
      "Centro", "Vila São Paulo", "Jardim América"
    ]
  },
  {
    name: "Indiavaí",
    state: "MT",
    slug: "indiavai",
    description: "Atendimento em Indiavaí para regularização de imóveis e projetos de engenharia civil residenciais e comerciais.",
    neighborhoods: [
      "Centro", "Jardim Progresso"
    ]
  },
  {
    name: "Glória d'Oeste",
    state: "MT",
    slug: "gloria-doeste",
    description: "Serviços de engenharia civil em Glória d'Oeste, com foco em regularização de imóveis e laudos técnicos.",
    neighborhoods: [
      "Centro", "Jardim das Flores", "Vila Real"
    ]
  },
  {
    name: "Salto do Céu",
    state: "MT",
    slug: "salto-do-ceu",
    description: "Atendimento em Salto do Céu para projetos de engenharia civil, regularização e ART com conhecimento da legislação municipal.",
    neighborhoods: [
      "Centro", "Jardim Vitória"
    ]
  },
  {
    name: "Reserva do Cabaçal",
    state: "MT",
    slug: "reserva-do-cabacal",
    description: "Engenheiro civil atendendo em Reserva do Cabaçal para projetos de regularização, ART e laudos técnicos.",
    neighborhoods: [
      "Centro", "Setor A", "Setor B"
    ]
  },
  {
    name: "Pontes e Lacerda",
    state: "MT",
    slug: "pontes-e-lacerda",
    description: "Serviços de engenharia civil em Pontes e Lacerda, atendimento para regularização de imóveis, ART e projetos de reforma e ampliação.",
    neighborhoods: [
      "Centro", "Jardim Paraíso", "Vila Industrial", "Bairro Novo"
    ]
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
};

export const getCitiesByState = (state: string): City[] => {
  return cities.filter(city => city.state === state);
};
