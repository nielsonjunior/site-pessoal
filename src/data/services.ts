export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
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
    shortDescription: "Regularize suas obras e serviços técnicos com segurança jurídica e conformidade legal.",
    fullDescription: "A ART (Anotação de Responsabilidade Técnica) é um documento obrigatório que identifica o profissional responsável técnico pela execução de obras, serviços, empreitadas ou atividades técnicas. Emitida pelo CREA, é essencial para garantir a legalidade do projeto e a segurança de todos os envolvidos.",
    benefits: [
      "Garantia de conformidade legal da obra",
      "Proteção contra autuações e multas",
      "Segurança jurídica para proprietários",
      "Possibilidade de financiamentos bancários",
      "Validação técnica do projeto executado",
      "Responsabilidade técnica documentada"
    ],
    icon: "FileCheck",
    image: "/images/service-art.jpg",
    slug: "art-anotacao-responsabilidade-tecnica",
    keywords: ["ART", "Anotação de Responsabilidade Técnica", "engenheiro ART", "regularização ART", "CREA"],
    metaTitle: "ART - Anotação de Responsabilidade Técnica | Engenheiro Civil",
    metaDescription: "Emita sua ART com engenheiro civil registrado no CREA. Regularize obras e serviços técnicos com segurança jurídica. Solicite orçamento agora!"
  },
  {
    id: "2",
    title: "Regularização de Imóveis",
    shortDescription: "Regularize seu imóvel junto à prefeitura e órgãos competentes de forma rápida e segura.",
    fullDescription: "A regularização de imóveis é o processo de legalização de construções junto aos órgãos públicos competentes. Inclui a obtenção de habite-se, alvará de construção, certificado de conclusão e todos os documentos necessários para tornar seu imóvel regular perante a lei.",
    benefits: [
      "Obtenção do Habite-se oficial",
      "Valorização do imóvel",
      "Possibilidade de venda e financiamento",
      "Segurança jurídica na transação",
      "Regularização de débitos municipais",
      "Acesso a serviços públicos"
    ],
    icon: "Home",
    image: "/images/service-regularization.jpg",
    slug: "regularizacao-imoveis",
    keywords: ["regularização de imóveis", "habite-se", "imóvel irregular", "regularização de obra", "engenheiro regularização"],
    metaTitle: "Regularização de Imóveis | Habite-se e Documentação",
    metaDescription: "Regularize seu imóvel com engenheiro civil especializado. Obtenha habite-se, alvará e toda documentação necessária. Orçamento sem compromisso!"
  },
  {
    id: "3",
    title: "Projetos de Reforma",
    shortDescription: "Transforme seu espaço com projetos de reforma personalizados e execução de qualidade.",
    fullDescription: "Desenvolvemos projetos de reforma residencial e comercial completos, desde a concepção arquitetônica até a execução. Nossos projetos consideram suas necessidades, orçamento e prazo, garantindo uma reforma segura e dentro das normas técnicas.",
    benefits: [
      "Projeto personalizado às suas necessidades",
      "Execução dentro das normas técnicas",
      "Acompanhamento técnico completo",
      "Otimização de custos e prazos",
      "Garantia estrutural da reforma",
      "Documentação técnica completa"
    ],
    icon: "Hammer",
    image: "/images/service-renovation.jpg",
    slug: "projetos-reforma",
    keywords: ["projeto de reforma", "reforma residencial", "reforma comercial", "engenheiro reforma", "reforma apartamento"],
    metaTitle: "Projetos de Reforma Residencial e Comercial",
    metaDescription: "Projetos de reforma personalizados com acompanhamento técnico completo. Transforme seu espaço com segurança e qualidade. Solicite orçamento!"
  },
  {
    id: "4",
    title: "Ampliação de Imóveis",
    shortDescription: "Amplie seu espaço com projetos estruturais seguros e aprovação nos órgãos competentes.",
    fullDescription: "Projetos de ampliação residencial e comercial que maximizam o uso do seu espaço. Realizamos estudo de viabilidade, projeto estrutural, elétrico e hidráulico, além de toda a documentação necessária para aprovação em prefeitura e execução da obra.",
    benefits: [
      "Aproveitamento máximo do espaço",
      "Projeto estrutural seguro",
      "Aprovação em prefeitura garantida",
      "Integração com a construção existente",
      "Aumento da área construída legalmente",
      "Valorização do patrimônio"
    ],
    icon: "Maximize2",
    image: "/images/service-expansion.jpg",
    slug: "ampliacao-imoveis",
    keywords: ["ampliação de imóveis", "aumentar casa", "construir segundo andar", "ampliação residencial", "engenheiro ampliação"],
    metaTitle: "Ampliação de Imóveis | Projetos de Ampliação Residencial",
    metaDescription: "Amplie seu imóvel com segurança estrutural e aprovação garantida. Projetos completos para ampliação residencial e comercial. Orçamento grátis!"
  },
  {
    id: "5",
    title: "Laudos Técnicos",
    shortDescription: "Laudos técnicos detalhados para avaliação estrutural, vistorias e perícias.",
    fullDescription: "Elaboração de laudos técnicos completos para diversas finalidades: avaliação estrutural, vistoria de imóveis, perícia judicial, laudo de insalubridade, avaliação de patrimônio e diagnóstico de patologias construtivas. Todos os laudos são assinados por engenheiro civil registrado no CREA.",
    benefits: [
      "Avaliação técnica profissional",
      "Documento válido judicialmente",
      "Identificação de problemas estruturais",
      "Base para decisões estratégicas",
      "Conformidade com normas técnicas",
 "Assinatura CREA válida"
    ],
    icon: "ClipboardCheck",
    image: "/images/service-report.jpg",
    slug: "laudos-tecnicos",
    keywords: ["laudo técnico", "avaliação estrutural", "vistoria de imóveis", "perícia judicial", "laudo engenheiro"],
    metaTitle: "Laudos Técnicos | Avaliação Estrutural e Vistorias",
    metaDescription: "Laudos técnicos completos assinados por engenheiro civil do CREA. Avaliação estrutural, vistorias e perícias. Solicite seu laudo agora!"
  },
  {
    id: "6",
    title: "Consultoria em Engenharia",
    shortDescription: "Consultoria especializada para obras, projetos e gestão de construção civil.",
    fullDescription: "Oferecemos consultoria técnica especializada em engenharia civil para auxiliar em todas as etapas do seu projeto. Desde a concepção até a entrega final, nossa equipe fornece orientação técnica, análise de viabilidade, gestão de obras e suporte em decisões estratégicas.",
    benefits: [
      "Orientação técnica especializada",
      "Análise de viabilidade de projetos",
      "Gestão técnica de obras",
      "Otimização de recursos",
      "Redução de riscos",
      "Tomada de decisão embasada"
    ],
    icon: "Users",
    image: "/images/service-consulting.jpg",
    slug: "consultoria-engenharia",
    keywords: ["consultoria engenharia", "consultoria construção civil", "assessoria técnica obra", "gestão de obras"],
    metaTitle: "Consultoria em Engenharia Civil | Assessoria Técnica",
    metaDescription: "Consultoria especializada em engenharia civil. Orientação técnica, gestão de obras e análise de viabilidade. Agende sua consultoria!"
  }
];

export const futureServices = [
  "Projetos de Construção",
  "Projetos Estruturais",
  "Construção de Edifícios",
  "Gerenciamento de Obras",
  "Vistoria Técnica",
  "Avaliação de Imóveis",
  "Serviços Completos de Engenharia"
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};
