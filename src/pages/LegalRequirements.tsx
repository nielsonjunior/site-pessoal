import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, FileText, Scale, Building, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';

const legalFramework = [
  {
    law: 'Lei Federal 5.194/1966',
    description: 'Regula o exercício das profissões de Engenheiro, Arquiteto e Engenheiro Agrônomo.',
  },
  {
    law: 'Lei Federal 6.496/1977',
    description: 'Dispõe sobre o Conselho Federal e Conselhos Regionais de Engenharia e Agronomia.',
  },
  {
    law: 'Resolução 218/1973',
    description: 'Normas de autorização para o exercício da profissão de Engenheiro.',
  },
  {
    law: 'Código de Ética Profissional',
    description: 'Normas éticas que regem a conduta dos profissionais de engenharia.',
  },
];

const requiredDocuments = [
  {
    title: 'Alvará de Construção',
    description: 'Documento emitido pela prefeitura que autoriza o início das obras.',
    icon: Building,
  },
  {
    title: 'ART (Anotação de Responsabilidade Técnica)',
    description: 'Documento do CREA que identifica o profissional responsável técnico.',
    icon: FileText,
  },
  {
    title: 'Projeto Técnico Aprovado',
    description: 'Projeto arquitetônico e estrutural aprovado pelos órgãos competentes.',
    icon: Scale,
  },
  {
    title: 'Habite-se',
    description: 'Certificado de conclusão de obra emitido pela prefeitura.',
    icon: CheckCircle,
  },
];

const penalties = [
  'Advertência escrita',
  'Multa administrativa',
  'Suspensão do exercício profissional',
  'Cassação do registro no CREA',
  'Responsabilização civil e criminal',
];

export function LegalRequirements() {
  return (
    <>
      <SEO
        title="Requisitos Legais - Engenharia Civil"
        description="Conheça os requisitos legais para obras e serviços de engenharia civil. Legislação, documentação necessária e normas técnicas."
        keywords={[
          'requisitos legais engenharia',
          'legislação obras',
          'documentação obra',
          'normas técnicas construção'
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
              <Scale className="w-10 h-10 text-[#F4C430]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Requisitos Legais
            </h1>
            <p className="text-white/70 text-lg">
              Conheça a legislação e documentação necessária para obras 
              e serviços de engenharia civil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Marco Legal da Engenharia
            </h2>
            <p className="text-gray-600">
              A profissão de engenheiro civil é regulamentada por diversas leis e normas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {legalFramework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-[#1B3B6C] mb-2">
                  {item.law}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Documentação Necessária
            </h2>
            <p className="text-gray-600">
              Conheça os principais documentos exigidos para obras e serviços
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-7 h-7 text-[#1B3B6C]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1A2E] mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Penalidades por Descumprimento
              </h2>
              <p className="text-gray-600 mb-8">
                O não cumprimento das normas legais pode acarretar diversas penalidades 
                para o profissional e para o proprietário da obra:
              </p>

              <div className="space-y-4">
                {penalties.map((penalty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-700">{penalty}</span>
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
                Garanta a Regularidade do seu Projeto
              </h3>
              <p className="text-white/80 mb-6">
                Conte com um engenheiro civil registrado no CREA para garantir 
                que seu projeto esteja em total conformidade com a legislação.
              </p>
              <div className="space-y-4">
                <Link
                  to="/orcamento"
                  className="btn-accent w-full inline-flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/5565996946861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all w-full inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
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
              Precisa de Ajuda com a Documentação?
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe pode auxiliar em todo o processo de regularização 
              e obtenção de documentos para sua obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="bg-[#0F1A2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1B3B6C] transition-all inline-flex items-center justify-center gap-2"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/servicos/regularizacao-imoveis"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Serviço de Regularização
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
