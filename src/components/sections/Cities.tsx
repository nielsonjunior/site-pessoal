import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cities } from '@/data';

export function Cities() {
  return (
    <section className="relative overflow-hidden bg-[#0A1428] text-white section-padding" id="cidades">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
            Onde Atuamos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Cidades Atendidas em{' '}
            <span className="text-[#B9F227]">Cáceres e Região</span>
          </h2>
          <p className="text-[#b9c8e0] text-lg">
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
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#B9F227]/40 hover:bg-[#B9F227]/[0.05]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#B9F227]/15">
                  <MapPin className="h-5 w-5 text-[#B9F227]" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {city.name}
                  </p>
                  <p className="text-xs text-[#93a7c6]">
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
            className="inline-flex items-center gap-2 text-[#B9F227] font-medium hover:gap-3 transition-all"
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
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Não encontrou sua cidade?
              </h3>
              <p className="text-[#b9c8e0] mb-6">
                Atendo em Cáceres e toda a região metropolitana.
                Entre em contato para verificar disponibilidade de
                atendimento na sua cidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#B9F227] px-6 py-3 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
                >
                  Entre em Contato
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/5565996946861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
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
