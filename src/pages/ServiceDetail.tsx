import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, ArrowRight, FileCheck, Home, Hammer, Maximize2, ClipboardCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO, JsonLd } from '@/components/shared';
import { breadcrumbSchema, serviceSchema } from '@/lib/jsonld';
import { getServiceBySlug, services } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Home,
  Hammer,
  Maximize2,
  ClipboardCheck,
  Users,
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const Icon = iconMap[service.icon] || FileCheck;
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
      />
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.metaDescription,
          path: `/servicos/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: 'Serviços', path: '/servicos' },
          { name: service.title, path: `/servicos/${service.slug}` },
        ])}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1B3B6C] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-[#1B3B6C] transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-[#1B3B6C]">{service.title}</span>
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
              to="/servicos"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Serviços
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-[#F4C430]" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-white/70 text-lg mb-8">
                  {service.shortDescription}
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
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-[#2C4F8C] to-[#1B3B6C] rounded-2xl flex items-center justify-center">
                  <Icon className="w-32 h-32 text-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#0F1A2E] mb-6">
                  Sobre o Serviço
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#0F1A2E] mb-6">
                  Benefícios
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                {/* CTA Card */}
                <div className="bg-[#1B3B6C] rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Solicite um Orçamento
                  </h3>
                  <p className="text-white/70 text-sm mb-6">
                    Entre em contato agora e receba um orçamento personalizado para seu projeto.
                  </p>
                  <Link
                    to="/orcamento"
                    className="btn-accent w-full inline-flex items-center justify-center gap-2 mb-3"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/5565996946861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white border border-white/20 px-4 py-3 rounded-lg font-medium hover:bg-white/20 transition-all w-full inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#0F1A2E] mb-4">
                    Outros Serviços
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((otherService) => (
                      <Link
                        key={otherService.id}
                        to={`/servicos/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-[#1B3B6C]/10 rounded-lg flex items-center justify-center">
                          {(() => {
                            const OtherIcon = iconMap[otherService.icon] || FileCheck;
                            return <OtherIcon className="w-5 h-5 text-[#1B3B6C]" />;
                          })()}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {otherService.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#0F1A2E] mb-6">
              Dúvidas sobre {service.title}?
            </h2>
            <p className="text-gray-600 mb-8">
              Confira nossa página de perguntas frequentes ou entre em contato 
              para tirar todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/faq"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Ver FAQ
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/orcamento"
                className="bg-white text-[#1B3B6C] border-2 border-[#1B3B6C] px-6 py-3 rounded-lg font-medium hover:bg-[#1B3B6C] hover:text-white transition-all inline-flex items-center justify-center gap-2"
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
