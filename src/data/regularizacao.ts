/**
 * Tipos de regularização de imóveis (conteúdo em linguagem leiga, focado na DOR
 * do cliente e na valorização do bem). Fonte única para a página-pilar, as
 * páginas-filhas, o sitemap e os testes.
 *
 * ⚠️ Termos técnico-jurídicos a revisar com o Nielson antes de publicar.
 * Ver docs/REGULARIZACAO-ESTRATEGIA.md.
 */

/** Valorização estimada de um imóvel com documentação regularizada. */
export const VALORIZATION_MAX = "30%";

export interface RegularizationType {
  id: string;
  slug: string;
  /** Nome técnico do serviço. */
  title: string;
  /** Tradução em uma linha, na língua do leigo. */
  leigoTitle: string;
  /** Frase na 1ª pessoa, como o cliente leigo descreve a própria situação. */
  leigoSituacao: string;
  /** Pergunta-gancho que fala a dor do cliente (título da página-filha). */
  painHook: string;
  /** "Você se identifica?" — sintomas que o cliente reconhece. */
  symptoms: string[];
  /** O que é, em português claro. */
  whatIsIt: string;
  /** O que acontece se NÃO resolver (custo de ficar parado). */
  ifNotResolved: string;
  /** Como o engenheiro resolve (passo a passo simples). */
  howWeSolve: string[];
  /** Ganho/valorização específico. */
  benefit: string;
  /** Nome do ícone lucide-react. */
  icon: string;
  keywords: string[];
}

export const regularizationTypes: RegularizationType[] = [
  {
    id: "1",
    slug: "desdobro",
    title: "Desdobro de Lote",
    leigoTitle: "Repartir um terreno em dois ou mais, cada um com documento próprio",
    leigoSituacao: "Quero dividir meu terreno em 2 (ou mais)",
    painHook: "Precisa dividir seu terreno (entre filhos ou para vender um pedaço) e não sabe como?",
    symptoms: [
      "Quero vender só uma parte do terreno, mas é tudo um documento só",
      "Quero dividir o lote entre os filhos",
      "Construí outra casa no mesmo terreno e quero separar",
    ],
    whatIsIt:
      "Desdobro é dividir oficialmente um terreno em dois ou mais lotes menores, cada um com sua própria matrícula (documento). Assim cada parte passa a existir de forma independente perante a prefeitura e o cartório.",
    ifNotResolved:
      "Sem o desdobro você não consegue vender nem transferir apenas uma parte: ninguém compra 'metade no papel', o banco não financia e a divisão informal vira dor de cabeça em inventários e brigas de família.",
    howWeSolve: [
      "Vistoria e medição do terreno",
      "Projeto de desdobro + planta e memorial",
      "ART e protocolo na prefeitura",
      "Averbação no cartório: cada lote com seu documento",
    ],
    benefit:
      "Dois lotes legalizados valem mais que um grande 'informal' e ficam prontos para vender ou financiar.",
    icon: "Scissors",
    keywords: ["desdobro de lote", "dividir terreno", "desmembramento de lote", "desdobro Cáceres"],
  },
  {
    id: "2",
    slug: "remembramento",
    title: "Remembramento de Lotes",
    leigoTitle: "Juntar terrenos vizinhos para formar um único lote maior",
    leigoSituacao: "Comprei os terrenos do lado e quero juntar num só",
    painHook: "Comprou os terrenos ao lado e quer fazer uma obra maior, mas são documentos separados?",
    symptoms: [
      "Tenho lotes vizinhos e quero construir algo grande nos dois",
      "Minha obra ficaria em cima da divisa de dois terrenos",
      "Quero um terreno único, maior e mais valorizado",
    ],
    whatIsIt:
      "Remembramento é a junção de dois ou mais lotes vizinhos (do mesmo dono) para formar um terreno único e maior, com aprovação na prefeitura.",
    ifNotResolved:
      "Construir 'em cima da divisa' de lotes separados trava a aprovação do projeto e a obra. Sem juntar, o uso do espaço fica limitado e o valor de venda também.",
    howWeSolve: [
      "Análise dos lotes e das matrículas",
      "Projeto de remembramento + planta",
      "ART e aprovação na prefeitura",
      "Unificação registrada: um único lote",
    ],
    benefit:
      "Um lote maior e regular permite projetos maiores e costuma valer e vender melhor que dois lotes pequenos.",
    icon: "Combine",
    keywords: ["remembramento de lotes", "juntar terrenos", "remembramento Cáceres"],
  },
  {
    id: "3",
    slug: "usucapiao",
    title: "Usucapião (apoio técnico)",
    leigoTitle: "A casa é sua na prática, mas não está no seu nome — colocar no seu nome",
    leigoSituacao: "A casa é minha, mas não está no meu nome",
    painHook: "Mora ou usa um imóvel há muitos anos, mas ele nunca foi para o seu nome?",
    symptoms: [
      "Moro aqui há mais de 5/10 anos e não tenho escritura no meu nome",
      "Comprei 'no contrato de gaveta' e não consegui passar pro meu nome",
      "Tenho medo de perder o imóvel ou de problemas na herança",
    ],
    whatIsIt:
      "Usucapião é o direito de quem ocupa um imóvel por muitos anos, como se fosse dono, de finalmente colocá-lo no seu nome. O engenheiro entra com a parte técnica que viabiliza o processo (hoje muitas vezes feito direto no cartório).",
    ifNotResolved:
      "Sem regularizar, você não pode vender, financiar nem usar o imóvel como garantia — e segue com o risco e a insegurança de algo que é seu não estar no seu nome.",
    howWeSolve: [
      "Levantamento e medição do imóvel",
      "Planta e memorial descritivo (georreferenciados)",
      "ART e documentação técnica para o processo",
      "Apoio até o registro no seu nome",
    ],
    benefit:
      "Seu imóvel vira patrimônio de verdade, com documento, podendo ser vendido, financiado e herdado com segurança.",
    icon: "KeyRound",
    keywords: ["usucapião", "usucapião extrajudicial", "colocar a casa no meu nome", "usucapião Cáceres"],
  },
  {
    id: "4",
    slug: "unificacao-de-lote",
    title: "Unificação de Lote (matrículas)",
    leigoTitle: "Transformar várias matrículas (documentos) em uma só",
    leigoSituacao: "Tenho mais de um documento do mesmo imóvel",
    painHook: "Seu imóvel tem mais de um documento/matrícula e isso complica tudo?",
    symptoms: [
      "Meu terreno tem duas ou mais matrículas no cartório",
      "Quero simplificar a documentação em um único registro",
      "Preciso unificar para vender ou financiar como um imóvel só",
    ],
    whatIsIt:
      "Unificação é juntar, no cartório, duas ou mais matrículas de áreas contíguas do mesmo dono em uma única matrícula — deixando a documentação simples e coerente.",
    ifNotResolved:
      "Documentos fragmentados confundem compradores e bancos, atrasam negócios e podem gerar divergências entre o que está registrado e a realidade.",
    howWeSolve: [
      "Conferência das matrículas e da área real",
      "Planta e memorial de unificação",
      "ART e protocolo no cartório",
      "Matrícula única registrada",
    ],
    benefit:
      "Documentação limpa e unificada passa segurança ao comprador e ao banco, acelerando a venda e o financiamento.",
    icon: "Layers",
    keywords: ["unificação de lote", "unificação de matrículas", "unificar terreno"],
  },
  {
    id: "5",
    slug: "retificacao-administrativa",
    title: "Retificação Administrativa de Área",
    leigoTitle: "Corrigir a metragem/limites quando o documento não bate com o real",
    leigoSituacao: "A medida da escritura não bate com o terreno",
    painHook: "A metragem da sua escritura é diferente do tamanho real do terreno?",
    symptoms: [
      "O tamanho no documento não confere com o do terreno",
      "Tenho dúvida ou conflito de divisa com o vizinho",
      "A venda/financiamento travou por causa da medida errada",
    ],
    whatIsIt:
      "Retificação é corrigir, de forma oficial, a área, as medidas e os limites do imóvel no registro, deixando o documento igual à realidade — normalmente pela via administrativa (no cartório), sem briga judicial.",
    ifNotResolved:
      "Enquanto a medida não bate, a venda e o financiamento ficam travados e qualquer divergência de divisa pode virar um conflito caro com o vizinho.",
    howWeSolve: [
      "Medição precisa (levantamento topográfico)",
      "Planta e memorial descritivo corretos",
      "ART e processo de retificação no cartório",
      "Registro corrigido e confiável",
    ],
    benefit:
      "Um documento 'limpo', com a metragem certa, vende mais rápido e por um valor melhor — e acaba com a insegurança nas divisas.",
    icon: "Ruler",
    keywords: ["retificação de área", "retificação administrativa", "metragem da escritura errada"],
  },
  {
    id: "6",
    slug: "instituicao-de-condominio",
    title: "Instituição de Condomínio",
    leigoTitle: "Dar documento próprio a cada casa/apartamento de um mesmo terreno",
    leigoSituacao: "Tenho vários imóveis num terreno e quero vender separado",
    painHook: "Tem várias casas ou apartamentos num só terreno e não consegue vender separado?",
    symptoms: [
      "Construí várias unidades no mesmo lote e quero vender cada uma",
      "Não consigo passar uma unidade isolada para o nome do comprador",
      "Quero financiar/vender apartamento por apartamento",
    ],
    whatIsIt:
      "Instituição de condomínio é o processo que transforma várias unidades (casas ou apartamentos) de um mesmo terreno em imóveis independentes, cada um com sua matrícula e fração ideal.",
    ifNotResolved:
      "Sem instituir o condomínio, as unidades não existem 'sozinhas' no papel: não dá para vender, financiar ou transferir cada uma individualmente.",
    howWeSolve: [
      "Levantamento das unidades e áreas comuns",
      "Projeto e quadros de áreas (NBR) + memorial",
      "ART e convenção/registro do condomínio",
      "Matrícula individual para cada unidade",
    ],
    benefit:
      "Cada unidade vira um imóvel vendável e financiável — destravando o valor do seu empreendimento.",
    icon: "Building2",
    keywords: ["instituição de condomínio", "documento individual de apartamento", "condomínio Cáceres"],
  },
  {
    id: "7",
    slug: "avcb",
    title: "Regularização no Corpo de Bombeiros (AVCB)",
    leigoTitle: "O alvará do Corpo de Bombeiros que seu comércio precisa para funcionar legalizado",
    leigoSituacao: "Meu comércio precisa do alvará do Bombeiro",
    painHook: "Seu comércio precisa do alvará do Bombeiro e você não sabe por onde começar?",
    symptoms: [
      "A fiscalização ou a prefeitura está exigindo o AVCB",
      "Vou abrir ou reformar um comércio e preciso liberar no Bombeiro",
      "Tenho medo de multa ou de ter o comércio interditado",
    ],
    whatIsIt:
      "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é o documento que comprova que o imóvel tem as medidas de segurança contra incêndio exigidas por lei. É obrigatório para a maioria dos comércios, prédios e locais que recebem público.",
    ifNotResolved:
      "Sem o AVCB, seu comércio pode ser multado, ter o alvará de funcionamento negado e até ser interditado — sem falar no risco real de segurança para clientes e funcionários.",
    howWeSolve: [
      "Vistoria do imóvel e análise das exigências do Corpo de Bombeiros",
      "Projeto de prevenção e combate a incêndio + ART",
      "Protocolo e acompanhamento junto ao Corpo de Bombeiros",
      "Emissão do AVCB (alvará liberado)",
    ],
    benefit:
      "Comércio legalizado, sem risco de multa ou interdição e seguro para clientes e funcionários.",
    icon: "Flame",
    keywords: ["AVCB", "Corpo de Bombeiros", "alvará do bombeiro", "AVCB Cáceres", "projeto de incêndio"],
  },
];

export const getRegularizationBySlug = (
  slug: string,
): RegularizationType | undefined =>
  regularizationTypes.find((t) => t.slug === slug);

export const getAllRegularizationSlugs = (): string[] =>
  regularizationTypes.map((t) => t.slug);
