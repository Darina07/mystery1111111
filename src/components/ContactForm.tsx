import { useState } from "react";
import { Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  serviceName?: string;
  buttonVariant?: "cta" | "hero" | "default";
}

export const ContactForm = ({ serviceName, buttonVariant = "cta" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Грешка",
        description: "Моля, попълнете всички задължителни полета.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const fullName = formData.lastName 
        ? `${formData.name} ${formData.lastName}` 
        : formData.name;

      // Dynamic import of supabase for code splitting
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          service: serviceName,
          message: formData.message,
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Грешка",
          description: "Възникна грешка при изпращането. Моля, опитайте отново.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Успешно изпратено!",
        description: "Вашето запитване беше изпратено успешно! Ще се свържем с вас скоро.",
      });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Грешка",
        description: "Възникна грешка при изпращането. Моля, опитайте отново.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input 
            type="text" 
            placeholder="Име *" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Фамилия" 
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input 
            type="email" 
            placeholder="Имейл *" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Телефон" 
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div>
        <textarea 
          placeholder="Съобщение *" 
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
        <Button 
          type="submit" 
          variant={buttonVariant} 
          size="lg" 
          className="px-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Изпращане...
            </>
          ) : (
            "Изпрати"
          )}
        </Button>
        
        <a 
          href="tel:+359887079256" 
          className="flex items-center justify-center w-16 h-16 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg"
          aria-label="Обадете се на +359 887 079 256"
        >
          <Phone className="h-8 w-8 text-primary-foreground" />
        </a>
      </div>
    </form>
  );
};
