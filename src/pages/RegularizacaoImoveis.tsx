import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Phone,
  Ban,
  Landmark,
  Users,
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
} from "lucide-react";
import { SEO, JsonLd } from "@/components/shared";
import { RegularizacaoDiagnostico } from "@/components/sections/RegularizacaoDiagnostico";
import { SITE } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { regularizationTypes, VALORIZATION_MAX } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
};

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export function RegularizacaoImoveis() {
  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Regularização de Imóveis em Cáceres-MT — Desdobro, Usucapião e mais"
        description={`Imóvel sem documentação te trava e te faz perder dinheiro. Regularize (desdobro, remembramento, usucapião, retificação, condomínio) e valorize seu bem em até ${VALORIZATION_MAX}. Fale com um engenheiro registrado no CREA.`}
        keywords={[
          "regularização de imóveis Cáceres",
          "desdobro de lote",
          "usucapião Cáceres",
          "retificação de área",
          "instituição de condomínio",
          "regularizar terreno MT",
        ]}
      />
      <JsonLd
        data={serviceSchema({
          name: "Regularização de Imóveis",
          description:
            "Regularização de imóveis em Cáceres-MT: desdobro, remembramento, usucapião, unificação, retificação e instituição de condomínio.",
          path: "/servicos/regularizacao-imoveis",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: "Regularização de Imóveis", path: "/servicos/regularizacao-imoveis" },
        ])}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-4 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-[#93a7c6]">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-white transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-[#B9F227]">Regularização de Imóveis</span>
          </nav>
        </div>
      </div>

      {/* Hero / Dor principal */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-[#B9F227]/15 text-[#B9F227] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Valorize seu imóvel em até {VALORIZATION_MAX}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Regularização de Imóveis em Cáceres-MT
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Um imóvel sem documentação em dia não pode ser vendido, financiado
              nem herdado com segurança — e ainda vale menos do que deveria.
              Coloco seu patrimônio em ordem, do levantamento à matrícula nova.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={wa(
                  "Olá! Quero regularizar meu imóvel em Cáceres. Pode me ajudar?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center justify-center gap-2 text-lg"
              >
                Quero regularizar meu imóvel
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/orcamento"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar orçamento
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por que isso te custa caro */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Um imóvel irregular te custa caro
            </h2>
            <p className="text-[#b9c8e0]">
              Talvez você nem perceba, mas a falta de papelada limita o que você
              pode fazer com o que é seu.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Ban,
                title: "Não consegue vender",
                text: "Comprador foge e o negócio trava quando o documento não está regular ou não bate com a realidade.",
              },
              {
                icon: Landmark,
                title: "Banco não financia",
                text: "Sem matrícula correta, o imóvel não serve de garantia e o financiamento é negado.",
              },
              {
                icon: Users,
                title: "Problema na herança",
                text: "Imóvel irregular vira dor de cabeça (e briga) na hora de passar para os filhos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-12 h-12 bg-red-500/15 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#93a7c6] text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de valorização */}
      <section className="py-12 bg-[#0A1428]">
        <div className="container-custom">
          <div className="rounded-3xl border border-[#B9F227]/25 bg-[#060D1E] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_60px_-20px_rgba(185,242,39,.35)]">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <TrendingUp className="w-12 h-12 text-[#B9F227] flex-shrink-0" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-white">
                  Imóvel regularizado{" "}
                  <span className="text-[#B9F227]">valoriza até {VALORIZATION_MAX}</span>
                </p>
                <p className="text-[#b9c8e0]">
                  Documentação em dia transforma seu imóvel em patrimônio que rende.
                </p>
              </div>
            </div>
            <a
              href={wa("Olá! Quero saber quanto meu imóvel pode valorizar com a regularização.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#B9F227] px-7 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
            >
              Falar com o engenheiro
            </a>
          </div>
        </div>
      </section>

      {/* Os tipos */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Qual é a sua situação?
            </h2>
            <p className="text-[#b9c8e0]">
              Encontre abaixo o seu caso. Cada situação tem solução — e eu cuido
              de tudo, do projeto à documentação final.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regularizationTypes.map((t, i) => {
              const Icon = iconMap[t.icon] || Scissors;
              return (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#B9F227]/40"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#B9F227]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#B9F227]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">
                        {t.title}
                      </h3>
                      <p className="text-sm text-[#93a7c6]">{t.leigoTitle}</p>
                    </div>
                  </div>

                  <p className="font-medium text-[#B9F227] mb-3">{t.painHook}</p>

                  <ul className="space-y-2 mb-4">
                    {t.symptoms.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#b9c8e0]">
                        <CheckCircle className="w-4 h-4 text-[#B9F227] flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-[#93a7c6] mb-5 mt-auto">{t.benefit}</p>

                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/servicos/regularizacao-imoveis/${t.slug}`}
                      className="inline-flex items-center justify-center gap-1 w-full border border-white/15 bg-white/5 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={wa(
                        `Olá! Tenho interesse em ${t.title.toLowerCase()}. ${t.painHook}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#1EBE5A] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Resolver meu caso
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini-diagnóstico interativo */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <RegularizacaoDiagnostico />
        </div>
      </section>
    </div>
  );
}
