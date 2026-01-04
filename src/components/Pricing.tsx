import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const pricingItems = [
  {
    title: "Индивидуални и семейни консултации",
    subtitle: "(присъствено)",
    price: "40",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Консултация с психолог",
      "Психотерапия",
      "Консултиране за двойки и семейства",
      "Работа със сексолог",
      "Детско и юношеско консултиране",
      "Логопед – диагностика и терапия",
      "Кариерно консултиране",
    ],
    popular: true,
  },
  {
    title: "Онлайн консултации",
    subtitle: "(телефон, Viber, WhatsApp, Skype, Google Meet)",
    price: "35",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Индивидуално психологично консултиране",
      "Психотерапия",
      "Консултиране за двойки",
      "Кариерно консултиране",
    ],
    popular: false,
  },
  {
    title: "Хипнотерапия",
    subtitle: "",
    price: "45",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Самостоятелен терапевтичен метод",
      "Допълващ метод при определени теми",
      "След предварителна консултация",
    ],
    popular: false,
  },
  {
    title: "Арт терапия и музикотерапия",
    subtitle: "",
    price: "50",
    currency: "евро",
    duration: "60 минути",
    features: [
      "Изразяване на емоции чрез творчество",
      "Намаляване на напрежението",
      "Подкрепа на емоционалния баланс",
      "Подходящо за деца, юноши и възрастни",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="prices" className="py-12 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Цени
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            Ясни и{" "}
            <span className="gradient-text">прозрачни условия</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            В Психологичен и консултативен център „Дар" държим на открита и ясна
            информация за цените на нашите услуги.
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
                    Най-популярно
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
                  variant={item.popular ? "cta" : "outline"}
                  className="w-full uppercase mt-6"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">СВЪРЖЕТЕ СЕ С НАС ЗА ЧАС</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Консултациите на <span className="font-semibold text-foreground">английски език</span> се провеждат срещу допълнително
            заплащане от{" "}
            <span className="font-semibold text-foreground">+10 евро</span>.
          </p>
          <a 
            href="tel:+359887079256" 
            className="mt-6 inline-flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-soft hover:shadow-card transition-all duration-300"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground uppercase font-medium">
              Попитайте ни за цени за групови програми и корпоративни услуги
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
