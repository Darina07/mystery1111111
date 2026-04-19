import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

export const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Phone, label: t("contact.phone"), value: "+359 887 079 256", href: "tel:+359887079256" },
    { icon: Mail, label: t("contact.email"), value: "info@dar-psiholog.com", href: "mailto:info@dar-psiholog.com" },
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressValue"), href: "https://maps.google.com/?q=Sofia,Bulgaria,Kishinev+18" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue"), href: null as string | null },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: t("common.success"),
        description: t("common.successMessage"),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: t("common.error"),
        description: t("common.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            {t("contact.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t("contact.titlePart1")}{" "}
            <span className="gradient-text">{t("contact.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
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

            <div className="relative rounded-2xl overflow-hidden h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0!2d23.3176!3d42.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859f0c0c0c0f%3A0x0!2sKishinev%2018%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1704200000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.mapTitle")}
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-semibold mb-6">
              {t("contact.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder={t("contact.namePlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="+359 888 123 456"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button size="lg" className="w-full uppercase text-white shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]" style={{ background: 'var(--gradient-cta)' }} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("common.sending")}
                  </>
                ) : (
                  t("common.send")
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
