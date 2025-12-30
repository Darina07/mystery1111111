import { Phone, Mail, MapPin } from "lucide-react";
import darLogo from "@/assets/dar-logo.jpg";

const quickLinks = [
  { label: "Начало", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "За нас", href: "#about" },
  { label: "Цени", href: "#prices" },
  { label: "Контакти", href: "#contact" },
];

const services = [
  "Психологично консултиране",
  "Психотерапия",
  "Семейно консултиране",
  "Детско-юношеско консултиране",
  "Логопед",
  "Психодиагностика",
];

const therapies = [
  "Аутизъм",
  "Хиперактивност (ADHD)",
  "Тревожност и паник атаки",
  "Депресивни състояния",
  "Зависимости",
  "Бърнаут",
];

export const Footer = () => {
  return (
    <footer className="bg-indigo text-primary-foreground">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <img
                src={darLogo}
                alt="Дар - Психологичен център"
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/70 leading-relaxed">
              Психологичен и консултативен център, който предоставя
              професионални услуги за вашето психично здраве.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+359887079256"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +359 887 079 256
              </a>
              <a
                href="mailto:info@darpsiholog.bg"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@darpsiholog.bg
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>София, кв. Лозенец, ул. Кишинев 18</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Бързи връзки
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
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
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Therapies */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Популярни терапии
            </h4>
            <ul className="space-y-3">
              {therapies.map((therapy) => (
                <li key={therapy}>
                  <span className="text-primary-foreground/70">{therapy}</span>
                </li>
              ))}
            </ul>
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
              Условия за ползване
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
