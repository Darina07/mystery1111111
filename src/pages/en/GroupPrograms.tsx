import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Users, Heart, Shield, Brain, Target, MessageCircle, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, CourseSchema, BreadcrumbSchema } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";
import contactBg from "@/assets/contact-bg.jpg";
import groupProgramsHeader from "@/assets/group-programs-header.jpg";
import groupAddictions from "@/assets/group-addictions.jpg";
import groupRelationships from "@/assets/group-relationships.jpg";
import groupParenting from "@/assets/group-parenting.jpg";
import groupNlp from "@/assets/group-nlp.jpg";

const groupBenefits = [
  { text: "not be alone with your difficulties", icon: Users },
  { text: "receive understanding and support from people in similar situations", icon: Heart },
  { text: "see new perspectives and solutions", icon: Target },
  { text: "build real-life coping skills and strategies", icon: Shield },
];

const whatGroupsOffer = [
  { text: "professional facilitation", icon: Brain },
  { text: "the power of shared experience", icon: Users },
  { text: "structured work on specific topics", icon: Target },
  { text: "a supportive, non-judgmental environment", icon: Heart },
];

const participationBenefits = [
  "reduced tension and feelings of loneliness",
  "better understanding of emotions and behavior",
  "increased confidence",
  "building lasting change",
];

const groups = [
  {
    title: "Group programs for addictions",
    description: "Supportive and therapeutic groups for people facing addictions, as well as for their loved ones.",
    image: groupAddictions,
    href: "/en/services/group-programs/addictions",
    icon: Shield,
  },
  {
    title: "Singles & relationships",
    description: "Group programs for people who want to build healthier, more conscious and fulfilling relationships.",
    image: groupRelationships,
    href: "/en/services/group-programs/relationships",
    icon: Heart,
  },
  {
    title: "Pregnancy & parenting",
    description: "Supportive groups for women and parents in sensitive and important life stages.",
    image: groupParenting,
    href: "/en/services/group-programs/parenting",
    icon: Users,
  },
  {
    title: "NLP for personal & professional growth",
    description: "Practically oriented groups for personal effectiveness, inner change and growth in personal and professional life.",
    image: groupNlp,
    href: "/en/services/group-programs/nlp",
    icon: Brain,
  },
];

const processItems = [
  { text: "small groups", icon: Users },
  { text: "clear structure and duration", icon: Target },
  { text: "in-person or online (depending on program)", icon: MessageCircle },
  { text: "professional facilitation", icon: Brain },
  { text: "clear confidentiality rules", icon: Lock },
];

const GroupPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Group Programs | Dar Psychology Center"
        description="Support, sharing and change in a safe, professional environment. Group programs for addictions, relationships, parenting and personal development."
        url="/en/services/group-programs"
        keywords="group therapy Sofia, psychology groups, addiction groups, parenting groups, NLP groups, support groups"
      />
      <CourseSchema
        name="Group Programs"
        description="Supportive group programs for personal development, addiction recovery, relationships and parenting."
        url="https://darpsychology.com/en/services/group-programs"
        courseMode="blended"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Group Programs", url: "/en/services/group-programs" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${groupProgramsHeader})` }} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-primary font-medium mb-4">Dar Center</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Group <span className="gradient-text">programs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Support, sharing and change in a safe and professional environment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/en/contact"><Button variant="hero" size="lg">CONTACT US</Button></Link>
              <a href="tel:+359887079256" aria-label="Call us"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Group programs at "Dar Center" create a safe space for support, awareness and personal change, where people with shared experiences work on important topics in a structured, professionally facilitated process.
            </p>
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-semibold text-center mb-6">Group work allows you to:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {groupBenefits.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                    <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              What are <span className="gradient-text">group programs?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">Group programs combine:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {whatGroupsOffer.map((item) => (
                <div key={item.text} className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-heading font-semibold text-center mb-6">Group participation supports:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {participationBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-xl p-4 border border-lavender/20">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Types of <span className="gradient-text">group programs</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {groups.map((g) => (
                <div key={g.title} className="relative rounded-2xl overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${g.image})` }} />
                  <div className="absolute inset-0 bg-background/90" />
                  <div className="relative z-10 p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <g.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">{g.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base mb-6 flex-grow">{g.description}</p>
                    <Link to={g.href} className="mt-auto"><Button variant="cta" size="sm">LEARN MORE</Button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              How do <span className="gradient-text">groups run?</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {processItems.map((item) => (
                <div key={item.text} className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{item.text}</p>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide">
                <span className="gradient-text">Get in touch</span>
              </h2>
              <p className="text-base text-muted-foreground">Take the first step toward better mental health.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Group Programs" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupPrograms;
