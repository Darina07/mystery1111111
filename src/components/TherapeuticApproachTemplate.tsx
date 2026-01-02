import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Users, Target } from "lucide-react";
import { LucideIcon } from "lucide-react";

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
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                За кого е <span className="gradient-text">подходящ</span>?
              </h2>
            </div>
            <div className="bg-gradient-to-br from-lavender/10 via-background to-soft-blue/10 rounded-2xl p-8 border border-primary/10">
              <ul className="space-y-4">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Как протича <span className="gradient-text">процесът</span>?
                </h2>
              </div>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default TherapeuticApproachTemplate;
