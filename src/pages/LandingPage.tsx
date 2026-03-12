import { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, Star, Shield, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const benefits = [
  'Engenheiro Civil registrado CREA-SP',
  'Orçamento em até 24 horas',
  'Atendimento em toda Grande SP',
  'Garantia em todos os serviços',
  'Mais de 500 projetos entregues',
  '10 anos de experiência',
];

const services = [
  {
    title: 'ART',
    description: 'Anotação de Responsabilidade Técnica para obras e serviços',
    price: 'A partir de R$ 150',
  },
  {
    title: 'Regularização',
    description: 'Regularização completa de imóveis junto à prefeitura',
    price: 'Consulte',
  },
  {
    title: 'Reformas',
    description: 'Projetos e acompanhamento de reformas residenciais',
    price: 'A partir de R$ 2.000',
  },
  {
    title: 'Laudos',
    description: 'Laudos técnicos para diversas finalidades',
    price: 'A partir de R$ 800',
  },
];

const testimonials = [
  {
    name: 'Carlos Silva',
    text: 'Serviço excelente! Consegui regularizar meu imóvel em tempo recorde.',
    rating: 5,
  },
  {
    name: 'Maria Oliveira',
    description: 'Profissionalismo e competência. Recomendo a todos!',
    rating: 5,
  },
  {
    name: 'João Santos',
    text: 'Orçamento justo e execução impecável. Muito satisfeito!',
    rating: 5,
  },
];

export function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        title="Engenheiro Civil Campinas - Nielson Pinheiro | Orçamento Grátis"
        description="Engenheiro Civil em Campinas e região. Nielson Pinheiro - ART, regularização de imóveis, reformas e laudos. Orçamento grátis em 24h!"
        keywords={[
          'engenheiro civil Campinas',
          'engenheiro civil perto',
          'Nielson Pinheiro',
          'regularização imóveis Campinas'
        ]}
      />

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1B3B6C] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0F1A2E]">Engenharia</p>
                <p className="text-xs text-gray-500">Projetos</p>
              </div>
            </div>
            <a
              href="https://wa.me/5516996166997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

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
                CREA-SP: 5071806455
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engenheiro Civil em Campinas
              </h1>

              <p className="text-white/80 text-lg mb-6">
                Especialista em <strong>ART, Regularização de Imóveis, Reformas e Laudos Técnicos</strong>. 
                Atendimento em Campinas e região com orçamento em 24h.
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
                  href="https://wa.me/5516996166997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-4 rounded-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (16) 99616-6997
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
                    Solicitação Enviada!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Retornaremos em até 24 horas.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#0F1A2E] mb-2">
                    Solicite seu Orçamento
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Preencha o formulário e receba uma proposta em 24h.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="(16) 99616-6997"
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
                        placeholder="Sua cidade"
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
                        <option value="art">ART</option>
                        <option value="regularizacao">Regularização de Imóveis</option>
                        <option value="reforma">Projetos de Reforma</option>
                        <option value="ampliacao">Ampliação</option>
                        <option value="laudo">Laudos Técnicos</option>
                        <option value="consultoria">Consultoria</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Quero Receber Orçamento
                    </Button>

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
              Soluções completas em engenharia civil para você
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
              { value: '10+', label: 'Anos de Experiência' },
              { value: '500+', label: 'Projetos Entregues' },
              { value: '100%', label: 'Satisfação' },
              { value: '24h', label: 'Orçamento' },
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
              Não Perca Mais Tempo!
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Solicite seu orçamento agora mesmo e receba uma proposta 
              personalizada em até 24 horas.
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
                href="https://wa.me/5516996166997"
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

      {/* Footer */}
      <footer className="bg-[#0F1A2E] text-white py-8">
        <div className="container-custom text-center">
          <p className="text-white/60 text-sm mb-2">
            © {new Date().getFullYear()} Nielson Pinheiro - Engenheiro Civil. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Engenheiro Civil - CREA-SP: Em análise | Nielson Pinheiro de Castilho Junior
          </p>
        </div>
      </footer>
    </>
  );
}
