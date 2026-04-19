import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Brain, Target, MessageCircle, Lightbulb, Zap, ArrowRight, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";
import groupNLPHeader from "@/assets/group-nlp-header.jpg";
import groupNLPEffectivenessBg from "@/assets/group-nlp-effectiveness-bg.jpg";
import groupNLPAnxietyBg from "@/assets/group-nlp-anxiety-bg.jpg";
import groupNLPGoalsBg from "@/assets/group-nlp-goals-bg.jpg";
import groupNLPCommunicationBg from "@/assets/group-nlp-communication-bg.jpg";
import groupNLPHabitsBg from "@/assets/group-nlp-habits-bg.jpg";

const CONTENT = {
  bg: {
    seoTitle: "НЛП групови програми | ДАР Психология",
    seoDescription: "Практически ориентирани групи за личностно и професионално развитие чрез НЛП техники",
    seoKeywords: "НЛП групи, НЛП техники, личностно развитие група, НЛП тревожност, НЛП цели мотивация, невролингвистично програмиране София",
    courseName: "НЛП за личностно и професионално развитие",
    courseDesc: "Практически ориентирани групи, насочени към лична ефективност, вътрешна промяна и развитие",
    home: "Начало", groupPrograms: "Групови програми", breadcrumbLeaf: "НЛП",
    eyebrow: "Групови програми", titleStart: "НЛП и", titleHighlight: "личностно развитие",
    subtitle: "Практични техники за осъзната промяна и устойчиви резултати",
    contactsBtn: "КОНТАКТИ", callAria: "Обадете се",
    keyTitle: "Нашият", keyHighlight: "подход",
    keySub: "Невро-лингвистичното програмиране (НЛП) е набор от практични техники за постигане на желаните промени в мисленето и поведението.",
    groupsTitle: "Нашите", groupsHighlight: "програми",
    groupsSub: "Изберете програмата, която отговаря на вашите цели. Всички групи се водят от сертифицирани НЛП практици.",
    learnMore: "Научи повече",
    bannerTitle: "Промяната започва от вас",
    bannerText: "НЛП ви дава инструментите да разберете как мислите, да промените това, което не ви служи, и да изградите нови, по-ефективни модели на мислене и поведение.",
    contactTitle: "Свържете се", contactTitleSuffix: "с нас",
    contactSub: "Свържете се с нас за повече информация или за да се запишете в група.",
    serviceName: "НЛП програми",
    keyPoints: [
      { title: "Практични техники", description: "Научете конкретни инструменти, които можете да приложите веднага в ежедневието си", icon: Target },
      { title: "Осъзната промяна", description: "Работа с вътрешните ви ресурси за постигане на траен и смислен резултат", icon: Brain },
      { title: "Устойчиви резултати", description: "Фокус върху дългосрочни промени, а не временни решения", icon: Sparkles },
      { title: "Малки групи", description: "Индивидуално внимание и възможност за персонализирана работа", icon: Users },
    ],
    groups: [
      { title: "НЛП за лична ефективност и увереност", description: "Практични техники за изграждане на увереност, по-добро себепредставяне и постигане на лични и професионални цели.", slug: "personal-effectiveness", icon: Lightbulb, image: groupNLPEffectivenessBg },
      { title: "НЛП при тревожност и вътрешни блокажи", description: "Работа със страхове, вътрешни ограничения и тревожни състояния чрез доказани НЛП техники.", slug: "anxiety-blocks", icon: Brain, image: groupNLPAnxietyBg },
      { title: "НЛП за цели, мотивация и промяна", description: "Научете как да поставяте ясни цели, да поддържате мотивацията и да създавате устойчива промяна в живота си.", slug: "goals-motivation", icon: Target, image: groupNLPGoalsBg },
      { title: "НЛП и комуникационни умения", description: "Подобрете начина, по който общувате – научете се да разбирате другите и да бъдете разбрани.", slug: "communication-skills", icon: MessageCircle, image: groupNLPCommunicationBg },
      { title: "НЛП за работа с навици и поведение", description: "Трансформирайте нежелани навици и поведенчески модели в осъзнати и подкрепящи действия.", slug: "habits", icon: Zap, image: groupNLPHabitsBg },
    ],
  },
  en: {
    seoTitle: "NLP Group Programs | DAR Psychology",
    seoDescription: "Practical groups for personal and professional development through NLP techniques",
    seoKeywords: "NLP groups, NLP techniques, personal development group, NLP anxiety, NLP goals motivation, neuro-linguistic programming Sofia",
    courseName: "NLP for personal and professional development",
    courseDesc: "Practically oriented groups focused on personal effectiveness, inner change and development",
    home: "Home", groupPrograms: "Group programs", breadcrumbLeaf: "NLP",
    eyebrow: "Group programs", titleStart: "NLP and", titleHighlight: "personal development",
    subtitle: "Practical techniques for conscious change and lasting results",
    contactsBtn: "CONTACT US", callAria: "Call us",
    keyTitle: "Our", keyHighlight: "approach",
    keySub: "Neuro-Linguistic Programming (NLP) is a set of practical techniques for achieving the changes you want in thinking and behavior.",
    groupsTitle: "Our", groupsHighlight: "programs",
    groupsSub: "Choose the program that fits your goals. All groups are led by certified NLP practitioners.",
    learnMore: "Learn more",
    bannerTitle: "Change starts with you",
    bannerText: "NLP gives you the tools to understand how you think, change what no longer serves you, and build new, more effective patterns of thinking and behavior.",
    contactTitle: "Get in touch", contactTitleSuffix: "",
    contactSub: "Contact us for more information or to register for a group.",
    serviceName: "NLP programs",
    keyPoints: [
      { title: "Practical techniques", description: "Learn concrete tools you can apply right away in your everyday life", icon: Target },
      { title: "Conscious change", description: "Working with your inner resources to achieve lasting, meaningful results", icon: Brain },
      { title: "Sustainable results", description: "Focus on long-term change, not temporary fixes", icon: Sparkles },
      { title: "Small groups", description: "Individual attention and the opportunity for personalized work", icon: Users },
    ],
    groups: [
      { title: "NLP for personal effectiveness and confidence", description: "Practical techniques for building confidence, presenting yourself better, and achieving personal and professional goals.", slug: "personal-effectiveness", icon: Lightbulb, image: groupNLPEffectivenessBg },
      { title: "NLP for anxiety and inner blocks", description: "Working with fears, inner limitations, and anxiety through proven NLP techniques.", slug: "anxiety-blocks", icon: Brain, image: groupNLPAnxietyBg },
      { title: "NLP for goals, motivation and change", description: "Learn how to set clear goals, sustain motivation, and create lasting change in your life.", slug: "goals-motivation", icon: Target, image: groupNLPGoalsBg },
      { title: "NLP and communication skills", description: "Improve the way you communicate – learn to understand others and be understood.", slug: "communication-skills", icon: MessageCircle, image: groupNLPCommunicationBg },
      { title: "NLP for working with habits and behavior", description: "Transform unwanted habits and behavioral patterns into conscious, supportive actions.", slug: "habits", icon: Zap, image: groupNLPHabitsBg },
    ],
  },
} as const;

const NLPGroupPrograms = () => {
  const { lang, localized } = useLanguage();
  const c = CONTENT[lang];
  const basePath = "/services/group-programs/nlp";

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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${groupNLPHeader})` }} />
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
                      <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors leading-tight">{group.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">{group.description}</p>
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
                <Brain className="h-10 w-10 text-primary-foreground" />
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

export default NLPGroupPrograms;
