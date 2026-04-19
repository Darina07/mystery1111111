import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SEO";

import { Button } from "@/components/ui/button";
import {
  Brain, Heart, Users,
  Baby, MessageCircle, ClipboardList, Briefcase, Building2, ArrowRight,
  Phone, Mail, MapPin, Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import servicesHeader from "@/assets/services-header.jpg";

const services = [
  {
    icon: Brain,
    title: "Psychological counseling & psychotherapy",
    description: "Individual work with a psychologist to cope with anxiety, depression, stress and other challenges.",
    href: "/en/services/psychological-counseling"
  },
  {
    icon: Heart,
    title: "Family & couples counseling",
    description: "Support for couples and families with communication problems, crises and important decisions.",
    href: "/en/services/family-counseling"
  },
  {
    icon: Baby,
    title: "Child & adolescent counseling",
    description: "Specialized help for children and adolescents with behavioral, emotional and learning difficulties.",
    href: "/en/services/child-counseling"
  },
  {
    icon: Users,
    title: "Group programs",
    description: "Themed groups for addictions, relationships, parenting and personal development.",
    href: "/en/services/group-programs"
  },
  {
    icon: MessageCircle,
    title: "Speech therapy",
    description: "Diagnosis and therapy of speech and language disorders for children and adults.",
    href: "/en/services/speech-therapy"
  },
  {
    icon: ClipboardList,
    title: "Psychodiagnostics",
    description: "Professional assessment of intellectual abilities, personality traits and emotional state.",
    href: "/en/services/psychodiagnostics"
  }
];

const professionalServices = [
  {
    icon: Briefcase,
    title: "Career counseling",
    description: "Professional orientation, career development and interview preparation.",
    href: "/en/services/career-consulting"
  },
  {
    icon: Building2,
    title: "Corporate services",
    description: "Trainings, team building, stress management and organizational consulting for companies.",
    href: "/en/services/corporate-services"
  }
];

const faqItems = [
  {
    question: "How do I choose the right service for me?",
    answer: "At the first consultation we will discuss your needs and goals to determine the most suitable service. You can also call us for a free orientation consultation."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit or credit card and bank transfer. Payment is made after each session or at the start of a package program."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer full online consultations via Viber, WhatsApp, Skype or Google Meet. Online sessions are equally effective and suitable for clients outside Sofia or with busy schedules."
  },
  {
    question: "How long does a session last?",
    answer: "The standard duration of an individual or family consultation is 60 minutes. The first consultation may be slightly longer for getting acquainted and assessing the situation."
  },
  {
    question: "Do you work with children?",
    answer: "Yes, we have specialized child psychologists and speech therapists who work with children from a very early age. We use age-appropriate methods such as play and art therapy."
  },
  {
    question: "Is the information from sessions confidential?",
    answer: "Absolutely. Everything shared during consultations is strictly confidential and protected in accordance with professional ethics and data protection legislation."
  }
];


const Services = () => {
  const faqsForSchema = faqItems.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Services"
        description="Professional psychological services in Sofia — individual counseling, family therapy, child psychology, speech therapy and psychodiagnostics. Book an appointment today."
        url="/en/services"
        keywords="psychological services Sofia, psychotherapy, family counseling, child psychologist, speech therapy, psychodiagnostics"
      />
      <ServiceSchema
        name="Psychological services"
        description="Professional psychological services — individual counseling, family therapy, child psychology, speech therapy and psychodiagnostics"
        url="/en/services"
      />
      <FAQSchema faqs={faqsForSchema} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" }
      ]} />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden">
        <img
          src={servicesHeader}
          alt=""
          width={1920}
          height={800}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/50" />

        <div className="container relative z-10 h-full flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Our services
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
              Professional{" "}
              <span className="text-primary">psychological services</span>
            </h1>
            <p className="text-foreground/70 text-xl">
              Support for every stage of life
            </p>
          </div>
        </div>
      </section>


      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Psychological services
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Core{" "}
              <span className="gradient-text">services</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              We offer a wide range of psychological services for individuals, couples and families.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-lavender" />
            </div>
            <div className="bg-deep-navy rounded-3xl px-10 py-8 flex flex-col items-center gap-4">
              <p className="text-center text-white font-medium uppercase tracking-wide text-lg sm:text-xl">
                Not sure which service is right for you?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="uppercase" asChild>
                  <a href="tel:+359887079256">Call us now</a>
                </Button>
                <Button size="lg" variant="outline" className="uppercase border-white text-white hover:bg-white/10" asChild>
                  <a href="/en/prices">See pricing</a>
                </Button>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-lavender" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              For business
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Professional{" "}
              <span className="gradient-text">development</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Career development services and corporate solutions for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professionalServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              FAQ
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Answers to the most common questions we get from our clients.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl px-6 border border-border/50 shadow-card overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                  }}
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Contact
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Get in{" "}
              <span className="gradient-text">touch</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Have questions? Contact us for a consultation or to book an appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+359 887 079 256", href: "tel:+359887079256" },
                  { icon: Mail, label: "Email", value: "info@dar-psiholog.com", href: "mailto:info@dar-psiholog.com" },
                  { icon: MapPin, label: "Address", value: "18 Kishinev St., Lozenets, Sofia, Bulgaria", href: "https://maps.google.com/?q=Sofia,Bulgaria,Kishinev+18" },
                  { icon: Clock, label: "Working hours", value: "Monday – Sunday | 08:00 – 22:00", href: null as string | null },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3176!3d42.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859f0c0c0c0f%3A0x0!2sKishinev%2018%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1704200000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location of Dar Center — 18 Kishinev St., Lozenets, Sofia"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Get in touch
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="email@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="+359 888 123 456" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="How can we help you?" required />
                </div>
                <Button type="submit" variant="cta" className="w-full uppercase" size="lg">
                  Send inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
