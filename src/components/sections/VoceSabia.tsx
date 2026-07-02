import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { SITE } from "@/config/site";
import { VALORIZATION_MAX } from "@/data";
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
    <section className="relative overflow-hidden bg-[#060D1E] text-white section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227]">
            <Lightbulb className="w-4 h-4" />
            Fique por dentro
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white">
            Você sabia?
          </h2>
          <p className="mt-3 text-[#b9c8e0] text-lg">
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
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#B9F227]/15">
                <Lightbulb className="h-5 w-5 text-[#B9F227]" />
              </div>
              <div>
                <p className="font-medium leading-snug text-white mb-2">
                  {f.texto}
                </p>
                {f.slug ? (
                  <Link
                    to={`${PILLAR}/${f.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#B9F227] hover:gap-2 transition-all"
                  >
                    Entenda {f.tag}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-wide text-[#8ea3c2]">
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
          className="mt-12 rounded-3xl border border-[#B9F227]/25 bg-[#0A1428] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_60px_-20px_rgba(185,242,39,.35)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <TrendingUp className="w-12 h-12 text-[#B9F227] flex-shrink-0" />
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white">
                Imóvel regularizado{" "}
                <span className="text-[#B9F227]">valoriza até {VALORIZATION_MAX}</span>
              </p>
              <p className="text-[#b9c8e0]">
                Coloque a documentação em dia e transforme seu imóvel em patrimônio que rende.
              </p>
            </div>
          </div>
          <a
            href={wa("Olá! Quero regularizar e valorizar meu imóvel. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#B9F227] px-7 py-4 font-semibold text-[#0a1706] font-display shadow-[0_14px_40px_-10px_rgba(185,242,39,.6)] transition-transform hover:-translate-y-0.5"
          >
            Quero valorizar meu imóvel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
