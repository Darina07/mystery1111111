import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "mobile";
}

export const LanguageSwitcher = ({ className, variant = "header" }: LanguageSwitcherProps) => {
  const { lang, switchLang, t } = useLanguage();

  const baseBtn =
    variant === "header"
      ? "px-2 py-1 text-sm font-semibold uppercase tracking-wider transition-colors"
      : "px-3 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors";

  const activeCls =
    variant === "header" ? "text-white" : "bg-white/15 text-white";
  const inactiveCls =
    variant === "header"
      ? "text-white/60 hover:text-white"
      : "text-white/70 hover:text-white";

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t("langSwitcher.aria")}
    >
      <Link
        to={switchLang("bg")}
        className={cn(baseBtn, lang === "bg" ? activeCls : inactiveCls)}
        aria-current={lang === "bg" ? "true" : undefined}
        hrefLang="bg"
      >
        {t("langSwitcher.bg")}
      </Link>
      <span className="text-white/40" aria-hidden="true">
        |
      </span>
      <Link
        to={switchLang("en")}
        className={cn(baseBtn, lang === "en" ? activeCls : inactiveCls)}
        aria-current={lang === "en" ? "true" : undefined}
        hrefLang="en"
      >
        {t("langSwitcher.en")}
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
