import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import darLogo from "@/assets/dar-logo-transparent.svg";

const popularTherapies = [
  { name: "Аутизъм и аутистичен спектър", path: "/conditions/autism" },
  { name: "Хиперактивност (ADHD)", path: "/conditions/adhd" },
  { name: "Тревожност и паник атаки", path: "/conditions/anxiety" },
  { name: "Депресивни състояния", path: "/conditions/depression" },
  { name: "Зависимости", path: "/services/group-programs/addictions" },
  { name: "Бърнаут", path: "/conditions/burnout" },
  { name: "Заекване", path: "/conditions/stuttering" },
];


const professionalDevelopment = [
  { name: "Кариерно и професионално развитие", path: "/services/career-consulting" },
  { name: "Работа с екипи и организации", path: "/services/corporate-services" },
];

export const Footer = () => {
  return (
    <footer className="bg-indigo text-primary-foreground">
      <div className="container py-10">
        {/* Logo */}
        <div className="text-center">
          <a href="#home" className="inline-block">
            <img
              src={darLogo}
              alt="Дар - Психологичен център"
              width={176}
              height={176}
              className="h-44 w-auto mx-auto -my-14"
            />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Popular Therapies */}
          <div>
            <p className="font-heading text-lg font-semibold mb-6">
              Най-търсени
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
              to="/services"
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              Услуги
            </Link>
            <Link 
              to="/services/group-programs"
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              Групови програми
            </Link>
            <Link 
              to="/therapeutic-approaches"
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              Терапевтични подходи
            </Link>
            <Link 
              to="/prices"
              className="font-heading text-lg font-semibold block hover:text-primary-foreground/80 transition-colors"
            >
              Цени
            </Link>
          </div>

          {/* Professional Development */}
          <div>
            <p className="font-heading text-lg font-semibold mb-6">
              Професионално развитие
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
              to="/contact"
              className="font-heading text-lg font-semibold mb-6 block hover:text-primary-foreground/80 transition-colors"
            >
              Контакти
            </Link>
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>София, кв. Лозенец, ул. Кишинев 18</span>
              </div>
              <a
                href="tel:+359887079256"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Обадете се на +359 887 079 256"
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
                <p className="text-primary-foreground/70">Понеделник – Неделя: 08:00 – 22:00</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://facebook.com/darpsiholog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/darpsiholog7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/darpsiholog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
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
            © 2025 Дар – Подкрепа, която работи. Всички права запазени.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Политика за поверителност
            </Link>
            <Link
              to="/terms-conditions"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Общи условия
            </Link>
            <Link
              to="/cookie-policy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Политика за бисквитки
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
