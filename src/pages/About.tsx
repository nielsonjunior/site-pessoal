import { Link } from 'react-router-dom';
import { CheckCircle, Award, Phone, ArrowRight, MapPin, Mail, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';

// Credenciais reais (sem números inventados — o dono está começando).
const stats = [
  { number: 'CREA', label: 'Registrado no CREA', icon: Award },
  { number: '+12', label: 'Cidades atendidas', icon: MapPin },
  { number: '24h', label: 'Resposta ao orçamento', icon: Clock },
  { number: 'Grátis', label: 'Orçamento sem compromisso', icon: CheckCircle },
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
  'Engenheiro Civil - CREA 5071806455',
  'Atendimento personalizado e humanizado',
  'Orçamento sem compromisso',
  'Prazos rigorosamente cumpridos',
  'Garantia em todos os serviços',
  'Tecnologia atualizada nos projetos',
  'Suporte técnico contínuo',
  'Atendimento em Cáceres-MT e região',
];

export function About() {
  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Sobre - Nielson Pinheiro | Engenheiro Civil em Cáceres-MT"
        description="Conheça Nielson Pinheiro de Castilho Junior, Engenheiro Civil em Cáceres e região. Especialista em projetos, regularização de imóveis, ART e laudos técnicos."
        keywords={[
          'Nielson Pinheiro engenheiro',
          'engenheiro civil Cáceres',
          'engenheiro Nielson',
          'engenharia Cáceres'
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
              Sobre Mim
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nielson Pinheiro de Castilho Junior
            </h1>
            <p className="text-white/70 text-lg">
              Engenheiro Civil em Cáceres e região, oferecendo serviços de qualidade
              com dedicação e compromisso em cada projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#060D1E]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-12 h-12 bg-[#B9F227]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#B9F227]" />
                </div>
                <p className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-sm text-[#93a7c6]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-[#060D1E]">
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
                  alt="Engenheiro civil Nielson Pinheiro em projeto na região de Cáceres-MT"
                  className="w-full h-[500px] object-cover"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full border-4 border-[#B9F227]/60 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-[#b9c8e0] mb-8">
                <p>
                  Sou Nielson Pinheiro de Castilho Junior, Engenheiro Civil apaixonado por
                  transformar projetos em realidade. Atuo em Cáceres e região, oferecendo
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

              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#B9F227]/20 bg-[#B9F227]/[0.08]">
                <div className="w-12 h-12 bg-[#B9F227] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#0a1706]" />
                </div>
                <div>
                  <p className="font-semibold text-white">CREA</p>
                  <p className="text-sm text-[#b9c8e0]">Registro Profissional: 5071806455</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#0A1428]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
              Meus Valores
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Princípios que me guiam
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
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#B9F227]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-[#B9F227]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#93a7c6]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B9F227] mb-4">
                Por Que Me Escolher
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Diferenciais que me destacam
              </h2>
              <p className="text-[#b9c8e0] mb-8">
                Atendo você diretamente, com responsabilidade técnica (ART), registro
                no CREA e compromisso do início ao fim do projeto.
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
                    <div className="w-8 h-8 bg-[#B9F227]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#B9F227]" />
                    </div>
                    <span className="text-[#cbd7e8]">{item}</span>
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
              <div className="rounded-2xl border border-white/10 bg-[#0A1428] p-8 text-white">
                <h3 className="font-display text-2xl font-bold mb-6">
                  Entre em Contato
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#B9F227]" />
                    <a href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9F227] transition-colors">
                      (65) 99694-6861
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#B9F227]" />
                    <a href="mailto:nielsin.junior@gmail.com" className="hover:text-[#B9F227] transition-colors">
                      nielsin.junior@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#B9F227]" />
                    <span className="text-[#b9c8e0]">Cáceres - MT e região</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#B9F227]" />
                    <span className="text-[#b9c8e0]">Seg - Sex: 8h às 18h | Emergências: 24h</span>
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
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como posso ajudar
              a transformar seu projeto em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-8 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
