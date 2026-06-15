import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { cities } from '@/data';

const benefits = [
  'Atendimento rápido em Cáceres e região',
  'Conhecimento das legislações locais',
  'Atendimento personalizado',
  'Orçamento sem compromisso',
  'Garantia em todos os serviços',
];

export function Cities() {
  return (
    <>
      <SEO
        title="Cidades Atendidas - Engenheiro Civil Cáceres e Região"
        description="Atendemos em Cáceres, Cuiaba, Mirassol D'Oeste, Várzea Grande, Porto Esperidião e toda a região. Engenheiro civil perto de você!"
        keywords={[
          'engenheiro civil Cáceres',
          'engenheiro civil Cuiaba',
          'engenheiro civil Varzea Grande',
          'engenheiro civil região Cáceres'
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
              Onde Atuamos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cidades Atendidas
            </h1>
            <p className="text-white/70 text-lg">
              Oferecemos serviços de engenharia civil em Cáceres e toda a região 
              metropolitana, sempre com qualidade e compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/cidades/${city.slug}`}
                  className="group block bg-gray-50 rounded-2xl p-6 hover:bg-[#1B3B6C] transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-7 h-7 text-[#1B3B6C] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F1A2E] group-hover:text-white transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors">
                    {city.state}
                  </p>
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
              <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Por Que Escolher
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Atendimento Local com Qualidade Garantida
              </h2>
              <p className="text-gray-600 mb-8">
               Nossa atuação em Cáceres-MT e região nos permite oferecer um atendimento próximo, personalizado e eficiente, com conhecimento das características locais, necessidades dos clientes e particularidades técnicas de cada projeto.
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
                  Não encontrou sua cidade?
                </h3>
                <p className="text-white/80 mb-6">
                  Atendemos em Cáceres e toda a região metropolitana. 
                  Entre em contato para verificar disponibilidade na sua região.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+5565996946861"
                    className="flex items-center gap-3 text-white hover:text-[#F4C430] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (65) 99694-6861
                  </a>
                  <Link
                    to="/orcamento"
                    className="btn-accent w-full inline-flex items-center justify-center gap-2"
                  >
                    Entre em Contato
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#F4C430] to-[#E5B520]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Engenheiro Civil em Cáceres
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Atendemos em Cáceres e toda a região metropolitana. Solicite um orçamento 
              e descubra como posso ajudar no seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="bg-[#0F1A2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1B3B6C] transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
