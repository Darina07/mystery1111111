import { Heart, Shield, Award, Clock } from "lucide-react";
import illustrationTherapy from "@/assets/illustration-therapy.jpg";

const values = [
  {
    icon: Heart,
    title: "Емпатия и разбиране",
    description: "Слушаме без осъждане и създаваме безопасно пространство",
  },
  {
    icon: Shield,
    title: "Конфиденциалност",
    description: "Гарантираме пълна дискретност",
  },
  {
    icon: Award,
    title: "Професионализъм",
    description: "Работа с утвърдени методи и постоянна квалификация",
  },
  {
    icon: Clock,
    title: "Гъвкавост",
    description: "Удобни часове, включително вечер и в почивни дни",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-to-br from-lavender/15 to-accent/15 rounded-3xl blur-2xl" />
            <img
              src={illustrationTherapy}
              alt="Терапевтична сесия"
              className="relative w-full rounded-2xl shadow-card"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                За нас
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
                Център „Дар" –{" "}
                <span className="gradient-text">вашият партньор</span> в грижата
                за психичното здраве
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Дар е психологичен и консултативен център, който предоставя
                професионални услуги в областта на психологията, консултирането
                и обучението.
              </p>
              <p>
                Работим с индивидуални клиенти, двойки, деца, семейства и бизнес
                организации. Нашата мисия е да предоставяме качествена
                психологична подкрепа, базирана на доверие, уважение и доказани
                терапевтични подходи.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
