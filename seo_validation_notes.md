# SEO validation notes

## Homepage checked locally

The homepage rendered at `http://127.0.0.1:8080/` with the title `Dr Zee — Physician & Medical Content Specialist`. Visible E-E-A-T signals include the physician/medical writer/scientific editor positioning, MBBS and MCPS Paediatrics credentials, PICU clinical experience, evidence-first/fully referenced messaging, AMA/Vancouver styling, links to the About and CV pages, and a physician-authored portfolio section.

The homepage also exposes three resource articles with distinct titles and excerpts. The browser page showed the current page content and route links successfully; the site footer includes the medical-information disclaimer.

Next validation step: inspect the rendered document head directly for canonical, Open Graph, Twitter, robots, and JSON-LD values, then inspect `/about`, `/portfolio`, `/blog`, and one dynamic article URL.

## Head inspection attempt

The homepage rendered correctly, but the browser console result was not returned as a structured object in the tool response. A second inspection will serialize the metadata as a JSON string before checking the remaining routes.

## Homepage head verified

The rendered homepage has the canonical URL `https://drzeewrites.com/`, a unique title, a page-specific description, author metadata naming Dr. Zeeshan Islam with MBBS and MCPS (Paediatrics), `robots` and `googlebot` directives allowing indexing, Open Graph URL/title/description/image, and Twitter card/title/image metadata.

The document contains JSON-LD for `WebSite`, `ProfessionalService`, and a `WebPage` whose `mainEntity` is the author `Person` entity. The author entity includes the physician name, credentials, role, about-page URL, and medical-writing topic expertise. The default OG image resolves to `https://drzeewrites.com/og-default.jpg`.

## About page verified

The About page rendered with the title `About Dr Zee — Physician & Medical Content Specialist`, canonical `https://drzeewrites.com/about`, page-specific description, author metadata, indexable robots directive, `og:type=profile`, and full social metadata.

The head contains `WebSite` plus `ProfilePage` JSON-LD. The ProfilePage `mainEntity` is Dr. Zeeshan Islam with MBBS and MCPS (Paediatrics), physician/medical content specialist role, paediatric and medical-writing expertise, and credential objects. The visible page reinforces this with clinical training, PICU experience, medical qualifications, writing services, and an evidence-first editorial philosophy.

## Portfolio page verified

The portfolio page rendered with the title `Medical Writing Portfolio — 24 Samples | Dr Zee`, canonical `https://drzeewrites.com/portfolio`, a unique description naming all eight portfolio categories, author metadata, indexable robots, Open Graph, and Twitter metadata.

The document contains `CollectionPage` JSON-LD with an `ItemList` of 24 samples and an author reference to the About-page Person entity. The browser showed all eight category filters and 24 sample cards. The page currently has strong category and reference-language signals, but the introductory copy should be strengthened with an explicit visible author/reviewer/process statement.

## Portfolio E-E-A-T refinement

The portfolio introduction now visibly states that the 24 pieces are original demonstration samples, separates NDA client work from portfolio examples, identifies Dr. Zeeshan Islam as author, describes physician-led clinical review, and clarifies that the pieces are for professional review rather than personal medical advice. Each sample card also includes an author/review line.

Strict TypeScript validation and the production build both pass after this change.

## Resources index verified

The resources index rendered with a unique title, canonical `https://drzeewrites.com/blog`, a page-specific description, author metadata, indexable robots, social metadata, and `CollectionPage` JSON-LD. The collection markup references Dr Zee's author entity and three article URLs. All three visible article cards show distinct titles, excerpts, publication dates, and reading times.

## Dynamic article route finding

The dynamic article URL `/blog/e-eat-in-medical-writing` receives the correct dynamic document title, but the rendered body remained on the resources index after navigation and browser refresh. This indicates a route/rendering issue separate from the metadata layer. The raw browser HTML has been saved for inspection; the article route should be repaired so the page body, BlogPosting metadata, and visible author/date content agree.

## Dynamic article route repaired and verified

The article URL now renders its own full page rather than the resources index. It has a visible article H1, publication date, tag, reading time, key takeaways, three substantive sections, and previous/next article navigation.

The rendered head has the article canonical plus an inherited parent canonical (the second canonical is the correct dynamic URL), article Open Graph metadata, author metadata, and `BlogPosting` JSON-LD with headline, description, publication and modification dates, author reference, publisher reference, and article URL. The nested parent page currently contributes a duplicate `/blog` canonical; this should be removed so each page outputs one canonical URL only.

## Canonical cleanup verified

The repaired dynamic article now emits exactly one canonical URL: `https://drzeewrites.com/blog/e-eat-in-medical-writing`. Its visible H1 matches the `BlogPosting` headline, and the article schema remains present with the correct URL and author reference.

## Publications page verified

The publications page has a unique title, canonical `https://drzeewrites.com/publications`, page-specific description, author metadata, indexable robots, Open Graph/Twitter metadata, and `CollectionPage` JSON-LD with two `ScholarlyArticle` items.

The visible page correctly says the record grows through submission and review, but the current entries contain journal/DOI-style identifiers. For E-E-A-T integrity, those identifiers should only remain if they are verified real publications owned by Dr Zee; otherwise they should be changed to clearly labelled portfolio evidence summaries without DOI identifiers or ScholarlyArticle markup.

## Publication provenance corrected

The page now explicitly distinguishes portfolio evidence summaries from independently verifiable publications. The entries are labelled as portfolio/evidence-synthesis samples, and the structured data uses `CreativeWork` with no `identifier`/DOI claims. Browser validation confirms the status copy is visible, two cards render, and no DOI identifier appears in the JSON-LD.
