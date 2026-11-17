/**
 * Conteúdo da página inicial (história da casa própria + serviços explicados).
 * As imagens da história ficam em public/images/historia/<id>-1280.webp e -640.webp.
 */

export const WHATSAPP_NUM = "5565996946861";
export const wa = (msg?: string) =>
  `https://wa.me/${WHATSAPP_NUM}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const MARQUEE = [
  "Casa nova",
  "Financiamento da Caixa",
  "Reforma",
  "Ampliação",
  "Projeto e alvará",
  "Habite-se",
  "Regularização de imóvel",
  "Laudo de rachadura",
  "ART",
  "Alvará dos Bombeiros",
];

export interface HomeService {
  id: string;
  nome: string;
  hint: string;
  quando: string;
  passos: string[];
  recebe: string[];
  dica: string;
  /** página do site com mais detalhes */
  pagina?: string;
}

export const HOME_SERVICES: HomeService[] = [
  {
    id: "construir", nome: "Construir casa nova", hint: "Com dinheiro próprio",
    quando: "Você tem um terreno e quer construir a sua casa do jeito certo.",
    passos: ["Vou até o terreno e converso com você sobre a casa que você quer", "Faço o projeto da casa e os projetos da estrutura, da água e esgoto e da parte elétrica", "Levo o projeto para a prefeitura aprovar e tiro o alvará de construção", "Faço o orçamento do material e da mão de obra para você não ter surpresa", "Visito a obra nas etapas principais para tudo sair conforme o projeto", "No fim, cuido do habite-se"],
    recebe: ["Projeto aprovado", "Alvará de construção", "ART", "Orçamento da obra", "Habite-se"],
    dica: "Começar com projeto e orçamento evita obra parada no meio por falta de dinheiro e evita multa da prefeitura.",
  },
  {
    id: "financiar", nome: "Construir com financiamento", hint: "Caixa, Minha Casa Minha Vida e outros bancos",
    quando: "Você quer construir a sua casa usando dinheiro financiado pelo banco.",
    passos: ["Confiro o terreno e os papéis que o banco vai pedir", "Faço o projeto da casa no formato que o banco aceita", "Faço o orçamento e o cronograma da obra nos modelos do banco", "Emito a ART e preparo os documentos técnicos do processo", "Aprovo o projeto na prefeitura e tiro o alvará", "Acompanho cada etapa da obra para o banco liberar o dinheiro das parcelas"],
    recebe: ["Projeto no padrão do banco", "Orçamento e cronograma", "ART", "Alvará", "Acompanhamento das medições"],
    dica: "O banco só libera cada parte do dinheiro depois que a etapa da obra fica pronta. Ter um engenheiro acompanhando faz o dinheiro sair sem atraso.",
  },
  {
    id: "reformar", nome: "Reformar", hint: "Casa, apartamento ou comércio",
    quando: "Você quer trocar piso, mexer em parede, refazer banheiro, cozinha ou telhado.",
    passos: ["Vou ao local e vejo o que pode ser mexido sem risco", "Confiro quais paredes seguram a casa e não podem ser derrubadas", "Faço o projeto da reforma e o orçamento", "Emito a ART da reforma", "Se for apartamento faço o plano de reforma que o condomínio pede", "Acompanho a obra até o fim"],
    recebe: ["Projeto da reforma", "Orçamento", "ART", "Plano de reforma do condomínio"],
    dica: "Derrubar uma parede errada pode trincar a casa inteira. Uma visita antes de começar custa pouco perto do prejuízo.",
    pagina: "/servicos/projetos-reforma",
  },
  {
    id: "ampliar", nome: "Aumentar a casa", hint: "Quarto, garagem, área gourmet ou mais um andar",
    quando: "Você quer mais espaço: um quarto a mais, garagem, área de churrasco ou subir um andar.",
    passos: ["Vejo se o terreno e as regras da prefeitura deixam aumentar", "Confiro se a estrutura da casa aguenta, principalmente para subir andar", "Faço o projeto da parte nova e o cálculo da estrutura", "Aprovo na prefeitura e tiro o alvará", "Acompanho a obra", "Ajudo a colocar a área nova no documento do imóvel"],
    recebe: ["Projeto da ampliação", "Cálculo da estrutura", "Alvará", "ART", "Área nova no documento"],
    dica: "Área construída que não está no documento atrapalha na hora de vender ou financiar. Já faça a ampliação com os papéis certos.",
    pagina: "/servicos/ampliacao-imoveis",
  },
  {
    id: "regularizar", nome: "Arrumar os papéis do imóvel", hint: "Casa sem habite-se, terreno, escritura",
    quando: "A casa não tem habite-se, a construção não está no documento, a medida do terreno está errada ou o imóvel não está no seu nome.",
    passos: ["Converso com você e vejo quais papéis você já tem", "Meço o terreno e a casa", "Faço a planta e o memorial, que é a descrição do imóvel", "Emito a ART", "Levo tudo na prefeitura e no cartório e acompanho até sair"],
    recebe: ["Medição do terreno", "Planta e memorial", "ART", "Acompanhamento na prefeitura e no cartório"],
    dica: "Também faço desdobro, que é dividir um terreno em dois, juntar terrenos, corrigir a metragem e dar documento separado para cada casa do mesmo terreno.",
    pagina: "/servicos/regularizacao-imoveis",
  },
  {
    id: "laudos", nome: "Rachadura, infiltração e laudos", hint: "Problema na casa ou compra de imóvel",
    quando: "Apareceu rachadura, infiltração ou mofo. Ou você vai comprar um imóvel e quer saber se ele está bom. Ou o vizinho vai fazer uma obra grande.",
    passos: ["Vou ao local e faço a vistoria", "Descubro o que está causando o problema", "Faço um laudo com fotos explicando o problema e como resolver", "Emito a ART do laudo"],
    recebe: ["Vistoria no local", "Laudo com fotos", "Como resolver", "ART"],
    dica: "Também faço o laudo de avaliação, que diz quanto o imóvel vale, para venda, herança ou divisão de bens.",
    pagina: "/servicos/laudos-tecnicos",
  },
  {
    id: "comercio", nome: "Comércio e alvará dos Bombeiros", hint: "Abrir ou legalizar o seu negócio",
    quando: "Você vai abrir ou precisa legalizar o seu comércio e pediram o alvará do Corpo de Bombeiros.",
    passos: ["Vou ao local e vejo o que o Bombeiro vai exigir", "Faço o projeto de prevenção contra incêndio", "Digo o que precisa comprar e instalar, como extintor e placa", "Acompanho a vistoria dos Bombeiros até sair o alvará"],
    recebe: ["Projeto contra incêndio", "Lista do que instalar", "ART", "Alvará dos Bombeiros"],
    dica: "Sem o alvará dos Bombeiros o comércio pode ser multado e até fechado.",
    pagina: "/servicos/regularizacao-imoveis/avcb",
  },
  {
    id: "art", nome: "Só preciso de uma ART", hint: "Pedida pela prefeitura, banco ou condomínio",
    quando: "A prefeitura, o banco ou o condomínio pediu uma ART para a sua obra ou serviço.",
    passos: ["Você me conta o que é a obra ou o serviço", "Vou ao local e confiro o que está sendo feito", "Emito a ART no CREA e assumo a responsabilidade técnica"],
    recebe: ["ART emitida no CREA", "Visita ao local"],
    dica: "A ART é o documento que mostra que um engenheiro é o responsável pelo serviço. Eu só assino o que eu vi e confiro.",
    pagina: "/servicos/art-anotacao-responsabilidade-tecnica",
  },
];

export interface HomeCase {
  quote: string;
  titulo: string;
  desc: string;
  img: string;
  pagina?: string;
}

export const HOME_CASES: HomeCase[] = [
  { quote: "Tenho um terreno e quero construir a minha casa", titulo: "Construir casa nova", desc: "Faço o projeto, aprovo na prefeitura, faço o orçamento e acompanho a obra.", img: "/images/historia/16-640.webp" },
  { quote: "Quero construir pela Caixa e não sei por onde começar", titulo: "Construir com financiamento", desc: "Preparo o projeto, o orçamento e os papéis que o banco pede e acompanho cada parcela.", img: "/images/historia/09-640.webp" },
  { quote: "Quero reformar o banheiro e a cozinha", titulo: "Reformar", desc: "Vejo o que pode mexer sem risco, faço o orçamento e a ART da reforma.", img: "/images/historia/15-640.webp", pagina: "/servicos/projetos-reforma" },
  { quote: "O condomínio pediu documento de engenheiro para a reforma", titulo: "Plano de reforma do condomínio", desc: "Faço o plano de reforma e a ART que o síndico pede, também online.", img: "/images/about-detail-640.webp", pagina: "/plano-de-reforma" },
  { quote: "Quero fazer mais um quarto e uma garagem", titulo: "Aumentar a casa", desc: "Confiro se a casa aguenta, faço o projeto e coloco a área nova no documento.", img: "/images/historia/14-640.webp", pagina: "/servicos/ampliacao-imoveis" },
  { quote: "A minha casa não tem habite-se", titulo: "Arrumar os papéis", desc: "Meço, faço a planta e o memorial e acompanho na prefeitura até sair.", img: "/images/historia/17-640.webp", pagina: "/servicos/regularizacao-imoveis" },
  { quote: "A casa é minha mas não está no meu nome", titulo: "Usucapião (parte técnica)", desc: "Faço a medição, a planta e o memorial que o processo precisa.", img: "/images/historia/07-640.webp", pagina: "/servicos/regularizacao-imoveis/usucapiao" },
  { quote: "Apareceu uma rachadura na parede", titulo: "Laudo de rachadura", desc: "Vou ao local, descubro a causa e explico no laudo como resolver.", img: "/images/about-engineer-640.webp", pagina: "/servicos/laudos-tecnicos" },
  { quote: "Quero dividir o meu terreno em dois", titulo: "Desdobro de lote", desc: "Cada parte ganha documento próprio para vender ou financiar.", img: "/images/historia/05-640.webp", pagina: "/servicos/regularizacao-imoveis/desdobro" },
  { quote: "O meu comércio precisa do alvará do Bombeiro", titulo: "Alvará dos Bombeiros", desc: "Faço o projeto contra incêndio e acompanho a vistoria até sair.", img: "/images/map-caceres-640.webp", pagina: "/servicos/regularizacao-imoveis/avcb" },
  { quote: "A prefeitura pediu uma ART", titulo: "ART", desc: "Confiro o serviço no local e emito a ART no CREA.", img: "/images/historia/02-640.webp", pagina: "/servicos/art-anotacao-responsabilidade-tecnica" },
];

export const FASES = ["O começo", "O banco", "O terreno", "Os projetos", "A obra", "A chave"];

export type Inset = "fund" | "cols" | "inst" | "laje";

export interface Capitulo {
  fase: number;
  /** id da imagem em public/images/historia, ou "BP" para a prancheta desenhada */
  img: string;
  titulo: string;
  texto: string;
  /** lado do cartão no computador */
  lado: "l" | "r";
  /** posição horizontal da foto no celular (%) */
  pos: number;
  eu?: string;
  lista?: string[];
  x?: Inset;
  carimbo?: boolean;
  /** dinheiro liberado pelo banco no começo e no fim do capítulo (%) */
  banco?: [number, number];
}

export const CAPITULOS: Capitulo[] = [
  { fase: 0, img: "01", titulo: "Morando de aluguel", texto: "Rafael, Juliana e Sofia pagam aluguel e querem a casa deles.", lado: "l", pos: 45 },
  { fase: 0, img: "02", titulo: "A primeira conversa", texto: "Eu explico cada passo e o que dá para fazer com o dinheiro que eles têm.", lado: "l", pos: 35, eu: "Primeira conversa sem custo" },
  { fase: 1, img: "03", titulo: "A simulação do financiamento", texto: "Vemos quanto o banco pode financiar e quanto fica a parcela por mês.", lado: "l", pos: 60, eu: "Eu ajudo a entender a simulação" },
  { fase: 1, img: "04", titulo: "Crédito aprovado", texto: "Com o crédito aprovado, eles já sabem quanto podem gastar no terreno e na obra.", lado: "l", pos: 40 },
  { fase: 2, img: "05", titulo: "A escolha do lote", texto: "Antes de comprar, eu vejo o terreno e o que a prefeitura deixa construir nele.", lado: "l", pos: 40, eu: "Análise do terreno" },
  { fase: 2, img: "06", titulo: "No terreno", texto: "A família vai ver o terreno de perto antes de fechar negócio.", lado: "r", pos: 40 },
  { fase: 2, img: "07", titulo: "A medição do terreno", texto: "Eu meço o tamanho e o desnível do terreno. Os projetos saem dessa medição.", lado: "r", pos: 40, eu: "Medição do terreno" },
  { fase: 3, img: "BP", titulo: "Os projetos da casa", texto: "Desenho a planta, a estrutura, a parte de água e esgoto e a parte elétrica. Junto vai o orçamento da obra e a aprovação na prefeitura.", lado: "l", pos: 50, eu: "O projeto elétrico eu mesmo faço" },
  { fase: 3, img: "09", titulo: "Banco e contrato", texto: "Com os projetos prontos, o banco confere tudo e o casal assina.", lado: "r", pos: 40, lista: ["Vistoria do engenheiro do banco", "Assinatura do contrato", "Registro no cartório"] },
  { fase: 4, img: "10", titulo: "A casa marcada no chão", texto: "Começa a obra. Eu confiro se a casa está no lugar certo do terreno, do jeito do projeto.", lado: "r", pos: 30, banco: [0, 5] },
  { fase: 4, img: "11", titulo: "Fundação", texto: "A base da casa. Eu confiro as ferragens antes de cada concretagem.", lado: "r", pos: 30, x: "fund", banco: [5, 15] },
  { fase: 4, img: "12", titulo: "Colunas e paredes", texto: "As colunas e as paredes sobem. Eu confiro o prumo e o nível.", lado: "r", pos: 30, x: "cols", banco: [15, 35] },
  { fase: 4, img: "13", titulo: "Água, esgoto e luz nas paredes", texto: "Os canos e os fios passam antes do reboco, como está no projeto.", lado: "r", pos: 30, x: "inst", banco: [35, 50] },
  { fase: 4, img: "14", titulo: "Laje e telhado", texto: "A casa ganha a laje e o telhado. Eu confiro o escoramento e as ferragens da laje.", lado: "r", pos: 30, x: "laje", banco: [50, 65] },
  { fase: 4, img: "15", titulo: "Reboco", texto: "As paredes recebem o reboco por dentro e por fora.", lado: "r", pos: 30, banco: [65, 80] },
  { fase: 4, img: "16", titulo: "Acabamento", texto: "Piso, janelas, portas e pintura.", lado: "r", pos: 30, banco: [80, 95] },
  { fase: 5, img: "17", titulo: "Habite-se e a chave na mão", texto: "A prefeitura dá o habite-se e a família muda para a casa nova.", lado: "r", pos: 35, eu: "Eu cuido do habite-se e da averbação no cartório", carimbo: true, banco: [95, 100] },
];

/** Cidades do mapa de pontos: posição aproximada (lon, lat) e slug da página da cidade. */
export const MAPA_CIDADES: [nome: string, lon: number, lat: number, sub: string, slug: string][] = [
  ["Cáceres", -57.68, -16.07, "Escritório", "caceres"],
  ["Mirassol d'Oeste", -58.1, -15.67, "", "mirassol-doeste"],
  ["Araputanga", -58.34, -15.47, "", "araputanga"],
  ["São José dos Quatro Marcos", -58.18, -15.62, "", "sao-jose-quatro-marcos"],
  ["Barra do Bugres", -57.18, -15.07, "", "barra-do-bugres"],
  ["Lambari d'Oeste", -58.0, -15.32, "", "lambari-doeste"],
  ["Porto Esperidião", -58.46, -15.85, "", "porto-esperidiao"],
  ["Indiavaí", -58.58, -15.49, "", "indiavai"],
  ["Glória d'Oeste", -58.31, -15.77, "", "gloria-doeste"],
  ["Salto do Céu", -58.13, -15.13, "", "salto-do-ceu"],
  ["Reserva do Cabaçal", -58.46, -15.07, "", "reserva-do-cabacal"],
  ["Pontes e Lacerda", -59.34, -15.22, "", "pontes-e-lacerda"],
];
