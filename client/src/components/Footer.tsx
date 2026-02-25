import { Eye, MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { useUnits } from "@/hooks/use-units";

export function Footer() {
  const { data: units } = useUnits();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Lumina <span className="text-primary">Ótica</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A sua ótica de confiança no Tatuapé. Cuidando da sua visão com tecnologia de ponta, 
              marcas exclusivas e atendimento personalizado que você merece.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Nossas Unidades</h4>
            <ul className="space-y-4">
              {units?.map(unit => (
                <li key={unit.id} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-sm mb-1">{unit.name}</span>
                    <span className="block text-xs text-slate-400 leading-snug">{unit.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <span className="block text-white font-medium">Seg a Sex</span>
                  <span className="text-slate-400">09:00 - 19:00</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <span className="block text-white font-medium">Sábados</span>
                  <span className="text-slate-400">09:00 - 15:00</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Agendar Exame de Vista</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ver Coleção de Grau</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ver Coleção Solar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lentes de Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Lumina Ótica Tatuapé. Todos os direitos reservados.</p>
          <p>
            Desenvolvido para <span className="text-primary font-medium">Referência em Ótica no Tatuapé</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
