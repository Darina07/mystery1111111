import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Target, Users, Shield, HeartHandshake, Baby, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import familyHeaderBg from "@/assets/family-counseling-header-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import marriageRings from "@/assets/marriage-rings.jpg";
import couplesPartners from "@/assets/couples-partners.jpg";
import lgbtCouple from "@/assets/lgbt-couple.jpg";
import parentsChildren from "@/assets/parents-children.jpg";
import newPartners from "@/assets/new-partners.jpg";

const workWith = [
  { name: "partners and spouses", icon: HeartHandshake, image: couplesPartners },
  { name: "LGBT+ couples", icon: Heart, image: lgbtCouple },
  { name: "parents and children", icon: Baby, image: parentsChildren },
  { name: "new partners and blended families", icon: Users, image: newPartners },
];

const whenUseful = [
  "frequent conflicts, tension or emotional distance",
  "communication between partners is difficult or painful",
  "lack of closeness, trust or understanding",
  "jealousy, insecurity or infidelity",
  "the family is going through change — new baby, new partner, separation",
  "difficulties with parenting and the relationship with children",
  "sexual difficulties or dissatisfaction in intimate life",
];

const sexualTopics = [
  "low or absent sexual desire",
  "differences in sexual needs between partners",
  "difficulties with arousal or satisfaction",
  "pain or discomfort during sex",
  "sexual difficulties related to stress, anxiety or life changes",
  "intimacy after childbirth, illness or trauma",
];

const processSteps = [
  { icon: MessageCircle, title: "Clarification", description: "clarifying problems and patterns in the relationship" },
  { icon: Target, title: "Communication", description: "improving communication" },
  { icon: Heart, title: "Trust", description: "rebuilding trust and emotional closeness" },
  { icon: Sparkles, title: "Intimacy", description: "working on intimacy and sexual relations" },
  { icon: Shield, title: "Boundaries", description: "building healthy boundaries and roles" },
  { icon: Users, title: "Family dynamics", description: "support for parents and family dynamics" },
];

const benefits = [
  "better understanding between partners",
  "calmer, clearer communication",
  "fewer conflicts and less tension",
  "improved intimate and sexual life",
  "a healthier, more stable family environment",
  "more confident decisions about the future",
];

const FamilyCounseling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Family & Couples Counseling | Dar Center"
        description="Professional family and couples counseling. Help with conflict, crisis and communication for couples, parents and families."
        url="/en/services/family-counseling"
        keywords="family psychologist, couples therapy, family counseling, marriage therapy"
      />
      <ProfessionalServiceSchema name="Family & Couples Counseling" description="Professional family and couples counseling." url="/en/services/family-counseling" serviceType="Family counseling" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Family Counseling", url: "/en/services/family-counseling" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${familyHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Marriage counselor, family psychologist & sexologist</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Counseling for <span className="gradient-text">couples & families</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">Professional support to improve relationships, communication and emotional closeness</p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2" asChild><Link to="/en/contact">CONTACT US</Link></Button>
              <a href="tel:+359887079256" aria-label="Call us"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-center">
              At "Dar" Center we offer professional counseling for couples and families, focused on improving relationships, communication, emotional closeness and intimate life. Counseling is led by a marriage counselor and family psychologist, with sexology support when needed. All in a calm, confidential and non-judgmental environment.
            </p>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"><span className="gradient-text">We work with:</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workWith.map((item) => (
                  <div key={item.name} className="relative rounded-2xl overflow-hidden border border-lavender/20">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="absolute inset-0 bg-background/70" />
                    <div className="relative z-10 p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                      <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"><item.icon className="h-7 w-7 text-primary" /></div>
                      <p className="text-foreground font-semibold">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${marriageRings})` }} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">When is <span className="gradient-text">counseling helpful?</span></h2>
            <p className="text-center text-muted-foreground mb-12">Support can help when:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {whenUseful.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground italic bg-card/80 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
                You don't need to wait for a serious crisis — many couples seek counseling preventively to strengthen their relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-lavender/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold">Sexual issues and <span className="gradient-text">work with a sexologist</span></h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Sexuality is a natural part of partnership. When sexual issues arise, they often affect the whole relationship. Counseling may include work with a sexologist on topics such as:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {sexualTopics.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                    <p className="text-foreground text-base">{t}</p>
                  </div>
                ))}
              </div>
              <p className="text-base text-muted-foreground italic text-center">The approach is delicate, professional and fully confidential.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">How does <span className="gradient-text">counseling unfold?</span></h2>
            <p className="text-center text-muted-foreground mb-12">The process is tailored to the situation and needs of the couple or family.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"><step.icon className="h-7 w-7 text-primary" /></div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">What does <span className="gradient-text">counseling provide?</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"><Heart className="h-4 w-4 text-primary-foreground" /></div>
                  <p className="text-foreground font-medium text-base">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide"><span className="gradient-text">Get in touch</span></h2>
              <p className="text-base text-muted-foreground">Take the first step.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Family Counseling" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyCounseling;
