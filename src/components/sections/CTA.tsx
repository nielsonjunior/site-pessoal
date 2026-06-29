import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Clock, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu projeto em{' '}
              <span className="text-[#F4C430]">realidade</span>?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Entre em contato agora mesmo e solicite um orçamento sem compromisso.
              Estou pronto para atender você com a excelência que seu projeto merece.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Clock, text: 'Atendimento 24h' },
                { icon: Shield, text: 'Garantia de Qualidade' },
                { icon: CheckCircle, text: 'Orçamento Grátis' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <feature.icon className="w-5 h-5 text-[#F4C430]" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/orcamento"
                className="btn-accent px-8 py-4 text-base flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#0F1A2E] mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1B3B6C]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telefone/WhatsApp</p>
                  <a 
                    href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer" 
                    className="text-lg font-semibold text-[#0F1A2E] hover:text-[#1B3B6C] transition-colors"
                  >
                    (65) 99694-6861
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#1B3B6C]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Horário de Atendimento</p>
                  <p className="text-lg font-semibold text-[#0F1A2E]">
                    Seg - Sex: 8h às 18h
                  </p>
                  <p className="text-sm text-[#F4C430] font-medium">
                    Emergências: 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#1B3B6C]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Registro Profissional</p>
                  <p className="text-lg font-semibold text-[#0F1A2E]">
                    CREA 5071806455
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                Resposta em até <span className="font-semibold text-[#1B3B6C]">24 horas</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
