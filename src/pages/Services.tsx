import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, ChevronRight, Brain, Heart, Users, 
  Baby, MessageCircle, ClipboardList, Briefcase, Building2, ArrowRight
} from "lucide-react";

import counselingHeader from "@/assets/counseling-header.png";
import therapyHeader from "@/assets/therapy-header.jpg";
import familyCounselingHeader from "@/assets/family-counseling-header.jpg";

const heroSlides = [
  {
    image: counselingHeader,
    title: "Професионални",
    highlight: "психологични услуги",
    subtitle: "Подкрепа за всеки етап от живота"
  },
  {
    image: therapyHeader,
    title: "Индивидуален",
    highlight: "подход",
    subtitle: "Персонализирани решения за вашите нужди"
  },
  {
    image: familyCounselingHeader,
    title: "Грижа за",
    highlight: "цялото семейство",
    subtitle: "От деца до възрастни"
  }
];

const services = [
  {
    icon: Brain,
    title: "Психологично консултиране и психотерапия",
    description: "Индивидуална работа с психолог за справяне с тревожност, депресия, стрес и други предизвикателства.",
    href: "/services/psychological-counseling",
    color: "from-purple-500/20 to-purple-600/10"
  },
  {
    icon: Heart,
    title: "Семейно и партньорско консултиране",
    description: "Подкрепа за двойки и семейства при комуникационни проблеми, кризи и важни решения.",
    href: "/services/family-counseling",
    color: "from-pink-500/20 to-pink-600/10"
  },
  {
    icon: Baby,
    title: "Детско-юношеско консултиране",
    description: "Специализирана помощ за деца и юноши при поведенчески, емоционални и учебни трудности.",
    href: "/services/child-counseling",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    icon: Users,
    title: "Групови програми",
    description: "Тематични групи за зависимости, взаимоотношения, родителство и личностно развитие.",
    href: "/services/group-programs",
    color: "from-green-500/20 to-green-600/10"
  },
  {
    icon: MessageCircle,
    title: "Логопед",
    description: "Диагностика и терапия на говорни и езикови нарушения за деца и възрастни.",
    href: "/services/speech-therapy",
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    icon: ClipboardList,
    title: "Психодиагностика",
    description: "Професионална оценка на интелектуални способности, личностни характеристики и емоционално състояние.",
    href: "/services/psychodiagnostics",
    color: "from-teal-500/20 to-teal-600/10"
  }
];

const professionalServices = [
  {
    icon: Briefcase,
    title: "Кариерно консултиране",
    description: "Професионално ориентиране, развитие на кариерата и подготовка за интервюта.",
    href: "/services/career-consulting",
    color: "from-indigo-500/20 to-indigo-600/10"
  },
  {
    icon: Building2,
    title: "Корпоративни услуги",
    description: "Обучения, тиймбилдинг, управление на стреса и организационно консултиране за компании.",
    href: "/services/corporate-services",
    color: "from-slate-500/20 to-slate-600/10"
  }
];

const breadcrumbItems = [
  { label: "Начало", href: "/" },
  { label: "Услуги" }
];

const Services = () => {
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
            <div className="absolute inset-0 bg-deep-navy/60" />
          </div>
        ))}
        
        <div className="container relative z-10 h-full flex items-center justify-center min-h-[500px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
              Нашите услуги
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-balance">
              {heroSlides[currentSlide].title}{" "}
              <span className="text-accent">{heroSlides[currentSlide].highlight}</span>
            </h1>
            <p className="text-white/90 text-xl">
              {heroSlides[currentSlide].subtitle}
            </p>
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

      {/* Breadcrumb */}
      <div className="container pt-8">
        <PageBreadcrumb items={breadcrumbItems} />
      </div>

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
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-card border border-border/50"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Научете повече</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
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
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-card border border-border/50"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Научете повече</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div 
            className="rounded-3xl p-12 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(270 50% 40%) 100%)"
            }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Не сте сигурни коя услуга е за вас?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Свържете се с нас за безплатна първоначална консултация. Ще ви помогнем да изберете 
              най-подходящата услуга за вашите нужди.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary font-semibold"
                onClick={() => window.location.href = '/prices'}
              >
                Вижте цените
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = 'tel:+359887079256'}
              >
                Обадете се сега
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
