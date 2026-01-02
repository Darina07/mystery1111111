import { Link } from "react-router-dom";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const approachCategories = [
  {
    title: "Класически подходи",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: [
      { name: "Психоанализа", href: "/approaches/psychoanalysis" },
      { name: "Психодинамична терапия", href: "/approaches/psychodynamic-therapy" }
    ]
  },
  {
    title: "Когнитивни подходи",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: [
      { name: "Когнитивно-поведенческа терапия", href: "/approaches/cbt" },
      { name: "Схема терапия", href: "/approaches/schema-therapy" }
    ]
  },
  {
    title: "Хуманистични подходи",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: [
      { name: "Гещалт терапия", href: "/approaches/gestalt-therapy" },
      { name: "Екзистенциална терапия", href: "/approaches/existential-therapy" },
      { name: "Позитивна психотерапия", href: "/approaches/positive-therapy" }
    ]
  },
  {
    title: "Системни подходи",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: [
      { name: "Семейна терапия", href: "/approaches/family-therapy" },
      { name: "Трансгенерационна терапия", href: "/approaches/transgenerational-therapy" },
      { name: "Терапия на двойки", href: "/approaches/couples-therapy" }
    ]
  },
  {
    title: "Травма-фокусирани",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: [
      { name: "EMDR терапия", href: "/approaches/emdr" },
      { name: "Соматично преживяване", href: "/approaches/somatic-experiencing" }
    ]
  },
  {
    title: "Телесно-ориентирани",
    icon: Hand,
    color: "from-accent to-soft-blue",
    approaches: [
      { name: "Биоенергийна терапия", href: "/approaches/bioenergetic-therapy" },
      { name: "Телесна психотерапия", href: "/approaches/body-psychotherapy" },
      { name: "Танцово-двигателна терапия", href: "/approaches/dance-movement-therapy" }
    ]
  },
  {
    title: "Креативни подходи",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: [
      { name: "Арт терапия", href: "/approaches/art-therapy" },
      { name: "Музикотерапия", href: "/approaches/music-therapy" },
      { name: "Игрова терапия", href: "/approaches/play-therapy" }
    ]
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

        {/* Categories Grid with CTA */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {approachCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-sm border border-primary/10 hover:shadow-card transition-all duration-300"
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
                  <Link
                    key={approach.name}
                    to={approach.href}
                    className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {approach.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <Link 
            to="/therapeutic-approaches"
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 shadow-sm border border-primary/20 hover:shadow-card transition-all duration-300 flex items-center justify-center"
          >
            <Button variant="default" size="lg" className="uppercase font-semibold">
              ВИЖТЕ ВСИЧКИ ПОДХОДИ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
