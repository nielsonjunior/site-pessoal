export interface City {
  name: string;
  state: string;
  slug: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  {
    name: "Campinas",
    state: "SP",
    slug: "campinas",
    description: "Atendimento principal em Campinas e toda a região metropolitana com serviços de engenharia civil de alta qualidade.",
    neighborhoods: [
      "Centro", "Jardim Proença", "Jardim das Oliveiras", "Cambuí", "Taquaral",
      "Jardim das Oliveiras", "Barão Geraldo", "Joaquim Egídio", "Nova Campinas", "Jardim das Oliveiras"
    ]
  },
  {
    name: "Valinhos",
    state: "SP",
    slug: "valinhos",
    description: "Serviços de engenharia civil em Valinhos e região, com atendimento rápido e profissional.",
    neighborhoods: [
      "Centro", "Vila Santana", "Jardim Paiquerê", "Vila Boa Esperança", "Jardim São Marcos"
    ]
  },
  {
    name: "Vinhedo",
    state: "SP",
    slug: "vinhedo",
    description: "Engenheiro civil em Vinhedo para todos os tipos de projetos e regularizações.",
    neighborhoods: [
      "Centro", "Jardim São Marcos", "Vila Capuava", "Jardim das Oliveiras", "Parque das Colinas"
    ]
  },
  {
    name: "Hortolândia",
    state: "SP",
    slug: "hortolandia",
    description: "Atendimento especializado em Hortolândia para projetos e regularização de imóveis.",
    neighborhoods: [
      "Centro", "Jardim Amanda", "Jardim das Oliveiras", "Parque Hortolândia", "Jardim São Francisco"
    ]
  },
  {
    name: "Sumaré",
    state: "SP",
    slug: "sumare",
    description: "Serviços completos de engenharia civil em Sumaré com atendimento personalizado.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
    ]
  },
  {
    name: "Paulínia",
    state: "SP",
    slug: "paulinia",
    description: "Engenharia civil de excelência em Paulínia.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
    ]
  },
  {
    name: "Indaiatuba",
    state: "SP",
    slug: "indaiatuba",
    description: "Atendimento em Indaiatuba para projetos, reformas e regularização de imóveis.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
    ]
  },
  {
    name: "Americana",
    state: "SP",
    slug: "americana",
    description: "Engenheiro civil em Americana para projetos residenciais e comerciais.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
    ]
  },
  {
    name: "Nova Odessa",
    state: "SP",
    slug: "nova-odessa",
    description: "Serviços de engenharia civil em Nova Odessa e região.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
    ]
  },
  {
    name: "Santa Bárbara d'Oeste",
    state: "SP",
    slug: "santa-barbara-doeste",
    description: "Atendimento em Santa Bárbara d'Oeste para projetos e regularizações.",
    neighborhoods: [
      "Centro", "Jardim das Oliveiras", "Vila Santana", "Jardim São Marcos", "Parque das Colinas"
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
