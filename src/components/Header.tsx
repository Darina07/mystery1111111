import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import darLogo from "@/assets/dar-logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Lazy load desktop navigation - not needed on mobile
const DesktopNavigation = lazy(() => import("@/components/DesktopNavigation"));

interface SubMenuItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, localized } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = useMemo(() => {
    const groupPrograms: SubMenuItem[] = [
      { label: t("groups.addictions"), href: localized("/services/group-programs/addictions") },
      { label: t("groups.relationships"), href: localized("/services/group-programs/relationships") },
      { label: t("groups.parenting"), href: localized("/services/group-programs/parenting") },
      { label: t("groups.nlp"), href: localized("/services/group-programs/nlp") },
    ];

    const servicesSubmenu: SubMenuItem[] = [
      { label: t("services.psychological"), href: localized("/services/psychological-counseling") },
      { label: t("services.family"), href: localized("/services/family-counseling") },
      { label: t("services.child"), href: localized("/services/child-counseling") },
      { label: t("services.groupPrograms"), href: localized("/services/group-programs"), hasSubmenu: true, submenu: groupPrograms },
      { label: t("services.speech"), href: localized("/services/speech-therapy") },
      { label: t("services.psychodiagnostics"), href: localized("/services/psychodiagnostics") },
    ];

    const professionalSubmenu: SubMenuItem[] = [
      { label: t("services.career"), href: localized("/services/career-consulting") },
      { label: t("services.corporate"), href: localized("/services/corporate-services") },
    ];

    return [
      { label: t("nav.home"), href: localized("/") },
      { label: t("nav.about"), href: localized("/about") },
      { label: t("nav.services"), href: localized("/services"), hasSubmenu: true, submenu: servicesSubmenu },
      { label: t("nav.professional"), href: "#professional", hasSubmenu: true, submenu: professionalSubmenu },
      { label: t("nav.prices"), href: localized("/prices") },
      { label: t("nav.blog"), href: localized("/blog") },
      { label: t("nav.contact"), href: localized("/contact") },
    ];
  }, [t, localized]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header py-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to={localized("/")} className="flex items-center gap-3 group relative">
          <img
            src={darLogo}
            alt="Дар - Психологичен център"
            width={128}
            height={128}
            className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105 absolute -top-8"
          />
          <div className="h-12 w-32" /> {/* Spacer to maintain header size */}
        </Link>

        {/* Desktop Navigation - lazy loaded */}
        <Suspense fallback={<div className="hidden lg:block" />}>
          <DesktopNavigation navItems={navItems} />
        </Suspense>

        {/* Right cluster: language switcher + phone */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="tel:+359887079256"
            className="flex items-center justify-center p-2 text-white hover:text-white/80 transition-colors"
            aria-label={t("common.callUs")}
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label={t("nav.toggleMenu")}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-header shadow-card transition-all duration-300 max-h-[80vh] overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.hasSubmenu ? (
                <details className="group">
                  <summary className="flex items-center justify-between text-base font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors py-2 cursor-pointer list-none">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 flex flex-col gap-1">
                    {item.submenu?.map((subItem) => (
                      <div key={subItem.label}>
                        {subItem.hasSubmenu ? (
                          <details className="group/nested">
                            <summary className="flex items-center justify-between text-sm text-white/80 hover:text-white transition-colors py-2 cursor-pointer list-none">
                              {subItem.label}
                              <ChevronDown className="h-3 w-3 transition-transform group-open/nested:rotate-180" />
                            </summary>
                            <div className="pl-4 mt-1 flex flex-col gap-1">
                              {subItem.submenu?.map((nestedItem) => (
                                <Link
                                  key={nestedItem.label}
                                  to={nestedItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm text-white/70 hover:text-white transition-colors py-1"
                                >
                                  {nestedItem.label}
                                </Link>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <Link
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-white/80 hover:text-white transition-colors py-2"
                          >
                            {subItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors py-2"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-white/20 flex flex-col gap-4">
            <LanguageSwitcher variant="mobile" />
            <a
              href="tel:+359887079256"
              className="flex items-center gap-2 text-base font-medium text-white hover:text-white/80 transition-colors"
              aria-label="+359 887 079 256"
            >
              <Phone className="h-5 w-5" />
              <span>+359 887 079 256</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
