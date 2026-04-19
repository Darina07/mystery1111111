import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Brain, FileText, Target, Users, Baby, GraduationCap, Heart, Check, ClipboardList, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import psychodiagnosticsHeader from "@/assets/psychodiagnostics-header.jpg";
import psychodiagnosticsHeaderBg from "@/assets/psychodiagnostics-header-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";

const targetAudience = [
  { name: "children & adolescents", icon: Baby },
  { name: "adults", icon: Users },
  { name: "families", icon: Heart },
  { name: "professional sphere", icon: GraduationCap },
];

const assessmentTypes = [
  { icon: Brain, title: "Cognitive assessment", description: "evaluation of intellectual abilities, memory, attention and thinking" },
  { icon: Heart, title: "Emotional assessment", description: "exploring emotional state, anxiety and depression" },
  { icon: Users, title: "Personality assessment", description: "analysis of personality traits, behavioral patterns and coping styles" },
  { icon: Baby, title: "Child development", description: "developmental and school readiness assessment" },
  { icon: GraduationCap, title: "Educational assessment", description: "diagnostics of specific learning difficulties" },
  { icon: Target, title: "Career orientation", description: "career counseling and professional selection" },
];

const whenUseful = [
  "you need an objective evaluation of cognitive abilities",
  "you seek clarity about your emotional state",
  "your child has school or behavioral difficulties",
  "suspected specific learning difficulties",
  "an assessment is needed for legal or administrative procedures",
  "you seek career orientation or counseling",
  "an evaluation is needed before or during therapy",
];

const processSteps = [
  { icon: FileText, title: "Initial consultation", description: "exploring the issue and defining assessment goals" },
  { icon: ClipboardList, title: "Test administration", description: "applying standardized psychological instruments" },
  { icon: Brain, title: "Analysis", description: "processing and interpreting the results" },
  { icon: Lightbulb, title: "Feedback", description: "detailed discussion of the results and recommendations" },
  { icon: Shield, title: "Written report", description: "official psychological report when needed" },
];

const benefits = [
  "a clear, objective picture of psychological functioning",
  "understanding of strengths and areas to develop",
  "concrete recommendations for support and intervention",
  "a basis for planning therapy or learning",
  "official documentation when needed",
  "career orientation and planning",
];

const Psychodiagnostics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Psychological Assessment | Dar Center"
        description="Professional psychological assessment. Cognitive, emotional and personality evaluation for children and adults."
        url="/en/services/psychodiagnostics"
        keywords="psychological assessment, IQ test, personality test, diagnostics"
      />
      <ProfessionalServiceSchema name="Psychological Assessment" description="Professional psychological diagnostics." url="/en/services/psychodiagnostics" serviceType="Psychological assessment" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Psychological Assessment", url: "/en/services/psychodiagnostics" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${psychodiagnosticsHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Professional psychological evaluation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text">Psychological Assessment</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">In-depth, objective evaluation of cognitive, emotional and personality characteristics using standardized methods</p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2" asChild><Link to="/en/contact">CONTACT US</Link></Button>
              <a href="tel:+359887079256" aria-label="Call us"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              Psychological assessment is the systematic evaluation of mental functions, abilities and personality characteristics. At "Dar" Center we use modern, validated and reliable psychological instruments to provide accurate and useful information about your or your child's functioning.
            </p>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"><span className="gradient-text">Who is it for?</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {targetAudience.map((item) => (
                  <div key={item.name} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center border border-primary/20">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"><item.icon className="h-7 w-7 text-primary" /></div>
                    <p className="text-foreground font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${psychodiagnosticsHeader})` }} />
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Types of <span className="gradient-text">assessment</span></h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {assessmentTypes.map((t, i) => (
                <div key={i} className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"><t.icon className="h-7 w-7 text-primary" /></div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-base">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">When is <span className="gradient-text">assessment helpful?</span></h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {whenUseful.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-primary rounded-full flex items-center justify-center"><Check className="h-4 w-4 text-primary-foreground" /></div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${psychodiagnosticsHeader})` }} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">How does <span className="gradient-text">the process work?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-sm border border-border md:text-center relative flex md:flex-col items-center gap-3 md:gap-0">
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full items-center justify-center text-primary-foreground text-xs font-bold">{i + 1}</div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 md:mx-auto md:mb-3 md:mt-2 bg-primary/10 rounded-full flex items-center justify-center"><step.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" /></div>
                  <h3 className="text-base md:text-lg font-heading font-semibold text-foreground md:mb-2">{step.title}</h3>
                  <p className="hidden md:block text-muted-foreground text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">What does <span className="gradient-text">assessment provide?</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"><Brain className="h-4 w-4 text-primary-foreground" /></div>
                  <p className="text-foreground font-medium text-base">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide"><span className="gradient-text">Get in touch</span></h2>
              <p className="text-base text-muted-foreground">Schedule your psychological assessment.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Psychological Assessment" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Psychodiagnostics;
