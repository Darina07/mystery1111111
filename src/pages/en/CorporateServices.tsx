import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO, ProfessionalServiceSchema, BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2, Users, Briefcase, Brain, MessageSquare, Scale, Rocket, UserCog,
  GraduationCap, TrendingUp, Target, Handshake, CheckCircle, Phone, Mail,
  MapPin, Send, Sparkles, Award,
} from "lucide-react";
import corporateHeader from "@/assets/corporate-services-header.jpg";

const CorporateServices = () => {
  const mainServices = [
    { icon: GraduationCap, title: "Custom training programs", description: "Tailored learning programs designed for the needs of your organization. Includes sales, leadership and soft-skills training and more." },
    { icon: Users, title: "Team-building", description: "Innovative team-building programs to strengthen team spirit, improve communication and boost motivation." },
    { icon: Briefcase, title: "Business consulting", description: "Strategic consulting for optimizing business processes, organizational development and change management." },
    { icon: Brain, title: "Psychological consultations", description: "Individual and group psychological consultations for employees, stress-management programs and burnout prevention." },
    { icon: MessageSquare, title: "NLP consultations", description: "Neuro-linguistic programming for better communication, achieving goals and developing personal potential." },
    { icon: Scale, title: "Mediation", description: "Out-of-court dispute resolution through professional mediation. Fast, effective and confidential conflict resolution." },
  ];

  const additionalServices = [
    { icon: Rocket, title: "Building Agile Teams", description: "Transform your teams with Agile methodologies for faster results and adaptability" },
    { icon: UserCog, title: "HR services", description: "Recruitment, competency assessment, talent development" },
    { icon: TrendingUp, title: "Sales training", description: "Boost the effectiveness of sales teams with proven techniques" },
    { icon: Award, title: "Leadership programs", description: "Leadership skills development for managers at all levels" },
    { icon: Sparkles, title: "Soft skills", description: "Communication, presentation skills, emotional intelligence" },
    { icon: Handshake, title: "Negotiation & influence", description: "Sharpen your negotiation and persuasion skills" },
  ];

  const benefits = [
    "Higher team productivity and effectiveness",
    "Better communication and collaboration",
    "Reduced stress and a healthier work environment",
    "Retention of key employees",
    "Leadership potential development",
    "Faster conflict resolution",
    "Adaptability to change",
    "Competitive advantage on the market",
  ];

  const whyUs = [
    { icon: Target, title: "Personalized approach", description: "Every program is adapted to the specific needs of your organization" },
    { icon: Award, title: "Proven experience", description: "Years of experience working with leading companies across industries" },
    { icon: Users, title: "Expert team", description: "Certified trainers, psychologists and business consultants" },
    { icon: TrendingUp, title: "Measurable results", description: "Clear success metrics and progress tracking" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Corporate Services"
        description="Corporate services for business. Training, team-building, business consulting and employee mental-health programs."
        url="/services/corporate-services"
        keywords="corporate services, business consulting, team-building, employee training"
      />
      <ProfessionalServiceSchema
        name="Corporate Services"
        description="Corporate services for business — training, team-building and mental-health programs."
        url="/services/corporate-services"
        serviceType="Corporate services"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Corporate Services", url: "/en/services/corporate-services" },
      ]} />
      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${corporateHeader})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221A42]/90 via-[#3B3A64]/80 to-[#221A42]/90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Corporate Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">End-to-end solutions for the growth of your business and teams</p>
          <Link to="/en/contact">
            <Button size="lg" className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white px-8 py-6 text-lg uppercase tracking-wide">Send an inquiry</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">A partner for your success</h2>
            <p className="text-lg text-[#3B3A64] leading-relaxed">
              We offer a wide range of corporate services that help organizations unlock their potential. From training and team-building to business consulting and mediation — we are your reliable partner in achieving your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Core services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 border-[#8F7BBF]/20 hover:border-[#8F7BBF]/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#8F7BBF]/20 to-[#5E82AA]/20 rounded-xl flex items-center justify-center group-hover:from-[#8F7BBF] group-hover:to-[#5E82AA] transition-all duration-300">
                    <service.icon className="w-7 h-7 text-[#8F7BBF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#221A42] mb-3">{service.title}</h3>
                  <p className="text-[#3B3A64]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-playfair">Additional services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 mb-4 bg-[#8F7BBF]/30 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Why choose us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#221A42] mb-2">{item.title}</h3>
                  <p className="text-[#3B3A64] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Benefits for your organization</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-[#8F7BBF] flex-shrink-0" />
                  <span className="text-[#3B3A64] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">Get in touch</h2>
              <p className="text-lg text-[#3B3A64]">We're ready to discuss how we can help your organization achieve its goals.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#221A42] font-playfair">Contacts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div>
                    <div><p className="text-sm text-[#3B3A64]/70">Phone</p><p className="text-[#221A42] font-medium">+359 887 079 256</p></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center"><Mail className="w-6 h-6 text-white" /></div>
                    <div><p className="text-sm text-[#3B3A64]/70">Email</p><p className="text-[#221A42] font-medium">info@dar-psiholog.com</p></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center"><MapPin className="w-6 h-6 text-white" /></div>
                    <div><p className="text-sm text-[#3B3A64]/70">Address</p><p className="text-[#221A42] font-medium">Bulgaria, Sofia, Lozenets, 18 Kishinev Str.</p></div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3176!3d42.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859f0c0c0c0f%3A0x0!2sKishinev%2018%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1704200000000"
                    width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Map - 18 Kishinev Str., Lozenets, Sofia"
                  />
                </div>
              </div>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#221A42] mb-6 font-playfair">Send an inquiry</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Inquiry sent!", description: "We will get back to you as soon as possible." });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#221A42]">Name *</Label>
        <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-[#221A42]">Company</Label>
        <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#221A42]">Email *</Label>
        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#221A42]">Phone</Label>
        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+359 887 079 256" className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#221A42]">Message *</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe your inquiry..." rows={4} required className="border-[#8F7BBF]/30 focus:border-[#8F7BBF] resize-none" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#8F7BBF] hover:bg-[#7F96C3] text-white py-6">
        {isSubmitting ? "Sending..." : (<><Send className="w-5 h-5 mr-2" />Send inquiry</>)}
      </Button>
    </form>
  );
};

export default CorporateServices;
