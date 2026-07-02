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
    <div className="bg-[#060D1E] text-white">
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
      <div className="pt-28 pb-4 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-[#93a7c6]">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-[#B9F227]">O que é ART</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
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
              <div className="w-20 h-20 bg-[#B9F227]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-10 h-10 text-[#B9F227]" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
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
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-none"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Entendendo a ART
            </h2>

            <p className="text-[#b9c8e0] mb-6 leading-relaxed">
              A <strong className="text-white">Anotação de Responsabilidade Técnica (ART)</strong> é um
              documento emitido pelos Conselhos Regionais de Engenharia e
              Agronomia (CREA) que identifica o profissional responsável técnico
              pela execução de obras, serviços, empreitadas ou atividades
              técnicas.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 my-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Por que a ART é obrigatória?
              </h3>
              <p className="text-[#b9c8e0] mb-4">
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
                    <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0 mt-0.5" />
                    <span className="text-[#cbd7e8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Quando emitir a ART?
            </h3>
            <p className="text-[#b9c8e0] mb-4">
              A ART deve ser emitida em diversas situações:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {whenToIssue.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0" />
                  <span className="text-[#cbd7e8]">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Como emitir a ART?
            </h3>
            <p className="text-[#b9c8e0] mb-6 leading-relaxed">
              A emissão da ART é feita através do sistema online do CREA, pelo
              próprio profissional engenheiro ou empresa contratada. O processo
              é simples e rápido, e o documento é emitido em formato digital com
              validade jurídica.
            </p>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 my-8">
              <h3 className="text-xl font-bold text-red-300 mb-4">
                Consequências de não ter ART
              </h3>
              <p className="text-red-200/90 mb-4">
                A ausência da ART pode acarretar sérios problemas:
              </p>
              <ul className="space-y-3">
                {consequences.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-red-200/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Conclusão
            </h3>
            <p className="text-[#b9c8e0] mb-8 leading-relaxed">
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
            className="mt-12 rounded-2xl border border-[#B9F227]/25 bg-[#0A1428] p-8 text-center shadow-[0_0_50px_-20px_rgba(185,242,39,.35)]"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Precisa de uma ART?
            </h3>
            <p className="text-[#b9c8e0] mb-6">
              Entre em contato e solicite sua ART com um engenheiro civil
              registrado no CREA (5071806455).
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
    </div>
  );
}
