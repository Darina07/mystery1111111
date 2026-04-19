import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Lightbulb, Target, Sparkles, Users, CheckCircle, Star } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";
import groupNLPEffectivenessBg from "@/assets/group-nlp-effectiveness-bg.jpg";
import groupNLPEffectivenessHeader from "@/assets/group-nlp-effectiveness-header.jpg";
import { useScrollAnimationGroup } from "@/hooks/useScrollAnimation";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
const groupFeatures = [
  "Техники за изграждане на вътрешна увереност",
  "Работа с ограничаващи убеждения за себе си",
  "Ефективно себепредставяне и личен бранд",
  "Управление на състоянията и емоциите",
  "Стратегии за по-добра продуктивност",
  "Моделиране на успешни поведения",
];

const whoIsItFor = [
  "Хора, които искат да изградят по-силна увереност",
  "Професионалисти, търсещи кариерно развитие",
  "Всеки, който иска да подобри себепредставянето си",
  "Хора с високи цели и желание за реализация",
];

const whatToExpect = [
  {
    title: "Практични НЛП техники",
    description: "Усвояване на конкретни инструменти за изграждане на увереност",
    icon: Lightbulb,
  },
  {
    title: "Работа с вярвания",
    description: "Идентифициране и трансформиране на ограничаващи убеждения",
    icon: Target,
  },
  {
    title: "Ресурсни състояния",
    description: "Научете как да активирате силата си когато ви е нужна",
    icon: Sparkles,
  },
  {
    title: "Групова динамика",
    description: "Учене от опита на другите и практика в безопасна среда",
    icon: Users,
  },
];

const PersonalEffectivenessGroup = () => {
  const { containerRef, visibleItems } = useScrollAnimationGroup(whatToExpect.length, { staggerDelay: 150 });
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="НЛП за лична ефективност и увереност | ДАР Психология"
        description="Практични техники за изграждане на увереност, по-добро себепредставяне и постигане на лични и професионални цели"
        url="/services/group-programs/nlp/personal-effectiveness"
      />
      <CourseSchema 
        name="НЛП за лична ефективност и увереност"
        description="Практични техники за изграждане на увереност"
        url="https://darpsiholog.com/services/group-programs/nlp/personal-effectiveness"
      />
      <BreadcrumbSchema items={[
        { name: "Начало", url: "/" },
        { name: "Групови програми", url: "/services/group-programs" },
        { name: "НЛП", url: "/services/group-programs/nlp" },
        { name: "Лична ефективност", url: "/services/group-programs/nlp/personal-effectiveness" }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${groupNLPEffectivenessHeader})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">НЛП групови програми</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Лична ефективност и{" "}
              <span className="gradient-text">увереност</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Практични НЛП техники за изграждане на увереност и постигане на целите
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
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Увереността не е вродена черта – тя е умение, което може да се развие. 
                В тази НЛП група ще научите практични техники, които ще ви помогнат 
                да изградите вътрешна сигурност, да преодолеете ограничаващите 
                убеждения и да се представяте по най-добрия начин във всяка ситуация.
              </p>
            </div>
            
            <div className="mt-12 relative">
              {/* Left decorative dots arc */}
              <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
                <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
                <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
              </div>
              
              {/* Right decorative dots arc */}
              <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <div className="w-3 h-3 rounded-full bg-primary/40 -translate-x-6" />
                <div className="w-3 h-3 rounded-full bg-primary/50 -translate-x-3" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-primary/50 -translate-x-3" />
                <div className="w-3 h-3 rounded-full bg-primary/40 -translate-x-6" />
              </div>
              
              <div className="bg-foreground/90 rounded-[10rem] p-8 md:p-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Star className="h-10 w-10 text-primary-foreground" />
                  <h3 className="text-xl md:text-2xl font-heading font-semibold uppercase tracking-wide text-primary-foreground">
                    Станете най-добрата версия на себе си
                  </h3>
                </div>
                <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
                  НЛП ви дава инструментите да разберете как работи мисленето ви 
                  и да го насочите към постигане на желаните резултати.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Какво да{" "}
              <span className="gradient-text">очаквате?</span>
            </h2>
            
            <div ref={containerRef} className="grid md:grid-cols-2 gap-6">
              {whatToExpect.map((item, index) => (
                <div 
                  key={item.title}
                  className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-500 ${
                    visibleItems[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Какво включва{" "}
              <span className="gradient-text">програмата</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {groupFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              За кого е{" "}
              <span className="gradient-text">групата?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src={groupNLPEffectivenessBg} 
                  alt="НЛП за лична ефективност" 
                  className="rounded-2xl shadow-lg w-full object-cover aspect-square"
                />
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <ul className="space-y-4">
                  {whoIsItFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">Свържете се</span> с нас
              </h2>
              <p className="text-sm text-muted-foreground">
                Свържете се с нас за повече информация или за да се запишете.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="НЛП програма – Лична ефективност и увереност" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalEffectivenessGroup;
