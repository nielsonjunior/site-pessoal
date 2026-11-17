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
    <section className="relative overflow-hidden bg-[#0B0C0F] text-white section-padding" id="servicos">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#F28A2E] mb-4">
            Também atuo em
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Outros serviços de{' '}
            <span className="text-[#F28A2E]">Engenharia Civil</span>
          </h2>
          <p className="text-[#C9CCD2] text-lg">
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
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#F28A2E]/40 hover:bg-[#F28A2E]/[0.05]"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F28A2E]/15">
                    <Icon className="h-7 w-7 text-[#F28A2E]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors group-hover:text-[#F28A2E]">
                    {service.title}
                  </h3>
                  <p className="text-[#A7ABB2] text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Benefits Preview */}
                  <ul className="space-y-2 mb-5">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#A7ABB2]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F28A2E]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#F28A2E] font-medium text-sm transition-all group-hover:gap-3">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
