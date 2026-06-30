export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "O que é a ART (Anotação de Responsabilidade Técnica)?",
    answer: "A ART é um documento emitido pelo CREA que identifica o profissional responsável técnico pela execução de obras, serviços ou atividades técnicas. É obrigatória para garantir a legalidade do projeto e a segurança de todos os envolvidos. A ART vincula o profissional à responsabilidade técnica pelo trabalho executado.",
    category: "ART"
  },
  {
    id: "2",
    question: "Quando é necessário emitir uma ART?",
    answer: "A ART é necessária em diversas situações: execução de obras novas, reformas, ampliações, projetos técnicos, laudos e perícias, instalações elétricas e hidráulicas, e qualquer atividade técnica relacionada à engenharia civil. É obrigatória para obter alvará de construção e habite-se.",
    category: "ART"
  },
  {
    id: "3",
    question: "Quanto tempo leva a regularização de um imóvel?",
    answer: "O prazo para regularização de um imóvel varia conforme a complexidade do caso e a situação da documentação. Em média, pode levar de 3 a 6 meses. Imóveis com débitos fiscais ou problemas estruturais mais graves podem demandar mais tempo. Realizamos uma análise prévia para estimar o prazo específico do seu caso.",
    category: "Regularização"
  },
  {
    id: "4",
    question: "Quais documentos são necessários para regularizar um imóvel?",
    answer: "Os documentos básicos incluem: matrícula do imóvel atualizada, cópia do RG e CPF do proprietário, projeto arquitetônico aprovado (se houver), certidões negativas municipais, comprovante de pagamento de IPTU e documentos da construção. Durante nossa primeira reunião, listamos todos os documentos específicos para o seu caso.",
    category: "Regularização"
  },
  {
    id: "5",
    question: "Posso fazer reforma sem projeto de engenharia?",
    answer: "Depende do tipo e porte da reforma. Reformas estruturais, que alteram a estrutura do imóvel, sempre exigem projeto e acompanhamento de engenheiro civil. Reformas simples, como pintura e acabamentos, geralmente não precisam. É importante consultar um profissional para avaliar a necessidade de projeto técnico antes de iniciar.",
    category: "Reformas"
  },
  {
    id: "6",
    question: "Qual a diferença entre engenheiro civil e arquiteto?",
    answer: "O engenheiro civil é responsável pela parte estrutural, fundações, instalações hidráulicas e elétricas, e cálculos técnicos de segurança. O arquiteto cuida do projeto arquitetônico, estética, distribuição de espaços e conforto ambiental. Para obras completas, ambos os profissionais trabalham em conjunto, cada um em sua área de especialidade.",
    category: "Geral"
  },
  {
    id: "7",
    question: "Quanto custa um projeto de engenharia civil?",
    answer: "O valor do projeto varia conforme o tipo de serviço, metragem do imóvel, complexidade e localização. Oferecemos orçamento personalizado sem compromisso após avaliação das necessidades específicas. Trabalhamos com preços competitivos e condições de pagamento facilitadas.",
    category: "Orçamento"
  },
  {
    id: "8",
    question: "O engenheiro acompanha a execução da obra?",
    answer: "Sim, oferecemos serviço de acompanhamento técnico de obras, onde visitamos regularmente o canteiro para fiscalizar a execução conforme o projeto aprovado. Este serviço garante que a obra seja executada dentro das normas técnicas e com segurança. A frequência das visitas é definida conforme a necessidade de cada obra.",
    category: "Obras"
  },
  {
    id: "9",
    question: "O que é um laudo técnico e quando é necessário?",
    answer: "Um laudo técnico é um documento que apresenta a avaliação técnica de um imóvel ou estrutura. É necessário em casos de compra e venda, processos judiciais, avaliação de danos, vistorias de imóveis, análise de patologias construtivas, entre outros. O laudo é assinado por engenheiro civil registrado no CREA e tem valor legal.",
    category: "Laudos"
  },
  {
    id: "10",
    question: "Como funciona a consultoria em engenharia?",
    answer: "A consultoria em engenharia oferece orientação técnica especializada para ajudar na tomada de decisões relacionadas a projetos e obras. Inclui análise de viabilidade, estudos técnicos, gestão de obras, assessoria em compra de materiais, e suporte em todas as etapas do projeto. A consultoria pode ser pontual ou contínua, conforme a necessidade.",
    category: "Consultoria"
  },
  {
    id: "11",
    question: "Posso construir um segundo andar na minha casa?",
    answer: "A construção de um segundo andar depende da viabilidade estrutural do imóvel existente e da legislação urbanística local. É necessário realizar um estudo técnico para avaliar se a fundação e estrutura atual suportam a ampliação. Também precisamos verificar as normas de zoneamento da prefeitura. Agende uma visita técnica para avaliação.",
    category: "Ampliação"
  },
  {
    id: "12",
    question: "Qual o prazo de validade de um projeto aprovado?",
    answer: "O prazo de validade de um projeto aprovado varia conforme a legislação municipal. Em geral, o alvará de construção tem validade de 1 a 2 anos, podendo ser renovado. É importante iniciar a obra dentro deste prazo. Após o início, a obra deve ser concluída dentro do prazo estabelecido no alvará, sob pena de necessidade de renovação.",
    category: "Projetos"
  },
  {
    id: "13",
    question: "Como funciona o pagamento dos serviços?",
    answer: "Trabalhamos com condições de pagamento flexíveis. Geralmente, solicitamos um sinal no início do serviço e o restante pode ser parcelado conforme etapas do projeto ou obra. Aceitamos diversas formas de pagamento: transferência bancária, PIX, cartão de crédito e débito. Na primeira reunião, apresentamos proposta detalhada com valores e condições.",
    category: "Orçamento"
  },
  {
    id: "14",
    question: "Vocês atendem em quais cidades?",
    answer: "Atendemos em Cáceres-MT e toda a região, incluindo Mirassol d'Oeste, Araputanga, São José dos Quatro Marcos, Barra do Bugres, Lambari d'Oeste, Porto Esperidião, Indiavaí, Glória d'Oeste, Salto do Céu, Reserva do Cabaçal e Pontes e Lacerda. Para projetos específicos, consulte disponibilidade para cidades mais distantes.",
    category: "Atendimento"
  },
  {
    id: "15",
    question: "Como solicito um orçamento?",
    answer: "Você pode solicitar um orçamento através do formulário em nosso site, pelo WhatsApp, telefone ou e-mail. Para um orçamento mais preciso, recomendamos agendar uma visita técnica ao imóvel. Durante a visita, avaliamos as necessidades específicas e apresentamos proposta detalhada em até 48 horas.",
    category: "Orçamento"
  },
  {
    id: "16",
    question: "Onde encontrar um engenheiro civil em Cáceres-MT?",
    answer: "Nielson P. de Castilho Júnior é Engenheiro Civil registrado no CREA (5071806455), com atendimento em Cáceres-MT e região. Você fala diretamente com o engenheiro pelo WhatsApp (65) 99694-6861 e recebe orçamento grátis. Atendo regularização de imóveis, ART, reformas, ampliações, laudos técnicos e AVCB.",
    category: "Atendimento"
  },
  {
    id: "17",
    question: "Vocês fazem engenharia civil em Cáceres e região?",
    answer: "Sim. Ofereço serviços completos de engenharia civil em Cáceres-MT e em mais de 12 cidades da região, com responsabilidade técnica (ART) e registro no CREA. Da regularização de imóveis a projetos de reforma e ampliação, é só me chamar no WhatsApp para um orçamento sem compromisso.",
    category: "Atendimento"
  },
  {
    id: "18",
    question: "O que é o AVCB e como conseguir o alvará do Corpo de Bombeiros?",
    answer: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é o documento que comprova que seu imóvel tem as medidas de segurança contra incêndio exigidas por lei — obrigatório para a maioria dos comércios e locais com público. Eu faço a vistoria, o projeto de prevenção e combate a incêndio com ART, o protocolo no Corpo de Bombeiros e acompanho até a emissão do alvará.",
    category: "AVCB"
  },
  {
    id: "19",
    question: "A casa é minha na prática, mas não está no meu nome. Como resolver?",
    answer: "Quem mora ou usa um imóvel há vários anos pode ter direito de colocá-lo no seu nome pela usucapião. Eu entro com a parte técnica que viabiliza o processo (levantamento, planta, memorial e ART), hoje muitas vezes feito direto no cartório. Assim seu imóvel vira patrimônio de verdade, podendo ser vendido e financiado.",
    category: "Regularização"
  },
  {
    id: "20",
    question: "Como faço para dividir meu terreno em dois (desdobro)?",
    answer: "O desdobro é o processo que divide oficialmente um terreno em dois ou mais lotes, cada um com documento próprio. Sem ele, não dá para vender ou transferir só uma parte. Eu cuido da medição, do projeto, da ART e do protocolo na prefeitura até cada lote ter sua matrícula. Fale comigo para avaliar o seu caso.",
    category: "Regularização"
  },
  {
    id: "21",
    question: "Imóvel regularizado valoriza mesmo? Quanto?",
    answer: "Sim. Um imóvel com toda a documentação em dia pode valer até cerca de 30% mais e ainda pode ser financiado pelo banco e vendido com segurança jurídica. Regularizar (desdobro, usucapião, retificação, instituição de condomínio) transforma seu imóvel em um patrimônio que rende.",
    category: "Regularização"
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

export const getFAQCategories = (): string[] => {
  return [...new Set(faqs.map(faq => faq.category))];
};
