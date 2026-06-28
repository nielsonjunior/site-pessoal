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
    <>
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluções Completas em Engenharia Civil
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Oferecemos uma gama completa de serviços de engenharia civil, 
              desde a regularização de imóveis até projetos complexos de construção.
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
      <section className="section-padding bg-white">
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
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-[#1B3B6C] to-[#2C4F8C] flex items-center justify-center">
                      <Icon className="w-20 h-20 text-white/30" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-xl font-bold text-[#0F1A2E] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {service.shortDescription}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="inline-flex items-center gap-2 text-[#1B3B6C] font-medium hover:gap-3 transition-all"
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
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Por Que Nos Escolher
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Excelência Técnica e Compromisso com Resultados
              </h2>
              <p className="text-gray-600 mb-8">
                Nossa equipe de engenheiros civis altamente qualificados está preparada 
                para atender às suas necessidades com profissionalismo e dedicação.
              </p>

              <div className="space-y-4">
                {[
                  'Engenheiros registrados no CREA',
                  'Mais de 10 anos de experiência',
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
                    <div className="w-8 h-8 bg-[#1B3B6C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
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
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0F1A2E] mb-6">
                  Em Breve
                </h3>
                <p className="text-gray-600 mb-6">
                  Estamos expandindo nossos serviços para atender ainda melhor nossos clientes:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {futureServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#F4C430] rounded-full" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de um Serviço Específico?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar com seu projeto. 
              Oferecemos soluções personalizadas para cada necessidade.
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
    </>
  );
}
