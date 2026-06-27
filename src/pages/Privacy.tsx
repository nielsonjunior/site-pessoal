import { SEO } from "@/components/shared";
import { motion } from "framer-motion";

export function Privacy() {
  return (
    <>
      <SEO
        title="Política de Privacidade - Nielson Pinheiro Engenheiro Civil"
        description="Política de privacidade do site de Nielson Pinheiro, Engenheiro Civil em Cáceres-MT."
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
              Política de Privacidade
            </h1>
            <p className="text-white/70">
              Última atualização: {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-700"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">1. Informações Coletadas</h2>
              <p>
                Coletamos apenas as informações que você nos fornece voluntariamente ao preencher
                formulários de contato ou orçamento, como: nome completo, telefone, e-mail e cidade.
                Essas informações são usadas exclusivamente para entrar em contato com você e
                fornecer o serviço solicitado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">2. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas para: responder às suas solicitações de
                orçamento, enviar propostas personalizadas e manter contato referente aos serviços
                contratados. Não compartilhamos seus dados com terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">3. Cookies</h2>
              <p>
                Este site pode utilizar cookies básicos para melhorar a experiência de navegação.
                Nenhum dado pessoal é armazenado por meio de cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">4. Seus Direitos (LGPD)</h2>
              <p>
                Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem o direito
                de solicitar acesso, correção ou exclusão dos seus dados pessoais. Para exercer
                esses direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:nielsin.junior@gmail.com" className="text-[#1B3B6C] hover:underline">
                  nielsin.junior@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">5. Contato</h2>
              <p>
                Dúvidas sobre esta política? Entre em contato:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>E-mail: nielsin.junior@gmail.com</li>
                <li>WhatsApp: (65) 99694-6861</li>
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
