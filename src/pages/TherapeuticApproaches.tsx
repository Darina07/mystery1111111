import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap, TreePine, Phone } from "lucide-react";
import therapeuticApproachesHeader from "@/assets/therapeutic-approaches-header.jpg";

const approachCategories = [
  {
    title: "Класически психотерапевтични подходи",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: [
      {
        name: "Психоанализа",
        description: "Психоанализата изследва дълбоките, често несъзнавани процеси, които влияят върху мислите, емоциите и поведението ни. Този подход помага за по-дълбоко разбиране на вътрешните конфликти, ранните преживявания и повтарящите се житейски модели."
      },
      {
        name: "Психодинамична терапия",
        description: "Психодинамичната терапия се фокусира върху връзката между минал опит и настоящи трудности. Чрез изследване на емоциите, взаимоотношенията и вътрешните конфликти се постига по-добро себепознание и промяна."
      }
    ]
  },
  {
    title: "Когнитивни и поведенчески подходи",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: [
      {
        name: "Когнитивно-поведенческа терапия (КПТ)",
        description: "КПТ е структуриран и практичен подход, насочен към връзката между мисли, емоции и поведение. Той подпомага изграждането на по-адаптивни начини на мислене и справяне с тревожност, депресия, стрес и други трудности."
      },
      {
        name: "Схема терапия",
        description: "Схема терапията работи с дълбоко вкоренени емоционални модели, формирани още в детството. Подходяща е при повтарящи се житейски и релационни трудности, ниска самооценка и емоционални блокажи."
      }
    ]
  },
  {
    title: "Хуманистични и екзистенциални подходи",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: [
      {
        name: "Гещалт терапия",
        description: "Гещалт терапията поставя акцент върху осъзнаването \"тук и сега\", личната отговорност и автентичния контакт със себе си и другите."
      },
      {
        name: "Екзистенциална психотерапия",
        description: "Този подход изследва теми като смисъл, избор, свобода, отговорност и идентичност. Подходящ е при житейски кризи и търсене на посока."
      },
      {
        name: "Позитивна психотерапия (Пезешкиан)",
        description: "Фокусира се върху ресурсите, силните страни и потенциала на личността, като подпомага баланса в различните области на живота."
      }
    ]
  },
  {
    title: "Системни и семейни подходи",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: [
      {
        name: "Семейна терапия",
        description: "Работи с взаимоотношенията в семейството като система и подпомага подобряването на комуникацията и разрешаването на конфликти."
      },
      {
        name: "Трансгенерационна терапия",
        description: "Изследва влиянието на семейната история и моделите, предавани през поколенията."
      },
      {
        name: "Терапия на двойки",
        description: "Насочена към партньорските взаимоотношения, комуникацията и възстановяването на близостта и доверието."
      }
    ]
  },
  {
    title: "Травма-фокусирани подходи",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: [
      {
        name: "EMDR (Десензитизация и преработка чрез движение на очите)",
        description: "EMDR е доказан метод за работа с психологична травма и посттравматичен стрес."
      },
      {
        name: "Соматично преживяване (Somatic Experiencing)",
        description: "Работи с връзката между тялото и психиката за освобождаване на натрупано напрежение и травматичен стрес."
      }
    ]
  },
  {
    title: "Телесно-ориентирани подходи",
    icon: Hand,
    color: "from-accent to-soft-blue",
    approaches: [
      {
        name: "Биоенергийна терапия",
        description: "Свързва емоционалните преживявания с телесните реакции и подпомага освобождаването на напрежение."
      },
      {
        name: "Телесна психотерапия",
        description: "Работи с телесните усещания като важна част от емоционалното осъзнаване."
      },
      {
        name: "Танцово-двигателна терапия",
        description: "Използва движението като средство за изразяване, осъзнаване и личностно развитие."
      }
    ]
  },
  {
    title: "Креативни и експресивни подходи",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: [
      {
        name: "Арт терапия",
        description: "Позволява изразяване на вътрешни преживявания чрез творчество."
      },
      {
        name: "Музикотерапия",
        description: "Използва музиката като средство за емоционална регулация и подкрепа."
      },
      {
        name: "Игрова терапия",
        description: "Подходяща за деца, като използва играта като естествен начин за изразяване и терапевтична работа."
      }
    ]
  }
];

const TherapeuticApproaches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${therapeuticApproachesHeader})` }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[50vh] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Терапевтични{" "}
              <span className="gradient-text">подходи</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              Избираме подхода индивидуално – спрямо вашите нужди, цели и конкретна ситуация
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  КОНТАКТИ
                </Button>
              </Link>
              <a href="tel:+359887079256" aria-label="Обадете се">
                <Button variant="hero-outline" size="lg">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-lavender/10 to-lavender/5 rounded-2xl p-6 border border-lavender/20">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Индивидуален подход</h3>
                <p className="text-muted-foreground text-sm">
                  Всеки клиент идва със своя история, преживявания и темпо на промяна.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-soft-blue/10 to-soft-blue/5 rounded-2xl p-6 border border-soft-blue/20">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Екип от специалисти</h3>
                <p className="text-muted-foreground text-sm">
                  Насочваме към най-подходящия специалист според трудностите и целите.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo/10 to-indigo/5 rounded-2xl p-6 border border-indigo/20">
                <div className="w-12 h-12 bg-indigo/10 rounded-xl flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-indigo" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Интегративен подход</h3>
                <p className="text-muted-foreground text-sm">
                  Работата може да включва интеграция на няколко подхода, когато е полезно.
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed">
                В нашата практика вярваме, че няма универсален подход, който да е подходящ за всеки човек. Затова работим с различни психотерапевтични подходи, съобразени с конкретните нужди на всеки клиент.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Categories - 2 per row */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Психотерапевтични подходи, в които{" "}
            <span className="gradient-text">нашите специалисти са специализирани</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approachCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-lavender/5 via-card to-soft-blue/5 rounded-2xl p-8 shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold gradient-text">
                    {category.title}
                  </h2>
                </div>
                
                {/* Approaches List */}
                <div className="space-y-4">
                  {category.approaches.map((approach) => (
                    <div 
                      key={approach.name}
                      className="group"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`} />
                        <h3 className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {approach.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                        {approach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-lavender/10 via-background to-soft-blue/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                Индивидуален, екипен и интегративен подход
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Нашата работа се основава на екипно сътрудничество и индивидуален подход. Благодарение на различните специалисти в екипа ни и техните професионални специализации, можем да предложим цялостна и гъвкава подкрепа, съобразена с конкретните нужди на всеки клиент.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-muted-foreground leading-relaxed italic">
                Най-важното за нас е създаването на <strong className="text-foreground">безопасно, подкрепящо и неосъждащо пространство</strong>, в което промяната да се случва с уважение към личното темпо и вътрешния процес на всеки човек.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
};

export default TherapeuticApproaches;
