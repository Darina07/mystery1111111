import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Heart, Users, Sparkles, Target, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import contactBg from "@/assets/contact-bg.jpg";
import groupRelationshipsHeader from "@/assets/group-relationships-header.jpg";
import groupAttachmentBg from "@/assets/group-attachment-bg.jpg";
import groupEmotionalReadinessBg from "@/assets/group-emotional-readiness-bg.jpg";
import groupSocialSkillsBg from "@/assets/group-social-skills-bg.jpg";
import groupBreakupRecoveryBg from "@/assets/group-breakup-recovery-bg.jpg";
import groupMatchmakingBg from "@/assets/group-matchmaking-bg.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const relationshipGroups = [
  {
    title: "Модели на привързаност и избор на партньор",
    description: "Разберете своите модели на привързаност и как те влияят на избора ви на партньор. Научете се да разпознавате здрави връзки.",
    link: "/services/group-programs/relationships/attachment",
    icon: Heart,
    image: groupAttachmentBg,
  },
  {
    title: "Емоционална готовност за връзка",
    description: "Подготовка за здрава връзка чрез работа върху емоционалната зрелост, самопознание и готовност за интимност.",
    link: "/services/group-programs/relationships/emotional-readiness",
    icon: Sparkles,
    image: groupEmotionalReadinessBg,
  },
  {
    title: "Социални умения и увереност при запознанства",
    description: "Практически групови упражнения за развиване на комуникативни умения и увереност в социални ситуации.",
    link: "/services/group-programs/relationships/social-skills",
    icon: MessageCircle,
    image: groupSocialSkillsBg,
  },
  {
    title: "След раздяла – възстановяване и ново начало",
    description: "Подкрепа за преодоляване на болката от раздяла и подготовка за нови, по-здрави взаимоотношения.",
    link: "/services/group-programs/relationships/breakup-recovery",
    icon: Target,
    image: groupBreakupRecoveryBg,
  },
  {
    title: "Matchmaking група – свързване чрез ценности",
    description: "Осъзнат подход към намирането на партньор, базиран на споделени ценности и психологична съвместимост.",
    link: "/services/group-programs/relationships/matchmaking",
    icon: Users,
    image: groupMatchmakingBg,
  },
];

const keyPoints = [
  {
    title: "Психологична групова работа",
    description: "Не агенция за запознанства, а професионална психологична подкрепа за изграждане на здрави връзки",
    icon: Heart,
  },
  {
    title: "Осъзнат избор",
    description: "Научете се да избирате партньор на база ценности, а не импулси или стари модели",
    icon: Target,
  },
  {
    title: "Групова динамика",
    description: "Силата на груповата подкрепа и споделения опит с хора в сходна ситуация",
    icon: Users,
  },
  {
    title: "Практически умения",
    description: "Реални инструменти и техники за подобряване на социалните и емоционални умения",
    icon: Sparkles,
  },
];

const RelationshipsGroupPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${groupRelationshipsHeader})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            {/* Breadcrumb */}
            <div className="flex justify-center mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Начало</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/services/group-programs">Групови програми</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Необвързани и взаимоотношения</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <p className="text-primary font-medium mb-4">Групови програми</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Групови програми за{" "}
              <span className="gradient-text">необвързани</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Психологична групова работа за изграждане на здрави връзки и смислени взаимоотношения
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  КОНТАКТИ
                </Button>
              </Link>
              <a href="tel:+359887079256" aria-label="Обадете се">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Нашият{" "}
              <span className="gradient-text">подход</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Това не е агенция за запознанства – това е психологична групова работа, 
              която създава условия за смислени връзки.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point) => (
                <div 
                  key={point.title}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Groups List Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Нашите{" "}
              <span className="gradient-text">групи</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Изберете групата, която отговаря на вашата ситуация. Всички групи се водят от квалифицирани специалисти.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relationshipGroups.map((group) => (
                <Link 
                  key={group.title}
                  to={group.link}
                  className="block rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all group relative h-72"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 opacity-30"
                    style={{ backgroundImage: `url(${group.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
                  
                  <div className="relative h-full flex flex-col p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 flex-shrink-0 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <group.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors leading-tight">
                        {group.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base line-clamp-3 flex-grow">{group.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Научи повече
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto relative">
            {/* Left decorative dots arc */}
            <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
              <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
            </div>
            
            {/* Right decorative dots arc */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <div className="w-3 h-3 rounded-full bg-primary/40 -translate-x-6" />
              <div className="w-3 h-3 rounded-full bg-primary/50 -translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-primary/50 -translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/40 -translate-x-6" />
            </div>
            
            <div className="bg-foreground/90 rounded-[10rem] p-8 md:p-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Heart className="h-10 w-10 text-primary-foreground" />
                <h3 className="text-xl md:text-2xl font-heading font-semibold uppercase tracking-wide text-primary-foreground">
                  Смислени връзки
                </h3>
              </div>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-center">
                Нашата цел не е просто да ви запознаем с някого, а да ви помогнем да разберете себе си, 
                да развиете уменията си за връзка и да изградите готовност за здрави, пълноценни взаимоотношения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">Свържете се</span> с нас
              </h2>
              <p className="text-sm text-muted-foreground">
                Свържете се с нас за повече информация или за да се запишете в група.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Име" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Фамилия" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Имейл" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="Съобщение" 
                    rows={4}
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                  <Button type="submit" variant="hero" size="lg" className="px-10">
                    Изпрати
                  </Button>
                  
                  <a 
                    href="tel:+359887079256" 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg"
                    aria-label="Обадете се на +359 887 079 256"
                  >
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RelationshipsGroupPrograms;