import { Check, Phone, Users, Building2, Euro, Monitor, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Link } from "react-router-dom";
import pricesHeaderImage from "@/assets/prices-header.jpg";

const pricingItems = [
  {
    icon: Euro,
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
    icon: Monitor,
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
    icon: Brain,
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
    icon: Palette,
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

const specialServices = [
  {
    icon: Users,
    title: "Групови програми",
    description: "Цените за групови програми се определят според темата на групата, продължителността и формата (присъствено или онлайн).",
    linkText: "Свържете се с нас за актуални групи и цени",
    href: "/services/group-programs",
  },
  {
    icon: Building2,
    title: "Корпоративни услуги",
    description: "Корпоративните и бизнес услуги се договарят индивидуално според нуждите на организацията, броя участници и обхвата на програмата.",
    linkText: "Свържете се с нас за оферта",
    href: "/services/corporate-services",
  },
];

const breadcrumbItems = [
  { label: "Начало", href: "/" },
  { label: "Цени" },
];

const Prices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={pricesHeaderImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="container relative z-10">
          <PageBreadcrumb items={breadcrumbItems} />
          <div className="text-center max-w-3xl mx-auto mt-8 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Цени
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Ясни и{" "}
              <span className="gradient-text">прозрачни условия</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              В Психологичен и консултативен център „Дар" държим на открита и ясна
              информация за цените на нашите услуги.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingItems.map((item) => (
              <div
                key={item.title}
                className={`relative bg-card rounded-2xl p-8 shadow-card transition-all duration-500 hover:-translate-y-1 ${
                  item.popular ? "ring-2 ring-primary shadow-glow" : ""
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                      Най-популярно
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-bold text-primary">
                      {item.price}
                    </span>
                    <span className="text-muted-foreground">
                      {item.currency} / {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={item.popular ? "cta" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href="#contact">Запазете час</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Consultation Note */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-lavender/20 rounded-2xl p-8">
            <p className="text-lg text-foreground">
              Консултациите на <span className="font-semibold">английски език</span> се провеждат срещу допълнително заплащане от{" "}
              <span className="font-bold text-primary">+10 евро</span> към посочената цена.
            </p>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialServices.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={service.href}>{service.linkText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold">
              Имате въпроси относно цените?
            </h2>
            <p className="text-muted-foreground">
              Свържете се с нас за допълнителна информация или за да запазите час.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+359887079256" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  +359 887 079 256
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Изпратете съобщение</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
