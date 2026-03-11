import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({ 
  phoneNumber = '5516996166997',
  message = 'Olá! Gostaria de solicitar um orçamento para serviços de engenharia civil.' 
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    // Hide tooltip after 10 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="bg-white rounded-xl shadow-xl p-4 max-w-xs mb-2 relative"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-700 pr-4">
                👋 Olá! Precisa de um orçamento? Fale conosco pelo WhatsApp!
              </p>
              <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden mb-2"
            >
              {/* Header */}
              <div className="bg-[#128C7E] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Nielson - Engenheiro Civil</p>
                    <p className="text-white/70 text-xs">Online agora</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Content */}
              <div className="p-4 bg-[#E5DDD5] min-h-[200px]">
                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
                  <p className="text-sm text-gray-700">
                    Olá! Como posso ajudar você hoje? 😊
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-3">Opções rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`${whatsappUrl}&text=${encodeURIComponent('Gostaria de solicitar um orçamento')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#128C7E]/10 text-[#128C7E] px-3 py-2 rounded-full hover:bg-[#128C7E] hover:text-white transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                  <a
                    href={`${whatsappUrl}&text=${encodeURIComponent('Preciso de informações sobre ART')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#128C7E]/10 text-[#128C7E] px-3 py-2 rounded-full hover:bg-[#128C7E] hover:text-white transition-colors"
                  >
                    Informações sobre ART
                  </a>
                  <a
                    href={`${whatsappUrl}&text=${encodeURIComponent('Preciso regularizar meu imóvel')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#128C7E]/10 text-[#128C7E] px-3 py-2 rounded-full hover:bg-[#128C7E] hover:text-white transition-colors"
                  >
                    Regularização
                  </a>
                </div>
              </div>

              {/* Start Chat Button */}
              <div className="p-4 bg-white border-t border-gray-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Conversa
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors whatsapp-pulse ${
            isOpen ? 'bg-gray-600' : 'bg-[#25D366] hover:bg-[#128C7E]'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </motion.button>
      </div>
    </>
  );
}
