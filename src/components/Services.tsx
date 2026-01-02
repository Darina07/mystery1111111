import { Brain, Users, Baby, UsersRound, Mic2, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Психологично консултиране и психотерапия",
    description:
      "Индивидуална психологична подкрепа при тревожност, депресия, стрес, бърнаут, житейски кризи и други емоционални затруднения.",
    link: "/services/psychological-counseling",
  },
  {
    icon: Users,
    title: "За двойки и семейства",
    description:
      "Консултиране за двойки и семейства с брачен консултант, семеен психолог и сексолог – при партньорски, семейни и интимни проблеми.",
    link: "/services/family-counseling",
  },
  {
    icon: Baby,
    title: "Детско-юношеско консултиране",
    description:
      "Психологична подкрепа за деца и тийнейджъри с емоционални, поведенчески, социални и училищни затруднения.",
    link: "/services/child-counseling",
  },
  {
    icon: UsersRound,
    title: "Групови програми",
    description:
      "Групови програми за споделяне, подкрепа и развитие – зависимости, отношения, родителство и личностно развитие.",
    link: "/services/group-programs",
  },
  {
    icon: Mic2,
    title: "Логопед",
    description:
      "Диагностика и терапия на говорни, езикови и комуникативни нарушения при деца и възрастни.",
    link: "/services/speech-therapy",
  },
  {
    icon: ClipboardCheck,
    title: "Психодиагностика",
    description:
      "Психологични оценки и изследвания на когнитивни способности, емоционално състояние и личностови характеристики.",
    link: "/services/psychodiagnostics",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-12 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Нашите услуги
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            Комплексна грижа за вашето{" "}
            <span className="gradient-text">психично здраве</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            В център „Дар" предлагаме широк спектър от услуги, насочени към
            емоционалното здраве, взаимоотношенията и личностното развитие.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-heading text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                  Научи повече
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="uppercase" asChild>
            <Link to="/services">ВИЖТЕ ВСИЧКИ УСЛУГИ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
