import capPdf from "@/assets/reviews/Pediatric_Community_Acquired_Pneumonia_Review.pdf.asset.json";
import capCover from "@/assets/reviews/Pediatric_Community_Acquired_Pneumonia_Review-cover.jpg.asset.json";
import probioticsPdf from "@/assets/reviews/Probiotics_Acute_Gastroenteritis_Review.pdf.asset.json";
import probioticsCover from "@/assets/reviews/Probiotics_Acute_Gastroenteritis_Review-cover.jpg.asset.json";
import vitdPdf from "@/assets/reviews/Vitamin_D_Supplementation_Children_Review.pdf.asset.json";
import vitdCover from "@/assets/reviews/Vitamin_D_Supplementation_Children_Review-cover.jpg.asset.json";

export type ReviewSample = {
  slug: string;
  title: string;
  shortTitle: string;
  audience: string;
  summary: string;
  abstract: string;
  highlights: string[];
  pages: number;
  year: number;
  span: string;
  tags: string[];
  keywords: string[];
  cover: string;
  file: string;
  /** Premium samples require name + email before the PDF unlocks. */
  gated: boolean;
};

export const LITERATURE_REVIEWS: ReviewSample[] = [
  {
    slug: "pediatric-community-acquired-pneumonia",
    title: "Evidence-Based Management of Pediatric Community-Acquired Pneumonia",
    shortTitle: "Pediatric Community-Acquired Pneumonia",
    audience: "Pediatricians · ID specialists · Emergency physicians",
    summary:
      "Systematic synthesis of diagnosis, severity stratification and antibiotic selection in childhood CAP, with an explicit read on antimicrobial resistance and where current guidelines diverge from practice.",
    abstract:
      "A 15-page systematic literature review covering the diagnosis, severity stratification, imaging thresholds and antibiotic selection for community-acquired pneumonia in children. The review reconciles IDSA/PIDS, WHO and BTS guidance against the 2020–2026 evidence base, quantifies the impact of rising macrolide and beta-lactam resistance, and closes with a practical prescribing algorithm for outpatient, ward and PICU settings.",
    highlights: [
      "Severity stratification criteria mapped to disposition decisions",
      "Antibiotic selection tables aligned to local resistance patterns",
      "Where guideline recommendations diverge from real-world practice",
      "Referenced to primary literature and current guidelines throughout",
    ],
    pages: 15,
    year: 2026,
    span: "2020–2026",
    tags: ["Systematic review", "Antimicrobial stewardship", "Guideline-aligned"],
    keywords: [
      "pediatric pneumonia",
      "community-acquired pneumonia children",
      "antimicrobial stewardship",
      "medical literature review",
    ],
    cover: capCover.url,
    file: capPdf.url,
    gated: false,
  },
  {
    slug: "probiotics-acute-gastroenteritis-children",
    title: "Probiotics for Acute Gastroenteritis in Children",
    shortTitle: "Probiotics in Acute Gastroenteritis",
    audience: "Pediatricians · Gastroenterology · Emergency medicine",
    summary:
      "Critical appraisal of recent randomized controlled trials, weighing strain-specific effect sizes against the large negative pragmatic trials — and what that means for bedside recommendations.",
    abstract:
      "A 14-page critical appraisal of the randomized evidence for probiotics in childhood acute gastroenteritis. The review separates strain-specific effects (Lactobacillus rhamnosus GG, Saccharomyces boulardii) from pooled meta-analytic signal, interrogates the methodology of the large negative pragmatic trials, and translates the residual uncertainty into defensible bedside and formulary recommendations.",
    highlights: [
      "Strain-level effect sizes rather than pooled probiotic averages",
      "Methodological critique of the major negative pragmatic trials",
      "Cost and formulary implications for pediatric units",
      "Clear statement of what the evidence cannot yet support",
    ],
    pages: 14,
    year: 2026,
    span: "2020–2026",
    tags: ["RCT appraisal", "Meta-analysis", "Critical review"],
    keywords: [
      "probiotics children",
      "acute gastroenteritis",
      "randomized controlled trial appraisal",
      "pediatric evidence review",
    ],
    cover: probioticsCover.url,
    file: probioticsPdf.url,
    gated: true,
  },
  {
    slug: "vitamin-d-supplementation-children",
    title: "Vitamin D Supplementation in Children",
    shortTitle: "Vitamin D Supplementation in Children",
    audience: "Pediatricians · Endocrinology · Nutrition · Family medicine",
    summary:
      "Clinical evidence on benefits, risks and dosing thresholds across bone health and immunity, reconciling international recommendations into a single practical prescribing view.",
    abstract:
      "A 13-page evidence synthesis on vitamin D supplementation in children, spanning rickets prevention, bone mineral density, respiratory infection and immune outcomes. International dosing recommendations are reconciled into a single prescribing view, with explicit thresholds for deficiency, insufficiency and toxicity, plus guidance for high-risk groups.",
    highlights: [
      "Deficiency, insufficiency and toxicity thresholds in one table",
      "International dosing recommendations reconciled side by side",
      "Risk–benefit framing for bone, respiratory and immune outcomes",
      "Practical prescribing guidance for high-risk pediatric groups",
    ],
    pages: 13,
    year: 2026,
    span: "2020–2026",
    tags: ["Evidence synthesis", "Dosing guidance", "Risk–benefit"],
    keywords: [
      "vitamin D children",
      "pediatric supplementation dosing",
      "evidence synthesis",
      "medical writing sample",
    ],
    cover: vitdCover.url,
    file: vitdPdf.url,
    gated: false,
  },
];

export function getReviewBySlug(slug: string) {
  return LITERATURE_REVIEWS.find((r) => r.slug === slug);
}
