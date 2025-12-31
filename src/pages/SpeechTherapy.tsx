import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, BookOpen, Users, Baby, Brain, Target, CheckCircle, Clock, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";

const suitableFor = [
  { text: "деца с говорни и езикови затруднения", icon: Baby },
  { text: "деца в предучилищна и училищна възраст", icon: BookOpen },
  { text: "юноши с комуникативни трудности", icon: MessageCircle },
  { text: "възрастни с говорни смущения", icon: Users },
  { text: "родители с притеснения за речевото развитие на детето", icon: Heart },
];

const whenToSeek = [
  "детето проговаря късно или речта му е трудно разбираема",
  "има неправилно произношение на звукове",
  "наблюдава се заекване или накъсана реч",
  "има беден речников запас или трудности в изразяването",
  "детето среща трудности в училище, свързани с четене и писане",
  "има съмнения за специфични обучителни затруднения",
  "са налице комуникативни затруднения при аутизъм или ADHD",
  "възрастен човек има говорни смущения вследствие на стрес, травма или заболяване",
];

const processSteps = [
  { text: "логопедична оценка", icon: Target },
  { text: "работа върху артикулация и звукопроизношение", icon: MessageCircle },
  { text: "развитие на речта и езиковите умения", icon: Brain },
  { text: "упражнения за темп, ритъм и плавност на речта", icon: Sparkles },
  { text: "развитие на комуникативни и социални умения", icon: Users },
  { text: "насоки и подкрепа за родителите", icon: Heart },
];

const difficulties = [
  "забавено речево развитие",
  "говорни нарушения",
  "заекване",
  "артикулационни затруднения",
  "логопедична подкрепа при аутизъм",
  "логопедична подкрепа при ADHD",
  "работа с деца със специални образователни потребности (СОП)",
  "дислексия",
  "дисграфия",
  "дискалкулия",
];

const benefits = [
  "по-ясна и разбираема реч",
  "по-добра комуникация",
  "по-успешно обучение",
  "повишена увереност",
  "по-лесна социална адаптация",
];

const SpeechTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-lavender/30 via-background to-soft-blue/30">
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">Дар Консулт</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text">Логопед</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Подкрепа при говорни, езикови и комуникативни затруднения
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запази час
              </Button>
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                +359 887 079 256
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              В „Дар" предлагаме логопедична работа с деца, юноши и възрастни, насочена към преодоляване на говорни, езикови и комуникативни затруднения, които могат да влияят върху ученето, социалното общуване и увереността.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <p className="text-foreground leading-relaxed text-center">
                Логопедичната подкрепа се осъществява в спокойна, подкрепяща и сигурна среда, съобразена с индивидуалните потребности на всеки клиент и с активното участие на родителите, когато това е необходимо.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              За кого е подходяща{" "}
              <span className="gradient-text">логопедичната работа?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Логопедичните услуги са подходящи за:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {suitableFor.map((item) => (
                <div 
                  key={item.text}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
              <p className="text-foreground font-medium">
                ⭐ Ранната логопедична намеса е особено важна, тъй като подпомага по-доброто развитие на речта, ученето и социалната адаптация.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Кога е добре да се{" "}
              <span className="gradient-text">потърси логопед?</span>
            </h2>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground text-center mb-8">
                Консултация с логопед е препоръчителна, когато:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {whenToSeek.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-xl p-4 border border-lavender/20"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протича{" "}
              <span className="gradient-text">логопедичната работа?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Логопедичният процес се изгражда индивидуално и може да включва:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {processSteps.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 text-center">
              <p className="text-foreground">
                Работата се провежда по ясен и структуриран план, съобразен с възрастта, нуждите и възможностите на клиента.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulties Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Затруднения,{" "}
              <span className="gradient-text">с които работим</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Чрез бутоните „Научи повече" можете да откриете допълнителна информация за:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {difficulties.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <p className="text-foreground font-medium mb-3">{item}</p>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    Научи повече →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Какво дава{" "}
              <span className="gradient-text">логопедичната подкрепа?</span>
            </h2>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground text-center mb-8">
                Работата с логопед подпомага:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)/0.95), hsl(var(--primary)/0.85)), url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Направете първата стъпка
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ако имате притеснения относно речта или комуникацията, можете да се свържете с нас за логопедична консултация.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="secondary" 
                size="xl" 
                className="gap-2 bg-background text-foreground hover:bg-background/90"
              >
                <Calendar className="h-5 w-5" />
                Запази час
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-5 w-5" />
                +359 887 079 256
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span>Работно време: Понеделник – Неделя | 08:00 – 22:00</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeechTherapy;
