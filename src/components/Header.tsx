import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import darLogo from "@/assets/dar-logo.svg";

const navItems = [
  { label: "Начало", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "За нас", href: "#about" },
  { label: "Цени", href: "#prices" },
  { label: "Контакти", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-header py-4"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={darLogo}
            alt="Дар - Психологичен център"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+359887079256"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+359 887 079 256</span>
          </a>
          <Button variant="outline" size="default" className="border-white text-white hover:bg-white hover:text-header uppercase tracking-wider font-semibold">
            Запазете час
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-header shadow-card transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
            <a
              href="tel:+359887079256"
              className="flex items-center gap-2 text-base font-medium text-white hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+359 887 079 256</span>
            </a>
            <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-header uppercase tracking-wider font-semibold">
              Запазете час
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
