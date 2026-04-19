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
  Briefcase, Target, TrendingUp, Users, Award, Compass,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Lightbulb,
  BarChart, FileText, Send,
} from "lucide-react";
import careerHeader from "@/assets/career-consulting-header.jpg";

const CareerConsulting = () => {
  const targetAudience = [
    { icon: Users, title: "Youth & students", description: "Looking for direction in their career and choice of profession" },
    { icon: Briefcase, title: "Working professionals", description: "Who want to grow in their career or change profession" },
    { icon: TrendingUp, title: "Managers & leaders", description: "Who want to develop their leadership skills and effectiveness" },
    { icon: Compass, title: "People in transition", description: "Going through a career change or searching for a new direction" },
  ];

  const services = [
    { icon: Target, title: "Career planning", description: "Defining career goals and building a plan to achieve them" },
    { icon: FileText, title: "CV & cover letter", description: "Professional support in preparing application documents" },
    { icon: Users, title: "Interview preparation", description: "Training and simulated job interviews" },
    { icon: BarChart, title: "Competency assessment", description: "Identifying strengths and areas for development" },
    { icon: Lightbulb, title: "Career orientation", description: "Help with choosing a profession and educational path" },
    { icon: Award, title: "Leadership development", description: "Coaching for managers and developing leadership skills" },
  ];

  const processSteps = [
    { number: "01", title: "Initial consultation", description: "We get to know your goals, experience and expectations" },
    { number: "02", title: "Assessment & analysis", description: "We run tests and analyse your profile" },
    { number: "03", title: "Plan creation", description: "We create a personalised career plan" },
    { number: "04", title: "Execution & support", description: "We support you in implementing the plan" },
  ];

  const benefits = [
    "Clarity on career goals and direction",
    "Greater confidence when applying",
    "Better understanding of your strengths",
    "Effective development strategies",
    "Improved self-presentation skills",
    "Better work-life balance",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Career Counseling"
        description="Professional career counseling and coaching. Help with career choice, career change and professional development."
        url="/services/career-consulting"
        keywords="career counseling, coaching, career development, job change"
      />
      <ProfessionalServiceSchema
        name="Career Counseling"
        description="Professional career counseling and coaching for professional development."
        url="/services/career-consulting"
        serviceType="Career counseling"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/en" },
        { name: "Services", url: "/en/services" },
        { name: "Career Counseling", url: "/en/services/career-consulting" },
      ]} />
      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${careerHeader})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221A42]/90 via-[#3B3A64]/80 to-[#221A42]/90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Career Counseling</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">Professional support for your career growth and success</p>
          <Link to="/en/contact">
            <Button size="lg" className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white px-8 py-6 text-lg uppercase tracking-wide">Send an inquiry</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">What is career counseling?</h2>
            <p className="text-lg text-[#3B3A64] leading-relaxed">
              Career counseling is a professional process that helps people understand their interests, values and skills so they can make informed decisions about their career. Through an individual approach and proven methods, we help you discover the path to professional fulfilment and success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Who is it for?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#221A42] mb-2">{item.title}</h3>
                  <p className="text-[#3B3A64]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Our services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-[#8F7BBF]/20 hover:border-[#8F7BBF]/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#8F7BBF]/20 to-[#5E82AA]/20 rounded-xl flex items-center justify-center group-hover:from-[#8F7BBF] group-hover:to-[#5E82AA] transition-all duration-300">
                    <service.icon className="w-7 h-7 text-[#8F7BBF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#221A42] mb-2">{service.title}</h3>
                  <p className="text-[#3B3A64]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-playfair">How does the process work?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20">
                  <span className="text-5xl font-bold text-[#8F7BBF]/50 mb-4 block">{step.number}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#8F7BBF] w-6 h-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">Benefits of career counseling</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#8F7BBF] flex-shrink-0" />
                  <span className="text-[#3B3A64] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">Ready for the next step?</h2>
              <p className="text-lg text-[#3B3A64]">Get in touch for a free initial consultation and let's plan your career growth together.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#221A42] font-playfair">Contacts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div>
                    <div><p className="text-sm text-[#3B3A64]/70">Phone</p><p className="text-[#221A42] font-medium">+359 887 079 256</p></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center"><Mail className="w-6 h-6 text-white" /></div>
                    <div><p className="text-sm text-[#3B3A64]/70">Email</p><p className="text-[#221A42] font-medium">info@dar-psiholog.com</p></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "We will get back to you as soon as possible." });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#221A42]">Name *</Label>
        <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
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
        {isSubmitting ? "Sending..." : (<><Send className="w-5 h-5 mr-2" />Send message</>)}
      </Button>
    </form>
  );
};

export default CareerConsulting;
