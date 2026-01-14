import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import PurchaseModal from "@/components/PurchaseModal";

const CTASection = () => {
  const [showModal, setShowModal] = useState(false);

  const mentoriaProduct = {
    name: "Mentoria Premium",
    price: "997",
    originalPrice: "1.997",
  };

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Vagas limitadas para mentoria</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Está Pronto Para
            <span className="block text-gradient">Mudar Sua Vida?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Não espere o momento perfeito. Comece agora e construa a vida que você sempre sonhou. 
            O melhor momento para começar foi ontem. O segundo melhor é hoje.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => setShowModal(true)}>
              Quero Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            ✓ Garantia de 7 dias &nbsp;&nbsp; ✓ Acesso imediato &nbsp;&nbsp; ✓ Suporte incluso
          </p>
        </div>
      </div>

      <PurchaseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={mentoriaProduct}
      />
    </section>
  );
};

export default CTASection;
