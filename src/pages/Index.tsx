import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { SEO, LocalBusinessSchema, FAQSchema, WebsiteSchema, OrganizationSchema } from "@/components/SEO";

// Lazy load below-the-fold sections - these are not visible on initial load
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Business = lazy(() => import("@/components/Business").then(m => ({ default: m.Business })));
const TherapeuticApproachesSection = lazy(() => import("@/components/TherapeuticApproachesSection").then(m => ({ default: m.TherapeuticApproachesSection })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const Blog = lazy(() => import("@/components/Blog").then(m => ({ default: m.Blog })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

// Minimal section loader
const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
  </div>
);

const Index = () => {
  const faqs = [
    {
      question: "Как да запазя час за консултация?",
      answer: "Можете да запазите час като се обадите на +359 887 079 256 или като попълните контактната форма на сайта. Ще се свържем с вас в рамките на 24 часа.",
    },
    {
      question: "Колко време продължава една сесия?",
      answer: "Стандартната консултация е с продължителност 50-60 минути. Семейните и двойковите сесии могат да бъдат до 90 минути.",
    },
    {
      question: "Предлагате ли онлайн консултации?",
      answer: "Да, предлагаме онлайн консултации чрез видео връзка за всички наши услуги. Онлайн сесиите са също толкова ефективни, колкото и присъствените.",
    },
    {
      question: "Каква е цената на консултацията?",
      answer: "Цените варират в зависимост от вида на услугата. Индивидуална консултация започва от 80 лв., семейна терапия от 120 лв. Вижте пълния ценоразпис на страницата Цени.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        url="/"
        keywords="психолог София, психотерапия, семеен психолог, детски психолог, логопед, психодиагностика, консултиране"
      />
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