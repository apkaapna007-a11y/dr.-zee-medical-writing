export const SITE_URL = "https://drzeewrites.com";
export const SITE_NAME = "DrZeeWrites";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
export const AUTHOR_ID = `${SITE_URL}/about#person`;

export const AUTHOR_PERSON = {
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Dr. Zeeshan Islam",
  alternateName: "Dr Zee",
  url: `${SITE_URL}/about`,
  jobTitle: "Physician & Medical Content Specialist",
  honorificSuffix: "MBBS, MCPS (Paediatrics)",
  description:
    "Practising paediatrician and physician medical writer specialising in patient education, clinical content, medical SEO, evidence synthesis, drug information, and healthcare technology.",
  knowsAbout: [
    "Paediatrics",
    "Paediatric intensive care",
    "Patient education",
    "Clinical medical writing",
    "Medical SEO",
    "Evidence-based medicine",
    "Literature reviews",
    "Drug information",
    "Healthcare technology",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MBBS — Bachelor of Medicine, Bachelor of Surgery",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "professional certification",
      name: "MCPS Paediatrics — Member, College of Physicians & Surgeons",
    },
  ],
} as const;

export function jsonLd(value: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(value),
  };
}

export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics)" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#f6f1e9" },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_GB" },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${title} — DrZeeWrites` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `${title} — DrZeeWrites` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "ProfilePage" | "ContactPage";
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": AUTHOR_ID },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Physician-authored medical writing, patient education, clinical content, medical SEO, evidence synthesis, and healthcare technology writing.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Physician-led medical writing and clinical content services for healthcare, pharmaceutical, med-comms, and digital health teams.",
  founder: { "@id": AUTHOR_ID },
  employee: { "@id": AUTHOR_ID },
  areaServed: "Worldwide",
  knowsAbout: AUTHOR_PERSON.knowsAbout,
};
