import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, RotateCcw, CheckCircle, HelpCircle } from "lucide-react";
import { SITE } from "@/config/site";
import { getRegularizationBySlug } from "@/data";

/** Situações em 1ª pessoa (linguagem leiga) → slug do tipo de regularização. */
const OPTIONS: { slug: string; label: string }[] = [
  { slug: "desdobro", label: "Quero dividir ou separar meu terreno em partes" },
  { slug: "remembramento", label: "Quero juntar terrenos vizinhos em um só" },
  {
    slug: "usucapiao",
    label: "A casa é minha na prática, mas não está no meu nome",
  },
  {
    slug: "retificacao-administrativa",
    label: "A metragem da escritura não bate com a real",
  },
  {
    slug: "instituicao-de-condominio",
    label: "Tenho várias casas/apartamentos num terreno e quero vender separado",
  },
  {
    slug: "unificacao-de-lote",
    label: "Tenho mais de um documento/matrícula e quero unificar",
  },
];

const PILLAR = "/servicos/regularizacao-imoveis";

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export function RegularizacaoDiagnostico() {
  const [selected, setSelected] = useState<string | null>(null);
  const result = selected ? getRegularizationBySlug(selected) : undefined;

  return (
    <div
      className="bg-gradient-to-br from-[#12294A] to-[#060D1E] border border-white/10 rounded-3xl p-8 md:p-12"
      data-testid="diagnostico"
    >
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#B9F227]/20 text-[#B9F227] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <HelpCircle className="w-4 h-4" />
          Diagnóstico rápido e grátis
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Descubra o que seu imóvel precisa
        </h2>
        <p className="text-white/80">
          Escolha a frase que mais combina com a sua situação. Em 1 clique eu te
          mostro a solução — e você fala comigo no WhatsApp se quiser.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="perguntas"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
          >
            {OPTIONS.map((o) => (
              <button
                key={o.slug}
                type="button"
                onClick={() => setSelected(o.slug)}
                className="text-left flex items-start gap-3 bg-white/5 hover:bg-white/15 border border-white/15 rounded-xl p-4 text-white transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0 mt-0.5" />
                <span>{o.label}</span>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="resultado"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8"
            role="status"
          >
            <p className="text-sm text-gray-500 mb-1">Você provavelmente precisa de:</p>
            <h3 className="text-2xl font-bold text-[#0F1A2E] mb-3">
              {result.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{result.whatIsIt}</p>
            <p className="text-[#1B3B6C] font-medium mb-6">{result.benefit}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={wa(
                  `Olá! Fiz o diagnóstico no site e parece que preciso de ${result.title.toLowerCase()}. Pode me ajudar?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center gap-2 flex-1"
              >
                <Phone className="w-5 h-5" />
                Falar com o engenheiro
              </a>
              <Link
                to={`${PILLAR}/${result.slug}`}
                className="bg-[#1B3B6C] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#0F1A2E] transition-colors inline-flex items-center justify-center gap-2 flex-1"
              >
                Ver página completa
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-5 text-sm text-gray-500 hover:text-[#1B3B6C] inline-flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Refazer o diagnóstico
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-center text-white/60 text-sm mt-8">
        Não se encontrou?{" "}
        <a
          href={wa("Olá! Não sei qual regularização meu imóvel precisa. Pode me ajudar a descobrir?")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B9F227] hover:underline"
        >
          Me chame no WhatsApp
        </a>{" "}
        que eu te ajudo a descobrir.
      </p>
    </div>
  );
}
