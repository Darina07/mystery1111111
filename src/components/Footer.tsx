import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import darLogo from "@/assets/dar-logo-transparent.svg";

const popularTherapies = [
  "Аутизъм и аутистичен спектър",
  "Хиперактивност (ADHD)",
  "Тревожност и паник атаки",
  "Депресивни състояния",
  "Зависимости",
  "Бърнаут",
  "Заекване",
];

const services = [
  "Индивидуално консултиране и психотерапия",
  "Семейно и брачно консултиране",
  "Детски и юношески услуги",
  "Логопедия",
  "Психодиагностика",
];

const professionalDevelopment = [
  "Кариерно и професионално развитие",
  "Работа с екипи и организации",
];

export const Footer = () => {
  return (
    <footer className="bg-indigo text-primary-foreground">
      <div className="container py-16">
        {/* Logo */}
        <div className="mb-12">
          <a href="#home" className="inline-block">
            <img
              src={darLogo}
              alt="Дар - Психологичен център"
              className="h-20 w-auto"
            />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Popular Therapies */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Най-търсени терапии
            </h4>
            <ul className="space-y-3">
              {popularTherapies.map((therapy) => (
                <li key={therapy}>
                  <span className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-default">
                    {therapy}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Development */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Професионално развитие
            </h4>
            <ul className="space-y-3">
              {professionalDevelopment.map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Контакти
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>София, кв. Лозенец, ул. Кишинев 18</span>
              </div>
              <a
                href="tel:+359887079256"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                +359 887 079 256
              </a>
              <a
                href="mailto:info@darpsiholog.bg"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@darpsiholog.bg
              </a>
              
              <div className="pt-2">
                <a 
                  href="#prices"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
                >
                  Цени
                </a>
              </div>

              <div className="pt-2">
                <p className="text-primary-foreground/70 text-sm mb-1">Работно време:</p>
                <p className="text-primary-foreground/70">Понеделник – Неделя: 08:00 – 22:00</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
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
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Политика за поверителност
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Общи условия
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Политика за бисквитки
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
