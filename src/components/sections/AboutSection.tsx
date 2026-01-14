import { Target, Heart, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Avatar area */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center overflow-hidden">
              <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-8xl font-display font-bold text-primary">A</span>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 p-4 rounded-xl glass animate-float">
              <div className="text-2xl font-display font-bold text-gradient">5+</div>
              <div className="text-xs text-muted-foreground">Anos de Experiência</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-4 rounded-xl glass animate-float" style={{ animationDelay: "-2s" }}>
              <div className="text-2xl font-display font-bold text-gradient">2.5K+</div>
              <div className="text-xs text-muted-foreground">Alunos Transformados</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Quem Está Por Trás <span className="text-gradient">Desse Projeto</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Meu nome é Alex e há 5 anos eu era exatamente como você. Trabalhava demais, ganhava de menos e não via saída.
              </p>
              <p>
                Depois de muito estudo, erros e acertos, descobri um método que me levou de R$0 a múltiplos 5 dígitos por mês trabalhando de casa.
              </p>
              <p>
                Hoje minha missão é mostrar para pessoas como você que é possível sim viver do digital, sem precisar ser um gênio ou ter milhões para investir.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-4 rounded-xl bg-gradient-card border border-border/50 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Foco em Resultados</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-card border border-border/50 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Ensino com Paixão</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-card border border-border/50 text-center">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Método Comprovado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
