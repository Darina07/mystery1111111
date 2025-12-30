import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import illustrationSupport from "@/assets/illustration-support.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image - full visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${illustrationSupport})`,
        }}
      />
      
      {/* White overlay at the top for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" style={{ height: '60%' }} />
      
      <div className="container relative z-10 pt-32 pb-16">
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
              <Button variant="hero" size="xl" className="uppercase">
                КОНТАКТИ
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="uppercase">
                ВИЖТЕ УСЛУГИТЕ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
