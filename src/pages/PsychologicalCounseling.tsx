import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, Heart, Target, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import therapyHeader from "@/assets/therapy-header.jpg";
import counselingImage from "@/assets/counseling-image.jpg";
import counselingTherapyImage from "@/assets/counseling-therapy-image.jpg";
import psiSupportImage from "@/assets/psi-support.jpg";
import conditionsSticker from "@/assets/conditions-sticker.png";
import addictionsSticker from "@/assets/addictions-sticker.png";
import lgbtSticker1 from "@/assets/lgbt-sticker-1.png";
import lgbtSticker2 from "@/assets/lgbt-sticker-2.png";

const conditions = [
  { name: "Депресия", slug: "depression" },
  { name: "Тревожност", slug: "anxiety" },
  { name: "Паник атаки", slug: "panic-attacks" },
  { name: "Фобии", slug: "phobias" },
  { name: "Хипохондрия", slug: "hypochondria" },
  { name: "ОКР", slug: "ocd" },
  { name: "Биполярно афективно разстройство", slug: "bipolar" },
  { name: "Гняв и автоагресия", slug: "anger" },
  { name: "Стрес", slug: "stress" },
  { name: "ПТСР", slug: "ptsd" },
  { name: "Бърнаут", slug: "burnout" },
  { name: "Емоционално изчерпване", slug: "emotional-exhaustion" },
  { name: "Безсъние", slug: "insomnia" },
  { name: "Психосоматика", slug: "psychosomatic" },
  { name: "Умора", slug: "fatigue" },
  { name: "Неувереност", slug: "insecurity" },
  { name: "Перфекционизъм", slug: "perfectionism" },
  { name: "Лични граници", slug: "boundaries" },
  { name: "Самота", slug: "loneliness" },
  { name: "Трудности в общуването", slug: "communication-difficulties" },
  { name: "Житейски кризи", slug: "life-crisis" },
  { name: "Загуба", slug: "grief" },
  { name: "Раздяла", slug: "divorce" },
  { name: "Адаптация към промени", slug: "adaptation" },
];

const addictions = [
  { name: "Алкохолна зависимост", slug: "alcohol-addiction" },
  { name: "Зависимост към наркотици", slug: "drug-addiction" },
  { name: "Хазартна зависимост", slug: "gambling-addiction" },
  { name: "Зависимост към медикаменти", slug: "medication-addiction" },
  { name: "Интернет и дигитална зависимост", slug: "internet-addiction" },
  { name: "Зависимост към социални мрежи", slug: "social-media-addiction" },
  { name: "Работохолизъм", slug: "workaholism" },
  { name: "Компулсивно поведение", slug: "compulsive-behavior" },
];

const lgbtSupport = [
  { name: "Психологична подкрепа за ЛГБТ+ хора", slug: "lgbt-support" },
  { name: "Идентичност и себеприемане", slug: "identity-acceptance" },
  { name: "Разкриване на идентичността (coming out)", slug: "coming-out" },
  { name: "Стрес от социално отхвърляне", slug: "social-rejection" },
  { name: "Взаимоотношения при ЛГБТ+ хора", slug: "lgbt-relationships" },
];

const steps = [
  {
    number: "1",
    title: "Първоначална среща",
    description: "Запознаваме се с вашата ситуация и това, което искате да се промени. Изясняваме какво ви води при нас и какво очаквате.",
    icon: MessageCircle,
  },
  {
    number: "2",
    title: "Посока и цели",
    description: "Определяме фокус – върху какво да работим и как да измерваме напредъка (по ваш начин, без натиск).",
    icon: Target,
  },
  {
    number: "3",
    title: "Процес на работа",
    description: "Срещите са регулярни и протичат в спокойна среда. Работим в дълбочина или по-конкретно – според нуждите ви.",
    icon: Users,
  },
  {
    number: "4",
    title: "Устойчивост и баланс",
    description: "Целта е да изградите умения, които остават – по-добро справяне, по-ясни граници, по-стабилна самооценка и по-спокойно ежедневие.",
    icon: Shield,
  },
];

const ConditionPill = ({ name, slug }: { name: string; slug: string }) => (
  <Link
    to={`/conditions/${slug}`}
    className="inline-block px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
  >
    {name}
  </Link>
);

const PsychologicalCounseling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image - positioned to the left */}
        <div 
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{
            backgroundImage: `url(${therapyHeader})`,
          }}
        />
        
        {/* Overlay for text readability - gradient from right */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Психологично консултиране и{" "}
              <span className="gradient-text">психотерапия</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Професионална подкрепа при емоционални и житейски трудности
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запази час
              </Button>
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                +359 887 079 256
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Text with Image Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Психологичното консултиране и психотерапията помагат при тревожност, депресивни състояния, стрес, панически атаки и други трудни преживявания. В център „Дар" предлагаме спокойна и подкрепяща среда, в която разговорът води до повече яснота, разбиране и устойчиви промени – без осъждане и с уважение към вашето темпо.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src={counselingTherapyImage} 
                  alt="Психологично консултиране и психотерапия" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Counseling and Therapy Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-lavender/5 rounded-2xl p-6 border border-lavender/10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  <span className="gradient-text">Психологично консултиране</span>
                </h3>
                <p className="text-muted-foreground">
                  Подходящо при конкретни трудности и периоди на промяна, когато имате нужда да подредите мислите си и да намерите посока.
                </p>
              </div>
              <div className="bg-soft-blue/5 rounded-2xl p-6 border border-soft-blue/10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  <span className="gradient-text">Психотерапия</span>
                </h3>
                <p className="text-muted-foreground">
                  По-задълбочен процес, насочен към повтарящи се модели, вътрешни конфликти и по-трайна лична промяна.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-2xl p-8 border border-lavender/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image on the left */}
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                  <img 
                    src={psiSupportImage} 
                    alt="Психологична подкрепа" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Text on the right */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1 hidden md:block" />
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-3">
                        Кога може да бъде полезна{" "}
                        <span className="gradient-text">психологична подкрепа?</span>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Ако се чувствате тревожни или изчерпани, преживявате тъга, страх, проблеми със съня, житейска криза или усещане, че „нещо не е наред".
                      </p>
                      <p className="text-foreground font-medium italic">
                        Не е нужно да имате точни думи – достатъчно е желанието за разговор и подкрепа.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протича{" "}
              <span className="gradient-text">работата?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Работата е структурирана и ясна, но същевременно гъвкава и индивидуална
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          Стъпка {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            <span className="gradient-text">Състояния</span>, при които можем да помогнем
          </h2>
          
          {/* Main Conditions */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative flex items-center justify-center">
              <img 
                src={conditionsSticker} 
                alt="Психологична подкрепа" 
                className="w-full max-w-md"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-3">
                {conditions.map((condition, index) => (
                  <Link
                    key={condition.slug}
                    to={`/conditions/${condition.slug}`}
                    className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                    }`}
                  >
                    {condition.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Addictions */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Зависимости
              </h3>
              <div className="flex flex-wrap gap-3">
                {addictions.map((addiction, index) => (
                  <Link
                    key={addiction.slug}
                    to={`/conditions/${addiction.slug}`}
                    className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                    }`}
                  >
                    {addiction.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src={addictionsSticker} 
                alt="Зависимости" 
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* LGBT+ Support */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative flex items-center justify-center">
              <img 
                src={lgbtSticker1} 
                alt="ЛГБТ+ подкрепа" 
                className="max-w-[400px] -mr-16"
              />
              <img 
                src={lgbtSticker2} 
                alt="ЛГБТ+ подкрепа" 
                className="max-w-[200px] -ml-16"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                ЛГБТ+ психологична подкрепа
              </h3>
              <div className="flex flex-wrap gap-3">
                {lgbtSupport.map((item, index) => (
                  <Link
                    key={item.slug}
                    to={`/conditions/${item.slug}`}
                    className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Know Section - Testimonial Style */}
      <section className="relative py-4 md:py-6 overflow-visible">
        {/* Decorative dots in a semicircle hugging the curved edge */}
        <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg 
            className="w-[160px] h-[180px] md:w-[200px] md:h-[220px]"
            viewBox="0 0 160 180" 
            fill="none"
          >
            {/* Create semicircle of dots that hugs the curve */}
            {Array.from({ length: 10 }).map((_, ring) => {
              const baseRadius = 50 + ring * 10;
              const dotsInArc = Math.floor(6 + ring * 1.2);
              return Array.from({ length: dotsInArc }).map((_, dot) => {
                // Semicircle from -90 to +90 degrees (facing left, π/2 to -π/2)
                const startAngle = -Math.PI / 2;
                const endAngle = Math.PI / 2;
                const angle = startAngle + (dot / (dotsInArc - 1)) * (endAngle - startAngle);
                const x = 10 + Math.cos(angle) * baseRadius;
                const y = 90 + Math.sin(angle) * baseRadius;
                return (
                  <circle
                    key={`${ring}-${dot}`}
                    cx={x}
                    cy={y}
                    r={2}
                    className="fill-primary"
                  />
                );
              });
            })}
          </svg>
        </div>

        {/* Dark background with more rounded curve on right */}
        <div 
          className="absolute inset-y-0 left-0 right-20 md:right-28 bg-gradient-to-br from-indigo via-deep-navy to-indigo rounded-r-full"
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl py-4 pr-28 md:pr-40 text-left">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-3 text-white whitespace-nowrap">
              Как да разберете какво е <span className="text-lavender-light">подходящо за вас?</span>
            </h2>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Ако не сте сигурни дали имате нужда от психологично консултиране или психотерапия, това е напълно нормално. В първата среща можем да изясним:
            </p>
            
            {/* Three items - always in a row */}
            <div className="flex flex-row items-center gap-5 flex-wrap md:flex-nowrap">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-white text-xs font-medium">Какво ви води при нас</p>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-white text-xs font-medium">Какво искате да се промени</p>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-white text-xs font-medium">Какъв тип работа е най-подходящ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Свържете се с нас</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ако усещате, че е време да направите първата стъпка, можете да се свържете с нас още днес.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запази час
              </Button>
              <Button variant="hero-outline" size="xl" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Свържи се с нас
              </Button>
              <a href="tel:+359887079256">
                <Button variant="ghost" size="xl" className="gap-2">
                  <Phone className="h-5 w-5" />
                  +359 887 079 256
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychologicalCounseling;
