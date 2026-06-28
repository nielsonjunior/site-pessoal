import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Shield, Award, Users, Clock, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';

const reasons = [
  {
    icon: Shield,
    title: 'Segurança Estrutural',
    description: 'O engenheiro civil avalia a viabilidade técnica das alterações, garantindo que a estrutura do imóvel não seja comprometida.',
  },
  {
    icon: Award,
    title: 'Conformidade Legal',
    description: 'Profissional habilitado garante que a obra atenda às normas técnicas e legislação vigente, evitando problemas futuros.',
  },
  {
    icon: Users,
    title: 'Economia de Recursos',
    description: 'O planejamento técnico evita desperdícios de materiais e retrabalhos, otimizando o orçamento da obra.',
  },
  {
    icon: Clock,
    title: 'Garantia de Qualidade',
    description: 'O acompanhamento técnico assegura que os serviços sejam executados conforme especificações técnicas.',
  },
];

const whenRequired = [
  'Reformas que alteram a estrutura do imóvel',
  'Mudança de uso (residencial para comercial)',
  'Ampliações e construções novas',
  'Reformas em áreas comuns de condomínios',
  'Modificações em instalações elétricas e hidráulicas principais',
];

const differences = [
  {
    role: 'Engenheiro Civil',
    responsibilities: [
      'Estrutura e fundações',
      'Instalações hidráulicas',
      'Instalações elétricas',
      'Cálculos técnicos de segurança',
      'Acompanhamento de obras',
    ],
  },
  {
    role: 'Arquiteto',
    responsibilities: [
      'Projeto arquitetônico',
      'Estética do projeto',
      'Distribuição de espaços',
      'Conforto ambiental',
      'Acabamentos',
    ],
  },
];

export function WhyHireEngineer() {
  return (
    <>
      <SEO
        title="Por Que Contratar um Engenheiro Civil?"
        description="Descubra a importância de contratar um engenheiro civil para suas obras e reformas. Segurança, qualidade e conformidade legal garantidas."
        keywords={[
          'por que contratar engenheiro',
          'importância engenheiro civil',
          'engenheiro vs arquiteto',
          'quando contratar engenheiro'
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HardHat className="w-10 h-10 text-[#F4C430]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Contratar um Engenheiro Civil?
            </h1>
            <p className="text-white/70 text-lg">
              Entenda a importância de ter um profissional qualificado para garantir 
              a segurança, qualidade e conformidade legal do seu projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Benefícios de Contratar um Engenheiro
            </h2>
            <p className="text-gray-600">
              A presença de um engenheiro civil traz vantagens significativas para qualquer projeto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-7 h-7 text-[#1B3B6C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0F1A2E] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When Required */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Quando é Obrigatório?
              </h2>
              <p className="text-gray-600 mb-8">
                De acordo com a legislação, é obrigatório o acompanhamento de engenheiro 
                civil nas seguintes situações:
              </p>

              <div className="space-y-4">
                {whenRequired.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1B3B6C] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Engenheiro vs Arquiteto
              </h3>
              <p className="text-white/80 mb-6">
                Entenda a diferença entre esses dois profissionais importantes:
              </p>

              <div className="space-y-6">
                {differences.map((prof, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-[#F4C430] mb-2">{prof.role}</h4>
                    <ul className="space-y-1">
                      {prof.responsibilities.map((resp, i) => (
                        <li key={i} className="text-white/80 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-white/50 rounded-full" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#F4C430] to-[#E5B520]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Contrate um Engenheiro Civil Qualificado
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Invista em segurança e qualidade para seu projeto. Solicite um orçamento 
              sem compromisso e converse com um profissional experiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="bg-[#0F1A2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1B3B6C] transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
