import { Target, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const Business = () => {
  const { t, localized } = useLanguage();
  const services = [
    {
      icon: Target,
      title: t("biz.career.title"),
      description: t("biz.career.desc"),
      tags: [t("biz.career.tag1"), t("biz.career.tag2"), t("biz.career.tag3")],
      link: localized("/services/career-consulting"),
    },
    {
      icon: Briefcase,
      title: t("biz.corp.title"),
      description: t("biz.corp.desc"),
      tags: [t("biz.corp.tag1"), t("biz.corp.tag2"), t("biz.corp.tag3")],
      link: localized("/services/corporate-services"),
    },
  ];

  return (
    <section id="business" className="py-12 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
            {t("biz.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold">
            {t("biz.titlePart1")} <span className="gradient-text">{t("biz.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("biz.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link 
              to={service.link}
              key={service.title}
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-secondary border border-primary/10 hover:shadow-card transition-all duration-300 group block"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 leading-relaxed mb-3 sm:mb-4 text-base md:text-lg">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {service.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all duration-300 min-h-[44px] py-2">
                {t("biz.cta")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
