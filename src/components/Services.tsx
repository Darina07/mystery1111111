import { Brain, Users, Baby, UsersRound, Mic2, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const Services = () => {
  const { t, localized } = useLanguage();
  const services = [
    { icon: Brain, title: t("servicesSec.s1.title"), description: t("servicesSec.s1.desc"), link: localized("/services/psychological-counseling") },
    { icon: Users, title: t("servicesSec.s2.title"), description: t("servicesSec.s2.desc"), link: localized("/services/family-counseling") },
    { icon: Baby, title: t("servicesSec.s3.title"), description: t("servicesSec.s3.desc"), link: localized("/services/child-counseling") },
    { icon: UsersRound, title: t("servicesSec.s4.title"), description: t("servicesSec.s4.desc"), link: localized("/services/group-programs") },
    { icon: Mic2, title: t("servicesSec.s5.title"), description: t("servicesSec.s5.desc"), link: localized("/services/speech-therapy") },
    { icon: ClipboardCheck, title: t("servicesSec.s6.title"), description: t("servicesSec.s6.desc"), link: localized("/services/psychodiagnostics") },
  ];

  return (
    <section id="services" className="py-12 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            {t("servicesSec.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t("servicesSec.titlePart1")}{" "}
            <span className="gradient-text">{t("servicesSec.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            {t("servicesSec.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.title}
              className="group relative bg-card rounded-xl p-4 sm:p-5 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-3 sm:space-y-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 text-base font-medium text-primary group-hover:gap-3 transition-all duration-300 min-h-[44px] py-2">
                  {t("common.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="uppercase text-white shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]" style={{ background: 'var(--gradient-cta)' }} asChild>
            <Link to={localized("/services")}>{t("common.viewAllServices")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
