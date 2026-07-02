import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  FileCheck,
  HardHat,
  AlertTriangle,
  Ruler,
  Flame,
  Droplets,
  KeyRound,
  Scissors,
  Search,
} from "lucide-react";
import { SITE } from "@/config/site";
import { casos } from "@/data";
import { fadeUp, stagger, inView } from "@/lib/motion";
import { Aurora } from "@/components/shared/Aurora";

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  HardHat,
  AlertTriangle,
  Ruler,
  Flame,
  Droplets,
  KeyRound,
  Scissors,
  Search,
};

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

/**
 * Seção da home "Qual é o seu caso?" (tema premium escuro) — situações na voz
 * do cliente (leigo), com link para a página detalhada + WhatsApp.
 */
export function SituacoesRegularizacao() {
  return (
    <section
      id="situacoes"
      className="relative overflow-hidden bg-[#060D1E] text-white section-padding"
    >
      <Aurora className="opacity-40" />

      <div className="relative z-10 container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227]">
            Resolvo a dor do seu imóvel
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white">
            Qual é o seu caso?
          </h2>
          <p className="mt-3 text-[#b9c8e0] text-lg">
            Você não precisa saber o nome técnico. Se identificar com uma frase,
            o problema é seu — e tem solução.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {casos.map((c) => {
            const Icon = iconMap[c.icon] || FileCheck;
            return (
              <motion.article
                key={c.id}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-[#B9F227]/40 hover:bg-[#B9F227]/[0.05]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B9F227]/15 text-[#B9F227]">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-display text-lg font-semibold leading-snug text-white">
                  {c.frase}
                </p>
                <p className="mb-5 mt-1 text-xs uppercase tracking-wide text-[#8ea3c2]">
                  {c.tag}
                </p>
                <div className="mt-auto flex flex-col gap-2">
                  <Link
                    to={c.href}
                    className="inline-flex w-full items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={wa(c.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
                  >
                    <Phone className="h-4 w-4" />
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
