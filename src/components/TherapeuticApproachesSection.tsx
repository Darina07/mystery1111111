import { Link } from "react-router-dom";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const approachCategories = [
  {
    title: "Класически подходи",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: ["Психоанализа", "Психодинамична терапия"],
    href: "/therapeutic-approaches"
  },
  {
    title: "Когнитивни подходи",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: ["КПТ", "Схема терапия"],
    href: "/therapeutic-approaches"
  },
  {
    title: "Хуманистични подходи",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: ["Гещалт терапия", "Екзистенциална терапия"],
    href: "/therapeutic-approaches"
  },
  {
    title: "Системни подходи",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: ["Семейна терапия", "Терапия на двойки"],
    href: "/therapeutic-approaches"
  },
  {
    title: "Травма-фокусирани",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: ["EMDR", "Соматично преживяване"],
    href: "/therapeutic-approaches"
  },
  {
    title: "Креативни подходи",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: ["Арт терапия", "Музикотерапия"],
    href: "/therapeutic-approaches"
  },
];

export const TherapeuticApproachesSection = () => {
  return (
    <section id="therapeutic-approaches" className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
            ТЕРАПЕВТИЧНИ ПОДХОДИ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Индивидуален подход за{" "}
            <span className="gradient-text">всеки клиент</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Работим с различни психотерапевтични подходи, съобразени с конкретните нужди на всеки човек.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {approachCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-sm border border-primary/10 hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.approaches.map((approach) => (
                  <span
                    key={approach}
                    className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    {approach}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/therapeutic-approaches">
            <Button variant="default" size="lg" className="gap-2 group">
              Вижте всички подходи
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
