import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO, JsonLd } from '@/components/shared';
import { faqPageSchema } from '@/lib/jsonld';
import { faqs, getFAQCategories } from '@/data';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getFAQCategories();

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? faq.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Perguntas Frequentes - Engenharia Civil"
        description="Tire suas dúvidas sobre engenharia civil, ART, regularização de imóveis, reformas e muito mais. Confira nossas respostas!"
        keywords={[
          'perguntas frequentes engenharia',
          'dúvidas ART',
          'FAQ regularização imóveis',
          'perguntas reformas'
        ]}
      />
      <JsonLd data={faqPageSchema(faqs)} />

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
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Tire suas dúvidas sobre os serviços de engenharia civil.
              Se não encontrar o que procura, entre em contato.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#93a7c6]" />
              <input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-[#93a7c6] focus:outline-none focus:ring-2 focus:ring-[#B9F227]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-[#B9F227] text-[#0a1706]'
                  : 'bg-white/5 text-[#cbd7e8] border border-white/10 hover:bg-white/10'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#B9F227] text-[#0a1706]'
                    : 'bg-white/5 text-[#cbd7e8] border border-white/10 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-[#B9F227]/15 text-[#B9F227] rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                    <span className="font-medium text-white">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#93a7c6] flex-shrink-0 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-[#b9c8e0] leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#93a7c6]">
                Nenhuma pergunta encontrada. Tente outra busca ou entre em contato.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-white/70 text-lg">
                Estou pronto para ajudar. Entre em contato e terei
                prazer em esclarecer todas as suas questões.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
            >
              <Link
                to="/orcamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-8 py-4 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5565996946861"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
