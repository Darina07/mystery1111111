import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { 
  Brain, Heart, Users, 
  Baby, MessageCircle, ClipboardList, Briefcase, Building2, ArrowRight
} from "lucide-react";

import servicesHeader from "@/assets/services-header.jpg";

const services = [
  {
    icon: Brain,
    title: "Психологично консултиране и психотерапия",
    description: "Индивидуална работа с психолог за справяне с тревожност, депресия, стрес и други предизвикателства.",
    href: "/services/psychological-counseling"
  },
  {
    icon: Heart,
    title: "Семейно и партньорско консултиране",
    description: "Подкрепа за двойки и семейства при комуникационни проблеми, кризи и важни решения.",
    href: "/services/family-counseling"
  },
  {
    icon: Baby,
    title: "Детско-юношеско консултиране",
    description: "Специализирана помощ за деца и юноши при поведенчески, емоционални и учебни трудности.",
    href: "/services/child-counseling"
  },
  {
    icon: Users,
    title: "Групови програми",
    description: "Тематични групи за зависимости, взаимоотношения, родителство и личностно развитие.",
    href: "/services/group-programs"
  },
  {
    icon: MessageCircle,
    title: "Логопед",
    description: "Диагностика и терапия на говорни и езикови нарушения за деца и възрастни.",
    href: "/services/speech-therapy"
  },
  {
    icon: ClipboardList,
    title: "Психодиагностика",
    description: "Професионална оценка на интелектуални способности, личностни характеристики и емоционално състояние.",
    href: "/services/psychodiagnostics"
  }
];

const professionalServices = [
  {
    icon: Briefcase,
    title: "Кариерно консултиране",
    description: "Професионално ориентиране, развитие на кариерата и подготовка за интервюта.",
    href: "/services/career-consulting"
  },
  {
    icon: Building2,
    title: "Корпоративни услуги",
    description: "Обучения, тиймбилдинг, управление на стреса и организационно консултиране за компании.",
    href: "/services/corporate-services"
  }
];

const breadcrumbItems = [
  { label: "Начало", href: "/" },
  { label: "Услуги" }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-top"
          style={{ backgroundImage: `url(${servicesHeader})` }}
        />
        <div className="absolute inset-0 bg-background/50" />
        
        <div className="container relative z-10 h-full flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Нашите услуги
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
              Професионални{" "}
              <span className="text-primary">психологични услуги</span>
            </h1>
            <p className="text-foreground/70 text-xl">
              Подкрепа за всеки етап от живота
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container pt-8">
        <PageBreadcrumb items={breadcrumbItems} />
      </div>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Психологични услуги
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Основни{" "}
              <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Предлагаме широк спектър от психологични услуги за индивидуални клиенти, двойки и семейства.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Научете повече
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div 
            className="rounded-3xl p-12 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(270 50% 40%) 100%)"
            }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Не сте сигурни коя услуга е за вас?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Свържете се с нас за безплатна първоначална консултация. Ще ви помогнем да изберете 
              най-подходящата услуга за вашите нужди.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary font-semibold"
                onClick={() => window.location.href = '/prices'}
              >
                Вижте цените
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = 'tel:+359887079256'}
              >
                Обадете се сега
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              За бизнеса
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Професионално{" "}
              <span className="gradient-text">развитие</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Услуги за кариерно развитие и корпоративни решения за вашия бизнес.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professionalServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden bg-primary/5 border border-primary/20 flex flex-col hover:bg-primary/10"
              >
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Button size="sm" className="uppercase tracking-wide">
                      Научете повече
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
