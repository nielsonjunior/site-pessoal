import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone/WhatsApp',
    content: '(16) 99616-6997',
    link: 'tel:+5516996166997',
    linkText: 'Ligar agora',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'nielsin.junior@gmail.com',
    link: 'mailto:nielsin.junior@gmail.com',
    linkText: 'Enviar e-mail',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av. Monte Castelo, 368 - Jardim Proença, Campinas - SP',
    link: 'https://maps.google.com',
    linkText: 'Ver no mapa',
    external: true,
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 8h às 18h',
    extra: 'Emergências: 24 horas',
  },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEO
        title="Contato - Nielson Pinheiro | Engenheiro Civil em Campinas"
        description="Entre em contato com Nielson Pinheiro, Engenheiro Civil em Campinas e região. Atendimento personalizado. Orçamento sem compromisso!"
        keywords={[
          'contato engenheiro civil',
          'engenheiro civil Campinas',
          'Nielson Pinheiro contato',
          'orçamento engenharia Campinas'
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-white/70 text-lg">
              Estamos prontos para atender você. Entre em contato e solicite 
              um orçamento sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#1B3B6C]" />
                </div>
                <h3 className="font-semibold text-[#0F1A2E] mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{info.content}</p>
                {info.extra && (
                  <p className="text-[#F4C430] text-sm font-medium">{info.extra}</p>
                )}
                {info.link && (
                  <a
                    href={info.link}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="text-[#1B3B6C] text-sm font-medium hover:underline inline-block mt-2"
                  >
                    {info.linkText}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F1A2E] mb-4">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Agradecemos seu contato. Retornaremos em breve.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="btn-primary"
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0F1A2E] mb-2">
                      Envie uma Mensagem
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Preencha o formulário abaixo e retornaremos em até 24 horas.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo *</Label>
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
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Assunto</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Assunto da mensagem"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Descreva seu projeto ou dúvida..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-[#25D366] rounded-2xl p-8 text-white mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Fale pelo WhatsApp</h3>
                    <p className="text-white/80">Resposta mais rápida</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Prefere conversar pelo WhatsApp? Clique no botão abaixo e fale 
                  diretamente conosco. Atendimento rápido e personalizado.
                </p>
                <a
                  href="https://wa.me/5516996166997?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#25D366] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all w-full inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Conversa
                </a>
              </div>

              <div className="bg-[#1B3B6C] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Registro Profissional
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F4C430]" />
                    <span>Engenheiro Civil registrado no CREA-SP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F4C430]" />
                    <span>Registro: 1234567890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F4C430]" />
                    <span>Responsabilidade Técnica Garantida</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-[#0F1A2E] mb-4">
              Nossa Localização
            </h2>
            <p className="text-gray-600">
              Atendemos em toda a Grande São Paulo e região metropolitana
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197588469!2d-46.6565!3d-23.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
