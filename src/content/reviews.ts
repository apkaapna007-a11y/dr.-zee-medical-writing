import capPdf from "@/assets/reviews/Pediatric_Community_Acquired_Pneumonia_Review.pdf.asset.json";
import capCover from "@/assets/reviews/Pediatric_Community_Acquired_Pneumonia_Review-cover.jpg.asset.json";
import probioticsPdf from "@/assets/reviews/Probiotics_Acute_Gastroenteritis_Review.pdf.asset.json";
import probioticsCover from "@/assets/reviews/Probiotics_Acute_Gastroenteritis_Review-cover.jpg.asset.json";
import vitdPdf from "@/assets/reviews/Vitamin_D_Supplementation_Children_Review.pdf.asset.json";
import vitdCover from "@/assets/reviews/Vitamin_D_Supplementation_Children_Review-cover.jpg.asset.json";

export type ReviewSample = {
  title: string;
  audience: string;
  summary: string;
  pages: number;
  span: string;
  tags: string[];
  cover: string;
  file: string;
};

export const LITERATURE_REVIEWS: ReviewSample[] = [
  {
    title:
      "Evidence-Based Management of Pediatric Community-Acquired Pneumonia",
    audience: "Pediatricians · ID specialists · Emergency physicians",
    summary:
      "Systematic synthesis of diagnosis, severity stratification and antibiotic selection in childhood CAP, with an explicit read on antimicrobial resistance and where current guidelines diverge from practice.",
    pages: 15,
    span: "2020–2026",
    tags: ["Systematic review", "Antimicrobial stewardship", "Guideline-aligned"],
    cover: capCover.url,
    file: capPdf.url,
  },
  {
    title: "Probiotics for Acute Gastroenteritis in Children",
    audience: "Pediatricians · Gastroenterology · Emergency medicine",
    summary:
      "Critical appraisal of recent randomized controlled trials, weighing strain-specific effect sizes against the large negative pragmatic trials — and what that means for bedside recommendations.",
    pages: 14,
    span: "2020–2026",
    tags: ["RCT appraisal", "Meta-analysis", "Critical review"],
    cover: probioticsCover.url,
    file: probioticsPdf.url,
  },
  {
    title: "Vitamin D Supplementation in Children",
    audience: "Pediatricians · Endocrinology · Nutrition · Family medicine",
    summary:
      "Clinical evidence on benefits, risks and dosing thresholds across bone health and immunity, reconciling international recommendations into a single practical prescribing view.",
    pages: 13,
    span: "2020–2026",
    tags: ["Evidence synthesis", "Dosing guidance", "Risk–benefit"],
    cover: vitdCover.url,
    file: vitdPdf.url,
  },
];
