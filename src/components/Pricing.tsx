import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const Pricing = () => {
  const { t, localized } = useLanguage();
  const pricingItems = [
    {
      title: t("pricing.item1.title"),
      subtitle: t("pricing.item1.subtitle"),
      price: "40",
      currency: t("pricing.currency"),
      duration: t("pricing.duration"),
      features: [
        t("pricing.item1.f1"),
        t("pricing.item1.f2"),
        t("pricing.item1.f3"),
        t("pricing.item1.f4"),
        t("pricing.item1.f5"),
        t("pricing.item1.f6"),
        t("pricing.item1.f7"),
      ],
      popular: true,
    },
    {
      title: t("pricing.item2.title"),
      subtitle: t("pricing.item2.subtitle"),
      price: "35",
      currency: t("pricing.currency"),
      duration: t("pricing.duration"),
      features: [
        t("pricing.item2.f1"),
        t("pricing.item2.f2"),
        t("pricing.item2.f3"),
        t("pricing.item2.f4"),
      ],
      popular: false,
    },
    {
      title: t("pricing.item3.title"),
      subtitle: "",
      price: "45",
      currency: t("pricing.currency"),
      duration: t("pricing.duration"),
      features: [
        t("pricing.item3.f1"),
        t("pricing.item3.f2"),
        t("pricing.item3.f3"),
      ],
      popular: false,
    },
    {
      title: t("pricing.item4.title"),
      subtitle: "",
      price: "50",
      currency: t("pricing.currency"),
      duration: t("pricing.duration"),
      features: [
        t("pricing.item4.f1"),
        t("pricing.item4.f2"),
        t("pricing.item4.f3"),
        t("pricing.item4.f4"),
      ],
      popular: false,
    },
  ];

  return (
    <section id="prices" className="py-12 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            {t("pricing.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t("pricing.titlePart1")}{" "}
            <span className="gradient-text">{t("pricing.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
          {pricingItems.map((item) => (
            <div
              key={item.title}
              className={`relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-card transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${
                item.popular ? "ring-2 ring-primary shadow-glow" : ""
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                    {t("common.mostPopular")}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-grow">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-baseline gap-2 mt-4 sm:mt-6">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                    {item.price}
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">
                    {item.currency} / {item.duration}
                  </span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 flex-grow">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={item.popular ? "default" : "outline"}
                  className={`w-full uppercase mt-6 ${item.popular ? 'text-white shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]' : ''}`}
                  style={item.popular ? { background: 'var(--gradient-cta)' } : undefined}
                  size="lg"
                  asChild
                >
                  <Link to={localized("/contact")}>{t("common.bookViaContact")}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t("pricing.note")} <span className="font-semibold text-foreground">{t("pricing.noteLang")}</span> {t("pricing.noteSurcharge")}{" "}
            <span className="font-semibold text-foreground">{t("pricing.noteAmount")}</span>.
          </p>
          <a 
            href="tel:+359887079256" 
            className="mt-6 inline-flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-soft hover:shadow-card transition-all duration-300"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground uppercase font-medium">
              {t("pricing.askGroup")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
