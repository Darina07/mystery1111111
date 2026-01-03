import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import contactBg from "@/assets/contact-bg.jpg";
import coupleConflictsHeader from "@/assets/couple-conflicts-header.jpg";

// This data structure can be reused for all condition pages
const conditionData = {
  title: "Конфликти и проблеми в двойката",
  subtitle: "Семейно консултиране",
  description: "Професионална подкрепа за преодоляване на конфликти и възстановяване на хармонията във вашата връзка.",
  heroImage: coupleConflictsHeader,
  parentService: {
    name: "Семейно и партньорско консултиране",
    href: "/services/family-counseling"
  },
  
  // What is this condition
  whatIs: {
    title: "Какво представляват конфликтите в двойката?",
    content: `Конфликтите в двойката са естествена част от всяка връзка. Те възникват, когато партньорите имат различни нужди, очаквания или гледни точки. Въпреки че някои разногласия са нормални, честите или интензивни конфликти могат да подкопаят основите на връзката.

Проблемите в двойката могат да се проявят като:
• Чести спорове по едни и същи теми
• Трудности в комуникацията
• Чувство за отчуждение или неразбиране
• Натрупване на негативни емоции
• Загуба на интимност и близост`,
  },
  
  // Signs and symptoms
  signs: [
    "Чести спорове, които не водят до решение",
    "Избягване на важни разговори",
    "Критика, презрение или защитно поведение",
    "Чувство за неразбиране от партньора",
    "Емоционално дистанциране",
    "Липса на физическа и емоционална близост",
    "Трудности при вземане на съвместни решения",
    "Натрупване на обиди и неизказани емоции",
  ],
  
  // Causes
  causes: [
    { title: "Комуникационни проблеми", description: "Неефективна или агресивна комуникация между партньорите" },
    { title: "Различни очаквания", description: "Несъвпадащи представи за ролите и отговорностите" },
    { title: "Натоварен ежедневен живот", description: "Стрес от работата, финанси или грижи за деца" },
    { title: "Неразрешени проблеми от миналото", description: "Стари конфликти, които не са били адресирани" },
    { title: "Промени в живота", description: "Раждане на дете, смяна на работа или други големи промени" },
    { title: "Липса на качествено време заедно", description: "Недостатъчно внимание и инвестиране във връзката" },
  ],
  
  // How we help
  howWeHelp: [
    {
      icon: MessageCircle,
      title: "Подобряване на комуникацията",
      description: "Научаваме двойките да изразяват нуждите си ясно и да слушат активно."
    },
    {
      icon: Heart,
      title: "Възстановяване на близостта",
      description: "Работим върху емоционалната връзка и интимността между партньорите."
    },
    {
      icon: Shield,
      title: "Изграждане на здравословни граници",
      description: "Помагаме за установяване на ясни и уважавани граници в отношенията."
    },
    {
      icon: Users,
      title: "Разрешаване на конфликти",
      description: "Предоставяме инструменти за конструктивно справяне с разногласията."
    },
  ],
  
  // Benefits
  benefits: [
    "По-добро разбиране между партньорите",
    "Ефективна и спокойна комуникация",
    "Намаляване на честотата и интензивността на конфликтите",
    "Възстановяване на доверието и близостта",
    "Умения за справяне с бъдещи предизвикателства",
    "По-здрава и удовлетворяваща връзка",
  ],
  
  // Related conditions
  relatedConditions: [
    { name: "Брачни трудности и кризи", slug: "marital-crisis" },
    { name: "Ревност и липса на доверие", slug: "jealousy-trust" },
    { name: "Изневяра и възстановяване на връзката", slug: "infidelity" },
    { name: "Липса на интимност", slug: "lack-of-intimacy" },
  ],
};

const CoupleConflicts = () => {
  const data = conditionData;
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">{data.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {data.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{data.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  КОНТАКТИ
                </Button>
              </Link>
              <a href="tel:+359887079256">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              {data.whatIs.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{data.whatIs.title.split(" ").slice(-1)}</span>
            </h2>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {data.whatIs.content}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How We Help Section */}
      <section className="py-16 md:py-24 bg-deep-navy text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как{" "}
              <span className="text-primary">помагаме?</span>
            </h2>
            <p className="text-center text-white/70 mb-12">
              Нашият подход е индивидуален и съобразен с вашите нужди
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.howWeHelp.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/70">
                    {item.description}
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
              Какво ще{" "}
              <span className="gradient-text">постигнете?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Резултатите от работата с нашите специалисти
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
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
                Направете първата стъпка към по-здрава и щастлива връзка.
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
                  <Button type="submit" variant="cta" size="lg" className="px-10">
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

export default CoupleConflicts;
