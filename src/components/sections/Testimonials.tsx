import { ShieldCheck, MessageCircle, Calculator, Eye } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Seção de confiança — HONESTA (o dono está começando, sem clientes/depoimentos
 * reais ainda). Em vez de inventar depoimentos, mostramos compromissos
 * verificáveis + credenciais reais. Quando houver avaliações de verdade, dá pra
 * trocar por uma seção de depoimentos.
 */
const compromissos = [
  {
    icon: ShieldCheck,
    title: "Engenheiro registrado no CREA",
    text: "Responsabilidade técnica (CREA 5071806455) e ART em cada serviço — segurança jurídica de verdade para o seu imóvel.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto comigo",
    text: "Do orçamento à entrega, você fala diretamente com o engenheiro — sem intermediários.",
  },
  {
    icon: Calculator,
    title: "Orçamento grátis e sem compromisso",
    text: "Você sabe exatamente o que vai pagar antes de decidir. Resposta em até 24h.",
  },
  {
    icon: Eye,
    title: "Transparência em cada etapa",
    text: "Você acompanha o processo e os prazos do início ao fim, com clareza.",
  },
];

const credenciais = [
  { value: "CREA", label: "Registro 5071806455" },
  { value: "12", label: "Cidades atendidas" },
  { value: "24h", label: "Resposta ao orçamento" },
  { value: "Grátis", label: "Orçamento sem compromisso" },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-[#1B3B6C]" id="depoimentos">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Por que me escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por que confiar no meu{" "}
            <span className="text-[#F4C430]">trabalho</span>
          </h2>
          <p className="text-white/70 text-lg">
            Atendo Cáceres e região com o compromisso de fazer cada projeto com
            seriedade, técnica e transparência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {compromissos.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-[#F4C430]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <c.icon className="w-6 h-6 text-[#F4C430]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credenciais reais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {credenciais.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#F4C430]">
                {s.value}
              </p>
              <p className="text-white/70 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
