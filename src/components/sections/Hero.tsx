import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8EEF5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#1B3B6C 1px, transparent 1px),
            linear-gradient(90deg, #1B3B6C 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-[#1B3B6C]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10 pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#1B3B6C]/10 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Nielson Pinheiro - Engenheiro Civil
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1A2E] leading-tight mb-6"
            >
              Engenheiro Civil em{' '}
              <span className="text-[#1B3B6C]">Cáceres</span>{' '}
              e Região
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Regularize e valorize seu imóvel em Cáceres-MT. Resolvo a papelada que
              trava a venda, o financiamento e a herança — desdobro, usucapião, AVCB,
              ART e laudos técnicos. Orçamento grátis pelo WhatsApp.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                'Atendimento 24h',
                'Orçamento Grátis',
                'Garantia de Qualidade'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#F4C430]" />
                  {feature}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/orcamento"
                className="btn-accent flex items-center justify-center gap-2 text-lg"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1B3B6C] border-2 border-[#1B3B6C] px-6 py-3 rounded-lg font-medium hover:bg-[#1B3B6C] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#1B3B6C]" />
                  <div>
                    <p className="font-bold text-[#0F1A2E]">CREA</p>
                    <p className="text-xs text-gray-500">5071806455</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1B3B6C]" />
                  <div>
                    <p className="font-bold text-[#0F1A2E]">+12</p>
                    <p className="text-xs text-gray-500">Cidades atendidas</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#1B3B6C]" />
                  <div>
                    <p className="font-bold text-[#0F1A2E]">24h</p>
                    <p className="text-xs text-gray-500">Resposta</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-house.jpg"
                alt="Projeto de engenharia civil em Cáceres-MT - casa moderna"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                width={800}
                height={500}
                fetchPriority="high"
                decoding="async"
              />
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4C430] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#0F1A2E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F1A2E]">Serviço Garantido</p>
                    <p className="text-sm text-gray-600">Qualidade e segurança em todos os projetos</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:block absolute -top-4 -right-4 bg-[#1B3B6C] text-white rounded-xl p-4 shadow-xl"
            >
              <p className="text-2xl font-bold">24h</p>
              <p className="text-xs opacity-80">Emergências</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1B3B6C]/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#1B3B6C] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
