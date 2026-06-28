import { useState } from "react";
import {
  MessageCircle,
  CheckCircle,
  Phone,
  Calculator,
  FileCheck,
  Home,
  Hammer,
  Maximize2,
  ClipboardCheck,
  Users,
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
import { Checkbox } from "@/components/ui/checkbox";

const services = [
  {
    id: "art",
    label: "Anotação de Responsabilidade Técnica (ART)",
    icon: FileCheck,
  },
  { id: "regularizacao", label: "Regularização de Imóveis", icon: Home },
  { id: "reforma", label: "Projetos de Reforma", icon: Hammer },
  { id: "ampliacao", label: "Ampliação de Imóveis", icon: Maximize2 },
  { id: "laudo", label: "Laudos Técnicos", icon: ClipboardCheck },
  { id: "consultoria", label: "Consultoria em Engenharia", icon: Users },
];

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

export function Budget() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    propertySize: "",
    message: "",
  });

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const WHATSAPP_NUMBER = "5565996946861";
  const EMAIL = "nielsin.junior@gmail.com";

  const buildMessage = () => {
    const selectedServiceLabels = selectedServices
      .map((id) => services.find((s) => s.id === id)?.label)
      .filter(Boolean) as string[];

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

    if (selectedServiceLabels.length > 0) {
      message += `\nServiços Desejados:\n`;
      selectedServiceLabels.forEach((label) => {
        message += `✅ ${label}\n`;
      });
    }

    if (formData.message) {
      message += `\nDetalhes do Projeto:\n${formData.message}`;
    }
    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setLastWhatsappUrl(url);
    window.open(url, "_blank");
    setIsSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage();
    const subject = encodeURIComponent("Solicitação de Orçamento - Site");
    const body = encodeURIComponent(message);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setIsSubmitted(true);
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3B6C] to-[#0F1A2E]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-4">
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
      <section className="section-padding bg-white">
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
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F1A2E] mb-4">
                      Redirecionando para o WhatsApp!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      O WhatsApp foi aberto com o resumo do seu orçamento. Caso
                      não tenha aberto automaticamente,{" "}
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
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setLastWhatsappUrl("");
                        setSelectedServices([]);
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
                      Solicitar novo orçamento
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-[#0F1A2E] mb-6">
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

                    {/* Services */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Serviços Desejados *
                      </h3>
                      <p className="text-sm text-gray-500">
                        Selecione um ou mais serviços
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedServices.includes(service.id)
                                ? "border-[#1B3B6C] bg-[#1B3B6C]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Checkbox
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() =>
                                handleServiceToggle(service.id)
                              }
                            />
                            <service.icon className="w-5 h-5 text-[#1B3B6C]" />
                            <span className="text-sm font-medium">
                              {service.label}
                            </span>
                          </div>
                        ))}
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

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                        disabled={selectedServices.length === 0}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="w-full btn-primary flex items-center justify-center gap-2"
                        disabled={selectedServices.length === 0}
                      >
                        <MessageCircle className="w-4 h-4" />
                        E-mail
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
                <div className="bg-[#1B3B6C] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F4C430]/20 rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-[#F4C430]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Orçamento Grátis</h3>
                      <p className="text-sm text-white/70">Sem compromisso</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4C430]" />
                      Análise técnica do projeto
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4C430]" />
                      Proposta detalhada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4C430]" />
                      Prazo de resposta: 24h
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4C430]" />
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
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-[#0F1A2E] mb-2">
                    Ligue para mim
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Atendimento de segunda a sexta, das 8h às 18h.
                  </p>
                  <a
                    href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#1B3B6C] font-medium"
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
