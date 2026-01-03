import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import darLogo from "@/assets/dar-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

const groupPrograms: SubMenuItem[] = [
  { label: "Зависимости", href: "/services/group-programs/addictions" },
  { label: "Необвързани и взаимоотношения (matchmaking)", href: "/services/group-programs/relationships" },
  { label: "Бременност и родителство", href: "/services/group-programs/parenting" },
  { label: "НЛП и личностно развитие", href: "/services/group-programs/nlp" },
];

const servicesSubmenu: SubMenuItem[] = [
  { label: "Психологично консултиране и психотерапия", href: "/services/psychological-counseling" },
  { label: "Семейно и партньорско консултиране", href: "/services/family-counseling" },
  { label: "Детско - юношеско консултиране", href: "/services/child-counseling" },
  { label: "Групови програми", href: "/services/group-programs", hasSubmenu: true, submenu: groupPrograms },
  { label: "Логопед", href: "/services/speech-therapy" },
  { label: "Психодиагностика", href: "/services/psychodiagnostics" },
];

const professionalSubmenu: SubMenuItem[] = [
  { label: "Кариерно консултиране", href: "/services/career-consulting" },
  { label: "Корпоративни услуги", href: "/services/corporate-services" },
];

const navItems: NavItem[] = [
  { label: "Начало", href: "/" },
  { label: "За нас", href: "/about" },
  { label: "Услуги", href: "/services", hasSubmenu: true, submenu: servicesSubmenu },
  { label: "Професионално развитие", href: "#professional", hasSubmenu: true, submenu: professionalSubmenu },
  { label: "Цени", href: "/prices" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/contact" },
];

interface HeaderProps {
  variant?: 'default' | 'light';
}

export const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLight = variant === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 ${isLight ? 'bg-white shadow-sm' : 'bg-header'}`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative">
          <img
            src={darLogo}
            alt="Дар - Психологичен център"
            className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105 absolute -top-8"
          />
          <div className="h-12 w-32" /> {/* Spacer to maintain header size */}
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.hasSubmenu ? (
                  <>
                    <NavigationMenuTrigger className={`bg-transparent text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-foreground hover:bg-foreground/10 hover:text-foreground data-[state=open]:bg-foreground/10' : 'text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10'}`}>
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3 bg-white rounded-lg shadow-lg">
                        {item.submenu?.map((subItem) => (
                          <li key={subItem.label} className="relative group/sub">
                            {subItem.hasSubmenu ? (
                              <div className="relative">
                                <a
                                  href={subItem.href}
                                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                                >
                                  {subItem.label}
                                  <ChevronRight className="h-4 w-4" />
                                </a>
                                <ul className="absolute left-full top-0 ml-1 w-[280px] bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-[100] border border-gray-100">
                                  {subItem.submenu?.map((nestedItem) => (
                                    <li key={nestedItem.label}>
                                      <a
                                        href={nestedItem.href}
                                        className="block px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                                      >
                                        {nestedItem.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <a
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                              >
                                {subItem.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 px-3 py-2 ${isLight ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Phone Icon */}
        <a
          href="tel:+359887079256"
          className={`hidden lg:flex items-center justify-center p-2 transition-colors ${isLight ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
          aria-label="Обадете се"
        >
          <Phone className="h-5 w-5" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isLight ? 'text-foreground' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 shadow-card transition-all duration-300 max-h-[80vh] overflow-y-auto ${isLight ? 'bg-white' : 'bg-header'} ${
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
                  <summary className={`flex items-center justify-between text-base font-semibold uppercase tracking-wider transition-colors py-2 cursor-pointer list-none ${isLight ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}>
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 flex flex-col gap-1">
                    {item.submenu?.map((subItem) => (
                      <div key={subItem.label}>
                        {subItem.hasSubmenu ? (
                          <details className="group/nested">
                            <summary className={`flex items-center justify-between text-sm transition-colors py-2 cursor-pointer list-none ${isLight ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'}`}>
                              {subItem.label}
                              <ChevronDown className="h-3 w-3 transition-transform group-open/nested:rotate-180" />
                            </summary>
                            <div className="pl-4 mt-1 flex flex-col gap-1">
                              {subItem.submenu?.map((nestedItem) => (
                                  <a
                                    key={nestedItem.label}
                                    href={nestedItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-sm transition-colors py-1 ${isLight ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'}`}
                                >
                                  {nestedItem.label}
                                </a>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <a
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-sm transition-colors py-2 ${isLight ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'}`}
                          >
                            {subItem.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-semibold uppercase tracking-wider transition-colors py-2 ${isLight ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className={`pt-4 border-t ${isLight ? 'border-foreground/20' : 'border-white/20'}`}>
            <a
              href="tel:+359887079256"
              className={`flex items-center gap-2 text-base font-medium transition-colors ${isLight ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
              aria-label="Обадете се на +359 887 079 256"
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
