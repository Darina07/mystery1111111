import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube, Linkedin, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contactHeaderBg from "@/assets/contact-header-bg.png";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";


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

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/darpsiholog",
    color: "hover:bg-blue-600"
  },
  {
    icon: Instagram,
    label: "Instagram", 
    href: "https://instagram.com/darpsiholog",
    color: "hover:bg-pink-600"
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@darpsiholog",
    color: "hover:bg-red-600"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/darpsiholog",
    color: "hover:bg-blue-700"
  },
];

const faqItems = [
  {
    question: "Как да запазя час за консултация?",
    answer: "Можете да запазите час като ни се обадите на телефон +359 887 079 256, напишете ни на WhatsApp или като попълните контактната форма на тази страница. Ще се свържем с вас в рамките на 24 часа."
  },
  {
    question: "Колко време отнема да получа отговор?",
    answer: "Стараем се да отговаряме на всички запитвания в рамките на 24 часа в работни дни. При спешни случаи, моля обадете ни се директно на телефона."
  },
  {
    question: "Предлагате ли онлайн консултации?",
    answer: "Да, предлагаме пълноценни онлайн консултации чрез Viber, WhatsApp, Skype или Google Meet. Онлайн сесиите са също толкова ефективни и са подходящи за клиенти извън София."
  },
  {
    question: "Има ли паркинг наблизо?",
    answer: "Да, в района има няколко възможности за паркиране – както платен паркинг, така и улично паркиране в близките улици. Центърът е лесно достъпен и с обществен транспорт."
  },
  {
    question: "Какви са цените на услугите?",
    answer: "Цените варират в зависимост от вида на услугата. Можете да видите пълния ценоразпис на страницата Цени или да се свържете с нас за конкретна информация."
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Вашето запитване беше изпратено успешно!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast.error("Възникна грешка при изпращането. Моля, опитайте отново.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden bg-deep-navy">
        <div
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeaderBg})` }}
        />
        
        <div className="container relative z-10 h-full flex items-center justify-end min-h-[400px]">
          <div className="text-right space-y-6 max-w-2xl">
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
              Контакти
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-balance">
              Свържете се{" "}
              <span className="text-primary">с нас</span>
            </h1>
            <p className="text-white/90 text-xl">
              Ние сме тук, за да ви помогнем. Свържете се с нас по удобен за вас начин.
            </p>
          </div>
        </div>
      </section>


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

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-heading text-lg font-semibold mb-4 uppercase">
                  Последвайте ни
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white text-primary"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Изпратете запитване
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Вашето име"
                    required
                    disabled={isSubmitting}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="email@example.com"
                    required
                    disabled={isSubmitting}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+359 888 123 456"
                    disabled={isSubmitting}
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
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    disabled={isSubmitting}
                  >
                    <option value="">Изберете услуга</option>
                    <option value="Индивидуална консултация">Индивидуална консултация</option>
                    <option value="Семейно консултиране">Семейно консултиране</option>
                    <option value="Детско-юношеско консултиране">Детско-юношеско консултиране</option>
                    <option value="Групови програми">Групови програми</option>
                    <option value="Логопед">Логопед</option>
                    <option value="Психодиагностика">Психодиагностика</option>
                    <option value="Кариерно консултиране">Кариерно консултиране</option>
                    <option value="Корпоративни услуги">Корпоративни услуги</option>
                    <option value="Друго">Друго</option>
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
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Как можем да ви помогнем?"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full uppercase"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Изпращане...
                    </>
                  ) : (
                    "ИЗПРАТИ"
                  )}
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

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Въпроси
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Често задавани{" "}
              <span className="gradient-text">въпроси</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Отговори на най-честите въпроси относно връзката с нас.
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
                  <AccordionTrigger className="text-left font-heading text-lg font-medium py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
