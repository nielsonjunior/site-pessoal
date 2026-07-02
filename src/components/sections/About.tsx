import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Credenciais reais (sem números inventados — o dono está começando).
const stats = [
  { value: 'CREA', label: 'Registrado', icon: Award },
  { value: '+12', label: 'Cidades', icon: Building2 },
  { value: '24h', label: 'Resposta', icon: Users },
];

const differentials = [
  'Engenheiro Civil - CREA 5071806455',
  'Atendimento em Cáceres e região',
  'Atendimento personalizado e humanizado',
  'Orçamento sem compromisso',
  'Prazos rigorosamente cumpridos',
  'Garantia em todos os serviços',
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-[#060D1E] text-white section-padding" id="sobre">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about-engineer.jpg"
                  alt="Engenheiro civil acompanhando obra em Cáceres-MT"
                  className="w-full h-[500px] object-cover"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Decorative Border (só desktop — no mobile ficava pra fora/torta) */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full border-4 border-[#B9F227]/60 rounded-2xl -z-10" />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 left-4 right-4 sm:left-6 sm:right-6 rounded-xl border border-white/10 bg-[#0A1428]/95 backdrop-blur-sm p-4 sm:p-6 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#B9F227]/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B9F227]" />
                      </div>
                      <p className="font-display text-lg sm:text-2xl font-bold text-white leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#93a7c6] leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 lg:mt-0"
          >
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
              Sobre Mim
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              Nielson Pinheiro de Castilho Junior
            </h2>

            <div className="space-y-4 text-[#b9c8e0] mb-8">
              <p>
                Sou Nielson Pinheiro de Castilho Junior, Engenheiro Civil em Cáceres e região.
                Ofereço soluções completas em engenharia civil, desde regularização de imóveis
                até projetos de reforma e ampliação.
              </p>
              <p>
                Minha missão é proporcionar segurança, qualidade e inovação em cada projeto,
                sempre respeitando normas técnicas e prazos estabelecidos. Trabalho com
                transparência e ética, construindo relacionamentos duradouros com meus clientes.
              </p>
            </div>

            {/* Differentials */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#cbd7e8]">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
            >
              Conheça Minha História
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
