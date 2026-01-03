import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { TherapeuticApproachesSection } from "@/components/TherapeuticApproachesSection";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO, LocalBusinessSchema, FAQSchema } from "@/components/SEO";

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
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Business />
        <TherapeuticApproachesSection />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
