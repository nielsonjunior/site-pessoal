import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import { Aurora } from '@/components/shared/Aurora';
import { SITE } from '@/config/site';

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const stats = [
  { value: '+12', label: 'Cidades atendidas' },
  { value: 'até 30%', label: 'de valorização possível', accent: true },
  { value: '24h', label: 'Resposta no WhatsApp' },
];

/**
 * Hero (tema premium escuro) — headline de dor + fundo aurora.
 * Mantém o termo-chave "Engenheiro Civil em Cáceres" no eyebrow (SEO).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060D1E] text-white lg:min-h-[92vh] flex items-center">
      <Aurora />
      {/* borda interna sutil, como um "frame" premium */}
      <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-3xl border border-white/10" />

      <div className="relative z-10 container-custom pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-[#cfe0f6] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#B9F227] shadow-[0_0_10px_#B9F227]" />
            Engenheiro Civil em Cáceres-MT e região
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 font-display font-semibold leading-[1.05] text-white text-[34px] sm:text-5xl lg:text-6xl"
          >
            Seu imóvel é seu.{' '}
            <span className="text-[#B9F227] [text-shadow:0_0_34px_rgba(185,242,39,.35)]">
              O papel comprova isso?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#b9c8e0]"
          >
            Sem a documentação em dia, não dá pra{' '}
            <b className="font-semibold text-white">vender, financiar nem deixar de herança</b>{' '}
            — e você pode estar perdendo até 30% do valor. Eu resolvo a papelada.
            Você fala direto comigo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#situacoes"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#B9F227] px-7 py-4 text-[15px] font-semibold text-[#0a1706] font-display shadow-[0_14px_40px_-10px_rgba(185,242,39,.6)] transition-transform hover:-translate-y-0.5"
            >
              Descobrir o meu caso
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href={wa('Olá! Preciso resolver a documentação do meu imóvel. Pode me ajudar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs sm:text-sm text-[#8ea3c2]"
          >
            Análise gratuita · resposta em 24h · CREA 5071806455
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-8"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-xl sm:text-3xl font-semibold text-white leading-none">
                  {s.accent ? (
                    <>até <span className="text-[#B9F227]">30%</span></>
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-2 text-[11px] sm:text-sm text-[#93a7c6] leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
