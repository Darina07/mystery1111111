import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import darLogo from "@/assets/dar-logo-transparent.svg";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t, localized } = useLanguage();

  const popularTherapies = [
    { name: t("footer.popular.autism"), path: localized("/conditions/autism") },
    { name: t("footer.popular.adhd"), path: localized("/conditions/adhd") },
    { name: t("footer.popular.anxiety"), path: localized("/conditions/anxiety") },
    { name: t("footer.popular.depression"), path: localized("/conditions/depression") },
    { name: t("footer.popular.addictions"), path: localized("/services/group-programs/addictions") },
    { name: t("footer.popular.burnout"), path: localized("/conditions/burnout") },
    { name: t("footer.popular.stuttering"), path: localized("/conditions/stuttering") },
  ];

  const professionalDevelopment = [
    { name: t("footer.career"), path: localized("/services/career-consulting") },
    { name: t("footer.corporate"), path: localized("/services/corporate-services") },
  ];

  return (
    <footer className="bg-indigo text-primary-foreground">
      <div className="container py-10">
        <div className="text-center">
          <Link to={localized("/")} className="inline-block">
            <img
              src={darLogo}
              alt="Дар - Психологичен център"
              width={176}
              height={176}
              className="h-44 w-auto mx-auto -my-14"
            />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Popular Therapies */}
          <div>
            <p className="font-heading text-lg font-semibold mb-6">
              {t("footer.popular")}
            </p>
            <ul className="space-y-3">
              {popularTherapies.map((therapy) => (
                <li key={therapy.name}>
                  <Link 
                    to={therapy.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-base"
                  >
                    {therapy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Group Programs */}
          <div>
            <Link 
              to={localized("/services")}
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              {t("footer.services")}
            </Link>
            <Link 
              to={localized("/services/group-programs")}
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              {t("footer.groups")}
            </Link>
            <Link 
              to={localized("/therapeutic-approaches")}
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              {t("footer.approaches")}
            </Link>
            <Link 
              to={localized("/prices")}
              className="font-heading text-lg font-semibold block hover:text-primary-foreground/80 transition-colors"
            >
              {t("footer.prices")}
            </Link>
          </div>

          {/* Professional Development */}
          <div>
            <p className="font-heading text-lg font-semibold mb-6">
              {t("footer.professional")}
            </p>
            <ul className="space-y-3">
              {professionalDevelopment.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Link 
              to={localized("/contact")}
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              {t("footer.contact")}
            </Link>
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <a
                href="tel:+359887079256"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="+359 887 079 256"
              >
                <Phone className="h-5 w-5" />
                <span>+359 887 079 256</span>
              </a>
              <a
                href="mailto:info@dar-psiholog.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@dar-psiholog.com
              </a>

              <div className="pt-2">
                <p className="text-primary-foreground/70">{t("footer.hours")}</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a href="https://facebook.com/darpsiholog" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/darpsiholog7" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/darpsiholog" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@darpsiholog" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            {t("footer.copyright")}
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
            <Link to={localized("/privacy-policy")} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to={localized("/terms-and-conditions")} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to={localized("/cookie-policy")} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
