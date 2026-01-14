import { Rocket, Clock, Lightbulb, TrendingUp, Shield, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Resultados Reais",
      description: "Nossos alunos faturam de R$500 a R$10.000+ por mês aplicando o método.",
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Trabalhe de onde quiser, na hora que quiser. Você define seus horários.",
    },
    {
      icon: Lightbulb,
      title: "Sem Experiência Prévia",
      description: "Método feito para iniciantes. Ensino tudo do absoluto zero.",
    },
    {
      icon: TrendingUp,
      title: "Escalável",
      description: "Comece pequeno e escale conforme sua evolução. Sem limite de ganhos.",
    },
    {
      icon: Shield,
      title: "Baixo Risco",
      description: "Investimento inicial mínimo. Teste antes de escalar.",
    },
    {
      icon: Sparkles,
      title: "Atualizado",
      description: "Conteúdo sempre atualizado com as melhores estratégias do momento.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefícios</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Por Que Este Método <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Diferente de tudo que você já viu. Um sistema pensado para pessoas reais com rotinas reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
