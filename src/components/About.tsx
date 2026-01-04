import { Heart, Shield, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Емпатия и разбиране",
    description: "Всеки клиент е уникален. Слушаме без осъждане и създаваме безопасно пространство.",
  },
  {
    icon: Shield,
    title: "Конфиденциалност",
    description: "Гарантираме пълна дискретност и защита на личната информация.",
  },
  {
    icon: Award,
    title: "Професионализъм",
    description: "Работим с доказани методи и непрекъснато надграждаме квалификацията си.",
  },
  {
    icon: Clock,
    title: "Гъвкавост",
    description: "Предлагаме удобни часове, включително вечер и в почивни дни.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
                ЗА НАС
              </span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Център „Дар" – вашият{" "}
              <span className="gradient-text">партньор</span> в грижата за психичното здраве
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg sm:text-xl leading-relaxed">
              <p>
                Психологичен и консултативен център „Дар" предоставя професионални услуги в областта на психологията, консултирането и обучението. Работим с индивидуални клиенти, деца, семейства и бизнес организации.
              </p>
              <p>
                Нашата мисия е да предоставяме качествена психологическа подкрепа, базирана на доверие, уважение и доказани терапевтични методи.
              </p>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base sm:text-xl mb-2 sm:mb-3 leading-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
