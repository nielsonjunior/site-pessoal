import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, ArrowRight, CheckCircle, Home, FileCheck, Hammer, Maximize2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { getCityBySlug } from '@/data';

const services = [
  { name: 'ART', icon: FileCheck, slug: 'art-anotacao-responsabilidade-tecnica' },
  { name: 'Regularização', icon: Home, slug: 'regularizacao-imoveis' },
  { name: 'Reformas', icon: Hammer, slug: 'projetos-reforma' },
  { name: 'Ampliação', icon: Maximize2, slug: 'ampliacao-imoveis' },
  { name: 'Laudos', icon: ClipboardCheck, slug: 'laudos-tecnicos' },
];

const benefits = [
  'Atendimento rápido na região',
  'Conhecimento da legislação local',
  'Orçamento sem compromisso',
  'Garantia em todos os serviços',
  'Engenheiro civil registrado CREA',
];

export function CityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || '');

  if (!city) {
    return <Navigate to="/cidades" replace />;
  }

  return (
    <>
      <SEO
        title={`Engenheiro Civil em ${city.name} - ${city.state}`}
        description={`Engenheiro Civil em ${city.name}. Serviços de regularização, ART, reformas e laudos técnicos. Orçamento grátis! Atendimento 24h.`}
        keywords={[
          `engenheiro civil ${city.name}`,
          `regularização ${city.name}`,
          `ART ${city.name}`,
          `projetos ${city.name}`,
          'engenheiro civil perto'
        ]}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1B3B6C] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/cidades" className="hover:text-[#1B3B6C] transition-colors">Cidades</Link>
            <span>/</span>
            <span className="text-[#1B3B6C]">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/cidades"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Cidades
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-10 h-10 text-[#F4C430]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Engenheiro Civil em {city.name}
                </h1>
                <p className="text-white/70 text-lg">
                  {city.state} • Atendimento em toda a região
                </p>
              </div>
            </div>

            <p className="text-white/70 text-lg max-w-3xl mb-8">
              {city.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Serviços em {city.name}
            </h2>
            <p className="text-gray-600">
              Oferecemos todos os nossos serviços de engenharia civil em {city.name}, 
              com atendimento personalizado e qualidade garantida.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/servicos/${service.slug}`}
                  className="group block bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#1B3B6C] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#1B3B6C] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#0F1A2E] group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Por Que Contratar em {city.name}?
              </h2>
              <p className="text-gray-600 mb-8">
                Nosso atendimento em {city.name} oferece todas as vantagens de um 
                serviço local com a qualidade e experiência de uma empresa consolidada 
                no mercado da engenharia civil.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
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
              <div className="bg-[#1B3B6C] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-white/80 mb-6">
                  Entre em contato agora e receba uma proposta personalizada 
                  para seu projeto em {city.name}.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/orcamento"
                    className="btn-accent w-full inline-flex items-center justify-center gap-2"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="https://wa.me/5565996946861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all w-full inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {city.neighborhoods && city.neighborhoods.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0F1A2E] mb-8 text-center">
                Bairros Atendidos em {city.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {city.neighborhoods.map((neighborhood, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              Engenheiro Civil em <span className="text-[#F4C430]">{city.name}</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Não perca tempo. Solicite um orçamento agora mesmo e transforme
              seu projeto em realidade com a ajuda de um profissional qualificado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+5565996946861"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
