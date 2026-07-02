import { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, Star, Send, Mail, ShieldCheck, MessageCircle, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const WHATSAPP_NUMBER = '5565996946861';
const EMAIL = 'nielsin.junior@gmail.com';

const benefits = [
  'Engenheiro Civil registrado CREA 5071806455',
  'Orçamento em até 24 horas',
  'Atendimento em Cáceres e região de MT',
  'Garantia em todos os serviços',
  'Responsabilidade técnica (ART) em cada serviço',
  'Atendimento humanizado e personalizado',
];

const services = [
  {
    title: 'ART',
    description: 'Anotação de Responsabilidade Técnica para obras e serviços',
    price: 'Consulte',
  },
  {
    title: 'Regularização',
    description: 'Regularização completa de imóveis junto à prefeitura',
    price: 'Consulte',
  },
  {
    title: 'Reformas',
    description: 'Projetos e acompanhamento de reformas residenciais',
    price: 'Consulte',
  },
  {
    title: 'Laudos',
    description: 'Laudos técnicos para diversas finalidades',
    price: 'Consulte',
  },
];

// Compromissos verificáveis (o dono está começando — sem depoimentos inventados).
const compromissos = [
  {
    icon: ShieldCheck,
    title: 'Engenheiro registrado no CREA',
    text: 'Responsabilidade técnica (CREA 5071806455) e ART em cada serviço.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento direto comigo',
    text: 'Do orçamento à entrega, você fala diretamente com o engenheiro.',
  },
  {
    icon: Calculator,
    title: 'Orçamento grátis e sem compromisso',
    text: 'Você sabe o que vai pagar antes de decidir. Resposta em até 24h.',
  },
];

export function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<'whatsapp' | 'email' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
  });

  const buildMessage = () => {
    let msg = `🏗️ Solicitação de Orçamento\n\n`;
    msg += `Nome: ${formData.name}\n`;
    msg += `Telefone: ${formData.phone}\n`;
    if (formData.city) msg += `Cidade: ${formData.city}\n`;
    if (formData.service) msg += `Serviço: ${formData.service}\n`;
    return msg;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank');
    setSubmitType('whatsapp');
    setIsSubmitted(true);
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Solicitação de Orçamento - Site');
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank');
    setSubmitType('email');
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Engenheiro Civil Cáceres MT - Nielson Pinheiro | Orçamento Grátis"
        description="Engenheiro Civil em Cáceres-MT e região. Nielson Pinheiro - ART, regularização de imóveis, reformas e laudos. Orçamento grátis em 24h!"
        keywords={[
          'engenheiro civil Cáceres',
          'engenheiro civil Cáceres MT',
          'Nielson Pinheiro engenheiro',
          'regularização imóveis Cáceres MT',
          'ART Cáceres',
          'engenheiro perto de mim Cáceres'
        ]}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#B9F227]/15 text-[#B9F227] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                CREA 5071806455
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engenheiro Civil em Cáceres-MT
              </h1>

              <p className="text-white/80 text-lg mb-6">
                Especialista em <strong className="text-white">ART, Regularização de Imóveis, Reformas e Laudos Técnicos</strong>.
                Atendimento em Cáceres-MT e região com orçamento em 24h.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['ART', 'Regularização', 'Reformas', 'Laudos'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#orcamento"
                  className="btn-accent inline-flex items-center justify-center gap-2 text-lg"
                >
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5565996946861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-4 rounded-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (65) 99694-6861
                </a>
              </div>
            </motion.div>

            {/* Quick Form (cartão branco de propósito — inputs claros) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
              id="orcamento"
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1A2E] mb-2">
                    {submitType === 'whatsapp' ? 'Abrindo WhatsApp!' : 'Abrindo seu E-mail!'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {submitType === 'whatsapp'
                      ? 'O WhatsApp foi aberto com os seus dados. Retornarei em até 24 horas.'
                      : 'Seu cliente de e-mail foi aberto. Retornarei em até 24 horas.'}
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setSubmitType(null); }}
                    className="text-[#1B3B6C] underline text-sm"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#0F1A2E] mb-2">
                    Solicite seu Orçamento
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Preencha o formulário e receba uma proposta em 24h.
                  </p>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(65) 9 9999-9999"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Sua cidade (ex: Cáceres-MT)"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço desejado</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1B3B6C] focus:border-transparent"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="ART">ART</option>
                        <option value="Regularização de Imóveis">Regularização de Imóveis</option>
                        <option value="Projetos de Reforma">Projetos de Reforma</option>
                        <option value="Ampliação">Ampliação</option>
                        <option value="Laudos Técnicos">Laudos Técnicos</option>
                        <option value="Consultoria">Consultoria</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button
                        type="submit"
                        onClick={handleWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button
                        type="submit"
                        onClick={handleEmail}
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        E-mail
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Seus dados estão seguros. Não enviamos spam.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-[#060D1E]">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <CheckCircle className="w-5 h-5 text-[#B9F227] flex-shrink-0" />
                <span className="text-[#cbd7e8] text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Meus Serviços
            </h2>
            <p className="text-[#b9c8e0]">
              Soluções completas em engenharia civil para você em Cáceres e região
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#93a7c6] text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-[#B9F227] font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1B3B6C]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 'CREA', label: '5071806455' },
              { value: '+12', label: 'Cidades atendidas' },
              { value: '24h', label: 'Orçamento' },
              { value: 'MT', label: 'Mato Grosso' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-[#B9F227]">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que confiar (sem depoimentos inventados) */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Por que confiar no meu trabalho
            </h2>
            <p className="text-[#b9c8e0]">Atendo Cáceres e região com seriedade, técnica e transparência.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {compromissos.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="w-12 h-12 bg-[#B9F227]/15 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-[#B9F227]" />
                </div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-[#93a7c6] text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Precisa de Engenheiro em Cáceres-MT?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Solicite seu orçamento agora mesmo e receba uma proposta
              personalizada em até 24 horas. Atendimento em Cáceres e toda a região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-8 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
