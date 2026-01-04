import { Link } from "react-router-dom";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const approachCategories = [
  {
    title: "Класически подходи",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: [
      { name: "Психоанализа", href: "/therapeutic-approaches/psychoanalysis" },
      { name: "Психодинамична терапия", href: "/therapeutic-approaches/psychodynamic-therapy" },
    ],
  },
  {
    title: "Когнитивни подходи",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: [
      { name: "Когнитивно-поведенческа терапия", href: "/therapeutic-approaches/cbt" },
      { name: "Схема терапия", href: "/therapeutic-approaches/schema-therapy" },
    ],
  },
  {
    title: "Хуманистични подходи",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: [
      { name: "Гещалт терапия", href: "/therapeutic-approaches/gestalt-therapy" },
      { name: "Екзистенциална терапия", href: "/therapeutic-approaches/existential-therapy" },
      { name: "Позитивна психотерапия", href: "/therapeutic-approaches/positive-therapy" },
    ],
  },
  {
    title: "Системни подходи",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: [
      { name: "Семейна терапия", href: "/therapeutic-approaches/family-therapy" },
      { name: "Трансгенерационна терапия", href: "/therapeutic-approaches/transgenerational-therapy" },
      { name: "Терапия на двойки", href: "/therapeutic-approaches/couples-therapy" },
    ],
  },
  {
    title: "Травма-фокусирани",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: [
      { name: "EMDR терапия", href: "/therapeutic-approaches/emdr" },
      { name: "Соматично преживяване", href: "/therapeutic-approaches/somatic-experiencing" },
    ],
  },
  {
    title: "Телесно-ориентирани",
    icon: Hand,
    color: "from-accent to-soft-blue",
    approaches: [
      { name: "Биоенергийна терапия", href: "/therapeutic-approaches/bioenergetic-therapy" },
      { name: "Телесна психотерапия", href: "/therapeutic-approaches/body-psychotherapy" },
      { name: "Танцово-двигателна терапия", href: "/therapeutic-approaches/dance-movement-therapy" },
    ],
  },
  {
    title: "Креативни подходи",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: [
      { name: "Арт терапия", href: "/therapeutic-approaches/art-therapy" },
      { name: "Музикотерапия", href: "/therapeutic-approaches/music-therapy" },
      { name: "Игрова терапия", href: "/therapeutic-approaches/play-therapy" },
    ],
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
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {approachCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-primary/10 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <category.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                </div>
                <h3 className="font-heading text-sm sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {category.approaches.map((approach) => (
                  <Link
                    key={approach.name}
                    to={approach.href}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm md:text-base hover:bg-primary/10 hover:text-primary transition-colors min-h-[32px] sm:min-h-[36px] flex items-center"
                  >
                    {approach.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {/* CTA */}
          <Link 
            to="/therapeutic-approaches"
            className="col-span-2 lg:col-span-1 flex items-center justify-center"
          >
            <Button variant="default" size="default" className="uppercase font-semibold bg-primary hover:bg-primary/90 text-xs sm:text-sm whitespace-nowrap px-4 sm:px-6">
              ВИЖТЕ ВСИЧКИ ПОДХОДИ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
