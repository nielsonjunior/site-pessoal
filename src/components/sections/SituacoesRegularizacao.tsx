import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
} from "lucide-react";
import { SITE } from "@/config/site";
import { regularizationTypes } from "@/data";
import { fadeUp, stagger, inView } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Combine,
  KeyRound,
  Layers,
  Ruler,
  Building2,
  Flame,
};

const PILLAR = "/servicos/regularizacao-imoveis";
const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

/**
 * Seção da home: "Qual é o seu caso?" — apresenta as situações de regularização/
 * compliance na voz do cliente (leigo), com link para a página detalhada + WhatsApp.
 */
export function SituacoesRegularizacao() {
  return (
    <section className="section-padding bg-[#F8F9FA]" id="situacoes">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-[#1B3B6C]/10 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Resolvo a dor do seu imóvel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
            Qual é o seu caso?
          </h2>
          <p className="text-gray-600 text-lg">
            Você não precisa saber o nome técnico. Me diga a sua situação que eu
            cuido de tudo — da papelada à solução.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {regularizationTypes.map((t) => {
            const Icon = iconMap[t.icon] || Scissors;
            return (
              <motion.article
                key={t.id}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover flex flex-col text-center"
              >
                <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#1B3B6C]" />
                </div>
                <p className="text-lg font-semibold text-[#0F1A2E] leading-snug mb-1">
                  “{t.leigoSituacao}”
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-5">
                  {t.title}
                </p>
                <div className="mt-auto flex flex-col gap-2">
                  <Link
                    to={`${PILLAR}/${t.slug}`}
                    className="inline-flex items-center justify-center gap-1 w-full border-2 border-[#1B3B6C] text-[#1B3B6C] px-4 py-2.5 rounded-xl font-medium hover:bg-[#1B3B6C] hover:text-white transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={wa(`Olá! ${t.leigoSituacao}. Pode me ajudar?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Resolver no WhatsApp
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
