import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchVideo = () => {
    toast({
      title: "Vídeo em breve! 🎬",
      description: "Estamos preparando um conteúdo incrível para você.",
    });
    scrollToHowItWorks();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm animate-fade-up cursor-pointer hover:bg-muted/30 transition-colors" onClick={scrollToProducts}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">+2.500 alunos já transformaram suas vidas</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ganhe Dinheiro Online
            <span className="block text-gradient">Do Zero ao Primeiro Mil</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Aprenda a criar renda através de jogos, design, IA e produtos digitais. 
            Método comprovado que funciona mesmo sem experiência prévia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToProducts}>
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={handleWatchVideo}>
              <Play className="w-4 h-4" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => document.getElementById("depoimentos")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">2.5K+</div>
              <div className="text-sm text-muted-foreground mt-1">Alunos Ativos</div>
            </div>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => document.getElementById("depoimentos")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">R$850K</div>
              <div className="text-sm text-muted-foreground mt-1">Faturados pelos Alunos</div>
            </div>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => document.getElementById("depoimentos")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">4.9★</div>
              <div className="text-sm text-muted-foreground mt-1">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" })}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
