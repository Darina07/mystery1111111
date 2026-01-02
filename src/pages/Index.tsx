import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { TherapeuticApproachesSection } from "@/components/TherapeuticApproachesSection";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Business />
        <TherapeuticApproachesSection />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
