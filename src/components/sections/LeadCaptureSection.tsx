import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "E-book enviado! 🎉",
      description: "Verifique sua caixa de entrada.",
    });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-primary/20 glow-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Gift className="w-4 h-4" />
                  Grátis
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold">
                  E-book: 7 Formas de Ganhar Dinheiro Online em 2024
                </h3>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Estratégias testadas e comprovadas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Passo a passo detalhado
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Acesso imediato por e-mail
                  </li>
                </ul>
              </div>

              {/* Form */}
              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 bg-secondary border-border text-lg"
                    />
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Baixar E-book Grátis
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Seus dados estão seguros. Sem spam, prometemos.
                    </p>
                  </form>
                ) : (
                  <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-2">Pronto!</h4>
                    <p className="text-muted-foreground">
                      Verifique sua caixa de entrada. O e-book está a caminho!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
