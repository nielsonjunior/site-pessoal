import { Link } from 'react-router-dom';
import { CheckCircle, Phone, FileText, Scale, Building, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';

const legalFramework = [
  {
    law: 'Lei Federal 5.194/1966',
    description: 'Regula a profissão do engenheiro e do engenheiro agrônomo e cria o sistema Confea/CREA.',
  },
  {
    law: 'Lei Federal 6.496/1977',
    description: 'Cria a ART: toda obra ou serviço de engenharia precisa dela.',
  },
  {
    law: 'Resolução Confea 218/1973',
    description: 'Diz o que cada tipo de engenheiro pode fazer.',
  },
  {
    law: 'Código de Ética (Resolução Confea 1.002/2002)',
    description: 'Regras de conduta do engenheiro com o cliente e com a sociedade.',
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
    description: 'Projeto da obra aprovado na prefeitura antes de começar.',
    icon: Scale,
  },
  {
    title: 'Habite-se',
    description: 'Documento da prefeitura que diz que a obra está pronta e pode ser usada.',
    icon: CheckCircle,
  },
];

const penalties = [
  'Multa e embargo da obra pela prefeitura',
  'Dificuldade para tirar o habite-se, vender ou financiar',
  'Para o engenheiro: advertência, multa, suspensão ou cancelamento do registro no CREA',
];

export function LegalRequirements() {
  return (
    <div className="bg-[#000000] text-white">
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={false}
            className="hero-in text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-[#F28A2E]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-[#F28A2E]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Requisitos Legais
            </h1>
            <p className="text-white/70 text-lg">
              As leis e os documentos que valem para uma obra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="section-padding bg-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              As leis
            </h2>
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
                <h3 className="text-lg font-semibold text-[#F28A2E] mb-2">
                  {item.law}
                </h3>
                <p className="text-[#C9CCD2]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-[#0B0C0F]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Os documentos da obra
            </h2>
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
                <div className="w-14 h-14 bg-[#F28A2E]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-7 h-7 text-[#F28A2E]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-[#A7ABB2] text-sm">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="section-padding bg-[#000000]">
        <div className="container-custom">
          <div className="max-w-3xl">
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
                O que acontece se não fizer
              </h2>

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
                    <span className="text-[#D9DBDF]">{penalty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de ajuda com os documentos
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Eu cuido do projeto, da ART e da regularização na prefeitura e no cartório.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F28A2E] px-8 py-4 font-semibold text-[#0F141B] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <Link
                to="/servicos/regularizacao-imoveis"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
              >
                Regularização de imóveis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
