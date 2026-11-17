export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Respostas em primeira pessoa (é um engenheiro só, sem equipe) e sem prazo,
// preço ou forma de pagamento inventados.
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "O que é a ART (Anotação de Responsabilidade Técnica)?",
    answer: "É o registro no CREA que mostra qual engenheiro responde por uma obra, um projeto, um laudo ou outro serviço técnico. Ela é exigida pela Lei 6.496/1977.",
    category: "ART",
  },
  {
    id: "2",
    question: "Quando é necessário emitir uma ART?",
    answer: "Em obra nova, reforma, ampliação, projeto, laudo e instalação elétrica ou hidráulica. A prefeitura pede para dar o alvará e o habite-se, e o banco e o condomínio também costumam pedir.",
    category: "ART",
  },
  {
    id: "3",
    question: "Quanto tempo leva a regularização de um imóvel?",
    answer: "Depende do caso e de como estão os papéis. A maior parte do tempo é a espera na prefeitura e no cartório. Depois de ver os seus documentos, eu te passo uma estimativa para o seu caso.",
    category: "Regularização",
  },
  {
    id: "4",
    question: "Quais documentos são necessários para regularizar um imóvel?",
    answer: "Para começar: matrícula ou escritura, carnê do IPTU, RG e CPF do dono e, se tiver, a planta antiga ou o alvará. Depois de ver o caso, eu digo o que mais vai precisar.",
    category: "Regularização",
  },
  {
    id: "5",
    question: "Posso fazer reforma sem projeto de engenharia?",
    answer: "Pintura, troca de piso e de louça normalmente não precisam. Quebrar ou abrir parede, mexer em laje, telhado, coluna ou na parte elétrica e hidráulica precisa de engenheiro, porque algumas paredes seguram a casa.",
    category: "Reformas",
  },
  {
    id: "6",
    question: "Qual a diferença entre engenheiro civil e arquiteto?",
    answer: "O engenheiro civil cuida da estrutura (base, colunas, vigas, laje), das instalações e do acompanhamento da obra. O arquiteto cuida da distribuição dos espaços, da fachada e dos acabamentos. Em muitas obras os dois trabalham juntos.",
    category: "Geral",
  },
  {
    id: "7",
    question: "Quanto custa um projeto de engenharia civil?",
    answer: "Depende do serviço, do tamanho do imóvel e da cidade. Me mande o que você precisa pelo WhatsApp que eu te passo o valor.",
    category: "Orçamento",
  },
  {
    id: "8",
    question: "O engenheiro acompanha a execução da obra?",
    answer: "Sim. Eu vou na obra nas etapas importantes, como base, colunas, laje e instalações, e confiro se está sendo feito como no projeto. A quantidade de visitas é combinada no orçamento.",
    category: "Obras",
  },
  {
    id: "9",
    question: "O que é um laudo técnico e quando é necessário?",
    answer: "É um documento assinado pelo engenheiro que explica, com fotos, a situação de um imóvel. É usado em rachadura e infiltração, antes de comprar um imóvel, em briga com vizinho ou construtora, em processo na Justiça e para saber quanto o imóvel vale.",
    category: "Laudos",
  },
  {
    id: "10",
    question: "Como funciona a consultoria em engenharia?",
    answer: "É uma visita para tirar dúvidas antes de decidir: se vale comprar um terreno ou uma casa, se a obra está sendo bem feita, se o orçamento do pedreiro faz sentido. Se precisar, passo o que vi por escrito.",
    category: "Consultoria",
  },
  {
    id: "11",
    question: "Posso construir um segundo andar na minha casa?",
    answer: "Depende da base e das colunas da casa e das regras da prefeitura para o seu terreno. Eu vou ao local, vejo a estrutura e te digo se dá, e o que precisa reforçar se for o caso.",
    category: "Ampliação",
  },
  {
    id: "12",
    question: "Qual o prazo de validade de um projeto aprovado?",
    answer: "Cada prefeitura tem a sua regra para o alvará de construção. Se a obra não começar dentro do prazo, é preciso renovar. Eu confiro o prazo da sua cidade quando aprovo o projeto.",
    category: "Projetos",
  },
  {
    id: "14",
    question: "Vocês atendem em quais cidades?",
    answer: "Cáceres, Mirassol d'Oeste, Araputanga, São José dos Quatro Marcos, Barra do Bugres, Lambari d'Oeste, Porto Esperidião, Indiavaí, Glória d'Oeste, Salto do Céu, Reserva do Cabaçal e Pontes e Lacerda. Para outra cidade, me chame no WhatsApp.",
    category: "Atendimento",
  },
  {
    id: "15",
    question: "Como solicito um orçamento?",
    answer: "Pelo WhatsApp (65) 99694-6861, pelo e-mail contato@npcastilho.eng.br ou pelo formulário do site. Se puder, mande fotos do imóvel e os documentos que você tem.",
    category: "Orçamento",
  },
  {
    id: "16",
    question: "Onde encontrar um engenheiro civil em Cáceres-MT?",
    answer: "Sou Nielson P. de Castilho Júnior, engenheiro civil com registro no CREA 5071806455 e escritório em Cáceres-MT. Faço projeto e acompanhamento de obra, reforma, ampliação, regularização de imóveis, laudos, AVCB e ART. WhatsApp (65) 99694-6861.",
    category: "Atendimento",
  },
  {
    id: "18",
    question: "O que é o AVCB e como conseguir o alvará do Corpo de Bombeiros?",
    answer: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) mostra que o imóvel tem as medidas contra incêndio que a lei exige. A maioria dos comércios e lugares que recebem público precisa dele. Eu faço a vistoria, o projeto contra incêndio com ART, o protocolo nos Bombeiros e acompanho até sair.",
    category: "AVCB",
  },
  {
    id: "19",
    question: "A casa é minha na prática, mas não está no meu nome. Como resolver?",
    answer: "Quem mora ou usa um imóvel há anos pode ter direito de passar para o seu nome pela usucapião, hoje muitas vezes feita direto no cartório. Eu faço a parte técnica: medição, planta, memorial e ART. A parte jurídica é com o advogado.",
    category: "Regularização",
  },
  {
    id: "20",
    question: "Como faço para dividir meu terreno em dois (desdobro)?",
    answer: "O desdobro divide oficialmente o terreno em dois ou mais lotes, cada um com documento próprio. Eu meço, faço o projeto e a ART, protocolo na prefeitura e acompanho até cada lote ter a sua matrícula no cartório.",
    category: "Regularização",
  },
  {
    id: "21",
    question: "Imóvel regularizado valoriza mesmo? Quanto?",
    answer: "Segundo o Secovi Rio, um imóvel sem registro pode valer de 30% a 50% menos. Com os papéis em dia, ele pode ser vendido e financiado pelo banco sem problema.",
    category: "Regularização",
  },
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

export const getFAQCategories = (): string[] => {
  return [...new Set(faqs.map((faq) => faq.category))];
};
