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
    <>
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
      <div className="pt-32 pb-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1B3B6C] transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-[#1B3B6C] transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-[#1B3B6C]">Regularização de Imóveis</span>
          </nav>
        </div>
      </div>

      {/* Hero / Dor principal */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Valorize seu imóvel em até {VALORIZATION_MAX}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0F1A2E] mb-4">
              Um imóvel irregular te custa caro
            </h2>
            <p className="text-gray-600">
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
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-lg text-[#0F1A2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de valorização */}
      <section className="py-12 bg-[#0F1A2E]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <TrendingUp className="w-12 h-12 text-[#F4C430] flex-shrink-0" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Imóvel regularizado{" "}
                  <span className="text-[#F4C430]">valoriza até {VALORIZATION_MAX}</span>
                </p>
                <p className="text-white/70">
                  Documentação em dia transforma seu imóvel em patrimônio que rende.
                </p>
              </div>
            </div>
            <a
              href={wa("Olá! Quero saber quanto meu imóvel pode valorizar com a regularização.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent whitespace-nowrap"
            >
              Falar com o engenheiro
            </a>
          </div>
        </div>
      </section>

      {/* Os 6 tipos */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0F1A2E] mb-4">
              Qual é a sua situação?
            </h2>
            <p className="text-gray-600">
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
                  className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#1B3B6C]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0F1A2E] leading-tight">
                        {t.title}
                      </h3>
                      <p className="text-sm text-gray-500">{t.leigoTitle}</p>
                    </div>
                  </div>

                  <p className="font-medium text-[#1B3B6C] mb-3">{t.painHook}</p>

                  <ul className="space-y-2 mb-4">
                    {t.symptoms.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-600 mb-5 mt-auto">{t.benefit}</p>

                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/servicos/regularizacao-imoveis/${t.slug}`}
                      className="inline-flex items-center justify-center gap-1 w-full border-2 border-[#1B3B6C] text-[#1B3B6C] px-4 py-2.5 rounded-lg font-medium hover:bg-[#1B3B6C] hover:text-white transition-colors"
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
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RegularizacaoDiagnostico />
        </div>
      </section>
    </>
  );
}
