import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, Heart, Target, Users, Shield, Baby, BookOpen, Brain, Smile, AlertTriangle, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import childHeader from "@/assets/child-header-sticker.png";
import contactBg from "@/assets/contact-bg.jpg";
import pencilIllustration from "@/assets/pencil-illustration.png";
import childrenGroupIllustration from "@/assets/children-group-illustration.png";
import childProcessSticker from "@/assets/child-process-sticker.png";
import conditionsSticker from "@/assets/conditions-sticker.png";
import mindIllustration from "@/assets/mind-illustration.png";
import conditionsSupport from "@/assets/conditions-support.jpg";
import conditionsLgbt from "@/assets/conditions-lgbt.jpg";
import lgbtCounseling from "@/assets/lgbt-counseling.jpg";
import specialNeedsSticker from "@/assets/special-needs-sticker.png";
import lifeCrisisSticker from "@/assets/life-crisis-sticker.png";
import socialAdaptationSticker from "@/assets/social-adaptation-sticker.png";
import learningDifficulties from "@/assets/learning-difficulties.jpg";
import speechTherapy from "@/assets/speech-therapy.jpg";
import emotionalSupport from "@/assets/emotional-support.jpg";
import learningSticker from "@/assets/learning-sticker.png";

const workIncludes = [
  { text: "срещи с детето или юношата", icon: Baby },
  { text: "консултиране и насочване на родителите", icon: Users },
  { text: "подкрепа при семейни и училищни трудности", icon: BookOpen },
  { text: "сътрудничество с училищната среда, когато е подходящо", icon: GraduationCap },
];

const whenToSeek = [
  "детето проявява тревожност, страхове или силни емоционални реакции",
  "има промени в поведението, агресия или силна затвореност",
  "се наблюдават трудности в училище или ученето",
  "детето трудно се адаптира към промени",
  "има проблеми в общуването с връстници",
  "наблюдават се ниска самооценка или социална тревожност",
  "има тикове, заекване или психосоматични оплаквания",
  "детето или юношата преживява загуба, раздяла или семейни промени",
];

const processSteps = [
  { icon: Users, title: "Първоначална среща", description: "с родителите" },
  { icon: Baby, title: "Индивидуални срещи", description: "с детето или юношата" },
  { icon: Heart, title: "Подкрепа и насоки", description: "за родителите" },
  { icon: Shield, title: "Изграждане на умения", description: "за емоционална устойчивост" },
];

const neuroConditions = [
  { name: "Деца с аутизъм (разстройства от аутистичния спектър)", slug: "autism", description: "Развитие на комуникативни умения, социално взаимодействие и самостоятелност в ежедневието." },
  { name: "ХАДВ / ADHD", slug: "adhd", description: "Изграждане на умения за самоконтрол, внимание, организираност и емоционална регулация." },
  { name: "Синдром на Аспергер", slug: "asperger", description: "Подкрепа в развитието на социални, речеви и комуникативни умения." },
  { name: "Синдром на Даун", slug: "down-syndrome", description: "Подобряване на комуникативните, социалните и когнитивните умения." },
  { name: "Умствена изостаналост", slug: "intellectual-disability", description: "Развитие на разбирането, речта и функционалната самостоятелност." },
  { name: "Синдром на Рет", slug: "rett-syndrome", description: "Работа върху сензорна регулация и алтернативни форми на комуникация." },
];

const learningConditions = [
  { name: "Дислексия", slug: "dyslexia" },
  { name: "Дисграфия", slug: "dysgraphia" },
  { name: "Дискалкулия", slug: "dyscalculia" },
  { name: "Диспраксия", slug: "dyspraxia" },
  { name: "Нарушена памет и концентрация", slug: "memory-concentration" },
];

const speechConditions = [
  { name: "Заекване", slug: "stuttering" },
  { name: "Селективен мутизъм", slug: "selective-mutism" },
  { name: "Говорни нарушения", slug: "speech-disorders" },
];

const emotionalConditions = [
  { name: "Посттравматично стресово разстройство", slug: "child-ptsd" },
  { name: "Тикове и синдром на Турет", slug: "tics-tourette" },
  { name: "Агресия и автоагресия", slug: "aggression-self-harm" },
  { name: "Страхове и фобии", slug: "child-fears" },
  { name: "Проблеми със съня", slug: "child-sleep-problems" },
  { name: "Психосоматични състояния", slug: "child-psychosomatic" },
];

const socialConditions = [
  { name: "Трудности в адаптацията", slug: "adaptation-difficulties" },
  { name: "Проблеми в общуването с връстници", slug: "peer-communication" },
  { name: "Занижена самооценка", slug: "low-self-esteem" },
  { name: "Конфликтни взаимоотношения", slug: "conflict-relationships" },
  { name: "Бягство от училище или дома", slug: "running-away" },
  { name: "Лъжи, кражби и рисково поведение", slug: "risky-behavior" },
];

const lifeConditions = [
  { name: "Загуба на близък", slug: "child-grief" },
  { name: "Развод на родителите", slug: "parents-divorce" },
  { name: "Нов член в семейството", slug: "new-family-member" },
  { name: "Смяна на местоживеене или училище", slug: "relocation" },
  { name: "Справяне със стресови ситуации", slug: "child-stress" },
];

const specialConditions = [
  { name: "Деца с мускулна дистрофия", slug: "muscular-dystrophy" },
  { name: "Деца с епилепсия", slug: "epilepsy" },
  { name: "Хронични физически заболявания", slug: "chronic-illness" },
  { name: "Специални образователни потребности (СОП)", slug: "special-educational-needs" },
];

const lgbtConditions = [
  { name: "Психологична подкрепа за ЛГБТ+ деца и юноши", slug: "lgbt-youth" },
  { name: "Идентичност и себеприемане", slug: "youth-identity" },
  { name: "Подкрепа при социално отхвърляне", slug: "social-rejection-support" },
  { name: "Coming out подкрепа", slug: "coming-out-support" },
];

const ConditionPill = ({ name, slug, colorIndex }: { name: string; slug: string; colorIndex: number }) => (
  <Link
    to={`/conditions/${slug}`}
    className={`inline-block px-4 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
      colorIndex % 2 === 0 ? 'bg-primary' : 'bg-accent'
    }`}
  >
    {name}
  </Link>
);

const ChildCounseling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${childHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Подкрепа от детски психолог</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Детско – юношеско{" "}
              <span className="gradient-text">консултиране</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Професионална психологична подкрепа за деца, тийнейджъри и родители
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  КОНТАКТИ
                </Link>
              </Button>
              <a href="tel:+359887079256" aria-label="Обадете се">
                <Button variant="hero-outline" size="lg">
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
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Детско-юношеското консултиране представлява професионална психологична подкрепа за деца и юноши, предоставяна от детски психолог, при емоционални, поведенчески и социални трудности. В център „Дар" създаваме спокойна и сигурна среда, в която децата и тийнейджърите могат да изразят преживяванията си по начин, съобразен с възрастта и индивидуалните им потребности.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center">
              Работата с детски психолог е насочена както към детето или младежа, така и към родителите, когато това е необходимо. Целта е по-добро разбиране на трудностите, подкрепа в развитието и изграждане на устойчиви умения за справяне.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section 
        className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
        style={{ backgroundImage: `url(${pencilIllustration})`, backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
      >
        <div className="absolute inset-0 bg-muted/80" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Какво представлява{" "}
              <span className="gradient-text">консултирането?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Детско-юношеското консултиране е форма на работа с детски психолог, която подпомага децата и юношите при трудности, свързани с емоциите, поведението, ученето, взаимоотношенията и адаптацията.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workIncludes.map((item) => (
                <div 
                  key={item.text}
                  className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When To Seek Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Кога е добре да се потърси{" "}
              <span className="gradient-text">детски психолог?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Консултация с детски психолог може да бъде полезна, ако:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {whenToSeek.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-xl p-4 border border-lavender/20"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <p className="text-foreground font-medium">
                👉 Ранната консултация с детски психолог често помага за по-леко и здравословно развитие.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative">
                <img 
                  src={childProcessSticker} 
                  alt="Детско консултиране процес" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              
              {/* Content Right */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Как протича{" "}
                  <span className="gradient-text">работата?</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Процесът е гъвкав и се съобразява с възрастта, нуждите и темпото на детето.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow flex items-center gap-4"
                    >
                      <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
          
          {/* Neuro Conditions - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Невроразвитийни и генетични състояния
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {neuroConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src={specialNeedsSticker} 
                alt="Невроразвитийни състояния" 
                className="w-full max-w-[240px]"
              />
            </div>
          </div>

          {/* Learning Conditions - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <img 
                src={learningSticker} 
                alt="Обучителни затруднения" 
                className="w-full max-w-[240px]"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Обучителни и специфични затруднения
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {learningConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Speech Conditions - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Говорни и комуникативни затруднения
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {speechConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src={speechTherapy} 
                alt="Говорни затруднения" 
                className="w-full max-w-[180px] rounded-2xl"
              />
            </div>
          </div>

          {/* Emotional Conditions - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <img 
                src={emotionalSupport} 
                alt="Емоционални затруднения" 
                className="w-full max-w-xs rounded-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Емоционални и поведенчески затруднения
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {emotionalConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Social Conditions - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Социална адаптация и семейни трудности
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src={socialAdaptationSticker} 
                alt="Социална адаптация" 
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Life Conditions - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <img 
                src={lifeCrisisSticker} 
                alt="Житейски кризи" 
                className="w-full max-w-xs"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Житейски кризи и стресови ситуации
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {lifeConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Special Conditions - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Физически заболявания и специални потребности
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {specialConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src={specialNeedsSticker} 
                alt="Специални потребности" 
                className="w-full max-w-xs"
              />
            </div>
          </div>

          {/* LGBT Conditions - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <img 
                src={lgbtCounseling} 
                alt="ЛГБТ+ подкрепа" 
                className="w-full max-w-xs rounded-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  ЛГБТ+ деца и юноши
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {lgbtConditions.map((condition, index) => (
                  <ConditionPill key={condition.slug} name={condition.name} slug={condition.slug} colorIndex={index} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Сигурна, приемаща и неосъждаща среда
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section 
        className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
        style={{ backgroundImage: `url(${childrenGroupIllustration})`, backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
      >
        <div className="absolute inset-0 bg-muted/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              За кого е <span className="gradient-text">подходящо?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Работата с детски психолог е подходяща за деца и юноши, както и за родители, които търсят професионална подкрепа, разбиране и насоки в процеса на развитие.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Contact Form */}
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
                Ако имате притеснения за емоционалното или поведенческото състояние на вашето дете, можете да се свържете с нас за разговор и насочване.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Детско консултиране" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChildCounseling;
