import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, ArrowRight, Home, FileCheck, Hammer, Maximize2, ClipboardCheck } from 'lucide-react';
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

export function CityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || '');

  if (!city) {
    return <Navigate to="/cidades" replace />;
  }

  return (
    <div className="bg-[#000000] text-white">
      <SEO
        title={`Engenheiro Civil em ${city.name} - ${city.state}`}
        description={`Engenheiro Civil em ${city.name}. Serviços de regularização, ART, reformas e laudos técnicos. Projeto, obra, regularização e laudo com visita ao local.`}
        keywords={[
          `engenheiro civil ${city.name}`,
          `regularização ${city.name}`,
          `ART ${city.name}`,
          `projetos ${city.name}`,
          'engenheiro civil perto'
        ]}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-4 bg-[#0B0C0F] border-b border-white/10">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-[#A7ABB2]">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link to="/cidades" className="hover:text-white transition-colors">Cidades</Link>
            <span>/</span>
            <span className="text-[#F28A2E]">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={false}
            className="hero-in"
          >
            <Link
              to="/cidades"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Cidades
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#F28A2E]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-10 h-10 text-[#F28A2E]" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                  Engenheiro Civil em {city.name}
                </h1>
                <p className="text-white/70 text-lg">Mato Grosso</p>
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
      <section className="section-padding bg-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              O que eu faço em {city.name}
            </h2>
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
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-[#F28A2E]/40 hover:bg-[#F28A2E]/[0.05]"
                >
                  <div className="w-14 h-14 bg-[#F28A2E]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-[#F28A2E]" />
                  </div>
                  <h3 className="font-semibold text-white">
                    {service.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
