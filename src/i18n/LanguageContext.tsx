import { createContext, useContext, useEffect, useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { Lang } from "./types";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "./types";
import { dict, translate, type DictKey } from "./dictionary";

interface LanguageContextValue {
  lang: Lang;
  t: (key: DictKey) => string;
  /** Convert an internal path to its localized version. */
  localized: (path: string) => string;
  /** Toggle between bg <-> en for the current location. */
  switchLang: (target: Lang) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Detects current language from the URL pathname. */
export function detectLangFromPath(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg && (SUPPORTED_LANGS as string[]).includes(seg)) return seg as Lang;
  return DEFAULT_LANG;
}

/** Build a localized path: /en/foo for "en", /foo for "bg". */
export function buildLocalizedPath(path: string, lang: Lang): string {
  // Normalize: must start with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return cleanPath;
  if (cleanPath === "/") return `/${lang}`;
  return `/${lang}${cleanPath}`;
}

/** Strip language prefix to get the canonical (Bulgarian) path. */
export function stripLangPrefix(pathname: string): string {
  const lang = detectLangFromPath(pathname);
  if (lang === DEFAULT_LANG) return pathname || "/";
  const stripped = pathname.replace(new RegExp(`^/${lang}`), "");
  return stripped === "" ? "/" : stripped;
}

interface ProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: ProviderProps) => {
  const location = useLocation();
  const lang = detectLangFromPath(location.pathname);

  // Update <html lang> for accessibility/SEO whenever language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: DictKey) => translate(key, lang);
    const localized = (path: string) => buildLocalizedPath(path, lang);
    const switchLang = (target: Lang) => {
      const canonical = stripLangPrefix(location.pathname);
      return buildLocalizedPath(canonical, target) + location.search + location.hash;
    };
    return { lang, t, localized, switchLang };
  }, [lang, location.pathname, location.search, location.hash]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback when used outside provider (e.g. tests/storybook)
    return {
      lang: DEFAULT_LANG,
      t: (key) => translate(key, DEFAULT_LANG),
      localized: (path) => buildLocalizedPath(path, DEFAULT_LANG),
      switchLang: () => "/",
    };
  }
  return ctx;
}

// Re-export for convenience
export { dict };
