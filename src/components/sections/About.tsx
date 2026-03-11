import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Building2, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: 100, suffix: '%', label: 'Comprometimento', icon: Award },
  { number: 24, suffix: 'h', label: 'Orçamento Rápido', icon: Building2 },
  { number: 100, suffix: '%', label: 'Satisfação', icon: Users },
];

const differentials = [
  'Engenheiro Civil - CREA-SP em análise',
  'Atendimento em Campinas e região',
  'Atendimento personalizado e humanizado',
  'Orçamento sem compromisso',
  'Prazos rigorosamente cumpridos',
  'Garantia em todos os serviços',
];

export function About() {
  return (
    <section className="section-padding bg-[#F8F9FA]" id="sobre">
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
                  alt="Engenheiro Civil em obra"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Decorative Border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#F4C430] rounded-2xl -z-10" />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 left-6 right-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 bg-[#1B3B6C]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="w-5 h-5 text-[#1B3B6C]" />
                      </div>
                      <p className="text-2xl font-bold text-[#1B3B6C]">
                        <Counter end={stat.number} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
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
          >
            <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Sobre Mim
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Nielson Pinheiro de Castilho Junior
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Sou Nielson Pinheiro de Castilho Junior, Engenheiro Civil em Campinas e região. 
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
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/sobre"
              className="btn-primary inline-flex items-center gap-2"
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
