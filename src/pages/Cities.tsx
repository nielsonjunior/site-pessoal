import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { cities } from '@/data';

export function Cities() {
  return (
    <div className="bg-[#000000] text-white">
      <SEO
        title="Cidades Atendidas - Engenheiro Civil Cáceres e Região"
        description="Engenheiro civil em Cáceres, Mirassol d'Oeste, Araputanga, Barra do Bugres, Pontes e Lacerda e outras cidades do oeste de Mato Grosso."
        keywords={[
          'engenheiro civil Cáceres',
          'engenheiro civil Mirassol d\'Oeste',
          'engenheiro civil região Cáceres',
          'engenharia civil Cáceres MT'
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
              Cidades Atendidas
            </h1>
            <p className="text-white/70 text-lg">
              Cáceres e mais 11 cidades, sempre com visita ao local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-[#000000]">
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
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#F28A2E]/40 hover:bg-[#F28A2E]/[0.05]"
                >
                  <div className="w-14 h-14 bg-[#F28A2E]/15 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-[#F28A2E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-[#A7ABB2]">
                    {city.state}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0B0C0F]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            A sua cidade não está na lista
          </h2>
          <p className="text-[#C9CCD2] mb-8">
            Me chame no WhatsApp e conte onde é. Dependendo do serviço e da distância, eu vou até aí.
          </p>
          <a
            href={`https://wa.me/5565996946861?text=${encodeURIComponent("Olá! Você atende na minha cidade?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
          >
            <Phone className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
