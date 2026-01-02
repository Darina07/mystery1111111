import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Users, Target } from "lucide-react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import contactBg from "@/assets/contact-bg.jpg";

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface TherapeuticApproachProps {
  title: string;
  subtitle: string;
  headerImage: string;
  description: string[];
  benefits: Benefit[];
  suitableFor: string[];
  processSteps?: ProcessStep[];
}

export const TherapeuticApproachTemplate = ({
  title,
  subtitle,
  headerImage,
  description,
  benefits,
  suitableFor,
  processSteps,
}: TherapeuticApproachProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />

        <div className="container relative z-10 pt-32 pb-20 min-h-[50vh] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  ЗАПАЗИ ЧАС
                </Button>
              </Link>
              <a href="tel:+359887079256" aria-label="Обадете се">
                <Button variant="hero-outline" size="lg">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container py-4">
        <PageBreadcrumb 
          items={[
            { label: "Терапевтични подходи", href: "/therapeutic-approaches" },
            { label: title }
          ]} 
        />
      </div>

      {/* Description Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Какво е <span className="gradient-text">{title}</span>?
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Ползи от <span className="gradient-text">{title.toLowerCase()}</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-lavender/5 via-card to-soft-blue/5 rounded-2xl p-6 shadow-md border border-primary/10 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-16 md:py-20 bg-deep-navy text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                За кого е <span className="text-primary">подходящ</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {suitableFor.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Как протича <span className="gradient-text">процесът</span>?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 shadow-sm border border-border"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-base font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Име" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Фамилия" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Имейл" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="Съобщение" 
                    rows={4}
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                  <Button type="submit" variant="hero" size="lg" className="px-10">
                    Изпрати
                  </Button>
                  
                  <a 
                    href="tel:+359887079256" 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
                    aria-label="Обадете се на +359 887 079 256"
                  >
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapeuticApproachTemplate;
