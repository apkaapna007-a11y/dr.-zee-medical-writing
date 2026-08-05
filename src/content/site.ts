export const SERVICES = [
  {
    slug: "medical-writing",
    title: "Medical Writing",
    summary:
      "Regulatory-adjacent and promotional medical content written by a practising physician — accurate, referenced and audience-calibrated.",
    deliverables: ["Manuscripts", "Clinical narratives", "Slide decks", "Med-comms copy"],
  },
  {
    slug: "scientific-writing",
    title: "Scientific Writing",
    summary:
      "Structured, journal-ready scientific prose: methods, results and discussion sections that survive peer review.",
    deliverables: ["Original research", "Review articles", "Abstracts", "Posters"],
  },
  {
    slug: "medical-reviewing",
    title: "Medical Reviewing",
    summary:
      "Independent clinical accuracy review against primary literature and current guidelines, with a documented reference trail.",
    deliverables: ["Accuracy review", "Guideline check", "Reference verification"],
  },
  {
    slug: "medical-editing",
    title: "Medical Editing",
    summary:
      "Substantive and copy editing that tightens argument, terminology and style without diluting clinical meaning.",
    deliverables: ["Substantive edit", "Copy edit", "AMA/Vancouver styling"],
  },
  {
    slug: "patient-education",
    title: "Patient Education",
    summary:
      "Plain-language materials written at a controlled reading level, health-literacy tested and empathetic in tone.",
    deliverables: ["Leaflets", "Condition guides", "Discharge instructions", "App copy"],
  },
  {
    slug: "healthcare-seo",
    title: "Healthcare SEO Content",
    summary:
      "Search-visible clinical content that satisfies E-E-A-T: physician-authored, cited, and structured for featured snippets.",
    deliverables: ["Pillar pages", "Clinical blogs", "Schema-ready copy"],
  },
  {
    slug: "literature-reviews",
    title: "Literature Reviews",
    summary:
      "Systematic and narrative reviews with transparent search strategy, screening logic and evidence grading.",
    deliverables: ["Narrative review", "Rapid review", "Evidence tables"],
  },
  {
    slug: "white-papers",
    title: "White Papers",
    summary:
      "Authority assets for pharma, CROs and digital health — commercially aware, scientifically defensible.",
    deliverables: ["Thought leadership", "Market-facing science", "Executive summaries"],
  },
  {
    slug: "drug-monographs",
    title: "Drug Monographs",
    summary:
      "Concise, standardised monographs covering pharmacology, dosing, safety and paediatric considerations.",
    deliverables: ["Monographs", "Formulary summaries", "Prescriber briefs"],
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  "Patient Education",
  "HCP Articles",
  "Medical Blogs",
  "White Papers",
  "Drug Monographs",
  "Literature Reviews",
  "Case Studies",
  "Downloadable PDFs",
] as const;

export type PortfolioItem = {
  title: string;
  category: (typeof PORTFOLIO_CATEGORIES)[number];
  audience: string;
  blurb: string;
  file?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Fever in the Under-Fives: A Parent's Guide",
    category: "Patient Education",
    audience: "Caregivers · Reading level 7",
    blurb:
      "Plain-language guidance on antipyretic dosing, red-flag symptoms and when to attend the emergency department.",
  },
  {
    title: "Bronchiolitis Management: What the Evidence Supports",
    category: "HCP Articles",
    audience: "Paediatricians · Primary care",
    blurb:
      "Critical appraisal of supportive care, high-flow oxygen and the evidence against routine bronchodilators.",
  },
  {
    title: "Paediatric Sepsis Recognition in the First Hour",
    category: "Case Studies",
    audience: "PICU · Emergency teams",
    blurb:
      "A de-identified clinical narrative tracing recognition, fluid strategy and escalation decisions.",
  },
  {
    title: "Salbutamol: Paediatric Drug Monograph",
    category: "Drug Monographs",
    audience: "Formulary committees",
    blurb:
      "Pharmacology, weight-based dosing, adverse effects and monitoring, referenced to current formularies.",
  },
  {
    title: "Digital Therapeutics in Childhood Asthma",
    category: "White Papers",
    audience: "Digital health · Investors",
    blurb:
      "Market and evidence landscape for connected inhalers, adherence data and regulatory pathways.",
  },
  {
    title: "Vitamin D Supplementation in Infancy: Narrative Review",
    category: "Literature Reviews",
    audience: "Clinical audience",
    blurb:
      "Transparent search strategy across 42 sources with an evidence table and practice implications.",
  },
  {
    title: "Antibiotic Stewardship for Paediatric Practices",
    category: "Medical Blogs",
    audience: "Clinic marketing · SEO",
    blurb:
      "Search-optimised, physician-authored article balancing E-E-A-T signals with genuine clinical depth.",
  },
  {
    title: "Immunisation Schedule Explainer (PDF)",
    category: "Downloadable PDFs",
    audience: "Clinics · Health systems",
    blurb: "Print-ready caregiver handout with schedule table, side-effect guidance and FAQs.",
  },
];

export const PUBLICATIONS = [
  {
    title: "Predictors of Prolonged PICU Stay in Children with Severe Pneumonia",
    venue: "Clinical publication · in preparation",
    year: "2026",
    type: "Clinical publication",
    summary:
      "Retrospective analysis of admission variables associated with extended intensive care length of stay.",
  },
  {
    title: "Nutritional Rehabilitation in Severe Acute Malnutrition: A Practice Summary",
    venue: "Research summary",
    year: "2025",
    type: "Research summary",
    summary:
      "Condensed evidence summary of WHO protocols, refeeding risk and community follow-up outcomes.",
  },
  {
    title: "Neonatal Jaundice: Bridging Guideline and Bedside",
    venue: "Published article",
    year: "2025",
    type: "Published article",
    summary:
      "Practitioner-facing article translating phototherapy thresholds into decision support at the cot side.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The clinical accuracy was on another level. We stopped needing a separate medical reviewer — the first draft already held up against the guidelines.",
    name: "Head of Content",
    role: "Medical communications agency",
  },
  {
    quote:
      "Our patient leaflets finally read like a doctor talking to a parent, not a legal department. Comprehension scores improved measurably.",
    name: "Director of Patient Experience",
    role: "Hospital network",
  },
  {
    quote:
      "Deadlines met, references verified, and the white paper opened doors with clinical advisors we'd been chasing for months.",
    name: "Founder",
    role: "Digital health startup",
  },
];

export const POSTS = [
  {
    slug: "eeat-medical-content",
    title: "E-E-A-T Is a Clinical Standard, Not an SEO Trick",
    date: "2026-06-18",
    readingTime: "6 min",
    tag: "Healthcare SEO",
    excerpt:
      "Why physician authorship, citation hygiene and honest uncertainty outperform keyword tactics in health search.",
  },
  {
    slug: "plain-language-without-losing-precision",
    title: "Plain Language Without Losing Clinical Precision",
    date: "2026-05-02",
    readingTime: "5 min",
    tag: "Patient Education",
    excerpt:
      "A practical framework for lowering reading level while protecting the meaning of dose, risk and timing.",
  },
  {
    slug: "reading-a-paediatric-trial",
    title: "How I Read a Paediatric Trial Before Citing It",
    date: "2026-03-21",
    readingTime: "8 min",
    tag: "Evidence",
    excerpt:
      "Sample size, surrogate endpoints and age-band generalisability — the checks that keep content defensible.",
  },
];
