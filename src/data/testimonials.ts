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
    name: "Carlos Eduardo Silva",
    role: "Proprietário",
    location: "Campinas, SP",
    content: "Contratei os serviços para regularização do meu imóvel e fiquei muito satisfeito. O processo foi rápido, transparente e sem complicações. Recomendo a todos!",
    rating: 5,
    service: "Regularização de Imóveis",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Maria Fernanda Oliveira",
    role: "Empresária",
    location: "Valinhos, SP",
    content: "Precisei de uma ART urgente para uma obra comercial e fui atendida prontamente. Profissionalismo exemplar e documentação entregue no prazo.",
    rating: 5,
    service: "ART",
    date: "2024-02-03"
  },
  {
    id: "3",
    name: "João Pedro Santos",
    role: "Proprietário",
    location: "Vinhedo, SP",
    content: "Reforma completa da minha casa executada com excelência. O acompanhamento técnico foi fundamental para o sucesso do projeto. Obrigado!",
    rating: 5,
    service: "Projetos de Reforma",
    date: "2024-02-20"
  },
  {
    id: "4",
    name: "Ana Carolina Lima",
    role: "Arquiteta",
    location: "Hortolândia, SP",
    content: "Trabalho em parceria com o Nielson há anos. Sempre entrega projetos estruturais impecáveis e dentro do prazo. Profissional de confiança.",
    rating: 5,
    service: "Consultoria em Engenharia",
    date: "2024-03-08"
  },
  {
    id: "5",
    name: "Roberto Almeida",
    role: "Investidor Imobiliário",
    location: "Sumaré, SP",
    content: "Laudo técnico detalhado e profissional. Me ajudou muito na decisão de compra de um imóvel. Preço justo e entrega rápida.",
    rating: 5,
    service: "Laudos Técnicos",
    date: "2024-03-15"
  },
  {
    id: "6",
    name: "Patrícia Mendes",
    role: "Proprietária",
    location: "Paulínia, SP",
    content: "Ampliação da minha casa realizada perfeitamente. O projeto integrou-se muito bem à construção existente. Superou minhas expectativas!",
    rating: 5,
    service: "Ampliação de Imóveis",
    date: "2024-04-01"
  }
];

export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter(t => t.service === service);
};

export const getLatestTestimonials = (count: number): Testimonial[] => {
  return testimonials.slice(0, count);
};
