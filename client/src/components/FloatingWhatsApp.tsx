import { useState } from "react";
import { MessageCircle, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUnits } from "@/hooks/use-units";
import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: units, isLoading } = useUnits();

  // If only one unit, clicking main button could go directly. 
  // But requirement says "unit selector that redirects to correct WhatsApp number"
  // so we always show the selector if they click.

  const handleOpenWhatsApp = (phone: string) => {
    // Sanitize phone number (remove spaces, dashes, etc.)
    const sanitizedPhone = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${sanitizedPhone}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-[hsl(142,70%,45%)] p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold font-display leading-tight">Fale Conosco</h4>
                <p className="text-sm opacity-90">Escolha uma de nossas unidades</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {isLoading ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  Carregando unidades...
                </div>
              ) : units?.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  Nenhuma unidade disponível no momento.
                </div>
              ) : (
                <div className="space-y-1">
                  {units?.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => handleOpenWhatsApp(unit.whatsappNumber)}
                      className="w-full text-left p-3 hover:bg-muted rounded-xl transition-colors flex items-start gap-3 group"
                    >
                      <div className="bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)] p-2 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-foreground">{unit.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="truncate max-w-[180px]">{unit.address}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg shadow-[hsl(142,70%,45%)]/30 flex items-center justify-center hover:shadow-xl transition-all relative group"
        aria-label="Atendimento via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[hsl(142,70%,45%)] opacity-20 group-hover:opacity-40"></span>
        {isOpen ? (
          <X className="w-8 h-8 relative z-10" />
        ) : (
          <MessageCircle className="w-8 h-8 relative z-10" />
        )}
      </motion.button>
    </div>
  );
}
