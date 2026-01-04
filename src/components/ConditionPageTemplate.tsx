import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import contactBg from "@/assets/contact-bg.jpg";
import { LucideIcon } from "lucide-react";

export interface ConditionData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  parentService: {
    name: string;
    href: string;
  };
  whatIs: {
    title: string;
    content: string;
  };
  howWeHelp: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  benefits: string[];
}

interface ConditionPageTemplateProps {
  data: ConditionData;
}

export const ConditionPageTemplate = ({ data }: ConditionPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <img 
          src={data.heroImage}
          alt=""
          width={1920}
          height={800}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Overlay removed - text has its own background */}
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center bg-background/90 backdrop-blur-sm rounded-2xl px-8 py-10">
            <p className="text-primary font-medium mb-4">{data.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
              {data.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{data.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  КОНТАКТИ
                </Button>
              </Link>
              <a href="tel:+359887079256">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              {data.whatIs.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{data.whatIs.title.split(" ").slice(-1)}</span>
            </h2>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {data.whatIs.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 md:py-24 bg-deep-navy text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как{" "}
              <span className="text-primary">помагаме?</span>
            </h2>
            <p className="text-center text-white/70 mb-12 text-base sm:text-lg">
              Нашият подход е индивидуален и съобразен с вашите нужди
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.howWeHelp.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Какво ще{" "}
              <span className="gradient-text">постигнете?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-base sm:text-lg">
              Резултатите от работата с нашите специалисти
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <img 
          src={contactBg}
          alt=""
          width={1920}
          height={600}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">Свържете се</span> с нас
              </h2>
              <p className="text-sm text-muted-foreground">
                Направете първата стъпка към по-добро психическо здраве.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName={data.title} buttonVariant="cta" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConditionPageTemplate;
