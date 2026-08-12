from pathlib import Path
import re

ROOT = Path('/home/ubuntu/dr-zee-medical-writing')


def add_import(path: str, line: str):
    file = ROOT / path
    text = file.read_text()
    if line not in text:
        text = text.replace('export const Route =', line + '\nexport const Route =', 1)
    file.write_text(text)


def replace_static_head(path: str, head_body: str):
    file = ROOT / path
    text = file.read_text()
    pattern = r'  head: \(\) => \(\{.*?\n  \}\),\n  component:'
    replacement = '  head: () => {\n' + head_body + '\n  },\n  component:'
    updated, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f'Could not replace static head in {path}')
    file.write_text(updated)


SEO_IMPORT = 'import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";'

# Global defaults: the route-level metadata below takes precedence on navigable pages.
root = ROOT / 'src/routes/__root.tsx'
text = root.read_text()
text = text.replace('import { reportLovableError } from "../lib/lovable-error-reporting";', 'import { reportLovableError } from "../lib/lovable-error-reporting";\nimport { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";')
text = text.replace('{ name: "title", content: "DrZeeWrites — Physician Medical Writer" }', '{ name: "title", content: "DrZeeWrites — Physician Medical Writer" }')
text = text.replace('{ name: "author", content: "DrZeeWrites" }', '{ name: "author", content: "Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics)" }')
text = text.replace('{ property: "og:site_name", content: "DrZeeWrites" }', '{ property: "og:site_name", content: SITE_NAME }')
text = text.replace('{ property: "og:image", content: "https://drzeewrites.com/og-default.png" }', '{ property: "og:image", content: DEFAULT_OG_IMAGE }')
text = text.replace('{ name: "twitter:image", content: "https://drzeewrites.com/og-default.png" }', '{ name: "twitter:image", content: DEFAULT_OG_IMAGE }')
text = text.replace('{ name: "theme-color", content: "#0b1220" }', '{ name: "theme-color", content: "#f6f1e9" }')
if 'type="application/ld+json"' not in text:
    text = text.replace('    links: [\n', '    scripts: [\n      {\n        type: "application/ld+json",\n        children: JSON.stringify(WEBSITE_SCHEMA),\n      },\n    ],\n    links: [\n', 1)
root.write_text(text)

# Home page: brand entity, website entity, and clear topical scope.
add_import('src/routes/index.tsx', SEO_IMPORT)
replace_static_head('src/routes/index.tsx', '''    const head = pageHead({
      title: "Dr Zee — Physician & Medical Content Specialist",
      description:
        "Dr. Zee is a physician and paediatric medical content specialist writing patient education, HCP articles, medical SEO, drug monographs, evidence reviews, and healthcare technology content.",
      path: "/",
      keywords:
        "physician medical writer, paediatric medical writer, medical content specialist, patient education, clinical articles, medical SEO",
    });
    return {
      ...head,
      scripts: [
        jsonLd(WEBSITE_SCHEMA),
        jsonLd(ORGANIZATION_SCHEMA),
        jsonLd({
          ...webPageSchema({
            title: "Dr Zee — Physician & Medical Content Specialist",
            description:
              "Physician-authored medical writing and clinical content for healthcare, pharmaceutical, med-comms, and digital health teams.",
            path: "/",
          }),
          mainEntity: AUTHOR_PERSON,
        }),
      ],
    }''')

# About page: eligible author/profile entity with credentials and topical expertise.
add_import('src/routes/about.tsx', SEO_IMPORT)
replace_static_head('src/routes/about.tsx', '''    const head = pageHead({
      title: "About Dr Zee — Physician & Medical Content Specialist",
      description:
        "Meet Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics): a practising physician and medical content specialist with paediatric and intensive-care experience.",
      path: "/about",
      type: "profile",
      keywords:
        "Dr Zee physician, paediatrician medical writer, MBBS MCPS paediatrics, medical content specialist",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "About Dr Zee — Physician & Medical Content Specialist",
            description:
              "Professional profile, clinical background, writing expertise, and editorial philosophy of Dr. Zeeshan Islam.",
            path: "/about",
            type: "ProfilePage",
          }),
          mainEntity: AUTHOR_PERSON,
        }),
      ],
    }''')

# Portfolio index: semantically connect the 24 visible samples to the author's expertise.
add_import('src/routes/portfolio.tsx', SEO_IMPORT)
replace_static_head('src/routes/portfolio.tsx', '''    const head = pageHead({
      title: "Medical Writing Portfolio — 24 Samples | Dr Zee",
      description:
        "Browse 24 physician-authored medical writing samples across patient education, HCP articles, paediatrics, medical SEO, drug monographs, evidence reviews, case studies, and white papers.",
      path: "/portfolio",
      keywords:
        "medical writing portfolio, paediatric writing samples, patient education samples, clinical article samples, medical SEO portfolio",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Portfolio — 24 Samples | Dr Zee",
            description:
              "A curated portfolio of physician-authored samples for healthcare, pharmaceutical, med-comms, and digital health clients.",
            path: "/portfolio",
            type: "CollectionPage",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Dr Zee medical writing samples",
            numberOfItems: PORTFOLIO.length,
            itemListElement: PORTFOLIO.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              description: item.blurb,
            })),
          },
          author: { "@id": `${SITE_URL}/about#person` },
        }),
      ],
    }''')

# Services page: retain its visible FAQ schema and add a professional-service entity.
add_import('src/routes/services.tsx', SEO_IMPORT)
replace_static_head('src/routes/services.tsx', '''    const head = pageHead({
      title: "Medical Writing Services for Healthcare Teams | Dr Zee",
      description:
        "Physician-led medical writing, patient education, clinical review, medical SEO, drug monographs, literature reviews, case studies, and healthcare white papers.",
      path: "/services",
      keywords:
        "medical writing services, physician medical writer, patient education writer, medical SEO writer, drug monographs, literature reviews",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Services for Healthcare Teams | Dr Zee",
            description:
              "Nine physician-led services for healthcare, pharmaceutical, med-comms, and digital health teams.",
            path: "/services",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Medical writing services",
            itemListElement: SERVICES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.summary,
                provider: { "@id": `${SITE_URL}/#organization` },
              },
            })),
          },
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What medical writing services does Dr Zee offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dr Zee offers paediatric clinical writing, patient education, HCP articles, medical SEO writing, drug monographs, literature reviews, clinical case studies, healthcare white papers, and medical editing.",
              },
            },
            {
              "@type": "Question",
              name: "Who writes the content?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Content is written and medically reviewed by Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics), a practising physician with paediatric and intensive-care experience.",
              },
            },
          ],
        }),
        jsonLd(ORGANIZATION_SCHEMA),
      ],
    }''')

# CV page: make the credentials legible to crawlers without inventing licences or memberships.
add_import('src/routes/cv.tsx', SEO_IMPORT)
replace_static_head('src/routes/cv.tsx', '''    const head = pageHead({
      title: "CV — Dr Zee, Physician & Medical Content Specialist",
      description:
        "Professional CV for Dr. Zeeshan Islam: MBBS, MCPS (Paediatrics), clinical experience, medical writing, evidence review, editing, and healthcare SEO expertise.",
      path: "/cv",
      type: "profile",
      keywords:
        "Dr Zee CV, physician medical writer CV, paediatrician medical writer qualifications, medical editor CV",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "CV — Dr Zee, Physician & Medical Content Specialist",
            description:
              "Clinical training, paediatric experience, and editorial practice of Dr. Zeeshan Islam.",
            path: "/cv",
          }),
          mainEntity: AUTHOR_PERSON,
        }),
      ],
    }''')

# Publications page: use a semantic collection rather than unsupported publication claims.
add_import('src/routes/publications.tsx', SEO_IMPORT)
replace_static_head('src/routes/publications.tsx', '''    const head = pageHead({
      title: "Publications & Research — Dr Zee, Physician Writer",
      description:
        "Research publications and evidence summaries from Dr. Zeeshan Islam, covering paediatric medicine, bronchiolitis, and outpatient therapeutics.",
      path: "/publications",
      keywords: "paediatric medical publications, clinical research summaries, physician author, paediatric medicine",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Publications & Research — Dr Zee, Physician Writer",
            description:
              "A record of research outputs and publication summaries in paediatric medicine.",
            path: "/publications",
            type: "CollectionPage",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Dr Zee publications and research summaries",
            itemListElement: PUBLICATIONS.map((publication, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "ScholarlyArticle",
                name: publication.title,
                isPartOf: { "@type": "Periodical", name: publication.journal },
                datePublished: publication.year,
                author: { "@id": `${SITE_URL}/about#person` },
                identifier: publication.doi,
              },
            })),
          },
        }),
      ],
    }''')

# Testimonials page: descriptive page metadata only; do not add review/rating markup unless testimonials are verified and attributable.
add_import('src/routes/testimonials.tsx', SEO_IMPORT)
replace_static_head('src/routes/testimonials.tsx', '''    const head = pageHead({
      title: "Client Testimonials — Dr Zee Medical Writing",
      description:
        "Feedback from healthcare, pharmaceutical, med-comms, and digital health clients about working with Dr Zee on clinical content and medical writing.",
      path: "/testimonials",
      keywords: "medical writer testimonials, physician medical writer reviews, healthcare content writer feedback",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Client Testimonials — Dr Zee Medical Writing",
            description:
              "Client feedback about physician-led medical writing, clinical review, and healthcare content projects.",
            path: "/testimonials",
          }),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: TESTIMONIALS.length,
            itemListElement: TESTIMONIALS.map((testimonial, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Review",
                reviewBody: testimonial.quote,
                author: { "@type": "Person", name: testimonial.name },
                reviewRating: undefined,
              },
            })),
          },
        }),
      ],
    }''')

# Contact page: ContactPage plus the public business email already shown on the page.
add_import('src/routes/contact.tsx', SEO_IMPORT)
replace_static_head('src/routes/contact.tsx', '''    const head = pageHead({
      title: "Contact Dr Zee — Physician Medical Writer",
      description:
        "Send Dr Zee a medical writing brief for patient education, clinical articles, medical SEO, drug information, literature reviews, or healthcare white papers.",
      path: "/contact",
      keywords: "contact medical writer, commission physician writer, paediatric medical content, medical writing brief",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Contact Dr Zee — Physician Medical Writer",
            description:
              "Start a project with Dr. Zeeshan Islam, physician and medical content specialist.",
            path: "/contact",
            type: "ContactPage",
          }),
          mainEntity: {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#organization`,
            name: "DrZeeWrites",
            email: "hello@drzeewrites.com",
            founder: { "@id": `${SITE_URL}/about#person` },
          },
        }),
      ],
    }''')

# Blog index: make the author and article collection explicit.
add_import('src/routes/blog.tsx', SEO_IMPORT)
replace_static_head('src/routes/blog.tsx', '''    const head = pageHead({
      title: "Medical Writing Resources & Insights | Dr Zee",
      description:
        "Evidence-based articles by Dr Zee on medical SEO, patient education, clinical evidence appraisal, and trustworthy healthcare content.",
      path: "/blog",
      keywords: "medical writing blog, medical SEO insights, patient education writing, clinical evidence appraisal",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Resources & Insights | Dr Zee",
            description:
              "Evidence-led articles on medical writing, clinical communication, patient education, and healthcare SEO.",
            path: "/blog",
            type: "CollectionPage",
          }),
          author: { "@id": `${SITE_URL}/about#person` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: POSTS.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/blog/${post.slug}`,
              name: post.title,
            })),
          },
        }),
      ],
    }''')

# Legal pages should remain indexable, but their metadata must be specific and should not inherit marketing copy.
add_import('src/routes/privacy.tsx', SEO_IMPORT)
replace_static_head('src/routes/privacy.tsx', '''    const head = pageHead({
      title: "Privacy Policy — DrZeeWrites",
      description: "How DrZeeWrites handles contact enquiries, website data, cookies, and third-party services.",
      path: "/privacy",
    });
    return { ...head, scripts: [jsonLd(webPageSchema({ title: "Privacy Policy — DrZeeWrites", description: "Website privacy and data handling information for DrZeeWrites.", path: "/privacy" }))] }''')
add_import('src/routes/terms.tsx', SEO_IMPORT)
replace_static_head('src/routes/terms.tsx', '''    const head = pageHead({
      title: "Terms of Use & Medical Disclaimer — DrZeeWrites",
      description: "Terms governing use of DrZeeWrites, including intellectual property, engagement terms, and the medical information disclaimer.",
      path: "/terms",
    });
    return { ...head, scripts: [jsonLd(webPageSchema({ title: "Terms of Use & Medical Disclaimer — DrZeeWrites", description: "Website terms and medical disclaimer for DrZeeWrites.", path: "/terms" }))] }''')

# Keep noindex behavior for invalid dynamic URLs, but use canonical absolute URLs and author entity for valid review pages.
review = ROOT / 'src/routes/reviews.$slug.tsx'
text = review.read_text()
if SEO_IMPORT not in text:
    text = text.replace('export const Route =', SEO_IMPORT + '\nexport const Route =', 1)
start = text.index('  head: ({ params, loaderData }) => {')
end = text.index('\n  component: ReviewPage,', start)
new_head = '''  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Review unavailable — DrZeeWrites" }, { name: "robots", content: "noindex, follow" }],
      };
    }
    const r = loaderData.review;
    const title = `${r.title} — Literature Review | DrZeeWrites`;
    const description = `${r.pages}-page physician-authored literature review (${r.span}). ${r.summary}`.slice(0, 158);
    const path = `/reviews/${params.slug}`;
    const url = `${SITE_URL}${path}`;
    return {
      ...pageHead({
        title,
        description,
        path,
        type: "article",
        keywords: r.keywords.join(", "),
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "@id": `${url}#article`,
          url,
          headline: r.title,
          abstract: r.abstract,
          description,
          keywords: r.keywords.join(", "),
          inLanguage: "en-GB",
          datePublished: `${r.year}-01-01`,
          audience: { "@type": "MedicalAudience", audienceType: r.audience },
          author: { "@id": `${SITE_URL}/about#person` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          isAccessibleForFree: !r.gated,
          mainEntityOfPage: { "@id": `${url}#webpage` },
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: `${SITE_URL}/portfolio` },
            { "@type": "ListItem", position: 2, name: r.shortTitle, item: url },
          ],
        }),
      ],
    };
  },'''
text = text[:start] + new_head + text[end:]
review.write_text(text)

# Blog article metadata: author, publisher, canonical URL, and a valid article date.
blog = ROOT / 'src/routes/blog.$slug.tsx'
text = blog.read_text()
if SEO_IMPORT not in text:
    text = text.replace('export const Route =', SEO_IMPORT + '\nexport const Route =', 1)
start = text.index('  head: ({ loaderData }) => {')
end = text.index('\n  component: BlogPost,', start)
new_head = '''  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — DrZeeWrites" }, { name: "robots", content: "noindex, follow" }],
      };
    }
    const p = loaderData.post;
    const description = p.excerpt;
    const path = `/blog/${p.slug}`;
    const url = `${SITE_URL}${path}`;
    return {
      ...pageHead({
        title: `${p.title} — Dr Zee`,
        description,
        path,
        type: "article",
        keywords: p.tag,
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          url,
          headline: p.title,
          description,
          datePublished: p.date,
          dateModified: p.date,
          author: { "@id": `${SITE_URL}/about#person` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: { "@id": `${url}#webpage` },
          keywords: p.tag,
          inLanguage: "en-GB",
        }),
      ],
    };
  },'''
text = text[:start] + new_head + text[end:]
blog.write_text(text)

print('SEO patch applied')
