import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_CONSENT_KEY = "dar-cookie-consent";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, localized } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
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
            <p className="text-sm text-foreground">
              {t("cookie.message")}{" "}
              <Link 
                to={localized("/cookie-policy")}
                className="text-foreground hover:underline font-semibold underline"
              >
                {t("cookie.learnMore")}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              {t("cookie.decline")}
            </Button>
            <Button 
              size="sm"
              onClick={handleAccept}
              className="bg-[hsl(263,35%,48%)] hover:bg-[hsl(263,35%,42%)] text-white"
            >
              {t("cookie.accept")}
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground"
            aria-label={t("cookie.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
