import { Helmet } from "react-helmet-async";

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

const DEFAULT_TITLE = "Дар – Психологичен и консултативен център | София";
const DEFAULT_DESCRIPTION = "Професионално психологично консултиране и психотерапия за деца, възрастни и семейства в София. Подкрепа, която работи. Запазете час сега.";
const DEFAULT_IMAGE = "https://darpsiholog.bg/og-image.jpg";
const SITE_URL = "https://darpsiholog.bg";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  article,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Център Дар` : DEFAULT_TITLE;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:site_name" content="Център Дар" />

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
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

// Structured Data Components
interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  services?: string[];
}

export const LocalBusinessSchema = ({
  name = "Дар – Психологичен и консултативен център",
  description = "Професионално психологично консултиране и психотерапия за деца, възрастни и семейства",
  services = [
    "Психологично консултиране",
    "Семейна терапия",
    "Детска психология",
    "Логопедия",
    "Психодиагностика",
    "Кариерно консултиране"
  ],
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://darpsiholog.bg/#organization",
    name,
    description,
    url: "https://darpsiholog.bg",
    logo: "https://darpsiholog.bg/logo.png",
    image: "https://darpsiholog.bg/og-image.jpg",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.6833",
      longitude: "23.3333",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Психологически услуги",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        "@id": `https://darpsiholog.bg/#service-${index}`,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/darpsiholog",
      "https://www.instagram.com/darpsiholog",
    ],
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
      item: `https://darpsiholog.bg${item.url}`,
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
    url: `https://darpsiholog.bg${url}`,
    provider: {
      "@type": "MedicalBusiness",
      name: "Център Дар",
      "@id": "https://darpsiholog.bg/#organization",
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
    image: image || "https://darpsiholog.bg/og-image.jpg",
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
        url: "https://darpsiholog.bg/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://darpsiholog.bg${url}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
