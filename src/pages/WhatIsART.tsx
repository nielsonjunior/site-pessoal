import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  FileCheck,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/shared";

const whenToIssue = [
  "Execução de obras civis",
  "Elaboração de projetos técnicos",
  "Reformas e ampliações",
  "Laudos e perícias técnicas",
  "Instalações elétricas e hidráulicas",
  "Gerenciamento e supervisão de obras",
];

const consequences = [
  "Multas e autuações pelo CREA",
  "Impedimento de obtenção de alvará de construção",
  "Dificuldade para obter habite-se",
  "Problemas em financiamentos bancários",
  "Responsabilização civil e criminal",
];

export function WhatIsART() {
  return (
    <>
      <SEO
        title="O que é ART - Anotação de Responsabilidade Técnica | Guia Completo"
        description="Entenda o que é ART, por que ela é obrigatória, quando emitir e como funciona. Guia completo sobre Anotação de Responsabilidade Técnica."
        keywords={[
          "o que é ART",
          "ART engenharia",
          "Anotação Responsabilidade Técnica",
          "como emitir ART",
          "ART obrigatória",
        ]}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1B3B6C] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-[#1B3B6C]">O que é ART</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/servicos/art-anotacao-responsabilidade-tecnica"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver serviço de ART
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-[#F4C430]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  O que é ART?
                </h1>
                <p className="text-white/70 text-lg">
                  Guia Completo sobre Anotação de Responsabilidade Técnica
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-[#0F1A2E] mb-6">
              Entendendo a ART
            </h2>

            <p className="text-gray-600 mb-6">
              A <strong>Anotação de Responsabilidade Técnica (ART)</strong> é um
              documento emitido pelos Conselhos Regionais de Engenharia e
              Agronomia (CREA) que identifica o profissional responsável técnico
              pela execução de obras, serviços, empreitadas ou atividades
              técnicas.
            </p>

            <div className="bg-[#F8F9FA] rounded-2xl p-8 my-8">
              <h3 className="text-xl font-bold text-[#0F1A2E] mb-4">
                Por que a ART é obrigatória?
              </h3>
              <p className="text-gray-600 mb-4">
                A ART é obrigatória por lei federal e serve para:
              </p>
              <ul className="space-y-3">
                {[
                  "Garantir a identificação do profissional responsável técnico",
                  "Assegurar a qualidade e segurança dos serviços executados",
                  "Proteger o contratante contra possíveis problemas",
                  "Permitir o controle social da atividade profissional",
                  "Viabilizar a contratação de seguros e garantias",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#0F1A2E] mb-4">
              Quando emitir a ART?
            </h3>
            <p className="text-gray-600 mb-4">
              A ART deve ser emitida em diversas situações:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {whenToIssue.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-[#1B3B6C] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0F1A2E] mb-4">
              Como emitir a ART?
            </h3>
            <p className="text-gray-600 mb-6">
              A emissão da ART é feita através do sistema online do CREA, pelo
              próprio profissional engenheiro ou empresa contratada. O processo
              é simples e rápido, e o documento é emitido em formato digital com
              validade jurídica.
            </p>

            <div className="bg-red-50 rounded-2xl p-8 my-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Consequências de não ter ART
              </h3>
              <p className="text-red-700 mb-4">
                A ausência da ART pode acarretar sérios problemas:
              </p>
              <ul className="space-y-3">
                {consequences.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#0F1A2E] mb-4">
              Conclusão
            </h3>
            <p className="text-gray-600 mb-8">
              A ART é um documento fundamental para a regularidade técnica e
              legal de obras e serviços de engenharia. Sempre contrate um
              profissional registrado no CREA e exija a emissão da ART para
              garantir a segurança e qualidade do seu projeto.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-[#1B3B6C] rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de uma ART?
            </h3>
            <p className="text-white/80 mb-6">
              Entre em contato e solicite sua ART com um engenheiro civil
              registrado no CREA-SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5511999999999"
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
    </>
  );
}
