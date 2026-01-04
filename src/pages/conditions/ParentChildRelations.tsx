import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import contactBg from "@/assets/contact-bg.jpg";
import parentChildHeader from "@/assets/parent-child-header.jpg";

const conditionData = {
  title: "Отношения родители – деца",
  subtitle: "Семейно консултиране",
  description: "Подкрепа за изграждане на по-здрава връзка между родители и деца.",
  heroImage: parentChildHeader,
  parentService: {
    name: "Семейно и партньорско консултиране",
    href: "/services/family-counseling"
  },
  whatIs: {
    title: "Какви са предизвикателствата?",
    content: `Отношенията между родители и деца са едни от най-значимите в живота ни. Те могат да бъдат източник на радост и подкрепа, но също и на конфликти и неразбиране.

Чести предизвикателства:
• Комуникационни трудности и неразбиране
• Конфликти около правила и граници
• Трудности в тийнейджърската възраст
• Проблеми с доверието и уважението
• Различни очаквания и ценности
• Трудности след развод или раздяла
• Балансиране на контрол и автономия`,
  },
  howWeHelp: [
    {
      icon: MessageCircle,
      title: "Подобряване на комуникацията",
      description: "Учим родители и деца да се разбират и чуват по-добре."
    },
    {
      icon: Shield,
      title: "Здравословни граници",
      description: "Помагаме за установяване на ясни и уважавани граници."
    },
    {
      icon: Heart,
      title: "Емоционална връзка",
      description: "Укрепваме емоционалната близост между родител и дете."
    },
    {
      icon: Users,
      title: "Разрешаване на конфликти",
      description: "Предоставяме инструменти за конструктивно справяне с разногласията."
    },
  ],
  benefits: [
    "По-добро взаимно разбиране",
    "Намаляване на конфликтите",
    "Укрепване на доверието",
    "По-ефективна комуникация",
    "Здравословни граници с уважение",
    "По-хармонична семейна среда",
  ],
};

const ParentChildRelations = () => {
  const data = conditionData;
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute inset-0 bg-background/70" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">{data.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Отношения родители –{" "}<span className="gradient-text">деца</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{data.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><Button variant="hero" size="lg">КОНТАКТИ</Button></Link>
              <a href="tel:+359887079256"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Какви са{" "}<span className="gradient-text">предизвикателствата?</span>
            </h2>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{data.whatIs.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-deep-navy text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Как{" "}<span className="text-primary">помагаме?</span></h2>
            <p className="text-center text-white/70 mb-12">Нашият подход е индивидуален и съобразен с вашите нужди</p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.howWeHelp.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Какво ще{" "}<span className="gradient-text">постигнете?</span></h2>
            <p className="text-center text-muted-foreground mb-12">Резултатите от работата с нашите специалисти</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
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

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide"><span className="gradient-text">Свържете се</span> с нас</h2>
              <p className="text-sm text-muted-foreground">Изградете по-силна връзка с детето си.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Име" className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground" />
                  <input type="text" placeholder="Фамилия" className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Имейл" className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground" />
                  <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground" />
                </div>
                <textarea placeholder="Съобщение" rows={4} className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                  <Button type="submit" variant="cta" size="lg" className="px-10">ИЗПРАТИ</Button>
                  <a href="tel:+359887079256" className="flex items-center justify-center w-16 h-16 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg">
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

export default ParentChildRelations;