/**
 * Artigos do blog — focados em quem mora em condomínio e vai reformar o
 * apartamento (público do serviço online de Plano de Reforma NBR 16280).
 * Cada artigo termina com CTA para /plano-de-reforma e WhatsApp.
 *
 * O campo `slug` é lido por texto em scripts/site-routes.mjs (sitemap/prerender).
 */
export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Título curto para cards. */
  cardTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Data de publicação (AAAA-MM-DD). */
  date: string;
  readingMinutes: number;
  excerpt: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "plano-de-reforma-nbr-16280",
    title: "Plano de Reforma NBR 16280: o que é e quando o condomínio pode exigir",
    cardTitle: "Plano de Reforma NBR 16280: o que é?",
    metaDescription:
      "Entenda o que é o Plano de Reforma da NBR 16280, quando o síndico pode exigir, o que o documento precisa ter e quem pode assinar.",
    keywords: [
      "plano de reforma NBR 16280",
      "NBR 16280 reforma apartamento",
      "plano de reforma condomínio",
      "o que é plano de reforma",
    ],
    date: "2026-10-12",
    readingMinutes: 5,
    excerpt:
      "O síndico pediu um plano de reforma e você nunca ouviu falar disso? Veja o que a norma diz e o que precisa entregar antes de começar a obra.",
    sections: [
      {
        heading: "O que é a NBR 16280",
        paragraphs: [
          "A ABNT NBR 16280 é a norma brasileira que trata de reformas em edificações. Ela está em vigor desde 2014 e criou um sistema de gestão para que obras dentro de apartamentos e salas comerciais não coloquem em risco o prédio e os vizinhos.",
          "O ponto central da norma é simples: antes de começar, o proprietário apresenta ao responsável pelo condomínio (normalmente o síndico) um plano descrevendo o que será feito, como e por quem.",
        ],
      },
      {
        heading: "O que é o Plano de Reforma",
        paragraphs: [
          "É o documento que formaliza a reforma. Ele descreve os serviços, os materiais, o prazo, os horários de trabalho, quem vai executar e quais cuidados serão tomados com a estrutura e com as instalações do prédio.",
        ],
        list: [
          "Descrição de cada serviço e dos ambientes afetados",
          "Materiais e equipamentos que serão usados",
          "Cronograma e horários de execução",
          "Identificação de quem executa a obra",
          "Riscos e medidas de segurança",
          "Destino do entulho e proteção das áreas comuns",
          "Responsável técnico, quando exigido, com ART ou RRT",
        ],
      },
      {
        heading: "Quando precisa de engenheiro ou arquiteto",
        paragraphs: [
          "Quando a reforma pode afetar a estrutura, as vedações (paredes) ou os sistemas do prédio, como elétrica, hidráulica, gás e impermeabilização, a norma exige que o plano seja elaborado por profissional habilitado, com ART (engenheiro) ou RRT (arquiteto).",
          "Na prática, muitos condomínios pedem o plano com responsável técnico para qualquer obra, conforme o regimento interno. Por isso vale perguntar ao síndico o que ele exige antes de contratar o pedreiro.",
        ],
      },
      {
        heading: "O que acontece se começar sem o plano",
        paragraphs: [
          "O síndico tem o dever de zelar pela segurança da edificação. Sem o plano aprovado, ele pode impedir a entrada de materiais e trabalhadores e, conforme a convenção, aplicar advertência ou multa. Se a obra causar algum dano ao prédio ou aos vizinhos, a responsabilidade recai sobre o proprietário.",
        ],
      },
    ],
  },
  {
    slug: "sindico-pode-proibir-reforma",
    title: "O síndico pode proibir minha reforma? O que diz a NBR 16280",
    cardTitle: "O síndico pode proibir minha reforma?",
    metaDescription:
      "Saiba o que o síndico pode e não pode exigir na reforma do seu apartamento, segundo a NBR 16280, e como evitar que a obra fique parada.",
    keywords: [
      "síndico pode proibir reforma",
      "síndico embargou reforma",
      "reforma apartamento síndico",
      "direitos do síndico reforma",
    ],
    date: "2026-10-12",
    readingMinutes: 4,
    excerpt:
      "O síndico não pode proibir você de reformar, mas pode — e deve — exigir a documentação antes de liberar a obra. Entenda a diferença.",
    sections: [
      {
        heading: "Proibir a reforma, não. Exigir documentos, sim.",
        paragraphs: [
          "O apartamento é seu e você tem o direito de reformá-lo. Mas o prédio é de todos, e a NBR 16280 dá ao síndico a responsabilidade de verificar se a obra é segura antes de ela começar.",
          "Por isso, o síndico pode condicionar o início da obra à entrega do Plano de Reforma e, quando for o caso, da ART ou RRT do responsável técnico.",
        ],
      },
      {
        heading: "O que o síndico pode exigir",
        paragraphs: [],
        list: [
          "Plano de Reforma antes do início dos serviços",
          "ART ou RRT quando a obra afetar estrutura, paredes ou instalações",
          "Cumprimento dos horários e regras do regimento interno",
          "Identificação dos trabalhadores e da empresa contratada",
          "Proteção das áreas comuns e destino correto do entulho",
        ],
      },
      {
        heading: "O que o síndico pode vetar",
        paragraphs: [
          "Intervenções que comprometam a segurança do prédio, como remover pilares, vigas ou paredes estruturais sem projeto, sobrecarregar a laje ou alterar a fachada sem aprovação em assembleia, podem ser vetadas. Nesses casos, o caminho é um projeto técnico que demonstre a viabilidade.",
        ],
      },
      {
        heading: "Como não deixar a obra parada",
        paragraphs: [
          "O jeito mais rápido é resolver a documentação antes de contratar a mão de obra. Com o plano pronto e assinado, o síndico tem tudo o que precisa para liberar a reforma, e você evita pagar o pedreiro para esperar.",
        ],
      },
    ],
  },
  {
    slug: "art-para-reforma-de-apartamento",
    title: "ART para reforma de apartamento: quando precisa e como funciona",
    cardTitle: "ART para reforma: quando precisa?",
    metaDescription:
      "Descubra quando a reforma do apartamento precisa de ART, o que ela garante, como é emitida e por que o condomínio pede esse documento.",
    keywords: [
      "ART para reforma",
      "ART reforma apartamento",
      "quanto custa ART reforma",
      "engenheiro para reforma de apartamento",
    ],
    date: "2026-10-12",
    readingMinutes: 4,
    excerpt:
      "A ART é o documento que mostra quem é o engenheiro responsável pela reforma. Veja quando o condomínio pode pedir e como ela é emitida.",
    sections: [
      {
        heading: "O que é a ART",
        paragraphs: [
          "ART significa Anotação de Responsabilidade Técnica. É o registro, no CREA, de que um engenheiro assumiu a responsabilidade por um serviço. Ela identifica o profissional, o endereço da obra e o que foi feito.",
        ],
      },
      {
        heading: "Quando a reforma precisa de ART",
        paragraphs: [
          "Sempre que a reforma tiver um responsável técnico engenheiro, a ART deve ser registrada. Pela NBR 16280, isso é obrigatório quando a obra pode afetar a estrutura, as paredes ou as instalações do prédio.",
        ],
        list: [
          "Remoção ou abertura de paredes",
          "Alterações em instalações elétricas, hidráulicas ou de gás",
          "Troca de pisos com remoção do contrapiso ou aumento de carga",
          "Impermeabilização de áreas molhadas e sacadas",
          "Fechamento de sacada e outras mudanças que exijam aprovação",
        ],
      },
      {
        heading: "Como funciona a emissão",
        paragraphs: [
          "A ART é emitida pelo próprio engenheiro no sistema online do CREA do estado da obra. A taxa é definida pelo CREA conforme a faixa de valor do serviço e é paga por boleto. Depois de quitada, o documento fica disponível em PDF para entregar ao condomínio.",
        ],
      },
      {
        heading: "Plano de Reforma e ART juntos",
        paragraphs: [
          "Na maioria dos condomínios, a ART sozinha não basta: o síndico pede também o Plano de Reforma descrevendo a obra. O ideal é contratar os dois com o mesmo profissional, para que o documento e a responsabilidade técnica falem a mesma língua.",
        ],
      },
    ],
  },
  {
    slug: "posso-tirar-parede-do-apartamento",
    title: "Posso tirar uma parede do meu apartamento? Como saber se é estrutural",
    cardTitle: "Posso tirar uma parede do apartamento?",
    metaDescription:
      "Antes de derrubar uma parede no apartamento, entenda o risco, como saber se ela é estrutural e o que o condomínio vai exigir pela NBR 16280.",
    keywords: [
      "posso tirar parede do apartamento",
      "parede estrutural apartamento",
      "derrubar parede apartamento",
      "integrar cozinha e sala apartamento",
    ],
    date: "2026-10-12",
    readingMinutes: 4,
    excerpt:
      "Integrar a cozinha com a sala é uma das reformas mais pedidas — e uma das que mais exige cuidado. Veja como agir com segurança.",
    sections: [
      {
        heading: "Nem toda parede pode sair",
        paragraphs: [
          "Em muitos prédios, principalmente os construídos em alvenaria estrutural, as paredes fazem parte da estrutura: elas sustentam as lajes dos andares de cima. Remover uma delas sem análise pode causar trincas, deformações e, no limite, colapso.",
        ],
      },
      {
        heading: "Como saber se a parede é estrutural",
        paragraphs: [
          "Não dá para ter certeza só olhando ou batendo na parede. A forma segura é consultar o projeto estrutural do prédio, que normalmente fica com o síndico ou a administradora, e ter a avaliação de um engenheiro.",
        ],
        list: [
          "Peça ao síndico as plantas e o projeto estrutural do edifício",
          "Verifique se o prédio é de alvenaria estrutural ou de concreto armado",
          "Confira se há tubulações ou instalações dentro da parede",
          "Contrate um engenheiro para analisar e assinar a intervenção",
        ],
      },
      {
        heading: "O que o condomínio vai pedir",
        paragraphs: [
          "Remoção de parede é exatamente o tipo de obra que a NBR 16280 exige com responsável técnico. O síndico vai pedir o Plano de Reforma com ART e, dependendo do caso, um projeto ou laudo que comprove que a intervenção é segura.",
          "Esse tipo de reforma exige vistoria no local. Desconfie de quem aceita assinar a remoção de uma parede só por foto.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
