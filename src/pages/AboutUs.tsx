import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight,
  Heart, Shield, Award, Users, Brain, Sparkles, GraduationCap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import aboutSlider1 from "@/assets/about-slider-1.jpg";
import aboutSlider2 from "@/assets/about-slider-2.jpg";
import aboutSlider3 from "@/assets/about-slider-3.jpg";
import specialistClinicalPsychologist from "@/assets/specialist-clinical-psychologist.jpg";
import specialistPsychotherapist from "@/assets/specialist-psychotherapist.jpg";
import specialistFamilyCounselor from "@/assets/specialist-family-counselor.jpg";
import specialistChildPsychologist from "@/assets/specialist-child-psychologist.jpg";
import specialistSpeechTherapist from "@/assets/specialist-speech-therapist.jpg";
import specialistCareerConsultant from "@/assets/specialist-career-consultant.jpg";

const heroSlides = [
  {
    image: aboutSlider1,
    title: "Вашият път към",
    highlight: "психично здраве",
    subtitle: "Професионална подкрепа в центъра на София"
  },
  {
    image: aboutSlider2,
    title: "Екип от",
    highlight: "специалисти",
    subtitle: "Психолози, терапевти, логопеди и консултанти"
  },
  {
    image: aboutSlider3,
    title: "Грижа за",
    highlight: "цялото семейство",
    subtitle: "Индивидуални и семейни консултации"
  }
];

const values = [
  {
    icon: Heart,
    title: "Емпатия и разбиране",
    description: "Всеки клиент е уникален. Слушаме без осъждане и създаваме безопасно пространство за споделяне."
  },
  {
    icon: Shield,
    title: "Конфиденциалност",
    description: "Гарантираме пълна дискретност и защита на личната информация на всеки наш клиент."
  },
  {
    icon: Award,
    title: "Професионализъм",
    description: "Работим с доказани методи и непрекъснато надграждаме квалификацията си."
  },
  {
    icon: Users,
    title: "Екипен подход",
    description: "Нашият мултидисциплинарен екип гарантира комплексна грижа за всяка нужда."
  }
];

const specialists = [
  {
    icon: Brain,
    title: "Клинични психолози",
    description: "Специалисти с опит в диагностика и терапия на различни психични състояния.",
    image: specialistClinicalPsychologist
  },
  {
    icon: Heart,
    title: "Психотерапевти",
    description: "Обучени в различни терапевтични модалности - когнитивно-поведенческа, психоаналитична, системна терапия.",
    image: specialistPsychotherapist
  },
  {
    icon: Users,
    title: "Семейни консултанти",
    description: "Експерти в работата с двойки и семейства, разрешаване на конфликти и подобряване на комуникацията.",
    image: specialistFamilyCounselor
  },
  {
    icon: Sparkles,
    title: "Детски психолози",
    description: "Специализирани в работа с деца и юноши, развитие и поведенчески проблеми.",
    image: specialistChildPsychologist
  },
  {
    icon: GraduationCap,
    title: "Логопеди",
    description: "Професионалисти в областта на говорната и езикова терапия за деца и възрастни.",
    image: specialistSpeechTherapist
  },
  {
    icon: Award,
    title: "Кариерни консултанти",
    description: "Специалисти по професионално ориентиране и развитие на кариерата.",
    image: specialistCareerConsultant
  }
];

const faqItems = [
  {
    question: "Как да запазя час за консултация?",
    answer: "Можете да запазите час като ни се обадите на телефон +359 887 079 256 или като попълните контактната форма на нашия сайт. Ще се свържем с вас в рамките на 24 часа, за да уточним удобен час."
  },
  {
    question: "Какви методи на плащане приемате?",
    answer: "Приемаме плащане в брой, чрез Revolut и банков превод. Плащането се извършва преди всяка сесия или на място в брой."
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
  },
  {
    question: "Колко сесии са необходими за постигане на резултат?",
    answer: "Броят на сесиите варира в зависимост от конкретния случай и целите на терапията. Обикновено след 4-6 сесии има видим напредък. На първата консултация ще обсъдим реалистични очаквания."
  },
  {
    question: "Предлагате ли групови програми?",
    answer: "Да, предлагаме разнообразни групови програми по теми като зависимости, родителство, взаимоотношения и личностно развитие. Груповата работа предлага уникални предимства като споделен опит и взаимна подкрепа."
  }
];


const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Slider */}
      <section className="relative pt-24 min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-background/40" />
          </div>
        ))}
        
        <div className="container relative z-10 h-full flex items-center justify-center min-h-[500px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-primary font-medium mb-4">За нас</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
              {heroSlides[currentSlide].title}{" "}
              <span className="gradient-text">{heroSlides[currentSlide].highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  КОНТАКТИ
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

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? "bg-accent w-8" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
                  Кои сме ние
                </span>
              </div>
              
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Център „Дар" – вашият{" "}
                <span className="gradient-text">партньор</span> в грижата за психичното здраве
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Психологичен и консултативен център „Дар" е създаден с мисията да предоставя 
                  професионални услуги в областта на психологията, консултирането и личностното 
                  развитие. Нашият екип обединява опитни специалисти от различни области, за да 
                  предложим комплексна грижа за всеки клиент.
                </p>
                <p>
                  Работим с индивидуални клиенти, деца, семейства и бизнес организации, 
                  предлагайки разнообразие от услуги – от психотерапия и семейно консултиране 
                  до групови програми и корпоративни обучения.
                </p>
                <p>
                  Вярваме, че всеки заслужава достъп до качествена психологическа подкрепа, 
                  базирана на доверие, уважение и доказани терапевтични методи.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-lg mb-2 uppercase">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Нашият екип
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Разнообразие от{" "}
              <span className="gradient-text">специалисти</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              В център „Дар" работят квалифицирани професионалисти от различни области, 
              за да отговорим на всяка ваша нужда.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist) => (
              <div
                key={specialist.title}
                className="relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
                  style={{ backgroundImage: `url(${specialist.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <specialist.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 uppercase gradient-text">
                    {specialist.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {specialist.description}
                  </p>
                </div>
              </div>
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

export default AboutUs;
