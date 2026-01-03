import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, BookOpen, Users, Baby, GraduationCap, Heart, Check, Mic, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import speechTherapyHeader from "@/assets/speech-therapy-header.jpg";
import speechTherapyBg from "@/assets/speech-therapy-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";

const targetAudience = [
  { name: "деца с говорни затруднения", icon: Baby },
  { name: "предучилищна и училищна възраст", icon: BookOpen },
  { name: "юноши с комуникативни трудности", icon: Users },
  { name: "възрастни с говорни смущения", icon: GraduationCap },
];

const whenUseful = [
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
  {
    icon: MessageCircle,
    title: "Логопедична оценка",
    description: "първоначална диагностика и оценка на езиковото развитие",
  },
  {
    icon: Mic,
    title: "Артикулация",
    description: "работа върху артикулация и звукопроизношение",
  },
  {
    icon: BookOpen,
    title: "Езикови умения",
    description: "развитие на речта и езиковите умения",
  },
  {
    icon: Brain,
    title: "Темп и ритъм",
    description: "упражнения за темп, ритъм и плавност на речта",
  },
  {
    icon: Users,
    title: "Комуникация",
    description: "развитие на комуникативни и социални умения",
  },
  {
    icon: Heart,
    title: "Подкрепа за родители",
    description: "насоки и подкрепа за родителите",
  },
];

const benefits = [
  "по-ясна и разбираема реч",
  "по-добра комуникация",
  "по-успешно обучение",
  "повишена увереност",
  "по-лесна социална адаптация",
];

const difficulties = [
  { name: "Детски аутизъм", slug: "autism" },
  { name: "ADHD", slug: "adhd" },
  { name: "Дислексия", slug: "dyslexia" },
  { name: "Забавено говорно развитие", slug: "speech-delay" },
  { name: "Говорни смущения", slug: "speech-disorders" },
  { name: "Заекване", slug: "stuttering" },
  { name: "Артикулационни затруднения", slug: "articulation" },
  { name: "Деца със СОП", slug: "special-needs" },
  { name: "Дисграфия", slug: "dysgraphia" },
  { name: "Дискалкулия", slug: "dyscalculia" },
];

const SpeechTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background Image - positioned to the left */}
        <div 
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{
            backgroundImage: `url(${speechTherapyHeader})`,
          }}
        />
        
        {/* Overlay for text readability - gradient from right */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Логопедична подкрепа за деца, юноши и възрастни</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Подкрепа при{" "}
              <span className="gradient-text">говорни и комуникативни затруднения</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Преодоляване на говорни, езикови и комуникативни затруднения в спокойна и подкрепяща среда
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Запази час
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              В „Дар" предлагаме логопедична работа с деца, юноши и възрастни, насочена към преодоляване на говорни, езикови и комуникативни затруднения, които могат да влияят върху ученето, социалното общуване и увереността.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              Логопедичната подкрепа се осъществява в спокойна, подкрепяща и сигурна среда, съобразена с индивидуалните потребности на всеки клиент и с активното участие на родителите, когато това е необходимо.
            </p>

            {/* Target Audience Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                <span className="gradient-text">За кого е подходяща логопедичната работа?</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {targetAudience.map((item) => (
                  <div 
                    key={item.name}
                    className="relative rounded-2xl overflow-hidden border border-lavender/20 hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-primary/5 via-accent/5 to-lavender/5"
                  >
                    {/* Content */}
                    <div className="relative z-10 p-8 text-center min-h-[180px] flex flex-col items-center justify-center">
                      <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-foreground font-semibold">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground italic bg-card/80 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
                  Ранната логопедична намеса е особено важна, тъй като подпомага по-доброто развитие на речта, ученето и социалната адаптация.
                </p>
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
          style={{ backgroundImage: `url(${speechTherapyBg})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Кога е добре да се{" "}
              <span className="gradient-text">потърси логопед?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Консултация с логопед е препоръчителна, когато:
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
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протича{" "}
              <span className="gradient-text">логопедичната работа?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Логопедичният процес се изгражда индивидуално и може да включва:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground bg-card rounded-lg px-6 py-4 inline-block border border-border">
                Работата се провежда по ясен и структуриран план, съобразен с възрастта, нуждите и възможностите на клиента.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${speechTherapyBg})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Какво дава{" "}
              <span className="gradient-text">логопедичната подкрепа?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Работата с логопед подпомага:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
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
              <span className="gradient-text">Затруднения</span>, с които работим
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Изберете състояние, за да научите повече:
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
                <span className="gradient-text">Направете</span> първата стъпка
              </h2>
              <p className="text-sm text-muted-foreground">
                Ако имате притеснения относно речта или комуникацията, можете да се свържете с нас за логопедична консултация.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Логопедия" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeechTherapy;
