import { useState } from "react";
import {
  MessageCircle,
  CheckCircle,
  Phone,
  Mail,
  Loader2,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadWhatsappSchema, leadEmailSchema, validate } from "@/lib/validation";

const propertyTypes = [
  { value: "residencial", label: "Residencial" },
  { value: "comercial", label: "Comercial" },
  { value: "industrial", label: "Industrial" },
  { value: "outro", label: "Outro" },
];

const cities = [
  "Cáceres",
  "Mirassol d'Oeste",
  "Araputanga",
  "São José dos Quatro Marcos",
  "Barra do Bugres",
  "Lambari d'Oeste",
  "Porto Esperidião",
  "Indiavaí",
  "Glória d'Oeste",
  "Salto do Céu",
  "Reserva do Cabaçal",
  "Pontes e Lacerda",
  "Outra",
];

type SubmitStatus = "idle" | "sending" | "whatsapp" | "sent" | "error";

export function Budget() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    propertySize: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "5565996946861";
  const EMAIL = "contato@npcastilho.eng.br";

  const buildMessage = () => {
    const propertyTypeLabel =
      propertyTypes.find((t) => t.value === formData.propertyType)?.label ||
      formData.propertyType;
    const cityLabel =
      cities.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === formData.city,
      ) || formData.city;

    let message = `🏗️ Solicitação de Orçamento\n\n`;
    message += `Nome: ${formData.name}\n`;
    message += `Telefone: ${formData.phone}\n`;
    if (formData.email) message += `E-mail: ${formData.email}\n`;
    if (formData.city) message += `Cidade: ${cityLabel}\n`;
    if (formData.propertyType)
      message += `Tipo de Imóvel: ${propertyTypeLabel}\n`;
    if (formData.propertySize)
      message += `Metragem: ${formData.propertySize} m²\n`;

    if (formData.message) {
      message += `\nDetalhes do Projeto:\n${formData.message}`;
    }
    return message;
  };

  const buildFields = () => {
    const propertyTypeLabel =
      propertyTypes.find((t) => t.value === formData.propertyType)?.label || "";
    const cityLabel =
      cities.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === formData.city,
      ) || formData.city;
    return { propertyTypeLabel, cityLabel };
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const err = validate(leadWhatsappSchema, {
      name: formData.name,
      phone: formData.phone,
    });
    if (err) {
      setErrorMsg(err);
      setStatus("error");
      return;
    }
    setErrorMsg("");
    const message = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setLastWhatsappUrl(url);
    window.open(url, "_blank");
    setStatus("whatsapp");
  };

  // Envia o orçamento por e-mail de verdade (sem mailto), via FormSubmit.
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(leadEmailSchema, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    if (err) {
      setErrorMsg(err);
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    const { propertyTypeLabel, cityLabel } = buildFields();
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        // Sem resposta em 15s, desiste e mostra o erro (o botão não fica preso em "Enviando").
        signal: AbortSignal.timeout(15000),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Solicitação de Orçamento - Site",
          _template: "table",
          Nome: formData.name,
          "E-mail": formData.email,
          Telefone: formData.phone,
          Cidade: cityLabel || "-",
          "Tipo de Imóvel": propertyTypeLabel || "-",
          Metragem: formData.propertySize ? `${formData.propertySize} m²` : "-",
          Detalhes: formData.message || "-",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
      } else {
        // Ex.: o FormSubmit pede ativação do endereço na 1ª mensagem.
        console.warn("FormSubmit:", data);
        setErrorMsg(
          "Não foi possível enviar agora. Tente novamente ou use o WhatsApp.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Falha de conexão. Tente novamente ou use o WhatsApp.",
      );
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEO
        title="Solicitar Orçamento - Engenheiro Civil em Cáceres"
        description="Solicite um orçamento gratuito para serviços de engenharia civil. ART, regularização, reformas, laudos e mais. Resposta em até 24h!"
        keywords={[
          "orçamento engenharia civil",
          "solicitar orçamento engenheiro",
          "preço ART",
          "orçamento regularização imóveis",
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A1D22] to-[#111418]">
        <div className="container-custom">
          <motion.div
            initial={false}
            className="hero-in text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#F28A2E]/20 text-[#F28A2E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Orçamento Grátis
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solicite seu Orçamento
            </h1>
            <p className="text-white/70 text-lg">
              Preencha o formulário abaixo com as informações do seu projeto.
              Retornaremos em até 24 horas com uma proposta personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-[#000000]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg"
              >
                {status === "whatsapp" || status === "sent" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    {status === "sent" ? (
                      <>
                        <h2 className="text-2xl font-bold text-[#111418] mb-4">
                          Recebi a sua mensagem
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                          Vou ler o que você escreveu e te respondo pelo
                          WhatsApp ou pelo e-mail que você deixou.
                        </p>
                        <div className="text-left max-w-xl mx-auto mb-6 rounded-[4px] border-l-4 border-[#F28A2E] bg-[#FDF0E4] px-5 py-4">
                          <p className="font-semibold text-[#111418] mb-2">
                            Para eu fazer o orçamento mais rápido, separe:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                            <li>Fotos do terreno ou do imóvel</li>
                            <li>Matrícula ou escritura e o carnê do IPTU</li>
                            <li>Planta ou projeto, se já tiver</li>
                            <li>O endereço ou a localização no mapa</li>
                          </ul>
                        </div>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Mandei uma mensagem pelo site. Seguem as fotos e os documentos.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mb-4 rounded-[4px] bg-[#25D366] px-5 py-3 font-bold text-white hover:bg-[#128C7E]"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Mandar fotos e documentos no WhatsApp
                        </a>
                        <div />
                      </>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold text-[#111418] mb-4">
                          Abrindo o WhatsApp
                        </h2>
                        <p className="text-gray-600 mb-6">
                          O WhatsApp foi aberto com a sua mensagem. É só tocar em enviar.
                          Caso não tenha aberto automaticamente,{" "}
                          <a
                            href={lastWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] underline font-medium"
                          >
                            clique aqui
                          </a>
                          .
                        </p>
                      </>
                    )}
                    <Button
                      onClick={() => {
                        setStatus("idle");
                        setErrorMsg("");
                        setLastWhatsappUrl("");
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          city: "",
                          propertyType: "",
                          propertySize: "",
                          message: "",
                        });
                      }}
                      className="btn-primary"
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} noValidate>
                    {/* Enter no formulário envia por e-mail (canal principal); o WhatsApp é o botão ao lado. */}
                    <h2 className="text-2xl font-bold text-[#111418] mb-6">
                      Informações do Projeto
                    </h2>

                    {/* Personal Info */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Dados Pessoais
                      </h3>
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
                          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
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
                          <Label htmlFor="city">Cidade *</Label>
                          <Select
                            value={formData.city}
                            onValueChange={(value) =>
                              setFormData((prev) => ({ ...prev, city: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione a cidade" />
                            </SelectTrigger>
                            <SelectContent>
                              {cities.map((city) => (
                                <SelectItem
                                  key={city}
                                  value={city
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                                >
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Informações do Imóvel
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="propertyType">Tipo de Imóvel</Label>
                          <Select
                            value={formData.propertyType}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                propertyType: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              {propertyTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="propertySize">
                            Metragem Aproximada (m²)
                          </Label>
                          <Input
                            id="propertySize"
                            name="propertySize"
                            value={formData.propertySize}
                            onChange={handleChange}
                            placeholder="Ex: 150"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Descrição do Projeto
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="message">Detalhes adicionais</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Descreva seu projeto, necessidades específicas, prazo esperado..."
                          rows={5}
                        />
                      </div>
                    </div>

                    {status === "error" && errorMsg && (
                      <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                        disabled={status === "sending"}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            Enviar por e-mail
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      * Campos obrigatórios. Seus dados estão seguros e não
                      serão compartilhados.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 space-y-6"
              >
                {/* Info Card */}
                <div className="bg-[#1A1D22] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F28A2E]/20 rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-[#F28A2E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Orçamento Grátis</h3>
                      <p className="text-sm text-white/70">Sem compromisso</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F28A2E]" />
                      Análise técnica do projeto
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F28A2E]" />
                      Proposta detalhada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F28A2E]" />
                      Prazo de resposta: 24h
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F28A2E]" />
                      Condições especiais
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-[#25D366] rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Prefere pelo WhatsApp?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Envie suas informações diretamente pelo WhatsApp para um
                    atendimento mais rápido.
                  </p>
                  <a
                    href="https://wa.me/5565996946861?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#25D366] px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all w-full inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Chamar no WhatsApp
                  </a>
                </div>

                {/* Phone Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white mb-2">
                    Ligue para mim
                  </h3>
                  <p className="text-sm text-[#C9CCD2] mb-4">
                    Atendimento de segunda a sexta, das 8h às 18h.
                  </p>
                  <a
                    href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#F28A2E] font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    (65) 99694-6861
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
