import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const TherapeuticApproaches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-cream to-background">
        <div className="container">
          <PageBreadcrumb 
            items={[
              { label: "Начало", href: "/" },
              { label: "Терапевтични подходи" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Терапевтични подходи
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground leading-relaxed mb-6">
              В нашата практика вярваме, че няма универсален подход, който да е подходящ за всеки човек. Всеки клиент идва със своя житейска история, преживявания, ресурси и темпо на промяна. Затова работим с различни психотерапевтични подходи, като изборът на подход се съобразява индивидуално – спрямо нуждите, целите и конкретната ситуация на всеки човек.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Екипът ни се състои от различни специалисти, всеки от които е обучен и специализиран в конкретни терапевтични подходи. Това ни позволява да насочваме клиентите към най-подходящия специалист и подход, в зависимост от заявените трудности, цели и предпочитания.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Терапевтичната работа може да включва един основен подход или интеграция на няколко подхода, когато това е най-полезно и ефективно за клиента.
            </p>
          </div>
        </div>
      </section>

      {/* Classical Approaches */}
      <section className="py-12 bg-cream/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Класически психотерапевтични подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Психоанализа</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Психоанализата изследва дълбоките, често несъзнавани процеси, които влияят върху мислите, емоциите и поведението ни. Този подход помага за по-дълбоко разбиране на вътрешните конфликти, ранните преживявания и повтарящите се житейски модели.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Психодинамична терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Психодинамичната терапия се фокусира върху връзката между минал опит и настоящи трудности. Чрез изследване на емоциите, взаимоотношенията и вътрешните конфликти се постига по-добро себепознание и промяна.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive and Behavioral Approaches */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Когнитивни и поведенчески подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Когнитивно-поведенческа терапия (КПТ)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  КПТ е структуриран и практичен подход, насочен към връзката между мисли, емоции и поведение. Той подпомага изграждането на по-адаптивни начини на мислене и справяне с тревожност, депресия, стрес и други трудности.
                </p>
              </div>
              
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Схема терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Схема терапията работи с дълбоко вкоренени емоционални модели, формирани още в детството. Подходяща е при повтарящи се житейски и релационни трудности, ниска самооценка и емоционални блокажи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanistic and Existential Approaches */}
      <section className="py-12 bg-cream/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Хуманистични и екзистенциални подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Гещалт терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Гещалт терапията поставя акцент върху осъзнаването „тук и сега", личната отговорност и автентичния контакт със себе си и другите.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Екзистенциална психотерапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Този подход изследва теми като смисъл, избор, свобода, отговорност и идентичност. Подходящ е при житейски кризи и търсене на посока.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Позитивна психотерапия (Пезешкиан)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Фокусира се върху ресурсите, силните страни и потенциала на личността, като подпомага баланса в различните области на живота.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systemic and Family Approaches */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Системни и семейни подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Семейна терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Работи с взаимоотношенията в семейството като система и подпомага подобряването на комуникацията и разрешаването на конфликти.
                </p>
              </div>
              
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Трансгенерационна терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Изследва влиянието на семейната история и моделите, предавани през поколенията.
                </p>
              </div>
              
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Терапия на двойки</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Насочена към партньорските взаимоотношения, комуникацията и възстановяването на близостта и доверието.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trauma-Focused Approaches */}
      <section className="py-12 bg-cream/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Травма-фокусирани подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">EMDR (Десензитизация и преработка чрез движение на очите)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EMDR е доказан метод за работа с психологична травма и посттравматичен стрес.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Соматично преживяване (Somatic Experiencing)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Работи с връзката между тялото и психиката за освобождаване на натрупано напрежение и травматичен стрес.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body-Oriented Approaches */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Телесно-ориентирани подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Биоенергийна терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Свързва емоционалните преживявания с телесните реакции и подпомага освобождаването на напрежение.
                </p>
              </div>
              
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Телесна психотерапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Работи с телесните усещания като важна част от емоционалното осъзнаване.
                </p>
              </div>
              
              <div className="bg-cream/30 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Танцово-двигателна терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Използва движението като средство за изразяване, осъзнаване и личностно развитие.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative and Expressive Approaches */}
      <section className="py-12 bg-cream/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Креативни и експресивни подходи
            </h2>
            
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Арт терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Позволява изразяване на вътрешни преживявания чрез творчество.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Музикотерапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Използва музиката като средство за емоционална регулация и подкрепа.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Игрова терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Подходяща за деца, като използва играта като естествен начин за изразяване и терапевтична работа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrative Approach */}
      <section className="py-16 bg-indigo text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Индивидуален, екипен и интегративен подход
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Нашата работа се основава на екипно сътрудничество и индивидуален подход. Благодарение на различните специалисти в екипа ни и техните професионални специализации, можем да предложим цялостна и гъвкава подкрепа, съобразена с конкретните нужди на всеки клиент.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Най-важното за нас е създаването на безопасно, подкрепящо и неосъждащо пространство, в което промяната да се случва с уважение към личното темпо и вътрешния процес на всеки човек.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapeuticApproaches;
