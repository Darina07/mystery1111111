import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Lock, Users, Heart, CheckCircle, Clock, Dices } from "lucide-react";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";
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
  "Пълна анонимност – без имена, без лични данни",
  "Безопасна и неосъждаща среда",
  "Професионално водене от квалифициран специалист",
  "Споделяне на опит с хора в сходна ситуация",
  "Работа върху импулсния контрол",
  "Стратегии за справяне с желанието за игра",
];

const whoIsItFor = [
  "Хора, които изпитват затруднения в контролирането на хазартната игра",
  "Тези, които са загубили контрол над времето и парите, изразходвани за хазарт",
  "Хора, чиито взаимоотношения и финанси са засегнати от хазартната зависимост",
  "Всеки, който иска да прекъсне цикъла на зависимостта",
];

const whatToExpect = [
  {
    title: "Разбиране на зависимостта",
    description: "Група, която познава механизмите на хазартната зависимост",
    icon: Heart,
  },
  {
    title: "Практически инструменти",
    description: "Конкретни стратегии за справяне с импулсите и желанието за игра",
    icon: Shield,
  },
  {
    title: "Взаимна подкрепа",
    description: "Споделяне с хора, които разбират борбата от първо лице",
    icon: Users,
  },
  {
    title: "Абсолютна дискретност",
    description: "Пълна конфиденциалност на всичко споделено в групата",
    icon: Lock,
  },
];

const GamblingGroup = () => {
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
                    <BreadcrumbPage>Хазарт</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <p className="text-primary font-medium mb-4">Групови програми – Зависимости</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Анонимна група за хазартна{" "}
              <span className="gradient-text">зависимост</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Подкрепа за хора, които искат да прекъснат цикъла на хазартната зависимост
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
                Хазартната зависимост може да остане скрита дълго време, но последиците ѝ засягат всеки аспект от живота – 
                финанси, взаимоотношения, работа, самочувствие. Нашата анонимна група предлага безопасно пространство, 
                където можете да говорите открито за своите преживявания, да получите подкрепа от хора със сходен опит 
                и да работите върху изграждането на нов начин на живот.
              </p>
            </div>
            
            <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-heading font-semibold">Пълна анонимност</h3>
              </div>
              <p className="text-center text-muted-foreground">
                Разбираме колко важна е дискретността. Не се изискват лични данни, не се записват имена. 
                Вашето участие остава строго конфиденциално.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Какво да{" "}
              <span className="gradient-text">очаквате?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whatToExpect.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-2xl p-6 border border-border"
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              За кого е{" "}
              <span className="gradient-text">групата?</span>
            </h2>
            
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
      </section>

      {/* Contact Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase tracking-wide">
              <span className="gradient-text">Свържете се</span> с нас
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за повече информация или за да се запишете. 
              Обаждането е напълно конфиденциално.
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

      <Footer />
    </div>
  );
};

export default GamblingGroup;
