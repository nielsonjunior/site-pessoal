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
    <div className="bg-[#060D1E] text-white">
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-[#B9F227]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-[#B9F227]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
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
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Marco Legal da Engenharia
            </h2>
            <p className="text-[#b9c8e0]">
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
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-lg font-semibold text-[#B9F227] mb-2">
                  {item.law}
                </h3>
                <p className="text-[#b9c8e0]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Documentação Necessária
            </h2>
            <p className="text-[#b9c8e0]">
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
                className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-14 h-14 bg-[#B9F227]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-7 h-7 text-[#B9F227]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-[#93a7c6] text-sm">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-red-500/15 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Penalidades por Descumprimento
              </h2>
              <p className="text-[#b9c8e0] mb-8">
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
                    <span className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-[#cbd7e8]">{penalty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-[#0A1428] p-8 text-white"
            >
              <h3 className="font-display text-2xl font-bold mb-4">
                Garanta a Regularidade do seu Projeto
              </h3>
              <p className="text-[#b9c8e0] mb-6">
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
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de Ajuda com a Documentação?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Posso auxiliar em todo o processo de regularização
              e obtenção de documentos para sua obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-8 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/servicos/regularizacao-imoveis"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
              >
                Serviço de Regularização
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
