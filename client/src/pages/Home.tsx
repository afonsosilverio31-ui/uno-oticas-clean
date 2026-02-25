import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Glasses, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useUnits } from "@/hooks/use-units";
import { useTestimonials } from "@/hooks/use-testimonials";

// Using native React hooks for the carousel since embla is recommended
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const { data: units, isLoading: loadingUnits } = useUnits();
  const { data: testimonials, isLoading: loadingTestimonials } = useTestimonials();
  
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 5000 })]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Meta tags for SEO targeting "ótica no Tatuapé" - injected via standard react helmet approach if available, but doing it semantically here */}
      <Header />
      <FloatingWhatsApp />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <MapPin className="w-4 h-4" />
                  <span>A Melhor Ótica no Tatuapé</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 font-display">
                  Sua visão merece o <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(184,80%,30%)]">
                    cuidado perfeito
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-balance">
                  Especialistas em saúde visual no coração do Tatuapé. 
                  Lentes de alta tecnologia, armações exclusivas e laboratório digital próprio para entregar seus óculos com precisão.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    onClick={() => scrollTo('unidades')}
                  >
                    Encontrar Unidade Mais Próxima
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full text-base px-8 h-14 border-2 hover:bg-muted transition-all"
                    onClick={() => scrollTo('diferenciais')}
                  >
                    Conhecer Diferenciais
                  </Button>
                </div>
                
                <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-200 overflow-hidden">
                        {/* Fake avatar placeholder using Unsplash random faces */}
                        <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop&crop=faces`} alt="Cliente" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-[#F59E0B]">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span>Mais de 5.000 clientes satisfeitos</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                {/* hero image of person wearing stylish glasses */}
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1000&h=1200&fit=crop" 
                  alt="Óculos de grau modernos no Tatuapé" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-primary w-5 h-5" />
                      Garantia de Adaptação
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Laboratório digital integrado para montagem precisa e adaptação perfeita das suas lentes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="diferenciais" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">Por que escolher a Lumina Ótica?</h2>
              <p className="text-muted-foreground text-lg">
                Combinamos tradição e tecnologia para oferecer a melhor experiência óptica do Tatuapé.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Glasses className="w-8 h-8 text-primary" />,
                  title: "Marcas Exclusivas",
                  desc: "As melhores grifes mundiais de armações de grau e óculos de sol, com certificado de autenticidade."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                  title: "Lentes de Alta Tecnologia",
                  desc: "Trabalhamos com Varilux, Zeiss e Hoya. Medição digital para máxima precisão no seu campo de visão."
                },
                {
                  icon: <Star className="w-8 h-8 text-primary" />,
                  title: "Atendimento Especializado",
                  desc: "Consultores ópticos treinados para ajudar você a encontrar a armação ideal para o seu formato de rosto."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-accent/30 rounded-3xl p-8 hover-elevate border border-transparent hover:border-primary/20"
                >
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* UNITS SECTION */}
        <section id="unidades" className="py-24 bg-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs mb-4">
                  <MapPin className="w-3 h-3" /> Nossas Lojas
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                  Sua ótica no <span className="text-primary">Tatuapé</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Venha tomar um café conosco. Temos espaços confortáveis, estacionamento conveniado e a maior variedade da região.
                </p>
              </div>
            </div>

            {loadingUnits ? (
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map(i => (
                  <div key={i} className="h-[400px] bg-white rounded-3xl border border-border animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {units?.map((unit, idx) => (
                  <motion.div 
                    key={unit.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-border group flex flex-col"
                  >
                    <div className="h-64 bg-slate-100 relative map-container">
                      {/* Google Maps Embed iframe */}
                      <iframe 
                        src={unit.mapUrl} 
                        title={`Mapa da ${unit.name}`}
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    
                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold font-display mb-2">{unit.name}</h3>
                        <p className="text-muted-foreground flex items-start gap-2 mb-6">
                          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{unit.address}</span>
                        </p>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button 
                          className="flex-1 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white gap-2 h-12 rounded-xl shadow-md shadow-[hsl(142,70%,45%)]/20"
                          onClick={() => window.open(`https://wa.me/${unit.whatsappNumber.replace(/\D/g, '')}`, "_blank")}
                        >
                          <MessageCircle className="w-5 h-5" />
                          Falar no WhatsApp
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">O que dizem nossos clientes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A satisfação de quem confia a sua visão à Lumina Ótica no Tatuapé.
              </p>
            </div>

            {loadingTestimonials ? (
              <div className="flex justify-center gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-[350px] h-[250px] bg-accent/20 rounded-3xl animate-pulse shrink-0" />
                ))}
              </div>
            ) : (
              <div className="embla" ref={emblaRef}>
                <div className="embla__container flex cursor-grab active:cursor-grabbing pb-8">
                  {testimonials?.map((testimonial) => (
                    <div className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6" key={testimonial.id}>
                      <div className="bg-background rounded-3xl p-8 border border-border/60 shadow-sm h-full flex flex-col justify-between hover-elevate">
                        <div>
                          <div className="flex text-[#F59E0B] mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? "fill-current" : "text-muted opacity-30"}`} 
                              />
                            ))}
                          </div>
                          <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                            "{testimonial.content}"
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-display text-xl">
                            {testimonial.authorName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{testimonial.authorName}</p>
                            <p className="text-sm text-muted-foreground">Cliente Verificado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary -z-20" />
          {/* subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent background-size-[20px_20px] -z-10" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">Pronto para enxergar o mundo melhor?</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Visite uma de nossas unidades no Tatuapé. Faça seu exame de vista atualizado e escolha a armação que reflete sua personalidade.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-8 text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
              onClick={() => scrollTo('unidades')}
            >
              Agendar Atendimento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
