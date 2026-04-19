import { Link } from "react-router-dom";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import type { DictKey } from "@/i18n/dictionary";

type ApproachKey = DictKey;

const approachCategories: Array<{
  titleKey: ApproachKey;
  icon: typeof Brain;
  color: string;
  approaches: Array<{ nameKey: ApproachKey; href: string }>;
}> = [
  {
    titleKey: "approachesSec.cat.classical",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: [
      { nameKey: "approach.psychoanalysis", href: "/therapeutic-approaches/psychoanalysis" },
      { nameKey: "approach.psychodynamic", href: "/therapeutic-approaches/psychodynamic-therapy" },
    ],
  },
  {
    titleKey: "approachesSec.cat.cognitive",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: [
      { nameKey: "approach.cbt", href: "/therapeutic-approaches/cbt" },
      { nameKey: "approach.schema", href: "/therapeutic-approaches/schema-therapy" },
    ],
  },
  {
    titleKey: "approachesSec.cat.humanistic",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: [
      { nameKey: "approach.gestalt", href: "/therapeutic-approaches/gestalt-therapy" },
      { nameKey: "approach.existential", href: "/therapeutic-approaches/existential-therapy" },
      { nameKey: "approach.positive", href: "/therapeutic-approaches/positive-therapy" },
    ],
  },
  {
    titleKey: "approachesSec.cat.systemic",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: [
      { nameKey: "approach.family", href: "/therapeutic-approaches/family-therapy" },
      { nameKey: "approach.transgenerational", href: "/therapeutic-approaches/transgenerational-therapy" },
      { nameKey: "approach.couples", href: "/therapeutic-approaches/couples-therapy" },
    ],
  },
  {
    titleKey: "approachesSec.cat.trauma",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: [
      { nameKey: "approach.emdr", href: "/therapeutic-approaches/emdr" },
      { nameKey: "approach.somatic", href: "/therapeutic-approaches/somatic-experiencing" },
    ],
  },
  {
    titleKey: "approachesSec.cat.body",
    icon: Hand,
    color: "from-accent to-soft-blue",
    approaches: [
      { nameKey: "approach.bioenergetic", href: "/therapeutic-approaches/bioenergetic-therapy" },
      { nameKey: "approach.bodyPsychotherapy", href: "/therapeutic-approaches/body-psychotherapy" },
      { nameKey: "approach.dance", href: "/therapeutic-approaches/dance-movement-therapy" },
    ],
  },
  {
    titleKey: "approachesSec.cat.creative",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: [
      { nameKey: "approach.art", href: "/therapeutic-approaches/art-therapy" },
      { nameKey: "approach.music", href: "/therapeutic-approaches/music-therapy" },
      { nameKey: "approach.play", href: "/therapeutic-approaches/play-therapy" },
    ],
  },
];

export const TherapeuticApproachesSection = () => {
  const { t, localized } = useLanguage();

  return (
    <section id="therapeutic-approaches" className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
            {t("approachesSec.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold">
            {t("approachesSec.titleStart")}{" "}
            <span className="gradient-text">{t("approachesSec.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("approachesSec.subtitle")}
          </p>
        </div>

        {/* Categories Grid with CTA */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {approachCategories.map((category) => (
            <div
              key={category.titleKey}
              className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-primary/10 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className={`w-8 h-8 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <category.icon className="h-4 w-4 sm:h-4 sm:w-4 text-white" />
                </div>
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {t(category.titleKey)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.approaches.map((approach) => (
                  <Link
                    key={approach.nameKey}
                    to={localized(approach.href)}
                    className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-muted text-muted-foreground text-sm sm:text-sm md:text-base hover:bg-primary/10 hover:text-primary transition-colors min-h-[36px] sm:min-h-[36px] flex items-center"
                  >
                    {t(approach.nameKey)}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <Link
            to={localized("/therapeutic-approaches")}
            className="col-span-2 lg:col-span-1 flex items-center justify-center"
          >
            <Button size="default" className="uppercase font-semibold text-white text-xs sm:text-sm whitespace-nowrap px-4 sm:px-6 shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]" style={{ background: 'var(--gradient-cta)' }}>
              {t("common.viewAllApproaches")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
