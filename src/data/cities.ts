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
    description: "Meu escritório fica em Cáceres. Faço projeto, obra, regularização e laudo na cidade, com visita ao local."
  },
  {
    name: "Mirassol d'Oeste",
    state: "MT",
    slug: "mirassol-doeste",
    description: "Faço projeto, obra, regularização e laudo em Mirassol d'Oeste, com visita ao local."
  },
  {
    name: "Araputanga",
    state: "MT",
    slug: "araputanga",
    description: "Faço projeto, obra, regularização e laudo em Araputanga, com visita ao local."
  },
  {
    name: "São José dos Quatro Marcos",
    state: "MT",
    slug: "sao-jose-quatro-marcos",
    description: "Faço projeto, obra, regularização e laudo em São José dos Quatro Marcos, com visita ao local."
  },
  {
    name: "Barra do Bugres",
    state: "MT",
    slug: "barra-do-bugres",
    description: "Faço projeto, obra, regularização e laudo em Barra do Bugres, com visita ao local."
  },
  {
    name: "Lambari d'Oeste",
    state: "MT",
    slug: "lambari-doeste",
    description: "Faço projeto, obra, regularização e laudo em Lambari d'Oeste, com visita ao local."
  },
  {
    name: "Porto Esperidião",
    state: "MT",
    slug: "porto-esperidiao",
    description: "Faço projeto, obra, regularização e laudo em Porto Esperidião, na cidade e na zona rural."
  },
  {
    name: "Indiavaí",
    state: "MT",
    slug: "indiavai",
    description: "Faço projeto, obra, regularização e laudo em Indiavaí, com visita ao local."
  },
  {
    name: "Glória d'Oeste",
    state: "MT",
    slug: "gloria-doeste",
    description: "Faço projeto, obra, regularização e laudo em Glória d'Oeste, com visita ao local."
  },
  {
    name: "Salto do Céu",
    state: "MT",
    slug: "salto-do-ceu",
    description: "Faço projeto, obra, regularização e laudo em Salto do Céu, com visita ao local."
  },
  {
    name: "Reserva do Cabaçal",
    state: "MT",
    slug: "reserva-do-cabacal",
    description: "Faço projeto, obra, regularização e laudo em Reserva do Cabaçal, com visita ao local."
  },
  {
    name: "Pontes e Lacerda",
    state: "MT",
    slug: "pontes-e-lacerda",
    description: "Faço projeto, obra, regularização e laudo em Pontes e Lacerda, com visita ao local."
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
