import { Check, Phone, Mail, MapPin, Clock, Users, Building2, Euro, Monitor, Brain, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import pricesHeaderImage from "@/assets/prices-header.png";
import specialServicesBg from "@/assets/special-services-bg.jpg";

const pricingItems = [
  {
    icon: Euro,
    title: "Индивидуални и семейни консултации",
    subtitle: "(присъствено)",
    price: "40",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Консултация с психолог",
      "Психотерапия",
      "Консултиране за двойки и семейства",
      "Работа със сексолог",
      "Детско и юношеско консултиране",
      "Логопед – диагностика и терапия",
      "Кариерно консултиране",
    ],
    popular: true,
  },
  {
    icon: Monitor,
    title: "Онлайн консултации",
    subtitle: "(телефон, Viber, WhatsApp, Skype, Google Meet)",
    price: "35",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Индивидуално психологично консултиране",
      "Психотерапия",
      "Консултиране за двойки",
      "Кариерно консултиране",
    ],
    popular: false,
  },
  {
    icon: Brain,
    title: "Хипнотерапия",
    subtitle: "",
    price: "45",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Самостоятелен терапевтичен метод",
      "Допълващ метод при определени теми",
      "След предварителна консултация",
    ],
    popular: false,
  },
  {
    icon: Palette,
    title: "Арт терапия и музикотерапия",
    subtitle: "",
    price: "50",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Изразяване на емоции чрез творчество",
      "Намаляване на напрежението",
      "Подкрепа на емоционалния баланс",
      "Подходящо за деца, юноши и възрастни",
    ],
    popular: false,
  },
];

const specialServices = [
  {
    icon: Users,
    title: "Групови програми",
    description: "Цените за групови програми се определят според темата на групата, продължителността и формата (присъствено или онлайн).",
    linkText: "Свържете се с нас за актуални групи и цени",
    href: "/services/group-programs",
  },
  {
    icon: Building2,
    title: "Корпоративни услуги",
    description: "Корпоративните и бизнес услуги се договарят индивидуално според нуждите на организацията, броя участници и обхвата на програмата.",
    linkText: "Свържете се с нас за оферта",
    href: "/services/corporate-services",
  },
];

const breadcrumbItems = [
  { label: "Начало", href: "/" },
  { label: "Цени" },
];

const Prices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${pricesHeaderImage})` }}
        />
        
        <div className="container relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-10">
            <p className="text-foreground font-medium tracking-wide uppercase text-sm">
              Цени
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Ясни и{" "}
              <span className="gradient-text">прозрачни условия</span>
            </h1>
            <p className="text-foreground text-lg">
              В Психологичен и консултативен център „Дар" държим на открита и ясна
              информация за цените на нашите услуги.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-16 bg-secondary/30">
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
                      Най-популярно
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
                        <p className="text-sm text-muted-foreground mt-1">
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

                  <ul className="space-y-3 flex-grow">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="cta"
                    className="w-full uppercase mt-auto"
                    size="lg"
                    asChild
                  >
                    <a href="#contact">Свържете се с нас</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Consultation Note */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-lavender" />
            </div>
            <div className="bg-deep-navy rounded-full px-8 py-4">
              <p className="text-center text-white font-medium uppercase tracking-wide text-sm">
                Консултациите на английски език се провеждат срещу допълнително заплащане от <span className="text-lg font-bold text-accent">+10 ЕВРО</span> към посочената цена.
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
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${specialServicesBg})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col h-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                }}
              >
                <div className="flex items-start gap-4 mb-6 flex-grow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold gradient-text uppercase">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Button variant="cta" className="w-full uppercase mt-auto" asChild>
                  <Link to={service.href}>{service.linkText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Контакти
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Свържете се{" "}
              <span className="gradient-text">с нас</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Имате въпроси относно цените? Свържете се с нас за консултация или запазете час.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Телефон",
                    value: "+359 887 079 256",
                    href: "tel:+359887079256",
                  },
                  {
                    icon: Mail,
                    label: "Имейл",
                    value: "info@dar-psiholog.com",
                    href: "mailto:info@dar-psiholog.com",
                  },
                  {
                    icon: MapPin,
                    label: "Адрес",
                    value: "България, София, квартал Лозенец, улица Кишинев 18",
                    href: "https://maps.google.com/?q=Sofia,Bulgaria,Kishinev+18",
                  },
                  {
                    icon: Clock,
                    label: "Работно време",
                    value: "Понеделник – Неделя | 08:00 – 22:00",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
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
                  title="Локация на център Дар - ул. Кишинев 18, ж.к. Лозенец, София"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6">
                ПОПИТАЙТЕ НИ
              </h3>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Име
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Вашето име"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Имейл
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+359 888 123 456"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Съобщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Как можем да ви помогнем?"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full uppercase">
                  ИЗПРАТИ
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
