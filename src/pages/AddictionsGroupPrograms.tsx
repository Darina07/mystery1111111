import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Lock, Users, Heart, CheckCircle, ArrowRight } from "lucide-react";
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

const addictionGroups = [
  {
    title: "Анонимна група за проблемна употреба на алкохол",
    description: "Подкрепяща група за хора, които искат да преодолеят проблемната употреба на алкохол в безопасна и анонимна среда.",
    link: "/services/group-programs/addictions/alcohol",
    icon: Shield,
  },
  {
    title: "Анонимна група за зависимости към вещества",
    description: "Терапевтична група за хора, преживяващи зависимост към различни вещества, с фокус върху възстановяване и подкрепа.",
    link: "/services/group-programs/addictions/substances",
    icon: Shield,
  },
  {
    title: "Анонимна група за хазартна зависимост",
    description: "Подкрепа за хора, борещи се с хазартна зависимост, чрез споделяне на опит и изграждане на стратегии за промяна.",
    link: "/services/group-programs/addictions/gambling",
    icon: Shield,
  },
  {
    title: "Анонимна група за любовна зависимост",
    description: "Група за хора, които изпитват нездравословни модели в любовните си взаимоотношения и търсят баланс.",
    link: "/services/group-programs/addictions/love",
    icon: Heart,
  },
  {
    title: "Група за близки на хора със зависимости (съзависимост)",
    description: "Подкрепа за семейства и близки на хора със зависимости, работа върху съзависими модели на поведение.",
    link: "/services/group-programs/addictions/codependency",
    icon: Users,
  },
];

const keyPoints = [
  {
    title: "Анонимност и конфиденциалност",
    description: "Пълна защита на личната информация и идентичност на участниците",
    icon: Lock,
  },
  {
    title: "Неосъждаща и подкрепяща среда",
    description: "Безопасно пространство без критика, стигматизация или осъждане",
    icon: Heart,
  },
  {
    title: "Сила на груповата динамика",
    description: "Споделеният опит и взаимната подкрепа са ключови за възстановяването",
    icon: Users,
  },
  {
    title: "Професионално водене",
    description: "Групите се водят от квалифицирани специалисти с опит в работата със зависимости",
    icon: Shield,
  },
];

const AddictionsGroupPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${groupAddictions})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        
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
                    <BreadcrumbPage>Зависимости</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <p className="text-primary font-medium mb-4">Групови програми</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Групи за подкрепа при{" "}
              <span className="gradient-text">зависимости</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Анонимни и терапевтични групи за хора, които търсят подкрепа и промяна
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

      {/* Key Points Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Ключови{" "}
              <span className="gradient-text">акценти</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Нашият подход към груповата работа при зависимости се основава на:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point) => (
                <div 
                  key={point.title}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Groups List Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Нашите{" "}
              <span className="gradient-text">групи</span>
            </h2>
            
            <div className="space-y-4">
              {addictionGroups.map((group) => (
                <Link 
                  key={group.title}
                  to={group.link}
                  className="block bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <group.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{group.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">
                Пълна конфиденциалност
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Всички групи се провеждат при стриктни правила за анонимност. Не се изискват лични данни, 
                не се записват имена и не се разкрива информация за участниците. Вашата поверителност е наш приоритет.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Готови сте да направите{" "}
              <span className="gradient-text">първата стъпка?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за повече информация или за да се запишете в група. 
              Вашето обаждане е напълно конфиденциално.
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

export default AddictionsGroupPrograms;
