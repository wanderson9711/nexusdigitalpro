import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    "Você trabalha demais e ganha de menos",
    "Não sabe por onde começar no digital",
    "Já tentou vários métodos mas nada funcionou",
    "Tem medo de investir e perder dinheiro",
    "Não tem tempo para aprender algo complexo",
  ];

  const solutions = [
    "Método simples e direto ao ponto",
    "Passo a passo testado e comprovado",
    "Resultados reais com esforço real",
    "Começa com investimento mínimo ou zero",
    "Funciona em poucas horas por dia",
  ];

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="problema" className="py-20 md:py-32 bg-background relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Problema</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Você está cansado de ver outros ganhando dinheiro online enquanto você fica parado?
              </h2>
              <p className="text-muted-foreground text-lg">
                Eu sei exatamente como você se sente. Já estive no mesmo lugar, frustrado com promessas vazias e métodos que não funcionam.
              </p>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 transition-colors cursor-default">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">A Solução</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Um caminho claro para você começar a <span className="text-gradient">ganhar dinheiro de verdade</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Criei um sistema que qualquer pessoa pode seguir. Sem complicação, sem enrolação.
              </p>
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:-translate-x-1 transition-all cursor-default">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{solution}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={scrollToProducts}
              className="flex items-center gap-2 text-primary font-semibold cursor-pointer hover:gap-4 transition-all group"
            >
              <span>Descubra como funciona</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
