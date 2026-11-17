import { Link } from 'react-router-dom';
import { FileCheck, Home, Hammer, Maximize2, ClipboardCheck, Users, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { services } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Home,
  Hammer,
  Maximize2,
  ClipboardCheck,
  Users,
};

export function Services() {
  return (
    <div className="bg-[#000000] text-white">
      <SEO
        title="Serviços de Engenharia Civil - ART, Regularização, Reformas"
        description="Construção, reforma, ampliação, regularização de imóveis, laudos e ART com engenheiro civil em Cáceres-MT."
        keywords={[
          'serviços engenharia civil',
          'ART',
          'regularização imóveis',
          'projetos reforma',
          'laudos técnicos',
          'consultoria engenharia'
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={false}
            className="hero-in text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Serviços de engenharia civil
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Construção, reforma, ampliação, papéis do imóvel, laudos e ART.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#000000]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || FileCheck;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#F28A2E]/40">
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-[#1A1D22] to-[#1A1D22] flex items-center justify-center">
                      <Icon className="w-20 h-20 text-[#F28A2E]/25" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="font-display text-xl font-bold text-white mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[#A7ABB2] text-sm mb-4 flex-grow">
                        {service.shortDescription}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#A7ABB2]">
                            <CheckCircle className="w-4 h-4 text-[#F28A2E] flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="inline-flex items-center gap-2 text-[#F28A2E] font-medium hover:gap-3 transition-all"
                      >
                        Saiba mais
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Não achou o que precisa
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Me conte pelo WhatsApp. Se for trabalho de engenheiro civil, eu
              resolvo ou te digo quem resolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
