import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Lock, Users, Heart, CheckCircle, Clock, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";
import groupCodependencyWho from "@/assets/group-codependency-who.jpg";
import groupAddictions from "@/assets/group-addictions.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const groupFeatures = [
  "Пълна анонимност и конфиденциалност",
  "Безопасна и неосъждаща среда",
  "Професионално водене от квалифициран специалист",
  "Разпознаване на съзависими модели на поведение",
  "Работа върху здрави граници",
  "Подкрепа за самостоятелност и себеобич",
];

const whoIsItFor = [
  "Партньори на хора със зависимости",
  "Родители на деца със зависимости",
  "Деца на родители със зависимости",
  "Близки приятели или роднини на хора със зависимости",
  "Всеки, който се чувства 'заключен' в грижата за зависим човек",
];

const whatToExpect = [
  {
    title: "Разбиране на съзависимостта",
    description: "Осъзнаване как зависимостта на близкия влияе на вашия живот",
    icon: Heart,
  },
  {
    title: "Здрави граници",
    description: "Научаване как да поставяте граници, без да се чувствате виновни",
    icon: Shield,
  },
  {
    title: "Взаимна подкрепа",
    description: "Споделяне с хора, които разбират вашата ситуация",
    icon: Users,
  },
  {
    title: "Фокус върху вас",
    description: "Връщане на вниманието към собствените ви нужди и благополучие",
    icon: HandHeart,
  },
];

const CodependencyGroup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${groupAddictions})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            {/* Breadcrumb */}
            <div className="flex justify-center mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Начало</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/services/group-programs">Групови програми</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/services/group-programs/addictions">Зависимости</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Съзависимост</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <p className="text-primary font-medium mb-4">Групови програми – Зависимости</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Група за близки на хора със зависимости{" "}
              <span className="gradient-text">(съзависимост)</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Подкрепа за семейства и близки, които са засегнати от зависимостта на любим човек
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запиши се
              </Button>
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                +359 887 079 256
              </Button>
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
                Когато обичаме човек със зависимост, нашият живот също се променя. Може да се озовем в роля на спасител, контрольор или жертва. 
                Може да загубим себе си в опитите да помогнем на другия. Съзависимостта е реален и болезнен модел, 
                който заслужава внимание и подкрепа. Нашата група е създадена специално за хора като вас – 
                за да не сте сами и да намерите пътя обратно към себе си.
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
                  <Lock className="h-10 w-10 text-primary-foreground" />
                  <h3 className="text-xl md:text-2xl font-heading font-semibold uppercase tracking-wide text-primary-foreground">
                    Пълна конфиденциалност
                  </h3>
                </div>
                <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
                  Всички групи се провеждат при стриктни правила за анонимност. Не се изискват лични данни, 
                  не се записват имена и не се разкрива информация за участниците. Вашата поверителност е наш приоритет.
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
            
            <div className="grid md:grid-cols-2 gap-6">
              {whatToExpect.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow"
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
              Характеристики на{" "}
              <span className="gradient-text">групата</span>
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
                  src={groupCodependencyWho} 
                  alt="Илюстрация за съзависимост" 
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
                Обаждането е напълно конфиденциално.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <form className="space-y-6">
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

                <div>
                  <textarea 
                    placeholder="Съобщение" 
                    rows={4}
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

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

export default CodependencyGroup;
