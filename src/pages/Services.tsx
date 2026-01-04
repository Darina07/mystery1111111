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
    title: "Психологично консултиране и психотерапия",
    description: "Индивидуална работа с психолог за справяне с тревожност, депресия, стрес и други предизвикателства.",
    href: "/services/psychological-counseling"
  },
  {
    icon: Heart,
    title: "Семейно и партньорско консултиране",
    description: "Подкрепа за двойки и семейства при комуникационни проблеми, кризи и важни решения.",
    href: "/services/family-counseling"
  },
  {
    icon: Baby,
    title: "Детско-юношеско консултиране",
    description: "Специализирана помощ за деца и юноши при поведенчески, емоционални и учебни трудности.",
    href: "/services/child-counseling"
  },
  {
    icon: Users,
    title: "Групови програми",
    description: "Тематични групи за зависимости, взаимоотношения, родителство и личностно развитие.",
    href: "/services/group-programs"
  },
  {
    icon: MessageCircle,
    title: "Логопед",
    description: "Диагностика и терапия на говорни и езикови нарушения за деца и възрастни.",
    href: "/services/speech-therapy"
  },
  {
    icon: ClipboardList,
    title: "Психодиагностика",
    description: "Професионална оценка на интелектуални способности, личностни характеристики и емоционално състояние.",
    href: "/services/psychodiagnostics"
  }
];

const professionalServices = [
  {
    icon: Briefcase,
    title: "Кариерно консултиране",
    description: "Професионално ориентиране, развитие на кариерата и подготовка за интервюта.",
    href: "/services/career-consulting"
  },
  {
    icon: Building2,
    title: "Корпоративни услуги",
    description: "Обучения, тиймбилдинг, управление на стреса и организационно консултиране за компании.",
    href: "/services/corporate-services"
  }
];

const faqItems = [
  {
    question: "Как да избера правилната услуга за мен?",
    answer: "На първата консултация ще обсъдим вашите нужди и цели, за да определим най-подходящата услуга. Можете също да се обадите за безплатна ориентираща консултация."
  },
  {
    question: "Какви методи на плащане приемате?",
    answer: "Приемаме плащане в брой, с дебитна или кредитна карта, както и банков превод. Плащането се извършва след всяка сесия или в началото на пакетна програма."
  },
  {
    question: "Предлагате ли онлайн консултации?",
    answer: "Да, предлагаме пълноценни онлайн консултации чрез Viber, WhatsApp, Skype или Google Meet. Онлайн сесиите са също толкова ефективни и са подходящи за клиенти извън София или с натоварен график."
  },
  {
    question: "Колко време продължава една сесия?",
    answer: "Стандартната продължителност на индивидуална или семейна консултация е 60 минути. Първата консултация може да бъде малко по-дълга за запознаване и оценка на ситуацията."
  },
  {
    question: "Работите ли с деца?",
    answer: "Да, имаме специализирани детски психолози и логопеди, които работят с деца от най-ранна възраст. Използваме подходящи за възрастта методи като игрова и арт терапия."
  },
  {
    question: "Информацията от сесиите конфиденциална ли е?",
    answer: "Абсолютно. Всичко споделено по време на консултациите е строго конфиденциално и защитено съгласно професионалната етика и законодателството за защита на личните данни."
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
        title="Услуги"
        description="Професионални психологични услуги в София - индивидуално консултиране, семейна терапия, детска психология, логопедия и психодиагностика. Запазете час днес."
        url="/services"
        keywords="психологични услуги София, психотерапия, семейно консултиране, детски психолог, логопед, психодиагностика"
      />
      <ServiceSchema 
        name="Психологични услуги"
        description="Професионални психологични услуги - индивидуално консултиране, семейна терапия, детска психология, логопедия и психодиагностика"
        url="/services"
      />
      <FAQSchema faqs={faqsForSchema} />
      <BreadcrumbSchema items={[
        { name: "Начало", url: "/" },
        { name: "Услуги", url: "/services" }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden">
        <img
          src={servicesHeader}
          alt=""
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
              Нашите услуги
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
              Професионални{" "}
              <span className="text-primary">психологични услуги</span>
            </h1>
            <p className="text-foreground/70 text-xl">
              Подкрепа за всеки етап от живота
            </p>
          </div>
        </div>
      </section>


      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Психологични услуги
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Основни{" "}
              <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Предлагаме широк спектър от психологични услуги за индивидуални клиенти, двойки и семейства.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Научете повече
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
                Не сте сигурни коя услуга е за вас?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="uppercase" asChild>
                  <a href="tel:+359887079256">Обадете се сега</a>
                </Button>
                <Button size="lg" variant="outline" className="uppercase border-white text-white hover:bg-white/10" asChild>
                  <a href="/prices">Вижте цените</a>
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
              За бизнеса
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Професионално{" "}
              <span className="gradient-text">развитие</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Услуги за кариерно развитие и корпоративни решения за вашия бизнес.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professionalServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Научете повече
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
              Въпроси
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Често задавани{" "}
              <span className="gradient-text">въпроси</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Отговори на най-честите въпроси, които получаваме от нашите клиенти.
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
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
              Контакти
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Свържете се{" "}
              <span className="gradient-text">с нас</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Имате въпроси? Свържете се с нас за консултация или запазете час.
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
              <h3 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Свържете се с нас
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

      <Footer />
    </div>
  );
};

export default Services;
