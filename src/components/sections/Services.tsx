import { Link } from 'react-router-dom';
import { FileCheck, Home, Hammer, Maximize2, ClipboardCheck, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data';

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
    <section className="section-padding bg-white" id="servicos">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Também atuo em
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1A2E] mb-6">
            Outros serviços de{' '}
            <span className="text-[#1B3B6C]">Engenharia Civil</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Além da regularização, atendo obras e projetos: ART, reformas,
            ampliações, laudos técnicos e consultoria.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Link
                  to={`/servicos/${service.slug}`}
                  className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#1B3B6C]/20 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1B3B6C] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#1B3B6C] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#0F1A2E] mb-3 group-hover:text-[#1B3B6C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Benefits Preview */}
                  <ul className="space-y-2 mb-5">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-[#F4C430] rounded-full mt-1.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#1B3B6C] font-medium text-sm group-hover:gap-3 transition-all">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/servicos"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
