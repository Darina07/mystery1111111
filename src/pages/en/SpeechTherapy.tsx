import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, BookOpen, Users, Baby, GraduationCap, Heart, Check, Mic, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import speechTherapyHeader from "@/assets/speech-therapy-header.jpg";
import speechTherapyBg from "@/assets/speech-therapy-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";

const targetAudience = [
  { name: "children with speech difficulties", icon: Baby },
  { name: "preschool and school age", icon: BookOpen },
  { name: "adolescents with communication difficulties", icon: Users },
  { name: "adults with speech disorders", icon: GraduationCap },
];

const whenUseful = [
  "the child speaks late or speech is hard to understand",
  "incorrect pronunciation of sounds",
  "stuttering or choppy speech",
  "limited vocabulary or trouble expressing ideas",
  "the child has school difficulties with reading and writing",
  "suspected specific learning difficulties",
  "communication difficulties with autism or ADHD",
  "an adult has speech disorders due to stress, trauma or illness",
];

const processSteps = [
  { icon: MessageCircle, title: "Speech assessment", description: "initial diagnostics and language evaluation" },
  { icon: Mic, title: "Articulation", description: "work on articulation and pronunciation" },
  { icon: BookOpen, title: "Language skills", description: "developing speech and language skills" },
  { icon: Brain, title: "Tempo & rhythm", description: "exercises for pace, rhythm and fluency" },
  { icon: Users, title: "Communication", description: "developing communication and social skills" },
  { icon: Heart, title: "Parent support", description: "guidance and support for parents" },
];

const benefits = [
  "clearer, more understandable speech",
  "better communication",
  "more successful learning",
  "increased confidence",
  "easier social adaptation",
];

const difficulties = [
  { name: "Childhood autism", slug: "autism" },
  { name: "ADHD", slug: "adhd" },
  { name: "Dyslexia", slug: "dyslexia" },
  { name: "Speech delay", slug: "speech-delay" },
  { name: "Speech disorders", slug: "speech-disorders" },
  { name: "Stuttering", slug: "stuttering" },
  { name: "Articulation difficulties", slug: "articulation" },
  { name: "Children with SEN", slug: "special-educational-needs" },
  { name: "Dysgraphia", slug: "dysgraphia" },
  { name: "Dyscalculia", slug: "dyscalculia" },
];

const SpeechTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Speech Therapy | Dar Center"
        description="Speech therapy for children and adults. Correction of speech disorders, stuttering, articulation problems and language development."
        url="/en/services/speech-therapy"
        keywords="speech therapist Sofia, speech therapy, stuttering, speech disorders"
      />
      <ProfessionalServiceSchema name="Speech Therapy" description="Speech therapy for children and adults." url="/en/services/speech-therapy" serviceType="Speech therapy" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Speech Therapy", url: "/en/services/speech-therapy" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-contain bg-left bg-no-repeat" style={{ backgroundImage: `url(${speechTherapyHeader})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <p className="text-primary font-medium mb-4">Speech therapy support for children, adolescents and adults</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Help with <span className="gradient-text">speech and communication difficulties</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">Overcoming speech, language and communication challenges in a calm, supportive environment</p>
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              At "Dar" we offer speech therapy for children, adolescents and adults — focused on overcoming speech, language and communication difficulties that affect learning, social interaction and confidence.
            </p>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"><span className="gradient-text">Who is speech therapy for?</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {targetAudience.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-lavender/20 bg-gradient-to-br from-primary/5 via-accent/5 to-lavender/5 p-8 text-center min-h-[180px] flex flex-col items-center justify-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"><item.icon className="h-7 w-7 text-primary" /></div>
                    <p className="text-foreground font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${speechTherapyBg})` }} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">When to seek a <span className="gradient-text">speech therapist?</span></h2>
            <p className="text-center text-muted-foreground mb-12">A consultation is recommended when:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {whenUseful.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">How does <span className="gradient-text">speech therapy work?</span></h2>
            <p className="text-center text-muted-foreground mb-12">The process is built individually and may include:</p>
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

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${speechTherapyBg})` }} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">What does <span className="gradient-text">speech therapy provide?</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"><Check className="h-4 w-4 text-primary-foreground" /></div>
                  <p className="text-foreground font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              <span className="gradient-text">Conditions</span> we work with
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {difficulties.map((d, i) => (
                <Link key={d.slug} to={`/en/conditions/${d.slug}`} className={`px-5 py-3 rounded-full text-white font-medium transition-all hover:scale-105 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>{d.name}</Link>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide"><span className="gradient-text">Take the first step</span></h2>
              <p className="text-sm text-muted-foreground">If you have concerns about speech or communication, contact us for a speech therapy consultation.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Speech Therapy" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeechTherapy;
