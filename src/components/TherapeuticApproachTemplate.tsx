import { Link, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Users, Target } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import contactBg from "@/assets/contact-bg.jpg";
import suitableForBg from "@/assets/suitable-for-bg.jpg";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema, HealthTopicSchema } from "@/components/SEO";

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
  language?: "bg" | "en";
}

const LABELS = {
  bg: {
    home: "Начало",
    approachesNav: "Терапевтични подходи",
    siteSuffix: "Терапевтични подходи | ДАР Психология",
    bookCta: "ЗАПАЗИ ЧАС",
    callAria: "Обадете се",
    whatIs: "Какво е",
    benefitsOf: "Ползи от",
    suitableForPrefix: "За кого е",
    suitableForAccent: "подходяща",
    processPrefix: "Как протича",
    processAccent: "процесът",
    contactTitle: "Свържете се",
    contactWith: "с нас",
    contactSubtitle: "Направете първата стъпка към по-добро психическо здраве.",
    serviceType: "Психотерапия",
    approachesPath: "/therapeutic-approaches",
    contactPath: "/contact",
    questionMark: "?",
  },
  en: {
    home: "Home",
    approachesNav: "Therapeutic approaches",
    siteSuffix: "Therapeutic approaches | DAR Psychology",
    bookCta: "BOOK A SESSION",
    callAria: "Call us",
    whatIs: "What is",
    benefitsOf: "Benefits of",
    suitableForPrefix: "Who is it",
    suitableForAccent: "for",
    processPrefix: "How does the",
    processAccent: "process work",
    contactTitle: "Contact",
    contactWith: "us",
    contactSubtitle: "Take the first step toward better mental health.",
    serviceType: "Psychotherapy",
    approachesPath: "/en/therapeutic-approaches",
    contactPath: "/en/contact",
    questionMark: "?",
  },
} as const;

export const TherapeuticApproachTemplate = ({
  title,
  subtitle,
  headerImage,
  description,
  benefits,
  suitableFor,
  processSteps,
  language = "bg",
}: TherapeuticApproachProps) => {
  const location = useLocation();
  const currentUrl = `https://darpsychology.com${location.pathname}`;
  const t = LABELS[language];

  const breadcrumbItems = [
    { name: t.home, url: `https://darpsychology.com${language === "en" ? "/en" : "/"}` },
    { name: t.approachesNav, url: `https://darpsychology.com${t.approachesPath}` },
    { name: title, url: currentUrl }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${title} | Терапевтични подходи | ДАР Психология`}
        description={subtitle}
        url={currentUrl}
      />
      <ProfessionalServiceSchema 
        name={title}
        description={subtitle}
        url={currentUrl}
        serviceType="Психотерапия"
      />
      <HealthTopicSchema 
        name={title}
        description={subtitle}
        url={currentUrl}
        mainEntity={description.join(' ').substring(0, 500)}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <img
          src={headerImage}
          alt=""
          width={1920}
          height={600}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
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
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <img 
          src={suitableForBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-deep-navy/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                За кого е <span className="text-primary">подходяща</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {suitableFor.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-white text-lg leading-relaxed">{item}</span>
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
                    className="bg-gradient-to-br from-lavender/10 via-card to-soft-blue/10 rounded-xl p-4 shadow-sm border border-primary/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed pl-11">
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
        <img 
          src={contactBg}
          alt=""
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
              <p className="text-base text-muted-foreground">
                Направете първата стъпка към по-добро психическо здраве.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName={title} buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapeuticApproachTemplate;
