import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, Heart, Target, Users, Shield, HeartHandshake, Baby, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import familyHeaderBg from "@/assets/family-counseling-header-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import marriageRings from "@/assets/marriage-rings.jpg";
import couplesPartners from "@/assets/couples-partners.jpg";
import lgbtCouple from "@/assets/lgbt-couple.jpg";
import parentsChildren from "@/assets/parents-children.jpg";
import newPartners from "@/assets/new-partners.jpg";

const workWith = [
  { name: "партньори и съпрузи", icon: HeartHandshake, image: couplesPartners },
  { name: "ЛГБТ+ двойки", icon: Heart, image: lgbtCouple },
  { name: "родители и деца", icon: Baby, image: parentsChildren },
  { name: "нови партньори и смесени семейства", icon: Users, image: newPartners },
];

const whenUseful = [
  "има чести конфликти, напрежение или отчуждение",
  "комуникацията между партньорите е трудна или болезнена",
  "липсва близост, доверие или разбиране",
  "има ревност, несигурност или изневяра",
  "семейството преминава през промяна – раждане на дете, нов партньор, раздяла",
  "възникват трудности във възпитанието и отношенията с децата",
  "има сексуални проблеми или неудовлетвореност в интимния живот",
];

const sexualTopics = [
  "липса или намалено сексуално желание",
  "различия в сексуалните нужди между партньорите",
  "трудности с възбуда или удовлетворение",
  "болка или дискомфорт при сексуални контакти",
  "сексуални затруднения, свързани със стрес, тревожност или житейски промени",
  "интимност след раждане, заболяване или травматични преживявания",
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Изясняване",
    description: "изясняване на проблемите и моделите във взаимоотношенията",
  },
  {
    icon: Target,
    title: "Комуникация",
    description: "подобряване на комуникацията",
  },
  {
    icon: Heart,
    title: "Доверие",
    description: "възстановяване на доверие и емоционална близост",
  },
  {
    icon: Sparkles,
    title: "Интимност",
    description: "работа върху интимността и сексуалните отношения",
  },
  {
    icon: Shield,
    title: "Граници",
    description: "изграждане на здравословни граници и роли",
  },
  {
    icon: Users,
    title: "Семейна динамика",
    description: "подкрепа за родителите и семейната динамика",
  },
];

const benefits = [
  "по-добро разбиране между партньорите",
  "по-спокойна и ясна комуникация",
  "намаляване на конфликтите и напрежението",
  "подобряване на интимния и сексуалния живот",
  "по-здрава и стабилна семейна среда",
  "по-уверени решения за бъдещето",
];

const difficulties = [
  { name: "Конфликти и проблеми в двойката", slug: "couple-conflicts" },
  { name: "Брачни трудности и кризи", slug: "marital-crisis" },
  { name: "Ревност и липса на доверие", slug: "jealousy-trust" },
  { name: "Изневяра и възстановяване на връзката", slug: "infidelity" },
  { name: "Сексуални проблеми и смущения", slug: "sexual-problems" },
  { name: "Липса на интимност", slug: "lack-of-intimacy" },
  { name: "Агресия и насилие в семейството", slug: "family-violence" },
  { name: "Следродилен период и промени в отношенията", slug: "postpartum" },
  { name: "Отношения родители – деца", slug: "parent-child-relations" },
  { name: "Нови партньори и смесени семейства", slug: "blended-families" },
  { name: "Раздяла, загуба и житейски промени", slug: "separation-loss" },
];

const FamilyCounseling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Семейно и партньорско консултиране"
        description="Професионално семейно и партньорско консултиране за двойки, родители и семейства. Помощ при конфликти, криза и комуникационни проблеми."
        url="/services/family-counseling"
        keywords="семеен психолог, партньорска терапия, семейно консултиране, двойки, брачна терапия"
      />
      <ProfessionalServiceSchema
        name="Семейно и партньорско консултиране"
        description="Професионално семейно и партньорско консултиране за двойки, родители и семейства."
        url="/services/family-counseling"
        serviceType="Семейно консултиране"
      />
      <BreadcrumbSchema items={[
        { name: "Начало", url: "/" },
        { name: "Услуги", url: "/services" },
        { name: "Семейно консултиране", url: "/services/family-counseling" }
      ]} />
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image - positioned to the left */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${familyHeaderBg})`,
          }}
        />
        
        {/* Overlay for text readability - gradient from right */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Брачен консултант, семеен психолог и сексолог</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Консултиране за{" "}
              <span className="gradient-text">двойки и семейства</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Професионална подкрепа за подобряване на взаимоотношенията, комуникацията и емоционалната близост
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
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-center">
              В „Дар" център предлагаме професионално консултиране за двойки и семейства, насочено към подобряване на взаимоотношенията, комуникацията, емоционалната близост и интимния живот. Консултирането се води от брачен консултант и семеен психолог, а при необходимост включва и работа със сексолог при сексуални проблеми и смущения. Всичко се случва в спокойна, конфиденциална и неосъждаща среда.
            </p>

            {/* Work With Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                <span className="gradient-text">Работим с:</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workWith.map((item) => (
                  <div 
                    key={item.name}
                    className="relative rounded-2xl overflow-hidden border border-lavender/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/70 group-hover:bg-background/60 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                      <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-foreground font-semibold">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Useful Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marriageRings})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Кога е подходящо{" "}
              <span className="gradient-text">консултирането?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Подкрепата може да бъде полезна, когато:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {whenUseful.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-muted-foreground italic bg-card/80 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
                Не е нужно да чакате сериозна криза – много двойки търсят брачен консултант или семеен психолог превантивно, за да подобрят връзката си.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sexual Problems Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-lavender/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold">
                  Сексуални проблеми и{" "}
                  <span className="gradient-text">работа със сексолог</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Сексуалността е естествена част от партньорските отношения. Когато възникнат сексуални проблеми или смущения, те често влияят върху цялата връзка. В рамките на консултирането се работи със сексолог по теми като:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {sexualTopics.map((topic, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-card/50 rounded-lg p-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                    <p className="text-foreground text-base">{topic}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-muted-foreground italic text-center">
                Подходът е деликатен, професионален и напълно конфиденциален.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marriageRings})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протича{" "}
              <span className="gradient-text">консултирането?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Процесът е съобразен с конкретната ситуация и нуждите на двойката или семейството.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground bg-card/80 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
                Консултирането може да бъде: <strong>за двойки</strong> (партньори или съпрузи), <strong>за семейства с деца</strong>, <strong>за родители</strong> във връзка с отношенията с децата.
              </p>
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
              <span className="gradient-text">консултирането?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Работата с брачен консултант, семеен психолог и сексолог подпомага:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difficulties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              <span className="gradient-text">Трудности</span>, по които работим
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Натиснете, за да научите повече:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {difficulties.map((difficulty, index) => (
                <Link
                  key={difficulty.slug}
                  to={`/conditions/${difficulty.slug}`}
                  className={`px-5 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                  }`}
                >
                  {difficulty.name}
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
                Ако търсите брачен консултант, семеен психолог или сексолог, можете да се свържете с нас за повече информация или записване на час.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Семейно консултиране" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyCounseling;
