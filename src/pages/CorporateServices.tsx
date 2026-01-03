import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

import { 
  Building2, 
  Users, 
  Briefcase, 
  Brain,
  MessageSquare,
  Scale,
  Rocket,
  UserCog,
  GraduationCap,
  TrendingUp,
  Target,
  Handshake,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Award
} from "lucide-react";
import corporateHeader from "@/assets/corporate-services-header.jpg";

const CorporateServices = () => {
  const mainServices = [
    {
      icon: GraduationCap,
      title: "Авторски обучения и тренинги",
      description: "Персонализирани обучителни програми, разработени специално за нуждите на вашата организация. Включват тренинги за продажби, лидерство, меки умения и още."
    },
    {
      icon: Users,
      title: "Тиймбилдинги",
      description: "Иновативни тиймбилдинг програми за укрепване на екипния дух, подобряване на комуникацията и повишаване на мотивацията."
    },
    {
      icon: Briefcase,
      title: "Бизнес консултации",
      description: "Стратегически консултации за оптимизиране на бизнес процеси, организационно развитие и управление на промяната."
    },
    {
      icon: Brain,
      title: "Психологични консултации",
      description: "Индивидуални и групови психологични консултации за служители, програми за управление на стреса и превенция на бърнаут."
    },
    {
      icon: MessageSquare,
      title: "НЛП консултации",
      description: "Невро-лингвистично програмиране за подобряване на комуникацията, постигане на цели и развитие на личностен потенциал."
    },
    {
      icon: Scale,
      title: "Медиация",
      description: "Извънсъдебно разрешаване на спорове чрез професионална медиация. Бързо, ефективно и конфиденциално решаване на конфликти."
    }
  ];

  const additionalServices = [
    {
      icon: Rocket,
      title: "Building Agile Teams",
      description: "Трансформирайте екипите си с Agile методологии за по-бързи резултати и адаптивност"
    },
    {
      icon: UserCog,
      title: "HR услуги",
      description: "Подбор на персонал, оценка на компетенции, развитие на таланти"
    },
    {
      icon: TrendingUp,
      title: "Тренинги за продажби",
      description: "Повишете ефективността на търговските екипи с доказани техники"
    },
    {
      icon: Award,
      title: "Лидерски програми",
      description: "Развитие на лидерски умения за мениджъри на всички нива"
    },
    {
      icon: Sparkles,
      title: "Меки умения",
      description: "Комуникация, презентационни умения, емоционална интелигентност"
    },
    {
      icon: Handshake,
      title: "Преговори и влияние",
      description: "Усъвършенствайте уменията за водене на преговори и убеждаване"
    }
  ];

  const benefits = [
    "Повишена продуктивност и ефективност на екипите",
    "Подобрена комуникация и сътрудничество",
    "Намален стрес и по-добра работна среда",
    "Задържане на ключови служители",
    "Развитие на лидерски потенциал",
    "Бързо разрешаване на конфликти",
    "Адаптивност към промени",
    "Конкурентно предимство на пазара"
  ];

  const whyUs = [
    {
      icon: Target,
      title: "Персонализиран подход",
      description: "Всяка програма е адаптирана към специфичните нужди на вашата организация"
    },
    {
      icon: Award,
      title: "Доказан опит",
      description: "Години опит в работата с водещи компании от различни индустрии"
    },
    {
      icon: Users,
      title: "Експертен екип",
      description: "Сертифицирани обучители, психолози и бизнес консултанти"
    },
    {
      icon: TrendingUp,
      title: "Измерими резултати",
      description: "Ясни показатели за успех и проследяване на напредъка"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corporateHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221A42]/90 via-[#3B3A64]/80 to-[#221A42]/90" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
            Корпоративни услуги
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Цялостни решения за развитие на вашия бизнес и екипи
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white px-8 py-6 text-lg uppercase tracking-wide"
            >
              Изпратете запитване
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">
              Партньор за вашия успех
            </h2>
            <p className="text-lg text-[#3B3A64] leading-relaxed">
              Предлагаме широк спектър от корпоративни услуги, които помагат на организациите 
              да развият своя потенциал. От обучения и тиймбилдинги до бизнес консултации и 
              медиация – ние сме вашият надежден партньор в постигането на бизнес целите.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
            Основни услуги
          </h2>
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

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-playfair">
            Допълнителни услуги
          </h2>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
            Защо да изберете нас?
          </h2>
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

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221A42] mb-12 font-playfair">
              Ползи за вашата организация
            </h2>
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

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#221A42] mb-6 font-playfair">
                Свържете се с нас
              </h2>
              <p className="text-lg text-[#3B3A64]">
                Готови сме да обсъдим как можем да помогнем на вашата организация да постигне целите си.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#221A42] font-playfair">Контакти</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Телефон</p>
                      <p className="text-[#221A42] font-medium">+359 887 079 256</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Имейл</p>
                      <p className="text-[#221A42] font-medium">info@dar-psiholog.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8F7BBF]/10 to-transparent rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F7BBF] to-[#5E82AA] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#3B3A64]/70">Адрес</p>
                      <p className="text-[#221A42] font-medium">България, София, ж.к. Лозенец, ул. Кишинев 18</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3176!3d42.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859f0c0c0c0f%3A0x0!2sKishinev%2018%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1704200000000"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта - ул. Кишинев 18, ж.к. Лозенец, София"
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
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Запитването е изпратено!",
      description: "Ще се свържем с вас възможно най-скоро.",
    });

    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
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
        <Label htmlFor="company" className="text-[#221A42]">Компания</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Име на компанията"
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
          placeholder="+359 887 079 256"
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
            Изпратете запитване
          </>
        )}
      </Button>
    </form>
  );
};

export default CorporateServices;