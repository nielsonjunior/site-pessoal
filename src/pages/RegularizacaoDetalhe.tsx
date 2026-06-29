import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Phone,
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
} from "lucide-react";
import { SEO, JsonLd } from "@/components/shared";
import { SITE } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import {
  getRegularizationBySlug,
  regularizationTypes,
  VALORIZATION_MAX,
} from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
};

const PILLAR = "/servicos/regularizacao-imoveis";

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export function RegularizacaoDetalhe() {
  const { tipo } = useParams<{ tipo: string }>();
  const item = getRegularizationBySlug(tipo || "");

  if (!item) {
    return <Navigate to={PILLAR} replace />;
  }

  const Icon = iconMap[item.icon] || Scissors;
  const others = regularizationTypes.filter((t) => t.id !== item.id);

  return (
    <>
      <SEO
        title={`${item.title} em Cáceres-MT`}
        description={`${item.painHook} ${item.benefit} Engenheiro registrado no CREA — fale no WhatsApp.`}
        keywords={item.keywords}
      />
      <JsonLd
        data={serviceSchema({
          name: item.title,
          description: item.whatIsIt,
          path: `${PILLAR}/${item.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: "Regularização", path: PILLAR },
          { name: item.title, path: `${PILLAR}/${item.slug}` },
        ])}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1B3B6C] transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-[#1B3B6C] transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <Link to={PILLAR} className="hover:text-[#1B3B6C] transition-colors">
              Regularização
            </Link>
            <span>/</span>
            <span className="text-[#1B3B6C]">{item.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero / Dor */}
      <section className="py-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <Link
            to={PILLAR}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Regularização
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-[#F4C430]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {item.title} em Cáceres-MT
            </h1>
            <p className="text-[#F4C430] text-lg md:text-xl font-medium mb-4">
              {item.painHook}
            </p>
            <p className="text-white/80 text-lg mb-8">{item.leigoTitle}.</p>
            <a
              href={wa(`Olá! Tenho interesse em ${item.title.toLowerCase()}. ${item.painHook}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center justify-center gap-2 text-lg"
            >
              Resolver meu caso no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo PASPA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Você se identifica? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#0F1A2E] mb-6">
                  Você se identifica?
                </h2>
                <div className="grid sm:grid-cols-1 gap-3">
                  {item.symptoms.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* O que é */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">
                  O que é {item.title.toLowerCase()}?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.whatIsIt}
                </p>
              </motion.div>

              {/* Se não resolver */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-50 border border-red-100 rounded-2xl p-6"
              >
                <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F1A2E] mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  O que acontece se você não resolver
                </h2>
                <p className="text-gray-700 leading-relaxed">{item.ifNotResolved}</p>
              </motion.div>

              {/* Como eu resolvo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#0F1A2E] mb-6">
                  Como eu resolvo, passo a passo
                </h2>
                <ol className="space-y-4">
                  {item.howWeSolve.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-[#1B3B6C] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Valorização */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F4C430] rounded-2xl p-6 flex items-start gap-4"
              >
                <TrendingUp className="w-8 h-8 text-[#0F1A2E] flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-[#0F1A2E] mb-1">
                    Valorize seu imóvel em até {VALORIZATION_MAX}
                  </p>
                  <p className="text-[#0F1A2E]/80">{item.benefit}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA */}
                <div className="bg-[#1B3B6C] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Fale com o engenheiro
                  </h3>
                  <p className="text-white/70 text-sm mb-6">
                    Me conte sua situação (ou mande uma foto da escritura) que eu
                    te digo, sem compromisso, o que dá para fazer.
                  </p>
                  <a
                    href={wa(`Olá! Quero ajuda com ${item.title.toLowerCase()} do meu imóvel.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors w-full inline-flex items-center justify-center gap-2 mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    Chamar no WhatsApp
                  </a>
                  <Link
                    to="/orcamento"
                    className="btn-accent w-full inline-flex items-center justify-center gap-2"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>

                {/* Outros tipos */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#0F1A2E] mb-4">
                    Outros tipos de regularização
                  </h3>
                  <div className="space-y-2">
                    {others.map((o) => {
                      const OIcon = iconMap[o.icon] || Scissors;
                      return (
                        <Link
                          key={o.id}
                          to={`${PILLAR}/${o.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-9 h-9 bg-[#1B3B6C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <OIcon className="w-4 h-4 text-[#1B3B6C]" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {o.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
