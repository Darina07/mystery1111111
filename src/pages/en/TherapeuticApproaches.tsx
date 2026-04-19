import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Sparkles, Hand, Palette, Zap, TreePine, Phone } from "lucide-react";
import therapeuticApproachesHeader from "@/assets/therapeutic-approaches-header.jpg";

const approachCategories = [
  {
    title: "Classical psychotherapeutic approaches",
    icon: Brain,
    color: "from-indigo to-indigo-light",
    approaches: [
      { name: "Psychoanalysis", description: "Explores deep, often unconscious processes that influence thoughts, emotions and behavior. Helps with deeper understanding of inner conflicts, early experiences and recurring life patterns.", href: "/en/therapeutic-approaches/psychoanalysis" },
      { name: "Psychodynamic therapy", description: "Focuses on the connection between past experiences and current difficulties. Through exploring emotions, relationships and inner conflicts, it builds self-awareness and change.", href: "/en/therapeutic-approaches/psychodynamic-therapy" },
    ],
  },
  {
    title: "Cognitive and behavioral approaches",
    icon: Zap,
    color: "from-primary to-accent",
    approaches: [
      { name: "Cognitive-Behavioral Therapy (CBT)", description: "A structured, practical approach focused on the link between thoughts, emotions and behavior. Builds adaptive thinking and coping with anxiety, depression, stress and more.", href: "/en/therapeutic-approaches/cbt" },
      { name: "Schema therapy", description: "Works with deeply rooted emotional patterns formed in childhood. Suitable for recurring life and relational difficulties, low self-esteem and emotional blocks.", href: "/en/therapeutic-approaches/schema-therapy" },
    ],
  },
  {
    title: "Humanistic and existential approaches",
    icon: Heart,
    color: "from-lavender to-lavender-light",
    approaches: [
      { name: "Gestalt therapy", description: "Emphasizes awareness here and now, personal responsibility and authentic contact with self and others.", href: "/en/therapeutic-approaches/gestalt-therapy" },
      { name: "Existential psychotherapy", description: "Explores meaning, choice, freedom, responsibility and identity. Suitable for life crises and finding direction.", href: "/en/therapeutic-approaches/existential-therapy" },
      { name: "Positive psychotherapy (Peseschkian)", description: "Focuses on resources, strengths and personal potential, supporting balance across life domains.", href: "/en/therapeutic-approaches/positive-therapy" },
    ],
  },
  {
    title: "Systemic and family approaches",
    icon: Users,
    color: "from-soft-blue to-muted-teal",
    approaches: [
      { name: "Family therapy", description: "Works with family relationships as a system, supporting communication and conflict resolution.", href: "/en/therapeutic-approaches/family-therapy" },
      { name: "Transgenerational therapy", description: "Explores the influence of family history and patterns passed across generations.", href: "/en/therapeutic-approaches/transgenerational-therapy" },
      { name: "Couples therapy", description: "Focused on partnership, communication and rebuilding closeness and trust.", href: "/en/therapeutic-approaches/couples-therapy" },
    ],
  },
  {
    title: "Trauma-focused approaches",
    icon: Sparkles,
    color: "from-deep-navy to-indigo",
    approaches: [
      { name: "EMDR (Eye Movement Desensitization and Reprocessing)", description: "An evidence-based method for psychological trauma and PTSD.", href: "/en/therapeutic-approaches/emdr" },
      { name: "Somatic Experiencing", description: "Works with the body-mind connection to release accumulated tension and traumatic stress.", href: "/en/therapeutic-approaches/somatic-experiencing" },
    ],
  },
  {
    title: "Body-oriented approaches",
    icon: Hand,
    color: "from-accent to-soft-blue",
    approaches: [
      { name: "Bioenergetic therapy", description: "Connects emotional experiences with bodily reactions and supports release of tension.", href: "/en/therapeutic-approaches/bioenergetic-therapy" },
      { name: "Body psychotherapy", description: "Works with bodily sensations as a key part of emotional awareness.", href: "/en/therapeutic-approaches/body-psychotherapy" },
      { name: "Dance/movement therapy", description: "Uses movement as a means of expression, awareness and personal growth.", href: "/en/therapeutic-approaches/dance-movement-therapy" },
    ],
  },
  {
    title: "Creative and expressive approaches",
    icon: Palette,
    color: "from-lavender-dark to-primary",
    approaches: [
      { name: "Art therapy", description: "Allows expression of inner experiences through creativity.", href: "/en/therapeutic-approaches/art-therapy" },
      { name: "Music therapy", description: "Uses music as a means for emotional regulation and support.", href: "/en/therapeutic-approaches/music-therapy" },
      { name: "Play therapy", description: "Suitable for children, using play as a natural way of expression and therapeutic work.", href: "/en/therapeutic-approaches/play-therapy" },
    ],
  },
];

const TherapeuticApproaches = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Therapeutic Approaches | Dar Psychology Center"
        description="Psychotherapeutic approaches at Dar Center: CBT, psychoanalysis, Gestalt therapy, EMDR, family therapy, art therapy and more. Individual approach for every client."
        url="/en/therapeutic-approaches"
        keywords="therapeutic approaches, psychotherapy methods, CBT, EMDR, Gestalt therapy, family therapy, art therapy"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Therapeutic Approaches", url: "/en/therapeutic-approaches" }
      ]} />
      <Header />

      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${therapeuticApproachesHeader})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container relative z-10 pt-32 pb-20 min-h-[50vh] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Therapeutic <span className="gradient-text">approaches</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              We choose the approach individually — based on your needs, goals and situation
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/en/contact"><Button variant="hero" size="lg">CONTACT US</Button></Link>
              <a href="tel:+359887079256" aria-label="Call us"><Button variant="hero-outline" size="lg"><Phone className="h-5 w-5" /></Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-lavender/10 to-lavender/5 rounded-2xl p-6 border border-lavender/20">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Heart className="h-6 w-6 text-primary" /></div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Individual approach</h3>
                <p className="text-muted-foreground text-base">Every client comes with their own story, experiences and pace of change.</p>
              </div>
              <div className="bg-gradient-to-br from-soft-blue/10 to-soft-blue/5 rounded-2xl p-6 border border-soft-blue/20">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4"><Users className="h-6 w-6 text-accent" /></div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Team of specialists</h3>
                <p className="text-muted-foreground text-base">We refer you to the best-suited specialist for your difficulties and goals.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo/10 to-indigo/5 rounded-2xl p-6 border border-indigo/20">
                <div className="w-12 h-12 bg-indigo/10 rounded-xl flex items-center justify-center mb-4"><TreePine className="h-6 w-6 text-indigo" /></div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Integrative approach</h3>
                <p className="text-muted-foreground text-base">Work may integrate several approaches when helpful.</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground leading-relaxed">
              In our practice we believe there is no universal approach for every person. That is why we work with various psychotherapeutic approaches tailored to each client's specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Psychotherapeutic approaches in which <span className="gradient-text">our specialists are trained</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approachCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-lavender/5 via-card to-soft-blue/5 rounded-2xl p-8 shadow-md border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold gradient-text">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.approaches.map((approach) => (
                    <Link key={approach.name} to={approach.href} className="block hover:bg-primary/5 rounded-lg p-2 -m-2 transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`} />
                        <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">{approach.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed pl-5">{approach.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-lavender/10 via-background to-soft-blue/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center"><Heart className="h-7 w-7 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Individual, team-based, integrative</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              We work with you to find the approach — or combination of approaches — that best supports your goals and pace of change.
            </p>
            <Link to="/en/contact"><Button variant="hero" size="lg">CONTACT US</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapeuticApproaches;
