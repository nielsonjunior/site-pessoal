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
 * Seção "Você sabia?" — cria consciência de dores que o cliente leigo não sabe
 * que tem, e termina numa faixa de valorização (até 30%) com CTA.
 */
export function VoceSabia() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            Fique por dentro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
            Você sabia?
          </h2>
          <p className="text-gray-600 text-lg">
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
              className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6"
            >
              <div className="w-11 h-11 bg-[#F4C430]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-[#1B3B6C]" />
              </div>
              <div>
                <p className="text-[#0F1A2E] font-medium leading-snug mb-2">
                  {f.texto}
                </p>
                {f.slug ? (
                  <Link
                    to={`${PILLAR}/${f.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1B3B6C] hover:gap-2 transition-all"
                  >
                    Entenda {f.tag}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-wide text-gray-400">
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
          className="mt-12 bg-[#0F1A2E] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <TrendingUp className="w-12 h-12 text-[#F4C430] flex-shrink-0" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                Imóvel regularizado{" "}
                <span className="text-[#F4C430]">valoriza até {VALORIZATION_MAX}</span>
              </p>
              <p className="text-white/70">
                Coloque a documentação em dia e transforme seu imóvel em patrimônio que rende.
              </p>
            </div>
          </div>
          <a
            href={wa("Olá! Quero regularizar e valorizar meu imóvel. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent whitespace-nowrap"
          >
            Quero valorizar meu imóvel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
