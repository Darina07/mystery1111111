import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Users, Shield, Baby, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import childHeader from "@/assets/child-header-sticker.png";
import contactBg from "@/assets/contact-bg.jpg";
import childProcessSticker from "@/assets/child-process-sticker.png";

const workIncludes = [
  { text: "sessions with the child or adolescent", icon: Baby },
  { text: "consultation and guidance for parents", icon: Users },
  { text: "support with family and school difficulties", icon: BookOpen },
  { text: "collaboration with the school environment when appropriate", icon: GraduationCap },
];

const whenToSeek = [
  "the child shows anxiety, fears or strong emotional reactions",
  "changes in behavior, aggression or withdrawal",
  "difficulties at school or with learning",
  "trouble adapting to changes",
  "problems communicating with peers",
  "low self-esteem or social anxiety",
  "tics, stuttering or psychosomatic symptoms",
  "the child or adolescent is going through loss, separation or family change",
];

const processSteps = [
  { icon: Users, title: "Initial meeting", description: "with the parents" },
  { icon: Baby, title: "Individual sessions", description: "with the child or adolescent" },
  { icon: Heart, title: "Support & guidance", description: "for parents" },
  { icon: Shield, title: "Skill-building", description: "for emotional resilience" },
];

const conditionGroups = [
  {
    title: "Neurodevelopmental",
    items: [
      { name: "Autism spectrum", slug: "autism" },
      { name: "ADHD", slug: "adhd" },
      { name: "Asperger syndrome", slug: "asperger" },
      { name: "Down syndrome", slug: "down-syndrome" },
      { name: "Intellectual disability", slug: "intellectual-disability" },
      { name: "Rett syndrome", slug: "rett-syndrome" },
    ],
  },
  {
    title: "Learning difficulties",
    items: [
      { name: "Dyslexia", slug: "dyslexia" },
      { name: "Dysgraphia", slug: "dysgraphia" },
      { name: "Dyscalculia", slug: "dyscalculia" },
      { name: "Dyspraxia", slug: "dyspraxia" },
      { name: "Memory & concentration issues", slug: "memory-concentration" },
    ],
  },
  {
    title: "Speech",
    items: [
      { name: "Stuttering", slug: "stuttering" },
      { name: "Selective mutism", slug: "selective-mutism" },
      { name: "Speech disorders", slug: "speech-disorders" },
    ],
  },
  {
    title: "Emotional & behavioral",
    items: [
      { name: "Childhood PTSD", slug: "child-ptsd" },
      { name: "Tics & Tourette syndrome", slug: "tics-tourette" },
      { name: "Aggression and self-harm", slug: "aggression-self-harm" },
      { name: "Fears and phobias", slug: "child-fears" },
      { name: "Sleep problems", slug: "child-sleep-problems" },
      { name: "Psychosomatic conditions", slug: "child-psychosomatic" },
    ],
  },
  {
    title: "Social & adaptation",
    items: [
      { name: "Adaptation difficulties", slug: "adaptation-difficulties" },
      { name: "Peer communication problems", slug: "peer-communication" },
      { name: "Low self-esteem", slug: "low-self-esteem" },
      { name: "Conflict relationships", slug: "conflict-relationships" },
      { name: "Running away from home/school", slug: "running-away" },
      { name: "Lying, stealing & risky behavior", slug: "risky-behavior" },
    ],
  },
  {
    title: "Life events",
    items: [
      { name: "Loss of a loved one", slug: "child-grief" },
      { name: "Parents' divorce", slug: "parents-divorce" },
      { name: "New family member", slug: "new-family-member" },
      { name: "Relocation or new school", slug: "relocation" },
      { name: "Coping with stress", slug: "child-stress" },
    ],
  },
];

const ChildCounseling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Child & Adolescent Counseling | Dar Center"
        description="Professional psychological help for children and adolescents. Work with behavioral problems, anxiety, school difficulties and emotional development."
        url="/en/services/child-counseling"
        keywords="child psychologist Sofia, adolescent counseling, child psychology, behavior issues"
      />
      <ProfessionalServiceSchema name="Child & Adolescent Counseling" description="Professional psychological help for children and adolescents." url="/en/services/child-counseling" serviceType="Child psychology" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Child Counseling", url: "/en/services/child-counseling" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-contain bg-left bg-no-repeat" style={{ backgroundImage: `url(${childHeader})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Support from a child psychologist</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Child & adolescent <span className="gradient-text">counseling</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">Professional psychological support for children, teenagers and parents</p>
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
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Child and adolescent counseling is professional psychological support for children and youth, provided by a child psychologist, addressing emotional, behavioral and social difficulties. At "Dar" Center we create a calm, safe environment in which children and teenagers can express their experiences in age-appropriate ways.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">What does <span className="gradient-text">counseling include?</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {workIncludes.map((item) => (
                <div key={item.text} className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center"><item.icon className="h-6 w-6 text-primary" /></div>
                  <p className="text-foreground text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">When to seek a <span className="gradient-text">child psychologist?</span></h2>
            <p className="text-center text-muted-foreground mb-12">A consultation can be helpful when:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {whenToSeek.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-xl p-4 border border-lavender/20">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <p className="text-foreground font-medium">👉 Early consultation often supports easier, healthier development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src={childProcessSticker} alt="Child counseling process" className="w-full max-w-md mx-auto" />
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How does <span className="gradient-text">work unfold?</span></h2>
                <p className="text-muted-foreground mb-8">The process is flexible and tailored to the child's age, needs and pace.</p>
                <div className="grid grid-cols-2 gap-3">
                  {processSteps.map((step, i) => (
                    <div key={i} className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center gap-4">
                      <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center"><step.icon className="h-5 w-5 text-primary" /></div>
                      <div>
                        <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              <span className="gradient-text">Conditions</span> we work with
            </h2>
            <div className="space-y-10">
              {conditionGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((c, i) => (
                      <Link key={c.slug} to={`/en/conditions/${c.slug}`} className={`px-4 py-2 rounded-full text-white font-medium transition-all hover:scale-105 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>{c.name}</Link>
                    ))}
                  </div>
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
              <p className="text-base text-muted-foreground">Take the first step toward supporting your child.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Child Counseling" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChildCounseling;
