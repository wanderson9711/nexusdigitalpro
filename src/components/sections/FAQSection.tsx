import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso de experiência prévia para começar?",
      answer: "Não! O método foi criado pensando em iniciantes absolutos. Ensino tudo do zero, passo a passo, de forma simples e prática.",
    },
    {
      question: "Quanto tempo até ver resultados?",
      answer: "Depende da sua dedicação, mas a maioria dos alunos vê os primeiros resultados entre 2 a 4 semanas de aplicação consistente do método.",
    },
    {
      question: "Preciso investir muito dinheiro?",
      answer: "Não. O método pode ser aplicado com investimento mínimo ou até zero. Você vai aprendendo e reinvestindo conforme os resultados aparecem.",
    },
    {
      question: "Como funciona o acesso ao conteúdo?",
      answer: "Após a compra, você recebe acesso imediato à plataforma. As aulas ficam disponíveis 24h por dia, para assistir quando e onde quiser.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Todos os produtos têm garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.",
    },
    {
      question: "O suporte é incluso?",
      answer: "Sim! Você terá acesso ao suporte por e-mail e, dependendo do plano, à comunidade exclusiva e mentorias em grupo.",
    },
    {
      question: "Posso pagar parcelado?",
      answer: "Sim! Aceitamos cartão de crédito em até 12x. Também aceitamos PIX e boleto para pagamento à vista.",
    },
    {
      question: "Funciona no meu nicho?",
      answer: "O método é adaptável para diversos nichos: design, games, IA, marketing, finanças, e muitos outros. Ensinamos você a encontrar o melhor para seu perfil.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-card relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas antes de começar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:glow-primary"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
