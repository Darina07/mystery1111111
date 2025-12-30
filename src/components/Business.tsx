import { Target, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Кариерно консултиране",
    description: "Помагаме ви да откриете професионалния си път, да се развивате и да постигнете баланс между работа и личен живот.",
    tags: ["Кариерна ориентация", "Професионално развитие", "Коучинг"],
  },
  {
    icon: Briefcase,
    title: "Корпоративни услуги",
    description: "Подкрепяме организации в развитието на екипи, управление на стреса и изграждане на здравословна работна среда.",
    tags: ["Екипни тренинги", "Управление на стрес", "HR консултации"],
  },
];

export const Business = () => {
  return (
    <section id="business" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            За бизнеса
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Професионално развитие
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Специализирани услуги за кариерно развитие и корпоративни решения.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title}
              className="p-8 rounded-2xl bg-lavender/30 border border-primary/10 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
              >
                Научете повече
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
