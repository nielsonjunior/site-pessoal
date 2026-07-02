import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cities } from '@/data';

export function Cities() {
  return (
    <section className="section-padding bg-white" id="cidades">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Onde Atuamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1A2E] mb-6">
            Cidades Atendidas em{' '}
            <span className="text-[#1B3B6C]">Cáceres e Região</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ofereço serviços de engenharia civil em Cáceres e diversas cidades 
            da região metropolitana, sempre com qualidade e compromisso.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              /* No celular mostramos só as 3 primeiras; o resto aparece a partir
                 do breakpoint sm. O botão "Ver Todas" leva à lista completa. */
              className={index >= 3 ? "hidden sm:block" : ""}
            >
              <Link
                to={`/cidades/${city.slug}`}
                className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#1B3B6C] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#1B3B6C]/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#1B3B6C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#0F1A2E] group-hover:text-white transition-colors">
                    {city.name}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                    {city.state}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/cidades"
            className="inline-flex items-center gap-2 text-[#1B3B6C] font-medium hover:gap-3 transition-all"
          >
            Ver Todas as Cidades
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Service Area Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#F8F9FA] rounded-2xl p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0F1A2E] mb-4">
                Não encontrou sua cidade?
              </h3>
              <p className="text-gray-600 mb-6">
                Atendo em Cáceres e toda a região metropolitana. 
                Entre em contato para verificar disponibilidade de 
                atendimento na sua cidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Entre em Contato
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/5565996946861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1B3B6C] border-2 border-[#1B3B6C] px-6 py-3 rounded-lg font-medium hover:bg-[#1B3B6C] hover:text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <img
                src="/images/map-caceres.jpg"
                alt="Área de atendimento em engenharia civil - Cáceres-MT e 12 cidades da região"
                className="w-full h-auto rounded-xl shadow-sm"
                width={1000}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
