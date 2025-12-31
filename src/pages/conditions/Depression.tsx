import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Brain, Heart, Sun, Shield, Sparkles } from "lucide-react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData = {
  title: "Депресия",
  subtitle: "Професионална помощ при депресивни състояния",
  description: "Подкрепа за преодоляване на депресията и възстановяване на радостта от живота.",
  heroImage: conditionsHeader,
  parentService: {
    title: "Психологично консултиране",
    path: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява депресията?",
    content: "Депресията е повече от обикновена тъга – това е състояние, което засяга мислите, чувствата, поведението и физическото здраве. Може да включва постоянно усещане за безнадеждност, загуба на интерес, промени в съня и апетита, умора и затруднена концентрация. Депресията е лечимо състояние и с правилната подкрепа е възможно пълно възстановяване."
  },
  howWeHelp: [
    { icon: Brain, title: "Когнитивна терапия", description: "Работа с негативните мисловни модели и убеждения." },
    { icon: Heart, title: "Емоционална подкрепа", description: "Безопасно пространство за изразяване на чувствата." },
    { icon: Sun, title: "Активиране на поведението", description: "Постепенно възстановяване на приятните дейности." },
    { icon: Shield, title: "Превенция на рецидив", description: "Стратегии за поддържане на постигнатия напредък." }
  ],
  benefits: [
    "Облекчаване на депресивните симптоми",
    "Възстановяване на енергията и мотивацията",
    "По-позитивен поглед към живота",
    "Подобрени взаимоотношения",
    "Устойчиви стратегии за справяне"
  ]
};

const Depression = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${conditionData.heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">{conditionData.title}</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">{conditionData.subtitle}</p>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-80">{conditionData.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/contact">Запазете час</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <a href="tel:+359888123456"><Phone className="mr-2 h-5 w-5" />Обадете се</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4">
        <PageBreadcrumb items={[
          { label: "Начало", href: "/" },
          { label: conditionData.parentService.title, href: conditionData.parentService.path },
          { label: conditionData.title }
        ]} />
      </div>

      <section className="py-16 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{conditionData.whatIs.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{conditionData.whatIs.content}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Как можем да помогнем?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {conditionData.howWeHelp.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Какво ще постигнете?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {conditionData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-card rounded-lg p-4 shadow">
                  <Sparkles className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Готови ли сте да направите първата стъпка?</h2>
            <p className="text-muted-foreground mb-8">Свържете се с нас за консултация.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild><Link to="/contact">Свържете се с нас</Link></Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+359888123456"><Phone className="mr-2 h-5 w-5" />+359 888 123 456</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Depression;
