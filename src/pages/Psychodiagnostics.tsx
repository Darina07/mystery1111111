import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Brain, FileText, Target, Users, Baby, GraduationCap, Heart, Check, ClipboardList, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import psychodiagnosticsHeader from "@/assets/psychodiagnostics-header.jpg";
import contactBg from "@/assets/contact-bg.jpg";

const targetAudience = [
  { name: "деца и юноши", icon: Baby },
  { name: "възрастни", icon: Users },
  { name: "семейства", icon: Heart },
  { name: "професионална сфера", icon: GraduationCap },
];

const assessmentTypes = [
  {
    icon: Brain,
    title: "Когнитивна оценка",
    description: "оценка на интелектуални способности, памет, внимание и мислене",
  },
  {
    icon: Heart,
    title: "Емоционална оценка",
    description: "изследване на емоционалното състояние, тревожност и депресия",
  },
  {
    icon: Users,
    title: "Личностна оценка",
    description: "анализ на личностни черти, поведенчески модели и стилове на справяне",
  },
  {
    icon: Baby,
    title: "Развитие на деца",
    description: "оценка на развитието и готовността за училище",
  },
  {
    icon: GraduationCap,
    title: "Образователна оценка",
    description: "диагностика на специфични обучителни трудности",
  },
  {
    icon: Target,
    title: "Професионална ориентация",
    description: "кариерно консултиране и професионален подбор",
  },
];

const whenUseful = [
  "има нужда от обективна оценка на когнитивните способности",
  "търсите яснота за емоционалното си състояние",
  "детето има затруднения в училище или в поведението",
  "има съмнения за специфични обучителни трудности",
  "е необходима оценка за съдебни или административни процедури",
  "търсите професионална ориентация или кариерно консултиране",
  "е нужна оценка преди или по време на терапевтичен процес",
];

const processSteps = [
  {
    icon: FileText,
    title: "Първична консултация",
    description: "запознаване с проблема и определяне на целите на изследването",
  },
  {
    icon: ClipboardList,
    title: "Провеждане на тестове",
    description: "прилагане на стандартизирани психологически инструменти",
  },
  {
    icon: Brain,
    title: "Анализ",
    description: "обработка и интерпретация на резултатите",
  },
  {
    icon: Lightbulb,
    title: "Обратна връзка",
    description: "подробно обсъждане на резултатите и препоръки",
  },
  {
    icon: Shield,
    title: "Писмен доклад",
    description: "предоставяне на официален психологически доклад при необходимост",
  },
];

const benefits = [
  "ясна и обективна картина на психичното функциониране",
  "разбиране на силните страни и области за развитие",
  "конкретни препоръки за подкрепа и интервенции",
  "основа за планиране на терапия или обучение",
  "официална документация при нужда",
  "професионална ориентация и кариерно планиране",
];

const assessmentAreas = [
  { name: "Интелектуални способности", slug: "intellectual" },
  { name: "Памет и внимание", slug: "memory-attention" },
  { name: "Емоционално състояние", slug: "emotional" },
  { name: "Личностни характеристики", slug: "personality" },
  { name: "Развитие на деца", slug: "child-development" },
  { name: "Обучителни трудности", slug: "learning-difficulties" },
  { name: "Готовност за училище", slug: "school-readiness" },
  { name: "Професионална ориентация", slug: "career-orientation" },
  { name: "Съдебно-психологическа експертиза", slug: "forensic" },
];

const Psychodiagnostics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image - positioned to the left */}
        <div 
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{
            backgroundImage: `url(${psychodiagnosticsHeader})`,
          }}
        />
        
        {/* Overlay for text readability - gradient from right */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <div className="flex justify-end mb-6">
              <PageBreadcrumb 
                items={[
                  { label: "Услуги", href: "/#services" },
                  { label: "Психодиагностика" }
                ]} 
              />
            </div>
            <p className="text-primary font-medium mb-4">Професионална психологическа оценка</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text">Психодиагностика</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Задълбочена и обективна оценка на когнитивни, емоционални и личностни характеристики чрез стандартизирани психологически методи
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запази час
              </Button>
              <a href="tel:+359887079256" aria-label="Обадете се">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              Психодиагностиката е процес на систематично изследване на психичните функции, способности и характеристики на личността. В „Дар" център използваме съвременни, валидирани и надеждни психологически инструменти, за да предоставим точна и полезна информация за вашето функциониране или това на вашето дете.
            </p>

            {/* Target Audience Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                <span className="gradient-text">За кого е подходящо?</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {targetAudience.map((item) => (
                  <div 
                    key={item.name}
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center border border-primary/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-foreground font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${psychodiagnosticsHeader})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Видове{" "}
              <span className="gradient-text">психодиагностика</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Предлагаме различни видове психологическа оценка в зависимост от вашите нужди
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {assessmentTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <type.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When Useful Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Кога е добре да се потърси{" "}
              <span className="gradient-text">психодиагностика?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Психологическата оценка може да бъде полезна, когато:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {whenUseful.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${psychodiagnosticsHeader})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протича{" "}
              <span className="gradient-text">процесът?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Психодиагностичният процес преминава през няколко етапа
            </p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow text-center relative"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-3 mt-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Какво дава{" "}
              <span className="gradient-text">психодиагностиката?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Професионалната психологическа оценка осигурява:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              <span className="gradient-text">Области</span> на изследване
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Предлагаме диагностика в следните области:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {assessmentAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  to={`/conditions/${area.slug}`}
                  className={`px-5 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                  }`}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Contact Form */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">Свържете се</span> с нас
              </h2>
              <p className="text-sm text-muted-foreground">
                Свържете се с нас за повече информация или за записване на час за психодиагностика.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <form className="space-y-6">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Име" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Фамилия" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Имейл" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <textarea 
                    placeholder="Съобщение" 
                    rows={4}
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                {/* Submit Button & Phone Icon */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                  <Button type="submit" variant="hero" size="lg" className="px-10">
                    Изпрати
                  </Button>
                  
                  <a 
                    href="tel:+359887079256" 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg"
                    aria-label="Обадете се на +359 887 079 256"
                  >
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Psychodiagnostics;
