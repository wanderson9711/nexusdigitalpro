import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas Mendes",
      role: "Designer Freelancer",
      content: "Em 3 meses saí de R$0 para R$4.500/mês vendendo templates. O método é simples e funciona.",
      avatar: "LM",
      rating: 5,
    },
    {
      name: "Ana Carolina",
      role: "Criadora de Conteúdo",
      content: "Finalmente entendi como monetizar minha audiência. Hoje tenho uma comunidade com 200+ membros pagantes.",
      avatar: "AC",
      rating: 5,
    },
    {
      name: "Pedro Silva",
      role: "Ex-CLT",
      content: "Larguei meu emprego depois de 6 meses. Hoje faturo mais do que ganhava trabalhando 44h/semana.",
      avatar: "PS",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Estudante",
      content: "Comecei enquanto estudava. Com 2h por dia consegui minha primeira venda em 2 semanas.",
      avatar: "JC",
      rating: 5,
    },
    {
      name: "Rafael Oliveira",
      role: "Empreendedor",
      content: "Já tinha tentado de tudo. Esse foi o único método que me deu resultado consistente.",
      avatar: "RO",
      rating: 5,
    },
    {
      name: "Mariana Santos",
      role: "Mãe Solo",
      content: "Com pouco tempo disponível consegui criar uma renda extra que virou minha renda principal.",
      avatar: "MS",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resultados</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            O Que Nossos <span className="text-gradient">Alunos Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de pessoas que decidiram mudar de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 relative z-10">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 rounded-2xl bg-gradient-card border border-border/50">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient">2.547</div>
            <div className="text-muted-foreground mt-2">Alunos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient">92%</div>
            <div className="text-muted-foreground mt-2">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient">R$850K+</div>
            <div className="text-muted-foreground mt-2">Faturados por Alunos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient">4.9★</div>
            <div className="text-muted-foreground mt-2">Nota Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
