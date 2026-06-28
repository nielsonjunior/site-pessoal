import { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, Star, Send, Mail } from 'lucide-react';
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
  'Projetos entregues com excelência',
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

const testimonials = [
  {
    name: 'José Aparecido Silva',
    text: 'Nunca imaginei regularizar meu imóvel tão rápido. O Nielson resolveu tudo sem complicação. Gente boa e profissional de verdade!',
    rating: 5,
  },
  {
    name: 'Rosangela Ferreira',
    text: 'Precisava de uma ART urgente aqui em Mirassol e o Nielson me atendeu no mesmo dia. Muito profissional e com preço justo. Recomendo!',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo Nunes',
    text: 'Laudo técnico entregue no prazo, banco aprovou o financiamento sem problema. Serviço de primeira qualidade!',
    rating: 5,
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
    <>
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
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                CREA 5071806455
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engenheiro Civil em Cáceres-MT
              </h1>

              <p className="text-white/80 text-lg mb-6">
                Especialista em <strong>ART, Regularização de Imóveis, Reformas e Laudos Técnicos</strong>.
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

            {/* Quick Form */}
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
                      ? 'O WhatsApp foi aberto com os seus dados. Retornaremos em até 24 horas.'
                      : 'Seu cliente de e-mail foi aberto. Retornaremos em até 24 horas.'}
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
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600">
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
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0F1A2E] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-[#1B3B6C] font-semibold">{service.price}</p>
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
              { value: '100%', label: 'Comprometimento' },
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
                <p className="text-3xl md:text-4xl font-bold text-[#F4C430]">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-gray-500">Clientes reais de Cáceres e região</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-[#0F1A2E]">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#F4C430] to-[#E5B520]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
              Precisa de Engenheiro em Cáceres-MT?
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Solicite seu orçamento agora mesmo e receba uma proposta
              personalizada em até 24 horas. Atendimento em Cáceres e toda a região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#orcamento"
                className="bg-[#0F1A2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1B3B6C] transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
