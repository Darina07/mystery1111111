import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { detectLangFromPath, stripLangPrefix, buildLocalizedPath } from "@/i18n/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const DEFAULT_TITLE_BG = "Дар – Психологичен и консултативен център | София";
const DEFAULT_TITLE_EN = "Dar – Psychological & Counseling Center | Sofia";
const DEFAULT_DESCRIPTION_BG = "Професионално психологично консултиране и психотерапия за деца, възрастни и семейства в София. Подкрепа, която работи. Запазете час сега.";
const DEFAULT_DESCRIPTION_EN = "Professional psychological counseling and psychotherapy for children, adults and families in Sofia. Support that works. Book a session now.";
const DEFAULT_IMAGE = "https://darpsiholog.com/og-image.jpg";
const SITE_URL = "https://darpsiholog.com";
const SITE_NAME_BG = "Център Дар";
const SITE_NAME_EN = "Dar Center";

export const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  article,
  noindex = false,
}: SEOProps) => {
  const location = useLocation();
  const lang = detectLangFromPath(location.pathname);
  const isEn = lang === "en";

  // Determine canonical path: prefer explicit `url` prop, else current pathname
  const currentPath = url ?? location.pathname ?? "/";
  // Normalize the canonical (BG) path by stripping any lang prefix
  const canonicalBgPath = stripLangPrefix(currentPath.startsWith("/") ? currentPath : `/${currentPath}`);
  const localizedPath = buildLocalizedPath(canonicalBgPath, lang);
  const fullUrl = `${SITE_URL}${localizedPath === "/" ? "" : localizedPath}`;

  const bgAlternate = `${SITE_URL}${canonicalBgPath === "/" ? "" : canonicalBgPath}`;
  const enAlternate = `${SITE_URL}${buildLocalizedPath(canonicalBgPath, "en")}`;

  const siteName = isEn ? SITE_NAME_EN : SITE_NAME_BG;
  const defaultTitle = isEn ? DEFAULT_TITLE_EN : DEFAULT_TITLE_BG;
  const defaultDescription = isEn ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION_BG;
  const finalDescription = description ?? defaultDescription;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const ogLocale = isEn ? "en_US" : "bg_BG";
  const langAttr = isEn ? "en" : "bg";
  const langMeta = isEn ? "English" : "Bulgarian";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={langAttr} />
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="language" content={langMeta} />
      <meta name="content-language" content={langAttr} />
      <link rel="canonical" href={fullUrl} />
      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="bg" href={bgAlternate} />
      <link rel="alternate" hrefLang="en" href={enAlternate} />
      <link rel="alternate" hrefLang="x-default" href={bgAlternate} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={isEn ? "bg_BG" : "en_US"} />
      <meta property="og:site_name" content={siteName} />

      {/* Article specific Open Graph */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags?.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

// Structured Data Components
interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  services?: string[];
  language?: "bg" | "en";
}

export const LocalBusinessSchema = ({
  name,
  description,
  services,
  language,
}: LocalBusinessSchemaProps = {}) => {
  const loc = useLocation();
  const lang = language ?? detectLangFromPath(loc.pathname);
  const isEn = lang === "en";

  const resolvedName = name ?? (isEn
    ? "Dar – Psychological & Counseling Center"
    : "Дар – Психологичен и консултативен център");
  const resolvedDescription = description ?? (isEn
    ? "Professional psychological counseling and psychotherapy for children, adults and families."
    : "Професионално психологично консултиране и психотерапия за деца, възрастни и семейства");
  const resolvedServices = services ?? (isEn
    ? ["Psychological counseling", "Family therapy", "Child psychology", "Speech therapy", "Psychodiagnostics", "Career counseling"]
    : ["Психологично консултиране", "Семейна терапия", "Детска психология", "Логопедия", "Психодиагностика", "Кариерно консултиране"]);
  const offerCatalogName = isEn ? "Psychological services" : "Психологически услуги";
  const address = isEn
    ? { streetAddress: "18 Kishinev Str.", addressLocality: "Sofia", addressRegion: "Lozenets" }
    : { streetAddress: "ул. Кишинев 18", addressLocality: "София", addressRegion: "Лозенец" };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://darpsiholog.com/#organization",
    name: resolvedName,
    description: resolvedDescription,
    url: "https://darpsiholog.com",
    logo: "https://darpsiholog.com/logo.png",
    image: "https://darpsiholog.com/og-image.jpg",
    telephone: "+359887079256",
    email: "info@darpsiholog.com",
    address: {
      "@type": "PostalAddress",
      ...address,
      postalCode: "1000",
      addressCountry: "BG",
    },
    geo: { "@type": "GeoCoordinates", latitude: "42.6833", longitude: "23.3333" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "08:00", closes: "22:00" },
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: offerCatalogName,
      itemListElement: resolvedServices.map((service, index) => ({
        "@type": "Offer",
        "@id": `https://darpsiholog.com/#service-${index}`,
        itemOffered: { "@type": "Service", name: service },
      })),
    },
    sameAs: ["https://www.facebook.com/darpsiholog", "https://www.instagram.com/darpsiholog"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://darpsiholog.com${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export const ServiceSchema = ({ name, description, url, image }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://darpsiholog.com${url}`,
    provider: {
      "@type": "MedicalBusiness",
      name: "Център Дар",
      "@id": "https://darpsiholog.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "София",
    },
    ...(image && { image }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Център Дар",
  url,
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || "https://darpsiholog.com/og-image.jpg",
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Център Дар",
      logo: {
        "@type": "ImageObject",
        url: "https://darpsiholog.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://darpsiholog.com${url}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Website Schema for sitelinks search box
export const WebsiteSchema = () => {
  const loc = useLocation();
  const isEn = detectLangFromPath(loc.pathname) === "en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isEn ? "Dar Center" : "Център Дар",
    alternateName: isEn ? "Dar – Psychological & Counseling Center" : "Дар Психологичен център",
    url: "https://darpsiholog.com",
    inLanguage: isEn ? "en" : "bg",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://darpsiholog.com${isEn ? "/en" : ""}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Professional Service Schema
interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}

export const ProfessionalServiceSchema = ({
  name,
  description,
  url,
  serviceType,
  areaServed = "София",
}: ProfessionalServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url: `https://darpsiholog.com${url}`,
    serviceType,
    provider: {
      "@type": "MedicalBusiness",
      name: "Център Дар",
      "@id": "https://darpsiholog.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: "Център Дар",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Кишинев 18",
          addressLocality: "София",
          addressRegion: "Лозенец",
          addressCountry: "BG",
        },
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Medical Condition Schema for condition pages
interface MedicalConditionSchemaProps {
  name: string;
  description: string;
  url: string;
  symptoms?: string[];
  possibleTreatment?: string[];
}

export const MedicalConditionSchema = ({
  name,
  description,
  url,
  symptoms = [],
  possibleTreatment = [],
}: MedicalConditionSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name,
    description,
    url: `https://darpsiholog.com${url}`,
    ...(symptoms.length > 0 && {
      signOrSymptom: symptoms.map((symptom) => ({
        "@type": "MedicalSymptom",
        name: symptom,
      })),
    }),
    ...(possibleTreatment.length > 0 && {
      possibleTreatment: possibleTreatment.map((treatment) => ({
        "@type": "MedicalTherapy",
        name: treatment,
      })),
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Contact Page Schema
export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Контакти - Център Дар",
    description: "Свържете се с нас за консултация",
    url: "https://darpsiholog.com/contact",
    mainEntity: {
      "@type": "MedicalBusiness",
      "@id": "https://darpsiholog.com/#organization",
      name: "Център Дар",
      telephone: "+359887079256",
      email: "info@darpsiholog.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Кишинев 18",
        addressLocality: "София",
        addressRegion: "Лозенец",
        postalCode: "1000",
        addressCountry: "BG",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// About Page Schema
export const AboutPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "За нас - Център Дар",
    description: "Научете повече за екипа на Център Дар и нашата мисия",
    url: "https://darpsiholog.com/about",
    mainEntity: {
      "@type": "MedicalBusiness",
      "@id": "https://darpsiholog.com/#organization",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Course/Event Schema for group programs
interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  courseMode?: "online" | "onsite" | "blended";
}

export const CourseSchema = ({
  name,
  description,
  url,
  provider = "Център Дар",
  courseMode = "onsite",
}: CourseSchemaProps) => {
  const modeMap = {
    online: "https://schema.org/OnlineEventAttendanceMode",
    onsite: "https://schema.org/OfflineEventAttendanceMode",
    blended: "https://schema.org/MixedEventAttendanceMode",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://darpsiholog.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: modeMap[courseMode],
      location: {
        "@type": "Place",
        name: "Център Дар",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Кишинев 18",
          addressLocality: "София",
          addressCountry: "BG",
        },
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Organization Schema for brand recognition
export const OrganizationSchema = () => {
  const loc = useLocation();
  const isEn = detectLangFromPath(loc.pathname) === "en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://darpsiholog.com/#organization",
    name: isEn ? "Dar Center" : "Център Дар",
    alternateName: isEn
      ? "Dar – Psychological & Counseling Center"
      : "Дар – Психологичен и консултативен център",
    url: "https://darpsiholog.com",
    logo: {
      "@type": "ImageObject",
      url: "https://darpsiholog.com/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://darpsiholog.com/og-image.jpg",
    description: isEn
      ? "Professional psychological center in Sofia offering counseling and therapy for children, adults and families."
      : "Професионален психологичен център в София, предлагащ консултиране и терапия за деца, възрастни и семейства.",
    email: "info@darpsiholog.com",
    telephone: "+359887079256",
    address: {
      "@type": "PostalAddress",
      streetAddress: isEn ? "18 Kishinev Str." : "ул. Кишинев 18",
      addressLocality: isEn ? "Sofia" : "София",
      addressRegion: isEn ? "Lozenets" : "Лозенец",
      postalCode: "1000",
      addressCountry: "BG",
    },
    geo: { "@type": "GeoCoordinates", latitude: 42.6833, longitude: 23.3333 },
    areaServed: { "@type": "Country", name: isEn ? "Bulgaria" : "България" },
    foundingDate: "2020",
    slogan: isEn ? "Support that works" : "Подкрепа, която работи",
    knowsAbout: isEn
      ? ["Psychology", "Psychotherapy", "Family therapy", "Child psychology", "Speech therapy", "Cognitive Behavioral Therapy", "EMDR therapy"]
      : ["Психология", "Психотерапия", "Семейна терапия", "Детска психология", "Логопедия", "Когнитивно-поведенческа терапия", "EMDR терапия"],
    sameAs: ["https://www.facebook.com/darpsiholog", "https://www.instagram.com/darpsiholog"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// HealthTopicContent Schema for condition pages - helps AI understand content
interface HealthTopicSchemaProps {
  name: string;
  description: string;
  url: string;
  mainEntity?: string;
}

export const HealthTopicSchema = ({
  name,
  description,
  url,
  mainEntity = "MedicalCondition",
}: HealthTopicSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `https://darpsiholog.com${url}`,
    mainEntity: {
      "@type": mainEntity,
      name,
    },
    specialty: {
      "@type": "Specialty",
      name: "Психология",
    },
    about: {
      "@type": "Thing",
      name,
      description,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://darpsiholog.com/#organization",
    },
    inLanguage: "bg-BG",
    isAccessibleForFree: true,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
