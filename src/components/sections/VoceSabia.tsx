import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { SITE } from "@/config/site";
import { VALORIZATION_MAX, VALORIZATION_SOURCE } from "@/data";
import { fadeUp, stagger, inView } from "@/lib/motion";

const PILLAR = "/servicos/regularizacao-imoveis";
const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const fatos: { texto: string; tag: string; slug?: string }[] = [
  {
    texto:
      "Você pode colocar a casa no seu nome mesmo sem escritura, se mora nela há anos.",
    tag: "Usucapião",
    slug: "usucapiao",
  },
  {
    texto: `Um imóvel com tudo documentado pode valer até ${VALORIZATION_MAX} mais — e pode ser financiado pelo banco.`,
    tag: "Valorização",
  },
  {
    texto:
      "Comércio sem o AVCB do Corpo de Bombeiros pode ser multado ou até interditado.",
    tag: "AVCB",
    slug: "avcb",
  },
  {
    texto:
      "Não dá pra vender (nem financiar) só 'metade' de um terreno sem fazer o desdobro.",
    tag: "Desdobro",
    slug: "desdobro",
  },
];

/**
 * Seção "Você sabia?" (tema escuro) — cria consciência de dores que o cliente
 * leigo não sabe que tem, e termina numa faixa de valorização (até 30%) com CTA.
 */
export function VoceSabia() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-white section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#F28A2E]">
            <Lightbulb className="w-4 h-4" />
            Fique por dentro
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white">
            Você sabia?
          </h2>
          <p className="mt-3 text-[#C9CCD2] text-lg">
            Talvez você tenha um direito (ou um problema) e nem saiba. Veja:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-5"
        >
          {fatos.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#F28A2E]/15">
                <Lightbulb className="h-5 w-5 text-[#F28A2E]" />
              </div>
              <div>
                <p className="font-medium leading-snug text-white mb-2">
                  {f.texto}
                </p>
                {f.slug ? (
                  <Link
                    to={`${PILLAR}/${f.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#F28A2E] hover:gap-2 transition-all"
                  >
                    Entenda {f.tag}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-wide text-[#9AA0A8]">
                    {f.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Faixa de valorização */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="mt-12 rounded-3xl border border-[#F28A2E]/25 bg-[#0B0C0F] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_60px_-20px_rgba(242,138,46,.35)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <TrendingUp className="w-12 h-12 text-[#F28A2E] flex-shrink-0" />
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white">
                Imóvel regularizado{" "}
                <span className="text-[#F28A2E]">valoriza até {VALORIZATION_MAX}</span>
              </p>
              <p className="text-[#C9CCD2]">
                Coloque a documentação em dia e transforme seu imóvel em patrimônio que rende.
              </p>
              <p className="mt-1 text-xs text-[#9AA0A8]">{VALORIZATION_SOURCE}</p>
            </div>
          </div>
          <a
            href={wa("Olá! Quero regularizar e valorizar meu imóvel. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#F28A2E] px-7 py-4 font-semibold text-[#0F141B] font-display shadow-[0_14px_40px_-10px_rgba(242,138,46,.6)] transition-transform hover:-translate-y-0.5"
          >
            Quero valorizar meu imóvel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
