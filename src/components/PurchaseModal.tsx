import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, CreditCard, Smartphone, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    originalPrice: string;
  } | null;
}

const PurchaseModal = ({ isOpen, onClose, product }: PurchaseModalProps) => {
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | null>(null);
  const { toast } = useToast();

  const pixCode = "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890";

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Preencha todos os campos",
        description: "Nome e e-mail são obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    setStep("payment");
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      toast({
        title: "Selecione um método",
        description: "Escolha PIX ou Cartão para continuar.",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "pix") {
      navigator.clipboard.writeText(pixCode);
      toast({
        title: "Código PIX copiado! 📋",
        description: "Cole no seu app de pagamento.",
      });
    }

    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Código copiado!",
      description: "Cole no seu aplicativo de banco.",
    });
  };

  const handleClose = () => {
    setStep("form");
    setFormData({ name: "", email: "", phone: "" });
    setPaymentMethod(null);
    onClose();
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de fazer o pagamento do ${product?.name}. Meu e-mail: ${formData.email}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">
                Finalizar Compra
              </DialogTitle>
              <DialogDescription>
                {product.name} - <span className="text-primary font-bold">R${product.price}</span>
                <span className="text-muted-foreground line-through ml-2">R${product.originalPrice}</span>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitForm} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp (opcional)</Label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg">
                Continuar para Pagamento
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </form>
          </>
        )}

        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">
                Escolha o Pagamento
              </DialogTitle>
              <DialogDescription>
                Total: <span className="text-primary font-bold text-lg">R${product.price}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <button
                onClick={() => setPaymentMethod("pix")}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  paymentMethod === "pix"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">PIX</div>
                  <div className="text-sm text-muted-foreground">Aprovação instantânea</div>
                </div>
                <div className="text-primary font-bold">5% OFF</div>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  paymentMethod === "card"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">Cartão de Crédito</div>
                  <div className="text-sm text-muted-foreground">Até 12x sem juros</div>
                </div>
              </button>

              {paymentMethod === "pix" && (
                <div className="p-4 rounded-xl bg-secondary border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Código PIX Copia e Cola:</p>
                  <div className="flex gap-2">
                    <code className="flex-1 p-2 bg-background rounded text-xs break-all">
                      {pixCode.slice(0, 30)}...
                    </code>
                    <Button variant="outline" size="sm" onClick={copyPixCode}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              <Button onClick={handlePayment} variant="hero" className="w-full" size="lg">
                {paymentMethod === "pix" ? "Já Fiz o PIX" : "Pagar com Cartão"}
              </Button>

              <button
                onClick={() => setStep("form")}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Voltar
              </button>
            </div>
          </>
        )}

        {step === "success" && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Check className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-display font-bold mb-2">
              Compra Confirmada! 🎉
            </h3>

            <p className="text-muted-foreground mb-6">
              {formData.name}, seu acesso ao <strong>{product.name}</strong> foi liberado!
              <br />
              Enviamos os detalhes para <strong>{formData.email}</strong>
            </p>

            <div className="space-y-3">
              <Button variant="hero" className="w-full" size="lg" onClick={openWhatsApp}>
                <ExternalLink className="w-4 h-4" />
                Acessar pelo WhatsApp
              </Button>

              <Button variant="outline" className="w-full" onClick={handleClose}>
                Fechar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
