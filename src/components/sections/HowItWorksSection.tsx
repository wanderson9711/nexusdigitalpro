import { FileText, ShoppingBag, Users, ArrowDown } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Conteúdo Gratuito",
      description: "Atraia pessoas interessadas com conteúdo de valor nas redes sociais. Construa sua audiência sem gastar nada.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      number: "02",
      title: "Produto Digital",
      description: "Transforme seu conhecimento em um produto digital. E-books, cursos, templates que geram renda passiva.",
      color: "from-primary to-emerald-400",
    },
    {
      icon: Users,
      number: "03",
      title: "Comunidade Premium",
      description: "Crie uma comunidade paga com suporte exclusivo. Renda recorrente mensal garantida.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Método</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            3 Passos Para Sua <span className="text-gradient">Liberdade Financeira</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um sistema simples e replicável que qualquer pessoa pode seguir, independente da experiência.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Icon */}
                <div className="relative">
                  <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-foreground" />
                    </div>
                  </div>
                  <span className="absolute -top-4 -right-4 text-6xl font-display font-bold text-muted/30">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left bg-secondary/50 rounded-2xl p-8 border border-border/50 card-hover">
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
