import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated 404 Number */}
            <div className="relative mb-8">
              <h1 className="text-[180px] md:text-[240px] font-heading font-bold leading-none select-none">
                <span className="gradient-text animate-fade-in">4</span>
                <span className="relative inline-block">
                  <span className="text-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>0</span>
                  {/* Decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-primary/20 animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>
                </span>
                <span className="gradient-text animate-fade-in" style={{ animationDelay: "0.2s" }}>4</span>
              </h1>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            </div>

            {/* Message */}
            <div className="space-y-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                Страницата не е намерена
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Съжаляваме, но страницата, която търсите, не съществува или е била преместена.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" variant="cta" className="gap-2">
                <Link to="/">
                  <Home className="h-5 w-5" />
                  Към началната страница
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="javascript:history.back()">
                  <ArrowLeft className="h-5 w-5" />
                  Назад
                </a>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground mb-4">Може би търсите:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  to="/services" 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Услуги
                </Link>
                <Link 
                  to="/prices" 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Цени
                </Link>
                <Link 
                  to="/about" 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  За нас
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Контакти
                </Link>
                <Link 
                  to="/blog" 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Блог
                </Link>
              </div>
            </div>

            {/* Contact Help */}
            <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="text-muted-foreground mb-4">Нужна ви е помощ?</p>
              <Button asChild variant="ghost" className="gap-2">
                <a href="tel:+359887079256">
                  <Phone className="h-4 w-4" />
                  +359 887 079 256
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
