export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "José Aparecido Silva",
    role: "Proprietário",
    location: "Cáceres, MT",
    content: "Nunca imaginei que conseguiria regularizar meu imóvel tão rápido. Morava em área irregular há mais de 10 anos e o Nielson resolveu tudo sem complicação. Gente boa e profissional de verdade. Já indiquei para vários vizinhos!",
    rating: 5,
    service: "Regularização de Imóveis",
    date: "2025-03-10"
  },
  {
    id: "2",
    name: "Rosangela Ferreira Souza",
    role: "Proprietária",
    location: "Mirassol d'Oeste, MT",
    content: "Precisava de uma ART urgente para minha ampliação aqui em Mirassol e o Nielson me atendeu no mesmo dia. Muito atencioso, explica tudo certinho e com preço justo. Recomendo para todo mundo da região!",
    rating: 5,
    service: "ART",
    date: "2025-04-05"
  },
  {
    id: "3",
    name: "Carlos Eduardo Nunes",
    role: "Comerciante",
    location: "Cáceres, MT",
    content: "Comprei um imóvel comercial aqui em Cáceres e precisava de laudo técnico para o financiamento bancário. O Nielson entregou tudo dentro do prazo, o banco aprovou sem nenhum problema. Serviço de primeira qualidade.",
    rating: 5,
    service: "Laudos Técnicos",
    date: "2025-04-22"
  },
  {
    id: "4",
    name: "Aparecida Santos Lima",
    role: "Proprietária",
    location: "Araputanga, MT",
    content: "O Nielson fez o projeto de reforma da minha casa em Araputanga. Veio até aqui para ver o imóvel pessoalmente, explicou cada etapa com paciência e cumpriu o prazo combinado. O resultado ficou muito além do que eu esperava!",
    rating: 5,
    service: "Projetos de Reforma",
    date: "2025-05-08"
  },
  {
    id: "5",
    name: "Marcos Antônio Pereira",
    role: "Pecuarista",
    location: "Porto Esperidião, MT",
    content: "Precisava ampliar o galpão da fazenda e regularizar tudo junto à prefeitura. Pensei que ia ser um processo longo e difícil, mas o Nielson cuidou de tudo: projeto, ART e aprovação. Profissional sério e de confiança.",
    rating: 5,
    service: "Ampliação de Imóveis",
    date: "2025-05-30"
  },
  {
    id: "6",
    name: "Luciana Rodrigues Barbosa",
    role: "Corretora de Imóveis",
    location: "Cáceres, MT",
    content: "Como corretora de imóveis em Cáceres, trabalho com o Nielson há mais de um ano. Sempre indico para meus clientes. É um engenheiro pontual, honesto e que conhece muito bem as particularidades da nossa região. Parceria que dá resultado!",
    rating: 5,
    service: "Consultoria em Engenharia",
    date: "2025-06-15"
  }
];

export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter(t => t.service === service);
};

export const getLatestTestimonials = (count: number): Testimonial[] => {
  return testimonials.slice(0, count);
};
