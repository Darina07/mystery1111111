import { Check, Phone, Mail, MapPin, Clock, Users, Building2, Euro, Monitor, Brain, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import pricesHeaderImage from "@/assets/prices-header.png";
import specialServicesBg from "@/assets/special-services-bg.jpg";

const pricingItems = [
  {
    icon: Euro,
    title: "Individual & family consultations",
    subtitle: "(in-person)",
    price: "40",
    currency: "EUR",
    duration: "60 minutes",
    features: [
      "Consultation with a psychologist",
      "Psychotherapy",
      "Couples and family counseling",
      "Sex therapy",
      "Child and adolescent counseling",
      "Speech therapy — assessment and therapy",
      "Career counseling",
    ],
    popular: true,
  },
  {
    icon: Monitor,
    title: "Online consultations",
    subtitle: "(phone, Viber, WhatsApp, Skype, Google Meet)",
    price: "35",
    currency: "EUR",
    duration: "60 minutes",
    features: [
      "Individual psychological counseling",
      "Psychotherapy",
      "Couples counseling",
      "Career counseling",
    ],
    popular: false,
  },
  {
    icon: Brain,
    title: "Hypnotherapy",
    subtitle: "",
    price: "45",
    currency: "EUR",
    duration: "60 minutes",
    features: [
      "Standalone therapeutic method",
      "Complementary method for specific topics",
      "Following an initial consultation",
    ],
    popular: false,
  },
  {
    icon: Palette,
    title: "Art therapy & music therapy",
    subtitle: "",
    price: "50",
    currency: "EUR",
    duration: "60 minutes",
    features: [
      "Expressing emotions through creativity",
      "Reducing tension",
      "Supporting emotional balance",
      "Suitable for children, teens and adults",
    ],
    popular: false,
  },
];

const specialServices = [
  {
    icon: Users,
    title: "Group programs",
    description: "Pricing for group programs depends on the group's topic, duration and format (in-person or online).",
    linkText: "Contact us for current groups and pricing",
    href: "/en/contact",
  },
  {
    icon: Building2,
    title: "Corporate services",
    description: "Corporate and business services are agreed individually based on the organization's needs, number of participants and program scope.",
    linkText: "Contact us for a quote",
    href: "/en/contact",
  },
];


const Prices = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Pricing"
        description="Clear and transparent pricing for psychological services at Dar Center, Sofia. Individual consultations from €40, online consultations from €35. See the full price list."
        url="/en/prices"
        keywords="psychologist prices Sofia, cost of psychologist, psychotherapy price, family therapy price, speech therapy price"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Pricing", url: "/en/prices" }
      ]} />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${pricesHeaderImage})` }}
        />

        <div className="container relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-10">
            <p className="text-foreground font-medium tracking-wide uppercase text-sm">
              Pricing
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Clear and{" "}
              <span className="gradient-text">transparent terms</span>
            </h1>
            <p className="text-foreground text-lg sm:text-xl">
              At Dar Psychological & Counseling Center we believe in open and clear
              information about the prices of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingItems.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-2xl p-8 shadow-card transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${
                  item.popular ? "ring-2 ring-primary shadow-glow" : ""
                }`}
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                }}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-grow space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold gradient-text uppercase">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-base text-muted-foreground mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-bold text-primary">
                      {item.price}
                    </span>
                    <span className="text-muted-foreground">
                      {item.currency} / {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 flex-grow">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-base text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="cta" className="w-full uppercase mt-auto" size="lg" asChild>
                    <Link to="/en/contact">Contact us</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Consultation Note */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-lavender" />
            </div>
            <div className="bg-deep-navy rounded-full px-8 py-4">
              <p className="text-center text-white font-medium uppercase tracking-wide text-base">
                Consultations in English are available for an additional fee of <span className="text-lg font-bold text-accent">+€10</span> on top of the listed price.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-lavender" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${specialServicesBg})` }}
        />
        <div className="absolute inset-0 bg-background/70" />

        <div className="container relative z-10 px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {specialServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl p-5 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col h-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                }}
              >
                <div className="mb-4 md:mb-6 flex-grow">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg md:text-2xl font-semibold gradient-text uppercase">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Button variant="cta" className="w-full uppercase mt-auto text-xs md:text-sm py-2 md:py-3" asChild>
                  <Link to={service.href}>{service.linkText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
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
              Have questions about pricing? Contact us for a consultation or to book an appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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

            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6">
                ASK US
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
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="How can we help you?" />
                </div>
                <Button variant="cta" size="lg" className="w-full uppercase">
                  SEND
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

export default Prices;
