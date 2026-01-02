import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "dar-cookie-consent";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-sm text-muted-foreground">
              Използваме бисквитки, за да подобрим вашето изживяване на сайта. 
              Продължавайки да разглеждате, вие се съгласявате с използването на бисквитки.{" "}
              <Link 
                to="/cookie-policy" 
                className="text-primary hover:underline font-medium"
              >
                Научете повече
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDecline}
            >
              Отказвам
            </Button>
            <Button 
              size="sm"
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90"
            >
              Приемам
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground"
            aria-label="Затвори"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};