import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { SEO, LocalBusinessSchema, FAQSchema, WebsiteSchema, OrganizationSchema } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";

// Lazy load below-the-fold sections - these are not visible on initial load
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Business = lazy(() => import("@/components/Business").then(m => ({ default: m.Business })));
const TherapeuticApproachesSection = lazy(() => import("@/components/TherapeuticApproachesSection").then(m => ({ default: m.TherapeuticApproachesSection })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const Blog = lazy(() => import("@/components/Blog").then(m => ({ default: m.Blog })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
  </div>
);

const Index = () => {
  const { t, lang } = useLanguage();
  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
  ];

  const keywords = lang === "en"
    ? "psychologist Sofia, psychotherapy, family psychologist, child psychologist, speech therapy, psychodiagnostics, counseling"
    : "психолог София, психотерапия, семеен психолог, детски психолог, логопед, психодиагностика, консултиране";

  return (
    <div className="min-h-screen bg-background">
      <SEO url="/" keywords={keywords} />
      <WebsiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Business />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TherapeuticApproachesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
