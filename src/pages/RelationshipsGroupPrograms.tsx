import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, Sparkles, Target, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";
import groupRelationshipsHeader from "@/assets/group-relationships-header-new.jpg";
import groupAttachmentBg from "@/assets/group-attachment-bg.jpg";
import groupEmotionalReadinessBg from "@/assets/group-emotional-readiness-bg.jpg";
import groupSocialSkillsBg from "@/assets/group-social-skills-bg.jpg";
import groupBreakupRecoveryBg from "@/assets/group-breakup-recovery-bg.jpg";
import groupMatchmakingBg from "@/assets/group-matchmaking-bg.jpg";

const CONTENT = {
  bg: {
    seoTitle: "Групови програми за взаимоотношения | ДАР Психология",
    seoDescription: "Групови програми за хора, които искат да изграждат по-здрави и пълноценни връзки",
    seoKeywords: "групи взаимоотношения, привързаност терапия, социални умения група, след раздяла подкрепа, matchmaking психология, емоционална готовност връзка",
    courseName: "Необвързани и взаимоотношения",
    courseDesc: "Групови програми за хора, които искат да изграждат по-здрави, осъзнати и пълноценни връзки",
    home: "Начало", groupPrograms: "Групови програми", breadcrumbLeaf: "Взаимоотношения",
    eyebrow: "Групови програми", titleStart: "Групови програми за", titleHighlight: "необвързани",
    subtitle: "Психологична групова работа за изграждане на здрави връзки и смислени взаимоотношения",
    contactsBtn: "КОНТАКТИ", callAria: "Обадете се",
    keyTitle: "Нашият", keyHighlight: "подход",
    keySub: "Това не е агенция за запознанства – това е психологична групова работа, която създава условия за смислени връзки.",
    groupsTitle: "Нашите", groupsHighlight: "групи",
    groupsSub: "Изберете групата, която отговаря на вашата ситуация. Всички групи се водят от квалифицирани специалисти.",
    learnMore: "Научи повече",
    bannerTitle: "Смислени връзки",
    bannerText: "Нашата цел не е просто да ви запознаем с някого, а да ви помогнем да разберете себе си, да развиете уменията си за връзка и да изградите готовност за здрави, пълноценни взаимоотношения.",
    contactTitle: "Свържете се", contactTitleSuffix: "с нас",
    contactSub: "Свържете се с нас за повече информация или за да се запишете в група.",
    serviceName: "Групи за взаимоотношения",
    keyPoints: [
      { title: "Психологична групова работа", description: "Не агенция за запознанства, а професионална психологична подкрепа за изграждане на здрави връзки", icon: Heart },
      { title: "Осъзнат избор", description: "Научете се да избирате партньор на база ценности, а не импулси или стари модели", icon: Target },
      { title: "Групова динамика", description: "Силата на груповата подкрепа и споделения опит с хора в сходна ситуация", icon: Users },
      { title: "Практически умения", description: "Реални инструменти и техники за подобряване на социалните и емоционални умения", icon: Sparkles },
    ],
    groups: [
      { title: "Модели на привързаност и избор на партньор", description: "Разберете своите модели на привързаност и как те влияят на избора ви на партньор. Научете се да разпознавате здрави връзки.", slug: "attachment", icon: Heart, image: groupAttachmentBg },
      { title: "Емоционална готовност за връзка", description: "Подготовка за здрава връзка чрез работа върху емоционалната зрелост, самопознание и готовност за интимност.", slug: "emotional-readiness", icon: Sparkles, image: groupEmotionalReadinessBg },
      { title: "Социални умения и увереност при запознанства", description: "Практически групови упражнения за развиване на комуникативни умения и увереност в социални ситуации.", slug: "social-skills", icon: MessageCircle, image: groupSocialSkillsBg },
      { title: "След раздяла – възстановяване и ново начало", description: "Подкрепа за преодоляване на болката от раздяла и подготовка за нови, по-здрави взаимоотношения.", slug: "breakup-recovery", icon: Target, image: groupBreakupRecoveryBg },
      { title: "Matchmaking група – свързване чрез ценности", description: "Осъзнат подход към намирането на партньор, базиран на споделени ценности и психологична съвместимост.", slug: "matchmaking", icon: Users, image: groupMatchmakingBg },
    ],
  },
  en: {
    seoTitle: "Relationship Group Programs | DAR Psychology",
    seoDescription: "Group programs for people who want to build healthier and more fulfilling relationships",
    seoKeywords: "relationship groups, attachment therapy, social skills group, breakup recovery support, matchmaking psychology, emotional readiness for relationships",
    courseName: "Singles and relationships",
    courseDesc: "Group programs for people who want to build healthier, more conscious and fulfilling relationships",
    home: "Home", groupPrograms: "Group programs", breadcrumbLeaf: "Relationships",
    eyebrow: "Group programs", titleStart: "Group programs for", titleHighlight: "singles",
    subtitle: "Psychological group work for building healthy connections and meaningful relationships",
    contactsBtn: "CONTACT US", callAria: "Call us",
    keyTitle: "Our", keyHighlight: "approach",
    keySub: "This is not a dating agency – it is psychological group work that creates conditions for meaningful connections.",
    groupsTitle: "Our", groupsHighlight: "groups",
    groupsSub: "Choose the group that fits your situation. All groups are led by qualified specialists.",
    learnMore: "Learn more",
    bannerTitle: "Meaningful connections",
    bannerText: "Our goal isn't simply to introduce you to someone, but to help you understand yourself, develop your relationship skills, and build readiness for healthy, fulfilling partnerships.",
    contactTitle: "Get in touch", contactTitleSuffix: "",
    contactSub: "Contact us for more information or to register for a group.",
    serviceName: "Relationship groups",
    keyPoints: [
      { title: "Psychological group work", description: "Not a dating agency, but professional psychological support for building healthy relationships", icon: Heart },
      { title: "Conscious choice", description: "Learn to choose a partner based on values rather than impulses or old patterns", icon: Target },
      { title: "Group dynamics", description: "The power of group support and shared experience with people in similar situations", icon: Users },
      { title: "Practical skills", description: "Real tools and techniques to improve social and emotional skills", icon: Sparkles },
    ],
    groups: [
      { title: "Attachment patterns and partner choice", description: "Understand your attachment patterns and how they influence your choice of partner. Learn to recognize healthy relationships.", slug: "attachment", icon: Heart, image: groupAttachmentBg },
      { title: "Emotional readiness for a relationship", description: "Preparation for a healthy relationship through emotional maturity, self-awareness and readiness for intimacy.", slug: "emotional-readiness", icon: Sparkles, image: groupEmotionalReadinessBg },
      { title: "Social skills and dating confidence", description: "Practical group exercises to develop communication skills and confidence in social situations.", slug: "social-skills", icon: MessageCircle, image: groupSocialSkillsBg },
      { title: "After a breakup – recovery and a new beginning", description: "Support for overcoming the pain of a breakup and preparing for new, healthier relationships.", slug: "breakup-recovery", icon: Target, image: groupBreakupRecoveryBg },
      { title: "Matchmaking group – connecting through values", description: "A conscious approach to finding a partner based on shared values and psychological compatibility.", slug: "matchmaking", icon: Users, image: groupMatchmakingBg },
    ],
  },
} as const;

const RelationshipsGroupPrograms = () => {
  const { lang, localized } = useLanguage();
  const c = CONTENT[lang];
  const basePath = "/services/group-programs/relationships";

  return (
    <div className="min-h-screen bg-background">
      <SEO title={c.seoTitle} description={c.seoDescription} url={basePath} keywords={c.seoKeywords} />
      <CourseSchema name={c.courseName} description={c.courseDesc} url={`https://darpsiholog.com${localized(basePath)}`} />
      <BreadcrumbSchema items={[
        { name: c.home, url: lang === "en" ? "/en" : "/" },
        { name: c.groupPrograms, url: localized("/services/group-programs") },
        { name: c.breadcrumbLeaf, url: localized(basePath) }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${groupRelationshipsHeader})` }} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">{c.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {c.titleStart}{" "}
              <span className="gradient-text">{c.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{c.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={localized("/contact")}>
                <Button variant="hero" size="lg">{c.contactsBtn}</Button>
              </Link>
              <a href="tel:+359887079256" aria-label={c.callAria}>
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              {c.keyTitle}{" "}
              <span className="gradient-text">{c.keyHighlight}</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{c.keySub}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {c.keyPoints.map((point) => (
                <div key={point.title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
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

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              {c.groupsTitle}{" "}
              <span className="gradient-text">{c.groupsHighlight}</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{c.groupsSub}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.groups.map((group) => (
                <Link key={group.slug} to={localized(`${basePath}/${group.slug}`)} className="block rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all group relative h-72">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 opacity-30" style={{ backgroundImage: `url(${group.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
                  <div className="relative h-full flex flex-col p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 flex-shrink-0 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <group.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors leading-tight">{group.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base line-clamp-3 flex-grow">{group.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {c.learnMore}
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

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
              <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-primary/50 translate-x-3" />
              <div className="w-3 h-3 rounded-full bg-primary/40 translate-x-6" />
            </div>
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
                <h3 className="text-xl md:text-2xl font-heading font-semibold uppercase tracking-wide text-primary-foreground">{c.bannerTitle}</h3>
              </div>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-center">{c.bannerText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">{c.contactTitle}</span>{c.contactTitleSuffix ? ` ${c.contactTitleSuffix}` : ""}
              </h2>
              <p className="text-sm text-muted-foreground">{c.contactSub}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName={c.serviceName} buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RelationshipsGroupPrograms;
