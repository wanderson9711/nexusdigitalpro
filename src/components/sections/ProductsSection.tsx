import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      name: "E-book Starter",
      description: "Ideal para quem está começando",
      price: "47",
      originalPrice: "97",
      icon: Zap,
      features: [
        "Guia completo de 150 páginas",
        "10 nichos mais lucrativos",
        "Templates prontos para usar",
        "Suporte por e-mail",
        "Atualizações gratuitas",
      ],
      popular: false,
      cta: "Comprar Agora",
    },
    {
      name: "Curso Completo",
      description: "O caminho mais rápido para resultados",
      price: "297",
      originalPrice: "497",
      icon: Star,
      features: [
        "Tudo do E-book Starter",
        "+40 horas de aulas em vídeo",
        "Comunidade exclusiva",
        "Mentoria em grupo semanal",
        "Bônus: Pack de Templates Premium",
        "Suporte prioritário",
      ],
      popular: true,
      cta: "Quero o Curso",
    },
    {
      name: "Mentoria Premium",
      description: "Acompanhamento individual",
      price: "997",
      originalPrice: "1.997",
      icon: Crown,
      features: [
        "Tudo do Curso Completo",
        "4 calls individuais por mês",
        "Análise do seu negócio",
        "Acesso vitalício",
        "Grupo VIP no WhatsApp",
        "Networking com top alunos",
      ],
      popular: false,
      cta: "Quero Mentoria",
    },
  ];

  return (
    <section id="produtos" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ofertas</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Escolha Seu <span className="text-gradient">Caminho</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Diferentes opções para diferentes momentos. Todos os produtos têm garantia de 7 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                product.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-primary"
                  : "bg-gradient-card border border-border/50"
              } card-hover`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <product.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="mb-6">
                <span className="text-sm text-muted-foreground line-through">R${product.originalPrice}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-display font-bold">{product.price}</span>
                </div>
                <span className="text-sm text-muted-foreground">pagamento único</span>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={product.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {product.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
