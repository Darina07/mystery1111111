import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, FAQSchema, BreadcrumbSchema, AboutPageSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight,
  Heart, Shield, Award, Users, Brain, Sparkles, GraduationCap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TherapeuticApproachesSection } from "@/components/TherapeuticApproachesSection";

import aboutSlider1 from "@/assets/about-slider-1.jpg";
import aboutSlider2 from "@/assets/about-slider-2.jpg";
import aboutSlider3 from "@/assets/about-slider-3.jpg";
import specialistClinicalPsychologist from "@/assets/specialist-clinical-psychologist.jpg";
import specialistPsychotherapist from "@/assets/specialist-psychotherapist.jpg";
import specialistFamilyCounselor from "@/assets/specialist-family-counselor.jpg";
import specialistChildPsychologist from "@/assets/specialist-child-psychologist.jpg";
import specialistSpeechTherapist from "@/assets/specialist-speech-therapist.jpg";
import specialistCareerConsultant from "@/assets/specialist-career-consultant.jpg";

const heroSlides = [
  {
    image: aboutSlider1,
    title: "Your path to",
    highlight: "mental health",
    subtitle: "Professional support in the heart of Sofia"
  },
  {
    image: aboutSlider2,
    title: "A team of",
    highlight: "specialists",
    subtitle: "Psychologists, therapists, speech therapists and counselors"
  },
  {
    image: aboutSlider3,
    title: "Care for",
    highlight: "the whole family",
    subtitle: "Individual and family consultations"
  }
];

const values = [
  {
    icon: Heart,
    title: "Empathy & Understanding",
    description: "Every client is unique. We listen without judgment and create a safe space for sharing."
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "We guarantee complete discretion and protection of every client's personal information."
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We work with proven methods and continuously upgrade our qualifications."
  },
  {
    icon: Users,
    title: "Team Approach",
    description: "Our multidisciplinary team ensures comprehensive care for every need."
  }
];

const specialists = [
  {
    icon: Brain,
    title: "Clinical Psychologists",
    description: "Specialists experienced in the diagnosis and therapy of various mental health conditions.",
    image: specialistClinicalPsychologist
  },
  {
    icon: Heart,
    title: "Psychotherapists",
    description: "Trained in different therapeutic modalities — cognitive-behavioral, psychoanalytic and systemic therapy.",
    image: specialistPsychotherapist
  },
  {
    icon: Users,
    title: "Family Counselors",
    description: "Experts in working with couples and families, resolving conflicts and improving communication.",
    image: specialistFamilyCounselor
  },
  {
    icon: Sparkles,
    title: "Child Psychologists",
    description: "Specialized in working with children and adolescents on development and behavioral issues.",
    image: specialistChildPsychologist
  },
  {
    icon: GraduationCap,
    title: "Speech Therapists",
    description: "Professionals in speech and language therapy for children and adults.",
    image: specialistSpeechTherapist
  },
  {
    icon: Award,
    title: "Career Counselors",
    description: "Specialists in professional orientation and career development.",
    image: specialistCareerConsultant
  }
];

const faqItems = [
  {
    question: "How do I book a consultation?",
    answer: "You can book an appointment by calling us at +359 887 079 256 or by filling out the contact form on our website. We will get back to you within 24 hours to arrange a convenient time."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, Revolut and bank transfer. Payment is made before each session or in cash on site."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer full online consultations via Viber, WhatsApp, Skype or Google Meet. Online sessions are equally effective and suitable for clients outside of Sofia or with busy schedules."
  },
  {
    question: "How long does a session last?",
    answer: "The standard length of an individual or family consultation is 60 minutes. The first consultation may be slightly longer for getting acquainted and assessing the situation."
  },
  {
    question: "Do you work with children?",
    answer: "Yes, we have specialized child psychologists and speech therapists who work with children from a very early age. We use age-appropriate methods such as play and art therapy."
  },
  {
    question: "Is the information from sessions confidential?",
    answer: "Absolutely. Everything shared during consultations is strictly confidential and protected in accordance with professional ethics and data protection legislation."
  },
  {
    question: "How many sessions are needed to see results?",
    answer: "The number of sessions varies depending on the specific case and goals of therapy. Usually visible progress appears after 4–6 sessions. At the first consultation we will discuss realistic expectations."
  },
  {
    question: "Do you offer group programs?",
    answer: "Yes, we offer a variety of group programs on topics such as addictions, parenting, relationships and personal development. Group work offers unique advantages such as shared experience and mutual support."
  }
];


const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqsForSchema = faqItems.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Dar Center is a psychological and counseling center in Sofia with a team of clinical psychologists, psychotherapists, family counselors, child psychologists and speech therapists."
        url="/en/about"
        keywords="psychological center Sofia, team of psychologists, about Dar Center, psychology specialists"
      />
      <FAQSchema faqs={faqsForSchema} />
      <AboutPageSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "About Us", url: "/en/about" }
      ]} />
      <Header />

      {/* Hero Slider */}
      <section className="relative pt-24 min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              width={1920}
              height={800}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/75" />
          </div>
        ))}

        <div className="container relative z-10 h-full flex items-center justify-center min-h-[500px]">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-primary font-medium mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
              {heroSlides[currentSlide].title}{" "}
              <span className="gradient-text">{heroSlides[currentSlide].highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/en/contact">
                <Button variant="hero" size="lg">
                  CONTACT US
                </Button>
              </Link>
              <a href="tel:+359887079256" aria-label="Call us">
                <Button variant="hero-outline" size="lg">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-accent w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase">
                  Who We Are
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                "Dar" Center — your{" "}
                <span className="gradient-text">partner</span> in caring for mental health
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Dar Psychological and Counseling Center was founded with the mission to provide
                  professional services in psychology, counseling and personal development.
                  Our team brings together experienced specialists from different fields to
                  offer comprehensive care to every client.
                </p>
                <p>
                  We work with individual clients, children, families and business organizations,
                  offering a range of services — from psychotherapy and family counseling
                  to group programs and corporate training.
                </p>
                <p>
                  We believe everyone deserves access to quality psychological support
                  based on trust, respect and proven therapeutic methods.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Our Team
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              A diverse team of{" "}
              <span className="gradient-text">specialists</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              At Dar Center we have qualified professionals from different fields,
              ready to address every one of your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist) => (
              <div
                key={specialist.title}
                className="relative p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                }}
              >
                {/* Background Image */}
                <img
                  src={specialist.image}
                  alt=""
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.08]"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <specialist.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 uppercase gradient-text">
                    {specialist.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {specialist.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches Section */}
      <TherapeuticApproachesSection />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              FAQ
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Answers to the most common questions we receive from our clients.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl px-6 border border-border/50 shadow-card overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
                  }}
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Contact
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Get in{" "}
              <span className="gradient-text">touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? Contact us for a consultation or to book an appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+359 887 079 256",
                    href: "tel:+359887079256",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@dar-psiholog.com",
                    href: "mailto:info@dar-psiholog.com",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "18 Kishinev St., Lozenets, Sofia, Bulgaria",
                    href: "https://maps.google.com/?q=Sofia,Bulgaria,Kishinev+18",
                  },
                  {
                    icon: Clock,
                    label: "Working hours",
                    value: "Monday – Sunday | 08:00 – 22:00",
                    href: null as string | null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3176!3d42.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859f0c0c0c0f%3A0x0!2sKishinev%2018%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1704200000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location of Dar Center — 18 Kishinev St., Lozenets, Sofia"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h3 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Get in touch
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+359 888 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full uppercase text-white shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'var(--gradient-cta)' }}
                >
                  Send inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
