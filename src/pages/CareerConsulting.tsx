import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Briefcase, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Compass,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  BarChart,
  FileText,
  Send
} from "lucide-react";
import careerHeader from "@/assets/career-consulting-header.jpg";

const CareerConsulting = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Младежи и студенти",
      description: "Които търсят посока за професионално развитие и избор на кариера"
    },
    {
      icon: Briefcase,
      title: "Работещи професионалисти",
      description: "Които искат да развият кариерата си или да сменят професията"
    },
    {
      icon: TrendingUp,
      title: "Мениджъри и лидери",
      description: "Които искат да подобрят лидерските си умения и ефективност"
    },
    {
      icon: Compass,
      title: "Хора в преход",
      description: "Които преминават през кариерна промяна или търсят нова посока"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Кариерно планиране",
      description: "Определяне на кариерни цели и изготвяне на план за тяхното постигане"
    },
    {
      icon: FileText,
      title: "CV и мотивационно писмо",
      description: "Професионална помощ при изготвяне на документи за кандидатстване"
    },
    {
      icon: Users,
      title: "Подготовка за интервю",
      description: "Тренинг и симулация на интервюта за работа"
    },
    {
      icon: BarChart,
      title: "Оценка на компетенции",
      description: "Идентифициране на силни страни и области за развитие"
    },
    {
      icon: Lightbulb,
      title: "Професионална ориентация",
      description: "Помощ при избор на професия и образователен път"
    },
    {
      icon: Award,
      title: "Лидерско развитие",
      description: "Коучинг за мениджъри и развитие на лидерски умения"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Първоначална консултация",
      description: "Опознаваме вашите цели, опит и очаквания"
    },
    {
      number: "02",
      title: "Оценка и анализ",
      description: "Провеждаме тестове и анализираме вашия профил"
    },
    {
      number: "03",
      title: "Изготвяне на план",
      description: "Създаваме персонализиран кариерен план"
    },
    {
      number: "04",
      title: "Изпълнение и подкрепа",
      description: "Подкрепяме ви в реализирането на плана"
    }
  ];

  const benefits = [
    "Яснота за кариерните цели и посока",
    "Повишена увереност при кандидатстване",
    "По-добро познаване на силните страни",
    "Ефективни стратегии за развитие",
    "Подобрени умения за самопрезентация",
    "Баланс между работа и личен живот"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careerHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221A42]/90 via-[#3B3A64]/80 to-[#221A42]/90" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
            Кариерно консултиране
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Професионална подкрепа за вашето кариерно развитие и успех
          </p>
          <Button 
            size="lg" 
            className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white px-8 py-6 text-lg"
          >
            Запазете час
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">
              Какво е кариерно консултиране?
            </h2>
            <p className="text-lg text-[#3B3A64] leading-relaxed">
              Кариерното консултиране е професионален процес, който помага на хората да разберат 
              своите интереси, ценности и умения, за да вземат информирани решения за кариерата си. 
              Чрез индивидуален подход и доказани методи, ние ви помагаме да откриете пътя към 
              професионалното удовлетворение и успех.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
            За кого е подходящо?
          </h2>
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
            Нашите услуги
          </h2>
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

      {/* Process */}
      <section className="py-16 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-playfair">
            Как протича процесът?
          </h2>
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
              Ползи от кариерното консултиране
            </h2>
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">
                Готови ли сте за следващата стъпка?
              </h2>
              <p className="text-lg text-[#3B3A64]">
                Свържете се с нас за безплатна първоначална консултация и заедно да планираме вашето кариерно развитие.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#221A42] font-playfair">Контакти</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Телефон</p>
                      <p className="text-[#221A42] font-medium">+359 88 888 8888</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Имейл</p>
                      <p className="text-[#221A42] font-medium">info@dar.bg</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Адрес</p>
                      <p className="text-[#221A42] font-medium">кв. Лозенец, ул. Кишинев 18, София</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.123456789!2d23.3134!3d42.6731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856b5f5f5f5f%3A0x1234567890abcdef!2z0YPQuy4g0JrQuNGI0LjQvdC10LIgMTgsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта - ул. Кишинев 18, кв. Лозенец, София"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#221A42] mb-6 font-playfair">Изпратете запитване</h3>
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас възможно най-скоро.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#221A42]">Име *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Вашето име"
          required
          className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#221A42]">Имейл *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your@email.com"
          required
          className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#221A42]">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+359 88 888 8888"
          className="border-[#8F7BBF]/30 focus:border-[#8F7BBF]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#221A42]">Съобщение *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Опишете вашето запитване..."
          rows={4}
          required
          className="border-[#8F7BBF]/30 focus:border-[#8F7BBF] resize-none"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#8F7BBF] hover:bg-[#7F96C3] text-white py-6"
      >
        {isSubmitting ? (
          "Изпращане..."
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Изпратете съобщение
          </>
        )}
      </Button>
    </form>
  );
};

export default CareerConsulting;
