import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, FAQSchema, BreadcrumbSchema, ContactPageSchema } from "@/components/SEO";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube, Linkedin, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contactHeaderBg from "@/assets/contact-header-new.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


const contactInfo = [
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
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/darpsiholog", color: "hover:bg-blue-600" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/darpsiholog7", color: "hover:bg-pink-600" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/darpsiholog", color: "hover:bg-blue-700" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@darpsiholog", color: "hover:bg-red-600" },
];

const faqItems = [
  {
    question: "How do I book a consultation?",
    answer: "You can book by calling +359 887 079 256, messaging us on WhatsApp, or by filling out the contact form on this page. We will get back to you within 24 hours."
  },
  {
    question: "How long does it take to receive a response?",
    answer: "We aim to respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer full online consultations via Viber, WhatsApp, Skype or Google Meet. Online sessions are equally effective and suitable for clients outside Sofia."
  },
  {
    question: "Is there parking nearby?",
    answer: "Yes, the area has several parking options — both paid parking and street parking on nearby streets. The center is also easily accessible by public transport."
  },
  {
    question: "What are your service prices?",
    answer: "Prices vary depending on the type of service. You can see the full price list on the Pricing page or contact us for specific information."
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqsForSchema = faqItems.map(item => ({ question: item.question, answer: item.answer }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", { body: formData });

      if (error) throw error;

      toast({
        title: "Successfully sent!",
        description: "Your inquiry has been sent successfully!",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact"
        description="Contact Dar Center in Sofia. Phone: +359 887 079 256. Address: 18 Kishinev St., Lozenets. Book a consultation online or in person."
        url="/en/contact"
        keywords="contact psychologist Sofia, book appointment psychologist, Dar Center contact, psychological consultation Sofia"
      />
      <FAQSchema faqs={faqsForSchema} />
      <ContactPageSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Contact", url: "/en/contact" }
      ]} />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 min-h-[500px] overflow-hidden">
        <img
          src={contactHeaderBg}
          alt=""
          width={1920}
          height={800}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-deep-navy/60" />

        <div className="container relative z-10 h-full flex items-center justify-end min-h-[400px]">
          <div className="text-right space-y-6 max-w-2xl">
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
              Contact
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-balance">
              Get in{" "}
              <span className="text-primary">touch</span>
            </h1>
            <p className="text-white/90 text-xl">
              We're here to help. Reach out in whatever way is most convenient for you.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
                  How to{" "}
                  <span className="gradient-text">reach us</span>
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl">
                  Choose the most convenient way to contact us. We will respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-base text-muted-foreground">{item.label}</p>
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

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="uppercase" asChild>
                  <a href="tel:+359887079256">
                    <Phone className="mr-2 h-5 w-5" />
                    Call us
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="uppercase" asChild>
                  <a href="https://wa.me/359887079256" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="pt-6">
                <p className="font-heading text-lg font-semibold mb-4 uppercase">
                  Follow us
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white text-primary"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 shadow-card" style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(270 30% 98%) 50%, hsl(150 20% 97%) 100%)"
            }}>
              <h2 className="font-heading text-2xl font-semibold mb-6 uppercase">
                Send an inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Your name" required disabled={isSubmitting} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="email@example.com" required disabled={isSubmitting} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="+359 888 123 456" disabled={isSubmitting} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service of interest</label>
                  <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" disabled={isSubmitting}>
                    <option value="">Select a service</option>
                    <option value="Individual consultation">Individual consultation</option>
                    <option value="Family counseling">Family counseling</option>
                    <option value="Child & adolescent counseling">Child & adolescent counseling</option>
                    <option value="Group programs">Group programs</option>
                    <option value="Speech therapy">Speech therapy</option>
                    <option value="Psychodiagnostics">Psychodiagnostics</option>
                    <option value="Career counseling">Career counseling</option>
                    <option value="Corporate services">Corporate services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="How can we help you?" required disabled={isSubmitting} />
                </div>

                <Button type="submit" variant="cta" className="w-full uppercase" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "SEND"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Location
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Where to{" "}
              <span className="gradient-text">find us</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Our center is located in the Lozenets neighborhood of Sofia — easily accessible by public transport with parking nearby.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[450px] bg-muted shadow-card">
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
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-lavender" />
            </div>
            <div className="bg-deep-navy rounded-full px-10 py-6">
              <p className="text-center text-white font-medium uppercase tracking-wide text-lg">
                Open every day from <span className="text-accent">08:00</span> to <span className="text-accent">22:00</span>
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-lavender" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              FAQ
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about getting in touch with us.
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
                  <AccordionTrigger className="text-left font-heading text-lg font-medium py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
