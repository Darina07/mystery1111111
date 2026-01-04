import { Target, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "Кариерно консултиране",
    description: "Помагаме ви да откриете професионалния си път, да се развивате и да постигнете баланс между работа и личен живот.",
    tags: ["Кариерна ориентация", "Професионално развитие", "Коучинг"],
    link: "/services/career-consulting",
  },
  {
    icon: Briefcase,
    title: "Корпоративни услуги",
    description: "Подкрепяме организации в развитието на екипи, управление на стреса и изграждане на здравословна работна среда.",
    tags: ["Екипни тренинги", "Управление на стрес", "HR консултации"],
    link: "/services/corporate-services",
  },
];

export const Business = () => {
  return (
    <section id="business" className="py-12 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
            ЗА БИЗНЕСА
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Професионално развитие
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Специализирани услуги за кариерно развитие и корпоративни решения.
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
                Научете повече
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};