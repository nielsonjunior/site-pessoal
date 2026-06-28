import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-[#1B3B6C]" id="depoimentos">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Meus{' '}
            <span className="text-[#F4C430]">Clientes Dizem</span>
          </h2>
          <p className="text-white/70 text-lg">
            A satisfação dos meus clientes é o meu maior orgulho. 
            Confira alguns depoimentos de quem já confiou no meu trabalho.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#F4C430] rounded-full flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-[#0F1A2E]" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 pt-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-[#0F1A2E] text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                  <p className="text-[#1B3B6C] text-sm mt-1">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1B3B6C] hover:bg-[#1B3B6C] hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#1B3B6C] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1B3B6C] hover:bg-[#1B3B6C] hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Avaliação Média' },
            { value: '500+', label: 'Clientes Atendidos' },
            { value: '98%', label: 'Taxa de Recomendação' },
            { value: '0', label: 'Reclamações' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#F4C430]">{stat.value}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
