import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield, Sunrise, Users, Sparkles } from "lucide-react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData = {
  title: "Загуба и скръб",
  subtitle: "Подкрепа в процеса на скърбене",
  description: "Професионална помощ при преживяване на загуба и намиране на път към изцеление.",
  heroImage: conditionsHeader,
  parentService: {
    title: "Психологично консултиране",
    path: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява загубата?",
    content: "Загубата може да бъде свързана със смърт на близък човек, край на връзка, загуба на работа, здраве или мечта. Скърбенето е естествен процес, който изисква време и подкрепа. Няма правилен или грешен начин да скърбим – всеки човек преминава през този процес по свой уникален начин."
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Безусловно приемане и съпричастност в трудните моменти."
    },
    {
      icon: Shield,
      title: "Безопасно пространство",
      description: "Място за изразяване на всички емоции без осъждане."
    },
    {
      icon: Sunrise,
      title: "Намиране на смисъл",
      description: "Подкрепа при интегриране на загубата и продължаване напред."
    },
    {
      icon: Users,
      title: "Ритуали и памет",
      description: "Помощ при създаване на смислени начини за почитане на загубеното."
    }
  ],
  benefits: [
    "Преработване на болката по здравословен начин",
    "Приемане на загубата без забравяне",
    "Възстановяване на способността за радост",
    "Намиране на нов смисъл в живота",
    "Изграждане на вътрешна устойчивост"
  ]
};

const Loss = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${conditionData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {conditionData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            {conditionData.subtitle}
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-80">
            {conditionData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/contact">Запазете час</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <a href="tel:+359888123456">
                <Phone className="mr-2 h-5 w-5" />
                Обадете се
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <PageBreadcrumb 
          items={[
            { label: "Начало", href: "/" },
            { label: conditionData.parentService.title, href: conditionData.parentService.path },
            { label: conditionData.title }
          ]} 
        />
      </div>

      {/* What Is Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {conditionData.whatIs.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {conditionData.whatIs.content}
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Как можем да помогнем?
          </h2>
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

      {/* Benefits Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Какво ще постигнете?
          </h2>
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

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Готови ли сте да направите първата стъпка?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за консултация и заедно ще намерим най-добрия подход за вас.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Свържете се с нас</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+359888123456">
                  <Phone className="mr-2 h-5 w-5" />
                  +359 888 123 456
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loss;
