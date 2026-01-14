import { Instagram, Youtube, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const links = {
    produto: [
      { name: "E-book Starter", href: "#produtos" },
      { name: "Curso Completo", href: "#produtos" },
      { name: "Mentoria Premium", href: "#produtos" },
    ],
    empresa: [
      { name: "Sobre", href: "#sobre" },
      { name: "Depoimentos", href: "#depoimentos" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Termos de Uso", href: "#termos" },
      { name: "Política de Privacidade", href: "#privacidade" },
      { name: "Política de Reembolso", href: "#reembolso" },
    ],
  };

  const socials = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
    { icon: Mail, href: "mailto:contato@digitalpro.com.br", label: "E-mail" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      if (href === "#termos" || href === "#privacidade" || href === "#reembolso") {
        toast({
          title: "Página em construção",
          description: "Esta página estará disponível em breve.",
        });
        return;
      }
      
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (social: typeof socials[0]) => {
    toast({
      title: `Abrindo ${social.label}`,
      description: "Você será redirecionado em instantes...",
    });
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a 
              href="#" 
              className="text-2xl font-display font-bold text-gradient"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Digital Pro
            </a>
            <p className="text-muted-foreground mt-4 text-sm">
              Transformando vidas através da educação digital desde 2019.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onClick={() => handleSocialClick(social)}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-3">
              {links.produto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Digital Pro. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💚 para quem quer mudar de vida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
