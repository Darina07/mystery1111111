import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, Heart, Target, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import illustrationTherapy from "@/assets/illustration-therapy.jpg";
import counselingImage from "@/assets/counseling-image.jpg";

const conditions = [
  { name: "Депресия", slug: "depression" },
  { name: "Тревожност, напрежение и безпокойство", slug: "anxiety" },
  { name: "Панически атаки и паническо разстройство", slug: "panic-attacks" },
  { name: "Фобии и страхови състояния", slug: "phobias" },
  { name: "Хипохондрия (тревожност за здравето)", slug: "hypochondria" },
  { name: "Натрапливи мисли и действия (ОКР)", slug: "ocd" },
  { name: "Биполярно афективно разстройство", slug: "bipolar" },
  { name: "Гняв, раздразнителност и автоагресия", slug: "anger" },
  { name: "Хроничен стрес", slug: "chronic-stress" },
  { name: "Посттравматичен стрес (ПТСР)", slug: "ptsd" },
  { name: "Бърнаут синдром", slug: "burnout" },
  { name: "Емоционално изчерпване", slug: "emotional-exhaustion" },
  { name: "Проблеми със съня", slug: "sleep-problems" },
  { name: "Психосоматични състояния", slug: "psychosomatic" },
  { name: "Хронична умора", slug: "chronic-fatigue" },
  { name: "Ниска самооценка и неувереност", slug: "low-self-esteem" },
  { name: "Перфекционизъм и вътрешен критик", slug: "perfectionism" },
  { name: "Трудности с лични граници", slug: "boundaries" },
  { name: "Самота и социална изолация", slug: "loneliness" },
  { name: "Трудности във взаимоотношенията", slug: "relationship-difficulties" },
  { name: "Житейски кризи", slug: "life-crisis" },
  { name: "Загуба и траур", slug: "grief" },
  { name: "Раздяла и развод", slug: "divorce" },
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
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${illustrationTherapy})`,
          }}
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background/70" />
        
        <div className="container relative z-10 pt-40 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Психологично консултиране и{" "}
              <span className="gradient-text">психотерапия</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Професионална подкрепа при емоционални и житейски трудности
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img 
                    src={counselingImage} 
                    alt="Психологично консултиране" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Психологичното консултиране и психотерапията помагат при тревожност, депресивни състояния, стрес, панически атаки и други трудни преживявания. В център „Дар" предлагаме спокойна и подкрепяща среда, в която разговорът води до повече яснота, разбиране и устойчиви промени – без осъждане и с уважение към вашето темпо.
                </p>
                
                <div className="space-y-6">
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
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-2xl p-8 border border-lavender/20">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
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
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Състояния, при които{" "}
              <span className="gradient-text">можем да помогнем</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Изберете състояние, за да прочетете повече
            </p>
            
            {/* Main Conditions */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {conditions.map((condition) => (
                  <ConditionPill key={condition.slug} {...condition} />
                ))}
              </div>
            </div>

            {/* Addictions */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-center mb-6">
                <span className="gradient-text">Зависимости</span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {addictions.map((addiction) => (
                  <ConditionPill key={addiction.slug} {...addiction} />
                ))}
              </div>
            </div>

            {/* LGBT+ Support */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-center mb-6">
                <span className="gradient-text">ЛГБТ+ психологична подкрепа</span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {lgbtSupport.map((item) => (
                  <ConditionPill key={item.slug} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Know Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Как да разберете какво е{" "}
              <span className="gradient-text">подходящо за вас?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ако не сте сигурни дали имате нужда от психологично консултиране или психотерапия, това е напълно нормално. В първата среща можем да изясним:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="text-foreground font-medium">Какво ви води при нас</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="text-foreground font-medium">Какво искате да се промени</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="text-foreground font-medium">Какъв тип работа би бил най-подходящ</p>
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
