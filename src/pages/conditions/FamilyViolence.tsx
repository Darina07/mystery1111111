import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import contactBg from "@/assets/contact-bg.jpg";
import coupleConflictsHeader from "@/assets/couple-conflicts-header.jpg";

const conditionData = {
  title: "Агресия и насилие в семейството",
  subtitle: "Семейно консултиране",
  description: "Професионална помощ при агресивно поведение и семейно насилие.",
  heroImage: coupleConflictsHeader,
  parentService: {
    name: "Семейно и партньорско консултиране",
    href: "/services/family-counseling"
  },
  whatIs: {
    title: "Какво е семейното насилие?",
    content: `Семейното насилие включва всяка форма на агресия – физическа, емоционална, вербална или икономическа – която се случва в рамките на семейните отношения. То може да засегне всеки член на семейството.

Форми на семейно насилие:
• Физическо насилие – удари, бутане, ограничаване
• Емоционално насилие – унижения, заплахи, изолация
• Вербална агресия – крещене, обиди, критики
• Контролиращо поведение – ограничаване на свободата
• Икономическо насилие – контрол над финансите

Важно: Ако сте в непосредствена опасност, моля обадете се на спешен телефон 112 или на Националната телефонна линия за деца 116 111.`,
  },
  howWeHelp: [
    {
      icon: Shield,
      title: "Безопасност на първо място",
      description: "Оценяваме риска и помагаме за създаване на план за безопасност."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Предоставяме пространство за преработване на травматични преживявания."
    },
    {
      icon: MessageCircle,
      title: "Работа с агресията",
      description: "За агресорите – програми за управление на гнева и промяна на поведението."
    },
    {
      icon: Users,
      title: "Семейна динамика",
      description: "Изследваме моделите на взаимодействие и работим за здравословни промени."
    },
  ],
  benefits: [
    "Разбиране на цикъла на насилието",
    "Умения за управление на гнева",
    "Изграждане на здравословни граници",
    "Преработване на травмите",
    "По-безопасна семейна среда",
    "Прекъсване на модела на насилие",
  ],
};

const FamilyViolence = () => {
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
              Агресия и насилие в{" "}<span className="gradient-text">семейството</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{data.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><Button variant="hero" size="lg">КОНТАКТИ</Button></Link>
              <a href="tel:+359887079256"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        <PageBreadcrumb items={[{ label: "Услуги", href: "/#services" }, { label: data.parentService.name, href: data.parentService.href }, { label: data.title }]} />
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Какво е семейното{" "}<span className="gradient-text">насилие?</span>
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
              <p className="text-sm text-muted-foreground">Поверителна и професионална подкрепа.</p>
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
                  <Button type="submit" variant="cta" size="lg" className="px-10">Изпрати</Button>
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

export default FamilyViolence;