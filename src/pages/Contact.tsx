import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const breadcrumbItems = [
  { label: "Начало", href: "/" },
  { label: "Контакти" }
];

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+359 887 079 256",
    href: "tel:+359887079256",
  },
  {
    icon: Mail,
    label: "Имейл",
    value: "info@darpsiholog.bg",
    href: "mailto:info@darpsiholog.bg",
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
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-deep-navy/60" />
        
        <div className="container relative z-10 h-full flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
              Контакти
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-balance">
              Свържете се{" "}
              <span className="text-accent">с нас</span>
            </h1>
            <p className="text-white/90 text-xl">
              Ние сме тук, за да ви помогнем. Свържете се с нас по удобен за вас начин.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container pt-8">
        <PageBreadcrumb items={breadcrumbItems} />
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
                  Как да се{" "}
                  <span className="gradient-text">свържете с нас</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Изберете най-удобния за вас начин за връзка. Ще ви отговорим в рамките на 24 часа.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
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

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="uppercase" asChild>
                  <a href="tel:+359887079256">
                    <Phone className="mr-2 h-5 w-5" />
                    Обадете се
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="uppercase" asChild>
                  <a href="https://wa.me/359887079256" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Изпратете запитване
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
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Интересуваща ви услуга
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Изберете услуга</option>
                    <option value="individual">Индивидуална консултация</option>
                    <option value="family">Семейно консултиране</option>
                    <option value="child">Детско-юношеско консултиране</option>
                    <option value="group">Групови програми</option>
                    <option value="speech">Логопед</option>
                    <option value="psychodiagnostics">Психодиагностика</option>
                    <option value="career">Кариерно консултиране</option>
                    <option value="corporate">Корпоративни услуги</option>
                    <option value="other">Друго</option>
                  </select>
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
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full uppercase"
                  size="lg"
                >
                  Изпратете запитване
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Локация
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Къде да ни{" "}
              <span className="gradient-text">намерите</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Нашият център се намира в квартал Лозенец, София – лесно достъпен с обществен транспорт и паркинг наблизо.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[450px] bg-muted shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.1234567890123!2d23.3219!3d42.6751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQwJzMwLjQiTiAyM8KwMTknMTguOCJF!5e0!3m2!1sen!2sbg!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локация на център Дар"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
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
            <div className="bg-deep-navy rounded-full px-10 py-6">
              <p className="text-center text-white font-medium uppercase tracking-wide text-lg">
                Работим всеки ден от <span className="text-accent">08:00</span> до <span className="text-accent">22:00</span>
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-lavender" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;