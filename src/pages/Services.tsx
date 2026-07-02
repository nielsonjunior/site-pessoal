import { Link } from 'react-router-dom';
import { FileCheck, Home, Hammer, Maximize2, ClipboardCheck, Users, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { services, futureServices } from '@/data';

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
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Serviços de Engenharia Civil - ART, Regularização, Reformas"
        description="Serviços completos de engenharia civil: ART, regularização de imóveis, projetos de reforma, ampliação, laudos técnicos e consultoria. Solicite orçamento!"
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
              Nossos Serviços
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluções Completas em Engenharia Civil
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Ofereço uma gama completa de serviços de engenharia civil,
              desde a regularização de imóveis até projetos de construção.
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
      <section className="section-padding bg-[#060D1E]">
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
                  <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#B9F227]/40">
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-[#12294A] to-[#1B3B6C] flex items-center justify-center">
                      <Icon className="w-20 h-20 text-[#B9F227]/25" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="font-display text-xl font-bold text-white mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[#93a7c6] text-sm mb-4 flex-grow">
                        {service.shortDescription}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#93a7c6]">
                            <CheckCircle className="w-4 h-4 text-[#B9F227] flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="inline-flex items-center gap-2 text-[#B9F227] font-medium hover:gap-3 transition-all"
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

      {/* Why Choose Us */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
                Por Que Me Escolher
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Excelência Técnica e Compromisso com Resultados
              </h2>
              <p className="text-[#b9c8e0] mb-8">
                Sou engenheiro civil registrado no CREA e atendo você diretamente,
                com responsabilidade técnica (ART) e compromisso em cada projeto.
              </p>

              <div className="space-y-4">
                {[
                  'Engenheiro registrado no CREA (5071806455)',
                  'Atendimento direto com o engenheiro',
                  'Atendimento personalizado',
                  'Orçamento sem compromisso',
                  'Garantia em todos os serviços',
                  'Prazos rigorosamente cumpridos',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-[#B9F227]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#B9F227]" />
                    </div>
                    <span className="text-[#cbd7e8]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Em Breve
                </h3>
                <p className="text-[#b9c8e0] mb-6">
                  Estou expandindo os serviços para atender ainda melhor você:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {futureServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/[0.04]"
                    >
                      <div className="w-2 h-2 bg-[#B9F227] rounded-full" />
                      <span className="text-sm text-[#cbd7e8]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de um Serviço Específico?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como posso ajudar com seu projeto.
              Ofereço soluções personalizadas para cada necessidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/orcamento"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
