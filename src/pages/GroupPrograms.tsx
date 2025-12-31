import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Users, Heart, Shield, Brain, Baby, MessageCircle, Target, Sparkles, Clock, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";

const groupBenefits = [
  { text: "да не останете сами със своите трудности", icon: Users },
  { text: "да получите разбиране и подкрепа от хора в сходна ситуация", icon: Heart },
  { text: "да видите нови гледни точки и решения", icon: Target },
  { text: "да изградите умения и стратегии за справяне в реалния живот", icon: Shield },
];

const whatGroupsOffer = [
  { text: "професионално водене", icon: Brain },
  { text: "силата на споделения опит", icon: Users },
  { text: "структурирана работа по конкретни теми", icon: Target },
  { text: "подкрепяща и неосъждаща среда", icon: Heart },
];

const participationBenefits = [
  "намаляване на напрежението и усещането за самота",
  "по-добро разбиране на емоции и поведение",
  "повишаване на увереността",
  "изграждане на устойчиви промени",
];

const addictionsGroup = {
  title: "Групови програми при зависимости",
  description: "Подкрепящи и терапевтични групи за хора, които се сблъскват със зависимости, както и за техни близки.",
  characteristics: [
    "анонимен формат",
    "без осъждане и стигматизация",
    "фокус върху подкрепа, осъзнаване и промяна",
  ],
  suitable: [
    "проблемна употреба на алкохол",
    "зависимости към вещества",
    "хазартна зависимост",
    "съзависимост и подкрепа за близки",
  ],
};

const relationshipsGroup = {
  title: "Необвързани и взаимоотношения",
  description: "Групови програми за хора, които искат да изграждат по-здрави, осъзнати и пълноценни връзки.",
  focus: [
    "модели на привързаност и взаимоотношения",
    "емоционална готовност за партньорство",
    "комуникация и социални умения",
    "осъзнат избор на партньор",
  ],
  note: "Това не е агенция за запознанства, а психологична групова работа, която създава условия за автентични и смислени връзки.",
};

const parentingGroup = {
  title: "Бременност и родителство",
  description: "Подкрепящи групи за жени и родители в чувствителни и важни житейски етапи.",
  suitable: [
    "бременни и бъдещи майки",
    "жени в следродилен период",
    "родители на малки деца",
    "родители, преживяващи несигурност или трудности",
  ],
  focus: [
    "емоционална подкрепа",
    "адаптация към новата роля",
    "споделяне в спокойна и приемаща среда",
  ],
};

const nlpGroup = {
  title: "НЛП за личностно и професионално развитие",
  description: "Практически ориентирани групи, насочени към лична ефективност, вътрешна промяна и развитие, както в личния, така и в професионалния живот.",
  topics: [
    "увереност и самооценка",
    "лични граници и асертивност",
    "управление на стрес и напрежение",
    "комуникационни умения",
    "изграждане на нови навици",
    "цели, мотивация и баланс работа–личен живот",
  ],
  note: "Подходящи за хора, които търсят активен и практичен подход към промяната.",
};

const processSteps = [
  { text: "малки групи", icon: Users },
  { text: "ясно определена структура и продължителност", icon: Target },
  { text: "присъствено или онлайн (според програмата)", icon: MessageCircle },
  { text: "професионално водене", icon: Brain },
  { text: "ясни правила за конфиденциалност", icon: Lock },
];

const GroupPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-lavender/30 via-background to-soft-blue/30">
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">Дар Консулт</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Групови{" "}
              <span className="gradient-text">програми</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Подкрепа, споделяне и промяна в сигурна и професионална среда
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

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Груповите програми в „Дар Консулт" създават безопасно пространство за подкрепа, осъзнаване и лична промяна, където хора с близки преживявания могат да работят върху важни за тях теми с помощта на структуриран и професионално воден процес.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-semibold text-center mb-6">
                Груповата работа дава възможност:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {groupBenefits.map((item) => (
                  <div 
                    key={item.text}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 font-medium">
              Всички групи се провеждат при ясни правила за конфиденциалност, уважение и сигурност.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Group Programs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Какво представляват{" "}
              <span className="gradient-text">груповите програми?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Груповите програми съчетават:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {whatGroupsOffer.map((item) => (
                <div 
                  key={item.text}
                  className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-heading font-semibold text-center mb-6">
                Участието в група подпомага:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {participationBenefits.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-xl p-4 border border-lavender/20"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Group Programs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Видове{" "}
              <span className="gradient-text">групови програми</span>
            </h2>

            {/* Addictions Group */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {addictionsGroup.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">{addictionsGroup.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Характеристики:</h4>
                  <ul className="space-y-2">
                    {addictionsGroup.characteristics.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Подходящи при:</h4>
                  <ul className="space-y-2">
                    {addictionsGroup.suitable.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="mt-6">
                Научи повече за групите при зависимости →
              </Button>
            </div>

            {/* Relationships Group */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {relationshipsGroup.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">{relationshipsGroup.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Фокус на групите:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {relationshipsGroup.focus.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/10 rounded-xl p-4 mb-6">
                <p className="text-foreground text-sm italic">{relationshipsGroup.note}</p>
              </div>
              
              <Button variant="outline" className="mt-2">
                Научи повече за групите за необвързани →
              </Button>
            </div>

            {/* Parenting Group */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Baby className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {parentingGroup.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">{parentingGroup.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Групите са подходящи за:</h4>
                  <ul className="space-y-2">
                    {parentingGroup.suitable.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Акцентът е върху:</h4>
                  <ul className="space-y-2">
                    {parentingGroup.focus.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="mt-6">
                Научи повече за групите за бременност и родителство →
              </Button>
            </div>

            {/* NLP Group */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {nlpGroup.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">{nlpGroup.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">НЛП групите подпомагат работа върху:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {nlpGroup.topics.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-xl p-4 mb-6">
                <p className="text-foreground text-sm">{nlpGroup.note}</p>
              </div>
              
              <Button variant="outline" className="mt-2">
                Научи повече за НЛП групите →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Groups Work */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Как протичат{" "}
              <span className="gradient-text">груповите програми?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Подробна информация за формата, графика и условията ще откриете в страницата на всяка конкретна група.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Направете първата стъпка
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ако се колебаете дали дадена групова програма е подходяща за вас, можете да се свържете с нас за допълнителна информация.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5" />
              <span>Работно време: Понеделник – Неделя | 08:00 – 22:00</span>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button variant="secondary" size="lg" className="gap-2 bg-white text-primary hover:bg-white/90">
                <Calendar className="h-5 w-5" />
                Запиши се за групова програма
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5" />
                Свържи се с нас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupPrograms;
