import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Lock, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";
import groupAddictions from "@/assets/group-addictions.jpg";
import groupAlcoholBg from "@/assets/group-alcohol-bg.jpg";
import groupSubstancesBg from "@/assets/group-substances-bg.jpg";
import groupGamblingBg from "@/assets/group-gambling-bg.jpg";
import groupLoveBg from "@/assets/group-love-bg.jpg";
import groupCodependencyBg from "@/assets/group-codependency-bg.jpg";

const CONTENT = {
  bg: {
    seoTitle: "Групови програми при зависимости | ДАР Психология",
    seoDescription: "Подкрепящи и терапевтични групи за хора със зависимости и техни близки",
    seoKeywords: "групи зависимости, алкохолна зависимост терапия, хазартна зависимост помощ, съзависимост, любовна зависимост, групова терапия зависимости София",
    courseName: "Групови програми при зависимости",
    courseDesc: "Подкрепящи и терапевтични групи за хора, които се сблъскват със зависимости, както и за техни близки",
    home: "Начало",
    groupPrograms: "Групови програми",
    breadcrumbLeaf: "Зависимости",
    eyebrow: "Групови програми",
    titleStart: "Групи за подкрепа при",
    titleHighlight: "зависимости",
    subtitle: "Анонимни и терапевтични групи за хора, които търсят подкрепа и промяна",
    contactsBtn: "КОНТАКТИ",
    callAria: "Обадете се",
    keyTitle: "Ключови",
    keyHighlight: "акценти",
    keySub: "Нашият подход към груповата работа при зависимости се основава на:",
    groupsTitle: "Нашите",
    groupsHighlight: "групи",
    groupsSub: "Изберете групата, която отговаря на вашите нужди. Всички групи са анонимни и се водят от квалифицирани специалисти.",
    learnMore: "Научи повече",
    bannerTitle: "Пълна конфиденциалност",
    bannerText: "Всички групи се провеждат при стриктни правила за анонимност. Не се изискват лични данни, не се записват имена и не се разкрива информация за участниците. Вашата поверителност е наш приоритет.",
    contactTitle: "Свържете се",
    contactTitleSuffix: "с нас",
    contactSub: "Свържете се с нас за повече информация или за да се запишете в група. Вашето обаждане е напълно конфиденциално.",
    serviceName: "Групи за зависимости",
    keyPoints: [
      { title: "Анонимност и конфиденциалност", description: "Пълна защита на личната информация и идентичност на участниците", icon: Lock },
      { title: "Неосъждаща и подкрепяща среда", description: "Безопасно пространство без критика, стигматизация или осъждане", icon: Heart },
      { title: "Сила на груповата динамика", description: "Споделеният опит и взаимната подкрепа са ключови за възстановяването", icon: Users },
      { title: "Професионално водене", description: "Групите се водят от квалифицирани специалисти с опит в работата със зависимости", icon: Shield },
    ],
    groups: [
      { title: "Анонимна група за проблемна употреба на алкохол", description: "Подкрепяща група за хора, които искат да преодолеят проблемната употреба на алкохол в безопасна и анонимна среда.", slug: "alcohol", icon: Shield, image: groupAlcoholBg },
      { title: "Анонимна група за зависимости към вещества", description: "Терапевтична група за хора, преживяващи зависимост към различни вещества, с фокус върху възстановяване и подкрепа.", slug: "substances", icon: Shield, image: groupSubstancesBg },
      { title: "Анонимна група за хазартна зависимост", description: "Подкрепа за хора, борещи се с хазартна зависимост, чрез споделяне на опит и изграждане на стратегии за промяна.", slug: "gambling", icon: Shield, image: groupGamblingBg },
      { title: "Анонимна група за любовна зависимост", description: "Група за хора, които изпитват нездравословни модели в любовните си взаимоотношения и търсят баланс.", slug: "love", icon: Heart, image: groupLoveBg },
      { title: "Група за близки на хора със зависимости (съзависимост)", description: "Подкрепа за семейства и близки на хора със зависимости, работа върху съзависими модели на поведение.", slug: "codependency", icon: Users, image: groupCodependencyBg },
    ],
  },
  en: {
    seoTitle: "Group Programs for Addictions | DAR Psychology",
    seoDescription: "Supportive and therapeutic groups for people dealing with addictions and their loved ones",
    seoKeywords: "addiction groups, alcohol addiction therapy, gambling addiction help, codependency, love addiction, addiction group therapy Sofia",
    courseName: "Group Programs for Addictions",
    courseDesc: "Supportive and therapeutic groups for people facing addictions, as well as their loved ones",
    home: "Home",
    groupPrograms: "Group programs",
    breadcrumbLeaf: "Addictions",
    eyebrow: "Group programs",
    titleStart: "Support groups for",
    titleHighlight: "addictions",
    subtitle: "Anonymous and therapeutic groups for people seeking support and change",
    contactsBtn: "CONTACT US",
    callAria: "Call us",
    keyTitle: "Key",
    keyHighlight: "highlights",
    keySub: "Our approach to group work on addictions is built on:",
    groupsTitle: "Our",
    groupsHighlight: "groups",
    groupsSub: "Choose the group that fits your needs. All groups are anonymous and led by qualified specialists.",
    learnMore: "Learn more",
    bannerTitle: "Complete confidentiality",
    bannerText: "All groups follow strict rules of anonymity. No personal data is required, no names are recorded, and no information about participants is shared. Your privacy is our priority.",
    contactTitle: "Get in touch",
    contactTitleSuffix: "",
    contactSub: "Contact us for more information or to register for a group. Your call is completely confidential.",
    serviceName: "Addiction groups",
    keyPoints: [
      { title: "Anonymity and confidentiality", description: "Full protection of participants' personal information and identity", icon: Lock },
      { title: "Non-judgmental, supportive environment", description: "A safe space free of criticism, stigma, or judgment", icon: Heart },
      { title: "The power of group dynamics", description: "Shared experience and mutual support are key to recovery", icon: Users },
      { title: "Professional facilitation", description: "Groups are led by qualified specialists with experience in addictions", icon: Shield },
    ],
    groups: [
      { title: "Anonymous group for problem alcohol use", description: "A supportive group for people who want to overcome problem drinking in a safe, anonymous environment.", slug: "alcohol", icon: Shield, image: groupAlcoholBg },
      { title: "Anonymous group for substance addictions", description: "A therapeutic group for people experiencing addiction to various substances, focused on recovery and support.", slug: "substances", icon: Shield, image: groupSubstancesBg },
      { title: "Anonymous group for gambling addiction", description: "Support for people struggling with gambling addiction through shared experience and strategies for change.", slug: "gambling", icon: Shield, image: groupGamblingBg },
      { title: "Anonymous group for love addiction", description: "A group for people who experience unhealthy patterns in their romantic relationships and seek balance.", slug: "love", icon: Heart, image: groupLoveBg },
      { title: "Group for loved ones of people with addictions (codependency)", description: "Support for families and loved ones of people with addictions, working on codependent patterns of behavior.", slug: "codependency", icon: Users, image: groupCodependencyBg },
    ],
  },
} as const;

const AddictionsGroupPrograms = () => {
  const { lang, localized } = useLanguage();
  const c = CONTENT[lang];
  const basePath = "/services/group-programs/addictions";

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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${groupAddictions})` }} />
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
                <Button variant="hero-outline" size="lg">
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
                <Lock className="h-10 w-10 text-primary-foreground" />
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

export default AddictionsGroupPrograms;
