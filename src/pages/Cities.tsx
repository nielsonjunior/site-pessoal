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
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Cidades Atendidas - Engenheiro Civil Cáceres e Região"
        description="Atendo em Cáceres, Mirassol d'Oeste, Araputanga, Barra do Bugres, Porto Esperidião e toda a região. Engenheiro civil perto de você!"
        keywords={[
          'engenheiro civil Cáceres',
          'engenheiro civil Mirassol d\'Oeste',
          'engenheiro civil região Cáceres',
          'engenharia civil Cáceres MT'
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
              Onde Atuo
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cidades Atendidas
            </h1>
            <p className="text-white/70 text-lg">
              Ofereço serviços de engenharia civil em Cáceres e toda a região
              metropolitana, sempre com qualidade e compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-[#060D1E]">
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
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#B9F227]/40 hover:bg-[#B9F227]/[0.05]"
                >
                  <div className="w-14 h-14 bg-[#B9F227]/15 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-[#B9F227]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-[#93a7c6]">
                    {city.state}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Por Que Escolher
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Atendimento Local com Qualidade Garantida
              </h2>
              <p className="text-[#b9c8e0] mb-8">
                Atuar em Cáceres-MT e região me permite oferecer um atendimento próximo,
                personalizado e eficiente, com conhecimento das características locais,
                das necessidades dos clientes e das particularidades técnicas de cada projeto.
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
                    <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0" />
                    <span className="text-[#cbd7e8]">{benefit}</span>
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
              <div className="rounded-2xl border border-white/10 bg-[#060D1E] p-8 text-white">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Não encontrou sua cidade?
                </h3>
                <p className="text-[#b9c8e0] mb-6">
                  Atendo em Cáceres e toda a região metropolitana.
                  Entre em contato para verificar disponibilidade na sua região.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#B9F227] transition-colors"
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
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Engenheiro Civil em Cáceres
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Atendo em Cáceres e toda a região metropolitana. Solicite um orçamento
              e descubra como posso ajudar no seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-8 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
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
