import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ProductsSection />
        <TestimonialsSection />
        <LeadCaptureSection />
        <CTASection />
        <AboutSection />
        <FAQSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
