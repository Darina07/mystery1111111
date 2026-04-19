import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, Baby, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";
import groupParentingHeader from "@/assets/group-parenting-header.jpg";
import groupPregnantMothersBg from "@/assets/group-pregnant-mothers-bg.jpg";
import groupPostpartumBg from "@/assets/group-postpartum-bg.jpg";
import groupToddlerParentsBg from "@/assets/group-toddler-parents-bg.jpg";
import groupDifficultSituationsBg from "@/assets/group-difficult-situations-bg.jpg";

const CONTENT = {
  bg: {
    seoTitle: "Групови програми за родители | ДАР Психология",
    seoDescription: "Подкрепящи групи за жени и родители в чувствителни и важни житейски етапи",
    seoKeywords: "групи за родители, бременност подкрепа, следродилна депресия група, родители малки деца, родителска подкрепа София",
    courseName: "Бременност и родителство",
    courseDesc: "Подкрепящи групи за жени и родители в чувствителни и важни житейски етапи",
    home: "Начало", groupPrograms: "Групови програми", breadcrumbLeaf: "Родителство",
    eyebrow: "Групови програми", titleStart: "Групи за", titleHighlight: "родители",
    subtitle: "За бременни, бъдещи и настоящи родители. Не сте сами в това пътуване.",
    contactsBtn: "КОНТАКТИ", callAria: "Обадете се",
    keyTitle: "Нашият", keyHighlight: "подход",
    keySub: "Създаваме топло, подкрепящо пространство, където родителството се преживява заедно.",
    groupsTitle: "Нашите", groupsHighlight: "групи",
    groupsSub: "Изберете групата, която отговаря на вашата ситуация. Всички групи се водят от квалифицирани специалисти.",
    learnMore: "Научи повече",
    bannerTitle: "Не сте сами",
    bannerText: "Родителството е красиво пътуване, но понякога е и предизвикателно. Тук ще намерите разбиране, подкрепа и общност от хора, които преминават през същото.",
    contactTitle: "Свържете се", contactTitleSuffix: "с нас",
    contactSub: "Свържете се с нас за повече информация или за да се запишете в група.",
    serviceName: "Родителски групи",
    keyPoints: [
      { title: "Не сте сами", description: "Споделете преживяванията си с други родители, които разбират през какво преминавате", icon: Heart },
      { title: "Спокойствие и сигурност", description: "Безопасно пространство, където можете да бъдете себе си без осъждане", icon: Shield },
      { title: "Професионална подкрепа", description: "Групите се водят от квалифицирани специалисти с опит в работата с родители", icon: Sparkles },
      { title: "Общност от разбиране", description: "Изградете връзки с други родители и намерете подкрепа в ежедневието", icon: Users },
    ],
    groups: [
      { title: "Група за бременни и бъдещи майки", description: "Емоционална подкрепа през бременността. Споделяне на преживявания, страхове и радости с други бъдещи майки.", slug: "pregnant-mothers", icon: Heart, image: groupPregnantMothersBg },
      { title: "Следродилен период – адаптация и подкрепа", description: "Подкрепа за справяне с тревожност, адаптация към новата роля и емоционалните предизвикателства след раждането.", slug: "postpartum", icon: Baby, image: groupPostpartumBg },
      { title: "Родители на малки деца", description: "Група за родители на деца от 0 до 6 години. Емоции, граници, сигурност и ежедневни предизвикателства.", slug: "toddler-parents", icon: Users, image: groupToddlerParentsBg },
      { title: "Родители в трудни житейски ситуации", description: "Подкрепяща група за родители, преминаващи през развод, загуба, болест или други трудни житейски обстоятелства.", slug: "difficult-situations", icon: Shield, image: groupDifficultSituationsBg },
    ],
  },
  en: {
    seoTitle: "Group Programs for Parents | DAR Psychology",
    seoDescription: "Supportive groups for women and parents during sensitive and important life stages",
    seoKeywords: "groups for parents, pregnancy support, postpartum depression group, parents of young children, parental support Sofia",
    courseName: "Pregnancy and parenthood",
    courseDesc: "Supportive groups for women and parents during sensitive and important life stages",
    home: "Home", groupPrograms: "Group programs", breadcrumbLeaf: "Parenthood",
    eyebrow: "Group programs", titleStart: "Groups for", titleHighlight: "parents",
    subtitle: "For pregnant women, future and current parents. You are not alone on this journey.",
    contactsBtn: "CONTACT US", callAria: "Call us",
    keyTitle: "Our", keyHighlight: "approach",
    keySub: "We create a warm, supportive space where parenthood is experienced together.",
    groupsTitle: "Our", groupsHighlight: "groups",
    groupsSub: "Choose the group that fits your situation. All groups are led by qualified specialists.",
    learnMore: "Learn more",
    bannerTitle: "You are not alone",
    bannerText: "Parenthood is a beautiful journey, but sometimes also challenging. Here you'll find understanding, support, and a community of people going through the same thing.",
    contactTitle: "Get in touch", contactTitleSuffix: "",
    contactSub: "Contact us for more information or to register for a group.",
    serviceName: "Parenting groups",
    keyPoints: [
      { title: "You are not alone", description: "Share your experiences with other parents who understand what you're going through", icon: Heart },
      { title: "Calm and safety", description: "A safe space where you can be yourself without judgment", icon: Shield },
      { title: "Professional support", description: "Groups are led by qualified specialists experienced in working with parents", icon: Sparkles },
      { title: "A community of understanding", description: "Build connections with other parents and find support in everyday life", icon: Users },
    ],
    groups: [
      { title: "Group for pregnant women and expecting mothers", description: "Emotional support during pregnancy. Sharing experiences, fears, and joys with other expecting mothers.", slug: "pregnant-mothers", icon: Heart, image: groupPregnantMothersBg },
      { title: "Postpartum period – adjustment and support", description: "Support for coping with anxiety, adapting to the new role, and the emotional challenges after birth.", slug: "postpartum", icon: Baby, image: groupPostpartumBg },
      { title: "Parents of young children", description: "A group for parents of children aged 0–6. Emotions, boundaries, safety, and everyday challenges.", slug: "toddler-parents", icon: Users, image: groupToddlerParentsBg },
      { title: "Parents in difficult life situations", description: "A supportive group for parents going through divorce, loss, illness, or other difficult life circumstances.", slug: "difficult-situations", icon: Shield, image: groupDifficultSituationsBg },
    ],
  },
} as const;

const ParentingGroupPrograms = () => {
  const { lang, localized } = useLanguage();
  const c = CONTENT[lang];
  const basePath = "/services/group-programs/parenting";

  return (
    <div className="min-h-screen bg-background">
      <SEO title={c.seoTitle} description={c.seoDescription} url={basePath} keywords={c.seoKeywords} />
      <CourseSchema name={c.courseName} description={c.courseDesc} url={`https://darpsychology.com${localized(basePath)}`} />
      <BreadcrumbSchema items={[
        { name: c.home, url: lang === "en" ? "/en" : "/" },
        { name: c.groupPrograms, url: localized("/services/group-programs") },
        { name: c.breadcrumbLeaf, url: localized(basePath) }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${groupParentingHeader})` }} />
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
            <div className="grid md:grid-cols-2 gap-6">
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

export default ParentingGroupPrograms;
