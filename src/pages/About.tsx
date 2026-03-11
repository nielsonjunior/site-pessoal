import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Building2, Phone, ArrowRight, MapPin, Mail, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';

const stats = [
  { number: '10+', label: 'Anos de Experiência', icon: Award },
  { number: '500+', label: 'Projetos Entregues', icon: Building2 },
  { number: '100%', label: 'Clientes Satisfeitos', icon: Users },
  { number: '15+', label: 'Cidades Atendidas', icon: MapPin },
];

const values = [
  {
    title: 'Excelência Técnica',
    description: 'Compromisso com a qualidade e precisão em cada projeto executado.',
  },
  {
    title: 'Transparência',
    description: 'Comunicação clara e honesta em todas as etapas do processo.',
  },
  {
    title: 'Compromisso',
    description: 'Cumprimento rigoroso de prazos e responsabilidades assumidas.',
  },
  {
    title: 'Inovação',
    description: 'Uso de tecnologias modernas e técnicas atualizadas.',
  },
];

const differentials = [
  'Engenheiro Civil - CREA-SP em análise',
  'Atendimento personalizado e humanizado',
  'Orçamento sem compromisso',
  'Prazos rigorosamente cumpridos',
  'Garantia em todos os serviços',
  'Tecnologia atualizada nos projetos',
  'Suporte técnico contínuo',
  'Atendimento em Campinas e região',
];

export function About() {
  return (
    <>
      <SEO
        title="Sobre - Nielson Pinheiro | Engenheiro Civil em Campinas"
        description="Conheça Nielson Pinheiro de Castilho Junior, Engenheiro Civil em Campinas e região. Especialista em projetos, regularização de imóveis, ART e laudos técnicos."
        keywords={[
          'Nielson Pinheiro engenheiro',
          'engenheiro civil Campinas',
          'engenheiro Nielson',
          'engenharia Campinas'
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
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nielson Pinheiro de Castilho Junior
            </h1>
            <p className="text-white/70 text-lg">
              Engenheiro Civil em Campinas e região, oferecendo serviços de qualidade 
              com dedicação e compromisso em cada projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#1B3B6C]" />
                </div>
                <p className="text-3xl font-bold text-[#1B3B6C] mb-1">{stat.number}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about-detail.jpg"
                  alt="Engenheiro Civil trabalhando"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#F4C430] rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Sou Nielson Pinheiro de Castilho Junior, Engenheiro Civil apaixonado por 
                  transformar projetos em realidade. Atuo em Campinas e região, oferecendo 
                  serviços de engenharia civil com foco em qualidade, segurança e satisfação 
                  dos meus clientes.
                </p>
                <p>
                  Minha missão é proporcionar soluções técnicas eficientes para regularização 
                  de imóveis, ART, reformas, ampliações e laudos técnicos. Cada projeto é 
                  tratado com dedicação exclusiva, garantindo resultados que atendam às 
                  necessidades e expectativas dos clientes.
                </p>
                <p>
                  Estou sempre em busca de atualização profissional e utilizo as melhores 
                  práticas e tecnologias do mercado para entregar trabalhos de excelência, 
                  sempre respeitando normas técnicas e prazos estabelecidos.
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F4C430]/10 rounded-xl">
                <div className="w-12 h-12 bg-[#F4C430] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#0F1A2E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F1A2E]">CREA-SP</p>
                  <p className="text-sm text-gray-600">Registro Profissional: Em análise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Princípios que nos Guian
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#1B3B6C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-[#1B3B6C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F1A2E] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#F4C430]/20 text-[#1B3B6C] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Por Que Nos Escolher
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
                Diferenciais que nos Destacam
              </h2>
              <p className="text-gray-600 mb-8">
                Nossa equipe de engenheiros civis altamente qualificados está preparada 
                para atender às suas necessidades com profissionalismo e dedicação.
              </p>

              <div className="space-y-4">
                {differentials.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-[#1B3B6C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-[#1B3B6C] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Entre em Contato
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#F4C430]" />
                    <a href="tel:+5516996166997" className="hover:text-[#F4C430] transition-colors">
                      (16) 99616-6997
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#F4C430]" />
                    <a href="mailto:nielsin.junior@gmail.com" className="hover:text-[#F4C430] transition-colors">
                      nielsin.junior@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#F4C430]" />
                    <span>Av. Monte Castelo, 368 - Campinas/SP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#F4C430]" />
                    <span>Seg - Sex: 8h às 18h | Emergências: 24h</span>
                  </div>
                </div>
                <Link
                  to="/orcamento"
                  className="btn-accent w-full inline-flex items-center justify-center gap-2"
                >
                  Fale Comigo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#F4C430] to-[#E5B520]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-[#0F1A2E]/80 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como podemos ajudar 
              a transformar seu projeto em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="bg-[#0F1A2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1B3B6C] transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/orcamento"
                className="bg-white text-[#0F1A2E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
