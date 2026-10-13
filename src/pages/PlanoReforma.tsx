import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  FileSignature,
  Building2,
  Camera,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";
import { SEO, JsonLd } from "@/components/shared";
import { Aurora } from "@/components/shared/Aurora";
import { SITE } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";
import { fadeUp, stagger, inView } from "@/lib/motion";

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const WA_PEDIDO = wa(
  "Olá! Vou reformar meu apartamento e o condomínio pediu um documento de engenheiro (plano de reforma com ART) para liberar a obra. Pode me passar um orçamento?",
);
const WA_SINDICO = wa(
  "Olá! Sou síndico(a)/administradora e quero indicar um engenheiro para os planos de reforma do condomínio. Podemos conversar?",
);

const entregaveis = [
  {
    title: "Plano de Reforma",
    text: "O documento que explica a sua obra para o síndico aprovar. Feito do jeito que a norma técnica (NBR 16280) pede.",
  },
  {
    title: "Memorial Descritivo",
    text: "A lista do que vai ser feito, com quais materiais, em quanto tempo e em quais horários.",
  },
  {
    title: "ART (assinatura do engenheiro)",
    text: "O registro no CREA que mostra que um engenheiro civil é o responsável técnico pela sua reforma.",
  },
  {
    title: "Ajustes pedidos pelo condomínio",
    text: "Se o síndico pedir alguma correção dentro do mesmo escopo, a revisão está incluída.",
  },
];

const passos = [
  {
    icon: Camera,
    title: "Conte sobre a reforma",
    text: "Pelo WhatsApp, envie o endereço do condomínio, o que vai ser feito, fotos dos ambientes e a planta, se tiver.",
  },
  {
    icon: MessageCircle,
    title: "Receba o orçamento",
    text: "Analiso o escopo e envio o valor fechado. Se a obra exigir vistoria, você fica sabendo antes de pagar.",
  },
  {
    icon: FileSignature,
    title: "Protocole no condomínio",
    text: "Você recebe o plano, o memorial e a ART em PDF, prontos para entregar ao síndico.",
  },
];

const pacotes = [
  {
    title: "Reforma Simples",
    subtitle: "100% online, sem visita",
    price: "R$ 350",
    prazo: "Entrega em até 48 horas úteis",
    nota: "",
    items: [
      "Troca de piso e revestimentos sobre o existente",
      "Pintura, forro de gesso e marcenaria",
      "Troca de louças, metais e bancadas",
      "Pontos elétricos simples, sem mexer no quadro",
    ],
    highlight: true,
  },
  {
    title: "Reforma com Vistoria",
    subtitle: "Inclui visita técnica ao imóvel",
    price: "R$ 650",
    prazo: "Prazo combinado após a visita",
    nota: "Visita presencial em Cáceres-MT e região. Em outras cidades, consulte a agenda; o deslocamento é orçado à parte.",
    items: [
      "Remoção ou abertura de paredes",
      "Alterações em instalações de gás ou hidráulica",
      "Mudança no quadro elétrico ou aumento de carga",
      "Qualquer intervenção que possa afetar a estrutura",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "Que documento é esse que o condomínio está pedindo?",
    answer:
      "Desde 2014, uma norma técnica (a ABNT NBR 16280) permite que o condomínio exija um documento antes de qualquer obra dentro do apartamento. Ele se chama Plano de Reforma e explica o que vai ser feito, como e por quem. Quando a obra mexe em paredes, elétrica, água ou gás, esse documento precisa ser assinado por engenheiro, com a ART (o registro no CREA).",
  },
  {
    question: "O engenheiro precisa ir até o apartamento?",
    answer:
      "Para reformas simples, não: fotos, medidas e planta bastam. Quando a obra mexe em paredes, estrutura, gás ou parte elétrica pesada, a vistoria no local é obrigatória e entra no pacote com vistoria.",
  },
  {
    question: "Vocês atendem em qual região?",
    answer:
      "Atendimento online para condomínios nos estados de São Paulo e Mato Grosso, onde o responsável técnico tem registro ativo no CREA (5071806455). A vistoria presencial é feita em Cáceres-MT e região; para outras cidades, consulte a disponibilidade de agenda — o deslocamento é orçado à parte.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Reforma Simples (100% online): R$ 350. Reforma com Vistoria: R$ 650. Os dois incluem Plano de Reforma, Memorial Descritivo e ART, com a taxa do CREA já inclusa — sem custo extra.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Reformas simples ficam prontas em até 48 horas úteis depois que você envia todas as informações e confirma o orçamento. Obras com vistoria dependem do agendamento da visita.",
  },
  {
    question: "E se o síndico pedir alguma alteração?",
    answer:
      "Os ajustes solicitados pelo condomínio dentro do mesmo escopo da obra estão incluídos, sem custo adicional.",
  },
  {
    question: "Posso usar o plano se eu mesmo contratar o pedreiro?",
    answer:
      "Sim. O plano identifica quem vai executar a obra. Você só precisa informar os dados do profissional ou da empresa contratada.",
  },
];

export function PlanoReforma() {
  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Plano de Reforma para Condomínio + ART | R$ 350, pronto em 48h"
        description="O condomínio pediu um documento de engenheiro para liberar sua reforma? Plano de Reforma + ART pela internet, a partir de R$ 350, pronto em até 48h úteis. SP e MT."
        keywords={[
          "documento para reforma de apartamento",
          "condomínio pediu engenheiro para reforma",
          "autorização de reforma condomínio",
          "plano de reforma NBR 16280",
          "plano de reforma apartamento",
          "ART para reforma de apartamento",
          "memorial descritivo reforma",
          "plano de reforma condomínio online",
          "engenheiro para plano de reforma",
          "plano de reforma Campinas",
          "plano de reforma São Paulo",
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Documento para reforma no condomínio", path: "/plano-de-reforma" },
        ])}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Plano de Reforma NBR 16280 + ART",
          serviceType: "Plano de Reforma conforme ABNT NBR 16280",
          description:
            "Plano de Reforma, Memorial Descritivo e ART para reforma de apartamento em condomínio, elaborados por engenheiro civil, com atendimento online.",
          areaServed: [
            { "@type": "State", name: "São Paulo" },
            { "@type": "State", name: "Mato Grosso" },
          ],
          provider: {
            "@type": "ProfessionalService",
            name: SITE.name,
            telephone: SITE.phoneE164,
          },
          url: `${SITE.url}/plano-de-reforma`,
          offers: [
            { "@type": "Offer", name: "Reforma Simples (online)", price: "350.00", priceCurrency: "BRL" },
            { "@type": "Offer", name: "Reforma com Vistoria", price: "650.00", priceCurrency: "BRL" },
          ],
        }}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-sm text-[#93a7c6]">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-[#B9F227]">Reforma no condomínio</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <Aurora className="opacity-40" />
        <div className="relative z-10 container-custom grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227]">
              <Building2 className="h-4 w-4" />
              Reforma de apartamento · Condomínio
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-tight text-white">
              Vai reformar e o condomínio pediu um documento de engenheiro?
              Eu resolvo pela internet.
            </h1>
            <p className="mt-5 text-lg text-[#b9c8e0] leading-relaxed max-w-2xl">
              Faço o documento que o síndico exige para liberar a sua obra
              (o Plano de Reforma), assinado por engenheiro civil com ART. Você
              manda fotos pelo WhatsApp e recebe tudo pronto para entregar no
              condomínio em até 48 horas úteis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WA_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
              >
                <Phone className="h-5 w-5" />
                Quero liberar minha reforma
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
              >
                Ver como funciona
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-[#93a7c6]">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              Atendimento online para condomínios em todo o estado de São
              Paulo e Mato Grosso.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-[#0A1428]/80 p-7 backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8ea3c2]">
              Você recebe
            </p>
            <ul className="mt-5 space-y-4">
              {entregaveis.map((e) => (
                <li key={e.title} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#B9F227]" />
                  <div>
                    <p className="font-semibold text-white">{e.title}</p>
                    <p className="text-sm text-[#b9c8e0]">{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 flex items-baseline gap-2">
              <span className="text-sm text-[#93a7c6]">a partir de</span>
              <span className="font-display text-3xl font-bold text-white">R$ 350</span>
            </p>
            <p className="mt-3 text-sm text-[#93a7c6]">
              Responsável técnico: Eng. Civil Nielson P. de Castilho Júnior ·
              CREA 5071806455
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom grid lg:grid-cols-[1fr_1.5fr] gap-10">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-semibold text-white"
          >
            Sem esse documento, o síndico pode barrar a obra.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={fadeUp}
            className="space-y-4 text-lg leading-relaxed text-[#b9c8e0]"
          >
            <p>
              Trocar piso, mexer na cozinha, no banheiro ou na parede: antes
              de começar, o condomínio pode exigir um documento explicando a
              obra. Quando a reforma mexe em paredes, elétrica, água ou gás,
              esse documento precisa ser assinado por engenheiro. É uma regra
              de segurança do prédio (norma NBR 16280).
            </p>
            <p>
              O problema é que achar um profissional que venha até o prédio,
              faça o documento rápido e cobre um preço justo costuma levar
              semanas. Enquanto isso, o pedreiro espera e a reforma fica parada.
            </p>
            <p className="font-semibold text-white">
              Aqui o processo é online, com preço fechado e prazo definido.
            </p>
            <Link
              to="/blog/plano-de-reforma-nbr-16280"
              className="inline-flex items-center gap-1 text-[#B9F227] hover:underline"
            >
              Entenda que documento é esse
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={fadeUp}
            className="max-w-2xl mb-10"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B9F227]">
              Como funciona
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-white">
              Três passos, tudo pelo celular.
            </h2>
          </motion.div>
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {passos.map((p, i) => (
              <motion.li
                key={p.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-[#B9F227]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p.icon className="h-6 w-6 text-[#8ea3c2]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[#b9c8e0] leading-relaxed">{p.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Pacotes */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={fadeUp}
            className="max-w-2xl mb-10"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B9F227]">
              Pacotes
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-white">
              Escolha conforme o tamanho da obra.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {pacotes.map((p) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                variants={fadeUp}
                className={`flex flex-col rounded-2xl border p-7 ${
                  p.highlight
                    ? "border-[#B9F227]/40 bg-[#B9F227]/[0.05]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="font-display text-2xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[#8ea3c2]">{p.subtitle}</p>
                <p className="mt-5 font-display text-4xl font-bold text-white">
                  {p.price}
                </p>
                <p className="text-sm text-[#b9c8e0]">
                  Plano + Memorial + ART (taxa inclusa) · {p.prazo}
                </p>
                {p.nota && (
                  <p className="mt-2 text-xs text-[#8ea3c2]">{p.nota}</p>
                )}
                <ul className="mt-6 mb-8 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[#cbd7e8]">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#B9F227]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(
                    `Olá! Quero um orçamento do pacote "${p.title}" para liberar a reforma do meu apartamento no condomínio.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-colors ${
                    p.highlight
                      ? "bg-[#25D366] text-white hover:bg-[#1EBE5A]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Pedir orçamento
                </a>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 flex gap-2 text-[#93a7c6]">
            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#B9F227]" />
            Não sabe em qual se encaixa? Mande a descrição da obra que eu
            indico o pacote certo antes de você pagar qualquer coisa. Remoção de
            parede e mudanças em estrutura nunca são assinadas só por foto.
          </p>
        </div>
      </section>

      {/* Síndicos */}
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#0A1428]">
        <div className="container-custom flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#B9F227]">
              <ClipboardList className="h-4 w-4" />
              Para síndicos e administradoras
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-white">
              Indique um engenheiro de confiança para os moradores.
            </h2>
            <p className="mt-4 text-lg text-[#b9c8e0] leading-relaxed">
              Planos de reforma padronizados, no mesmo formato, com prazo curto
              e documentação completa. Menos papelada para conferir e menos
              obra irregular no prédio.
            </p>
          </div>
          <a
            href={WA_SINDICO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex flex-shrink-0 items-center justify-center gap-2"
          >
            Quero ser condomínio parceiro
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
            Perguntas frequentes
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {f.question}
                  <span className="text-[#B9F227] transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#b9c8e0] leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-3xl font-semibold text-white">
              Tire suas dúvidas antes de reformar
            </h2>
            <Link to="/blog" className="inline-flex items-center gap-1 text-[#B9F227] hover:underline">
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#B9F227]/40"
              >
                <p className="font-display text-lg font-semibold text-white">{p.cardTitle}</p>
                <p className="mt-2 text-sm text-[#b9c8e0]">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl md:text-4xl font-semibold text-white">
            Sua reforma não precisa ficar parada esperando papel.
          </h2>
          <a
            href={WA_PEDIDO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
          >
            <Phone className="h-5 w-5" />
            Chamar no WhatsApp
          </a>
          <p className="mt-3 text-[#93a7c6]">{SITE.phoneDisplay}</p>
        </div>
      </section>
    </div>
  );
}
