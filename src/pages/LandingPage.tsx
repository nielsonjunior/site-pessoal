import { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { leadWhatsappSchema, validate } from '@/lib/validation';

const WHATSAPP_NUMBER = '5565996946861';
const EMAIL = 'contato@npcastilho.eng.br';

const services = [
  {
    title: 'ART',
    description: 'O documento do CREA que a prefeitura, o banco e o condomínio pedem',
  },
  {
    title: 'Regularização',
    description: 'Habite-se, construção no documento e imóvel no seu nome',
  },
  {
    title: 'Reformas',
    description: 'Projeto, orçamento e ART para reformar sem risco',
  },
  {
    title: 'Laudos',
    description: 'Rachadura, infiltração, vistoria e avaliação do imóvel',
  },
];

export function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<'whatsapp' | 'email' | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [sending, setSending] = useState(false);
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
    const err = validate(leadWhatsappSchema, {
      name: formData.name,
      phone: formData.phone,
    });
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg('');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank');
    setSubmitType('whatsapp');
    setIsSubmitted(true);
  };

  // Envia por e-mail de verdade (via FormSubmit), sem abrir cliente de e-mail (mailto).
  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(leadWhatsappSchema, {
      name: formData.name,
      phone: formData.phone,
    });
    if (err) {
      setErrorMsg(err);
      return;
    }
    setSending(true);
    setErrorMsg('');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        // Sem resposta em 15s, desiste e mostra o erro (o botão não fica preso em "Enviando").
        signal: AbortSignal.timeout(15000),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Solicitação de Orçamento - Landing',
          _template: 'table',
          Nome: formData.name,
          Telefone: formData.phone,
          Cidade: formData.city || '-',
          Serviço: formData.service || '-',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setSubmitType('email');
        setIsSubmitted(true);
      } else {
        setErrorMsg('Não foi possível enviar agora. Tente pelo WhatsApp.');
      }
    } catch {
      setErrorMsg('Falha de conexão. Tente pelo WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-[#000000] text-white">
      <SEO
        title="Engenheiro Civil Cáceres MT - Nielson Pinheiro | Orçamento Grátis"
        description="Engenheiro civil em Cáceres-MT. Nielson Pinheiro: casa nova, reforma, regularização de imóveis, laudos e ART."
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
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={false}
              className="hero-in"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engenheiro Civil em Cáceres-MT
              </h1>

              <p className="text-white/80 text-lg mb-6">
                Casa nova, reforma, regularização do imóvel, laudos e ART.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#orcamento"
                  className="btn-accent inline-flex items-center justify-center gap-2 text-lg"
                >
                  Pedir orçamento
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
              initial={false}
              className="hero-in hero-in-delay bg-white rounded-2xl p-8 shadow-xl"
              id="orcamento"
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] mb-2">
                    {submitType === 'whatsapp' ? 'Abrindo o WhatsApp' : 'Recebi a sua mensagem'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {submitType === 'whatsapp'
                      ? 'O WhatsApp foi aberto com a sua mensagem. É só tocar em enviar.'
                      : 'Vou ler o que você escreveu e te respondo pelo WhatsApp ou pelo e-mail que você deixou. Se tiver fotos do imóvel ou documentos, pode mandar no WhatsApp.'}
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setSubmitType(null); }}
                    className="text-[#1A1D22] underline text-sm"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#111418] mb-2">
                    Pedir orçamento
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Deixe seu contato que eu te respondo.
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
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A1D22] focus:border-transparent"
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

                    {errorMsg && (
                      <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button
                        type="submit"
                        onClick={handleWhatsApp}
                        disabled={sending}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleEmail}
                        disabled={sending}
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        {sending ? 'Enviando...' : 'E-mail'}
                      </Button>
                    </div>

                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#0B0C0F]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              O que eu faço
            </h2>
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
                <p className="text-[#A7ABB2] text-sm mb-4">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
