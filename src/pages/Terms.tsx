import { SEO } from "@/components/shared";
import { motion } from "framer-motion";

export function Terms() {
  return (
    <>
      <SEO
        title="Termos de Uso - Nielson Pinheiro Engenheiro Civil"
        description="Termos de uso do site de Nielson Pinheiro, Engenheiro Civil em Cáceres-MT."
        noIndex={true}
      />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-white/70">
              Última atualização: {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-700"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso.
                Este site é operado por Nielson Pinheiro de Castilho Junior, Engenheiro Civil
                registrado no CREA 5071806455, com atuação em Cáceres-MT e região.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">2. Uso do Site</h2>
              <p>
                Este site tem finalidade informativa e comercial, destinado a apresentar os
                serviços de engenharia civil oferecidos. As informações sobre preços e prazos
                são estimativas e podem variar conforme o projeto. Um orçamento formal será
                fornecido após análise técnica.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site — textos, imagens, logotipos e layout — é de
                propriedade de Nielson Pinheiro de Castilho Junior. É proibida a reprodução
                sem autorização expressa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                As informações deste site são fornecidas em caráter geral e não substituem
                uma consulta técnica profissional. Para projetos específicos, recomendamos
                agendar uma visita técnica.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">5. Contato</h2>
              <p>
                Para dúvidas sobre estes termos:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>E-mail: nielsin.junior@gmail.com</li>
                <li>WhatsApp: <a href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer" className="text-[#1B3B6C] hover:underline">(65) 99694-6861</a></li>
                <li>Responsável: Nielson Pinheiro de Castilho Junior</li>
                <li>CREA 5071806455 — Cáceres, MT</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
