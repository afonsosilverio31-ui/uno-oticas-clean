import { Link } from "wouter";
import { Eye, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Eye className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-foreground">
            Lumina <span className="text-primary">Ótica</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('sobre')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Nossa Essência
          </button>
          <button onClick={() => scrollTo('diferenciais')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Diferenciais
          </button>
          <button onClick={() => scrollTo('unidades')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Unidades
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden lg:flex items-center gap-2 rounded-full px-6 border-primary/20 hover:bg-primary/5"
            onClick={() => scrollTo('unidades')}
          >
            <MapPin className="w-4 h-4 text-primary" />
            Lojas no Tatuapé
          </Button>
          <Button 
            className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20"
            onClick={() => {
              // Trigger WhatsApp floating button programmatically if desired, 
              // or just scroll to units. We'll scroll to units for the main CTA.
              scrollTo('unidades');
            }}
          >
            Agendar Exame
          </Button>
        </div>
      </div>
    </header>
  );
}
