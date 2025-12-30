import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import illustrationSupport from "@/assets/illustration-support.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.3)), url(${illustrationSupport})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2 animate-fade-up">
              <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
                Психологичен и консултативен център
              </p>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance animate-fade-up delay-100">
              Подкрепа,{" "}
              <span className="gradient-text">която работи</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
              Предлагаме професионално психологично консултиране и психотерапия
              за деца, възрастни и семейства. Работим за вашето емоционално
              благополучие в безопасна, спокойна и подкрепяща среда.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl">
                Запазете час
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Вижте услугите
              </Button>
            </div>

            <a
              href="tel:+359887079256"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group animate-fade-up delay-400"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Обадете се сега</p>
                <p className="text-lg font-semibold">+359 887 079 256</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
