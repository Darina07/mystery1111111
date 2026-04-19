import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Target, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import counselingHeaderBg from "@/assets/counseling-header-bg.jpg";
import counselingTherapyImage from "@/assets/counseling-therapy-image.jpg";
import psiSupportImage from "@/assets/psi-support.jpg";
import conditionsSticker from "@/assets/conditions-sticker.png";
import addictionsSticker from "@/assets/addictions-sticker.png";
import lgbtSticker1 from "@/assets/lgbt-sticker-1.png";
import contactBg from "@/assets/contact-bg.jpg";

const conditions = [
  { name: "Depression", slug: "depression" },
  { name: "Anxiety", slug: "anxiety" },
  { name: "Panic attacks", slug: "panic-attacks" },
  { name: "Phobias", slug: "phobias" },
  { name: "Hypochondria", slug: "hypochondria" },
  { name: "OCD", slug: "ocd" },
  { name: "Bipolar disorder", slug: "bipolar" },
  { name: "Anger & self-aggression", slug: "anger" },
  { name: "Stress", slug: "stress" },
  { name: "PTSD", slug: "ptsd" },
  { name: "Burnout", slug: "burnout" },
  { name: "Emotional exhaustion", slug: "emotional-exhaustion" },
  { name: "Insomnia", slug: "insomnia" },
  { name: "Psychosomatic symptoms", slug: "psychosomatic" },
  { name: "Fatigue", slug: "fatigue" },
  { name: "Insecurity", slug: "insecurity" },
  { name: "Perfectionism", slug: "perfectionism" },
  { name: "Personal boundaries", slug: "boundaries" },
  { name: "Loneliness", slug: "loneliness" },
  { name: "Communication difficulties", slug: "communication-difficulties" },
  { name: "Life crises", slug: "life-crisis" },
  { name: "Loss & grief", slug: "loss" },
  { name: "Separation", slug: "separation" },
  { name: "Adapting to change", slug: "adaptation" },
];

const addictions = [
  { name: "Alcohol addiction", slug: "alcohol-addiction" },
  { name: "Drug addiction", slug: "drug-addiction" },
  { name: "Gambling addiction", slug: "gambling-addiction" },
  { name: "Medication addiction", slug: "medication-addiction" },
  { name: "Internet & digital addiction", slug: "internet-addiction" },
  { name: "Social media addiction", slug: "social-media-addiction" },
  { name: "Workaholism", slug: "workaholism" },
  { name: "Love addiction", slug: "love-addiction" },
];

const lgbtSupport = [
  { name: "Psychological support for LGBT+ people", slug: "lgbt-support" },
  { name: "Identity & self-acceptance", slug: "identity-self-acceptance" },
  { name: "Coming out", slug: "coming-out" },
  { name: "Stress from social rejection", slug: "social-rejection-stress" },
  { name: "LGBT+ relationships", slug: "lgbt-relationships" },
];

const steps = [
  { number: "1", title: "Initial meeting", description: "We get to know your situation and what you'd like to change. We clarify what brings you here and what you expect.", icon: MessageCircle },
  { number: "2", title: "Direction & goals", description: "We define focus — what to work on and how to measure progress (in your way, without pressure).", icon: Target },
  { number: "3", title: "The work process", description: "Sessions are regular and unfold in a calm environment. We work in depth or more practically — depending on your needs.", icon: Users },
  { number: "4", title: "Sustainability & balance", description: "The goal is to build skills that last — better coping, clearer boundaries, more stable self-esteem and a calmer everyday life.", icon: Shield },
];

const PsychologicalCounseling = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Psychological Counseling & Psychotherapy | Dar Center"
        description="Professional psychological help for depression, anxiety, stress, burnout and other emotional difficulties. Individual sessions in Sofia."
        url="/en/services/psychological-counseling"
        keywords="psychologist Sofia, psychotherapy, counseling, depression, anxiety, stress"
      />
      <ProfessionalServiceSchema name="Psychological Counseling & Psychotherapy" description="Professional psychological help for emotional difficulties." url="/en/services/psychological-counseling" serviceType="Psychological counseling" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Psychological Counseling", url: "/en/services/psychological-counseling" }
      ]} />
      <Header />

      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${counselingHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[60vh] flex items-center justify-end">
          <div className="max-w-xl text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Psychological counseling & <span className="gradient-text">psychotherapy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">Professional support for emotional and life difficulties</p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="hero" size="lg" className="gap-2" asChild><Link to="/en/contact">CONTACT US</Link></Button>
              <a href="tel:+359887079256" aria-label="Call us"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Psychological counseling and psychotherapy help with anxiety, depression, stress, panic attacks and other difficult experiences. At "Dar" Center we offer a calm, supportive environment where conversation leads to clarity, understanding and lasting change — without judgment and at your own pace.
              </p>
              <img src={counselingTherapyImage} alt="Psychological counseling and therapy" className="w-full h-auto object-cover" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-lavender/5 rounded-2xl p-6 border border-lavender/10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3"><span className="gradient-text">Psychological counseling</span></h3>
                <p className="text-muted-foreground text-base">Suited for specific difficulties and times of change, when you need to organize your thoughts and find direction.</p>
              </div>
              <div className="bg-soft-blue/5 rounded-2xl p-6 border border-soft-blue/10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3"><span className="gradient-text">Psychotherapy</span></h3>
                <p className="text-muted-foreground text-base">A deeper process focused on recurring patterns, inner conflicts and lasting personal change.</p>
              </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-lavender/10 to-soft-blue/10 rounded-2xl p-8 border border-lavender/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={psiSupportImage} alt="Psychological support" className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
                <div className="flex-1 flex items-start gap-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1 hidden md:block" />
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3">When can <span className="gradient-text">psychological support</span> help?</h3>
                    <p className="text-muted-foreground text-base mb-4">If you feel anxious or exhausted, experience sadness, fear, sleep problems, a life crisis or a sense that "something is off."</p>
                    <p className="text-foreground font-medium italic">You don't need the right words — willingness to talk is enough.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">How does <span className="gradient-text">the work unfold?</span></h2>
            <p className="text-center text-muted-foreground mb-12">Structured and clear, yet flexible and individual</p>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><step.icon className="h-6 w-6 text-primary" /></div>
                    <div>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Step {step.number}</span>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            <span className="gradient-text">Conditions</span> we can help with
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="flex items-center justify-center"><img src={conditionsSticker} alt="Psychological support" className="w-full max-w-md" /></div>
            <div className="flex flex-wrap gap-3">
              {conditions.map((c, i) => (
                <Link key={c.slug} to={`/en/conditions/${c.slug}`} className={`px-4 py-2 rounded-full text-white font-medium transition-all hover:scale-105 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>{c.name}</Link>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Addictions</h3>
              <div className="flex flex-wrap gap-3">
                {addictions.map((a, i) => (
                  <Link key={a.slug} to={`/en/conditions/${a.slug}`} className={`px-4 py-2 rounded-full text-white font-medium transition-all hover:scale-105 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>{a.name}</Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center"><img src={addictionsSticker} alt="Addictions" className="w-full max-w-md" /></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex items-center justify-center"><img src={lgbtSticker1} alt="LGBT+ support" className="w-full max-w-md" /></div>
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">LGBT+ Support</h3>
              <div className="flex flex-wrap gap-3">
                {lgbtSupport.map((l, i) => (
                  <Link key={l.slug} to={`/en/conditions/${l.slug}`} className={`px-4 py-2 rounded-full text-white font-medium transition-all hover:scale-105 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>{l.name}</Link>
                ))}
              </div>
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
              <p className="text-base text-muted-foreground">Take the first step toward better mental health.</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10">
              <ContactForm serviceName="Psychological Counseling" buttonVariant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychologicalCounseling;
