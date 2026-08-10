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
  preview?: string;
  fullContent?: string;
  file?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Fever in the Under-Fives: A Parent's Guide",
    category: "Patient Education",
    audience: "Caregivers · Reading level 7",
    blurb:
      "Plain-language guidance on antipyretic dosing, red-flag symptoms and when to attend the emergency department.",
    preview:
      "A fever in a child under five is one of the most common reasons parents seek medical help. Most fevers are caused by viral infections and resolve within a few days with simple home care. This guide walks caregivers through safe use of paracetamol and ibuprofen (with weight-based dosing tables), how to recognise dehydration, and the specific red-flag signs — lethargy, non-blanching rash, fast breathing, persistent vomiting — that mean 'go to the emergency department now.' The language is calibrated to a Flesch-Kincaid grade 7 reading level, with short sentences, active voice and no jargon without immediate explanation.",
    fullContent: `## What is a fever?

A fever means your child's body temperature is higher than normal. For children under five, a temperature of **38.0 °C (100.4 °F) or above** is a fever. You can check this with a digital thermometer placed under the armpit or in the ear.

A fever is not a disease. It is a sign that your child's body is fighting an infection — usually a virus. Most fevers in young children are caused by common viral illnesses and get better on their own within two to three days.

## When to give medicine for fever

Fever medicine does not cure the illness. It makes your child more comfortable so they can drink fluids and rest. Give medicine if:

- Your child seems uncomfortable, upset or in pain
- Their temperature is above 38.5 °C (101.3 °F)
- They are not drinking well

**You do not need to give fever medicine just because the number on the thermometer is high.** If your child is playing, drinking and seems comfortable, you can watch and wait.

## Safe doses of paracetamol and ibuprofen

The dose depends on your child's **weight**, not their age. Check the bottle for the concentration (how many milligrams are in each 5 mL of liquid).

**Paracetamol (acetaminophen):**
- Dose: 15 mg per kg of body weight
- Give every 4 to 6 hours as needed
- Maximum 4 doses in 24 hours

**Ibuprofen:**
- Dose: 10 mg per kg of body weight
- Give every 6 to 8 hours as needed
- Maximum 3 doses in 24 hours
- Do not give if your child is dehydrated or has kidney problems

**Example:** If your child weighs 10 kg, the paracetamol dose is 150 mg (10 × 15). If your syrup is 120 mg per 5 mL, you would give about 6 mL.

Never give aspirin to a child under 16 years.

## How to care for your child at home

- **Fluids:** Offer small, frequent drinks. Breast milk, formula, water or oral rehydration solution are all good. Watch for signs of dehydration: fewer wet nappies, dry mouth, no tears when crying, sunken eyes.
- **Clothing:** Dress your child in light clothing. Do not bundle them in extra layers — this traps heat.
- **Room temperature:** Keep the room comfortable, around 20–22 °C (68–72 °F).
- **Rest:** Let your child rest as much as they need. They do not need to stay in bed if they feel like moving.
- **Food:** Do not force food. Fluids are more important. Appetite usually returns as the fever settles.

**Things that do not help and should not be used:** cold baths, ice packs, rubbing alcohol on the skin, or fan-cooling. These can make your child shiver, which raises body temperature further.

## Red flags: when to go to the emergency department

Take your child to the nearest emergency department **now** if any of these are present:

| Sign | What to look for |
|------|-----------------|
| **Very sleepy or hard to wake** | Your child does not respond normally, will not make eye contact, or seems confused |
| **Rash that does not fade** | Press a clear glass against the rash — if it does not fade under pressure, this is urgent |
| **Fast or difficult breathing** | Breathing much faster than normal, grunting, chest pulling in, or blue colour around the lips |
| **Stiff neck** | Your child cannot bend their chin to their chest or cries when you try |
| **Seizure (fit)** | Jerking movements, staring blankly, or becoming floppy — call emergency services if this lasts more than 5 minutes |
| **Persistent vomiting** | Cannot keep any fluids down, or vomiting continues for more than 8 hours |
| **Signs of dehydration** | No wet nappy in 8 hours, very dry mouth, no tears, sunken eyes or soft spot on the head |
| **Age under 3 months** | Any fever of 38.0 °C or above in a baby under 3 months needs urgent medical assessment |

## When to see your doctor (non-urgent)

Contact your doctor within 24 hours if:

- The fever lasts more than 3 days
- Your child seems to be getting worse after initially improving
- You are worried for any reason you cannot explain
- Your child has a chronic medical condition or weakened immune system

## What to expect

Most viral fevers last 2 to 3 days. The temperature may go up and down during this time — this is normal. The fever pattern does not tell you how serious the illness is. A child with a high temperature who is otherwise alert and drinking is usually less concerning than a child with a low temperature who is very lethargic.

Trust your instincts. If you feel something is wrong, seek medical advice — even if the thermometer says the fever has come down.`,
  },
  {
    title: "Bronchiolitis Management: What the Evidence Supports",
    category: "HCP Articles",
    audience: "Paediatricians · Primary care",
    blurb:
      "Critical appraisal of supportive care, high-flow oxygen and the evidence against routine bronchodilators.",
    preview:
      "Bronchiolitis remains the single largest cause of infant hospitalisation in the winter months, yet practice variation persists — particularly around bronchodilators, nebulised hypertonic saline and the threshold for high-flow nasal cannula. This article for a paediatric audience walks through the 2023 AAP guideline alongside the latest PIC data, separating what is supported (suctioning, hydration, HFNC in moderate-severe cases) from what is not (routine salbutamol, systemic corticosteroids, chest physiotherapy). A disposition table maps severity markers to ward vs. PICU admission criteria.",
    fullContent: `## Scope and burden

Bronchiolitis accounts for approximately 1 in 3 hospital admissions in infants during peak winter months in temperate climates. In children under 12 months, it is the single largest cause of respiratory hospitalisation. Most cases are viral — respiratory syncytial virus (RSV) accounts for 60–80% of admissions — and the disease course is typically self-limiting, but the volume of admissions, the variability in practice and the ongoing debate about interventions make it a high-yield topic for evidence-based review.

This article summarises the current evidence base, aligned with the 2023 AAP Clinical Practice Guideline and supplemented by recent systematic reviews and pragmatic trials published through 2026.

## Diagnosis

Bronchiolitis is a clinical diagnosis. The hallmark is a first episode of wheeze and/or crackles in a child under 24 months, preceded by 2–3 days of upper respiratory symptoms (rhinorrhoea, cough, low-grade fever). The AAP guideline recommends against routine chest X-ray, blood gas or viral testing in typical presentations, as these do not change management and may lead to unnecessary interventions.

**Key diagnostic considerations:**
- Age of onset: first episode before 24 months
- Seasonality: winter/early spring in temperate climates
- Progression: symptoms peak on days 3–5, then gradually improve over 7–14 days
- Differential: asthma (rare under 12 months), pertussis, foreign body aspiration, cardiac failure, cystic fibrosis

## What the evidence supports

### Nasopharyngeal suctioning
Clearing the upper airway before feeds and sleep is the most consistently supported intervention. Deep suctioning is not recommended — gentle bulb or mechanical suction of the nares is sufficient. Evidence quality: moderate.

### Hydration
Dehydration is the most common complication. Oral or nasogastric fluids are appropriate for mild-moderate disease. IV fluids are indicated when oral/NG intake is inadequate or the child is in significant distress. Monitoring input/output and weight is essential.

### Oxygen supplementation
Supplemental oxygen is indicated for SpO₂ persistently below 90–92% (threshold varies by guideline). Continuous SpO₂ monitoring is not recommended once the child is stable and maintaining saturations in air, as this prolongs hospital stay without improving outcomes (Sanz et al., 2023).

### High-flow nasal cannula (HFNC)
HFNC (heated, humidified high-flow therapy) has emerged as the most significant change in bronchiolitis management over the past five years. The 2023 AAP guideline gives HFNC a moderate-strength recommendation for moderate-to-severe bronchiolitis. Recent RCTs (RCT-REFLOW, 2024; PIC-TRIAL, 2025) demonstrate:
- Reduced intubation rates in moderate-severe cases (NNT ~12)
- Reduced work of breathing within 1–2 hours of initiation
- No significant difference in time to readiness for discharge compared with standard oxygen therapy in mild cases

**Practical threshold:** HFNC is most appropriate when the child has moderate respiratory distress (Recessions Score ≥5, RR >60 in infants, significant feeding difficulty) despite standard oxygen therapy. It is not indicated for mild disease.

### Disposition criteria

| Severity | Clinical features | Disposition |
|----------|------------------|-------------|
| **Mild** | SpO₂ ≥92% in air, minimal recessions, feeding >50% normal | Home with safety-netting if reliable follow-up |
| **Moderate** | SpO₂ 90–92%, moderate recessions, feeding 25–50% | Ward admission; consider HFNC if not improving |
| **Severe** | SpO₂ <90% despite oxygen, severe recessions, apnoea, feeding <25% | Ward or PICU depending on response to initial therapy |
| **Critical** | Apnoea, impending respiratory failure, shock | PICU admission; consider intubation |

## What the evidence does NOT support

### Routine bronchodilators (salbutamol)
The AAP guideline recommends **against** a trial of bronchodilators in bronchiolitis. Multiple systematic reviews (Cochrane 2022, updated 2024) confirm no meaningful reduction in admission rates, length of stay or disease severity. A small subset of children with personal or family history of atopy may benefit from a single supervised trial — but this should be assessed objectively (change in work of breathing, not just wheeze) and discontinued if there is no measurable response.

### Systemic corticosteroids
No benefit has been demonstrated in bronchiolitis across multiple RCTs and meta-analyses. Corticosteroids do not reduce admission rates, length of stay or time to resolution. They are not recommended.

### Nebulised hypertonic saline
The evidence is mixed. The 2023 AAP guideline gives a weak recommendation for nebulised hypertonic saline (3%) in hospitalised infants, based on a modest reduction in length of stay (approximately 0.5 days) in some studies. However, more recent pragmatic trials (2024–2025) have not replicated this benefit. It may be considered in hospitalised infants beyond the first 24 hours, but it should not be used in the emergency department to avoid admission.

### Chest physiotherapy
No benefit has been demonstrated. Chest physiotherapy is not recommended.

### Antibiotics
Bronchiolitis is a viral illness. Antibiotics are not indicated unless there is a concurrent bacterial infection (e.g., confirmed UTI, bacterial pneumonia). Co-existing bacterial infection occurs in <5% of bronchiolitis admissions.

## Areas of ongoing uncertainty

- **RSV prophylaxis (nirsevimab):** The monoclonal antibody nirsevimab has transformed RSV prevention in high-income settings, but its impact on bronchiolitis admission rates at a population level is still being evaluated. Early data (2025–2026) suggest a 30–40% reduction in RSV-related admissions in eligible infants.
- **HFNC weaning protocols:** No consensus exists on optimal weaning. Most centres reduce flow by 2 L/min every 4–12 hours based on clinical response, but this is not evidence-based.
- **Biomarkers:** No blood biomarker reliably distinguishes viral bronchiolitis from early bacterial respiratory infection in infants. Research is ongoing.

## References
1. AAP Clinical Practice Guideline: Diagnosis, Management, and Prevention of Bronchiolitis (2023 update). *Pediatrics.* 2023;151(1).
2. Cochrane Review: Bronchodilators for acute viral bronchiolitis in children under 2 years. Updated 2024.
3. Sanz N, et al. Continuous vs. discontinuous oxygen monitoring in bronchiolitis: a multicentre RCT. *Lancet Respir Med.* 2023;11(4):312–321.
4. RCT-REFLOW Investigators. High-flow nasal cannula vs. standard oxygen in moderate-severe bronchiolitis. *NEJM.* 2024;390(8):701–711.
5. PIC-TRIAL Group. Pragmatic trial of HFNC in infant bronchiolitis across 42 centres. *JAMA Pediatr.* 2025;179(2):145–155.`,
  },
  {
    title: "Paediatric Sepsis Recognition in the First Hour",
    category: "Case Studies",
    audience: "PICU · Emergency teams",
    blurb:
      "A de-identified clinical narrative tracing recognition, fluid strategy and escalation decisions.",
    preview:
      "A 3-year-old presents to the emergency department with a 24-hour history of fever and increasing lethargy. Initial vitals show tachycardia, prolonged capillary refill time and a lactate of 3.8 mmol/L. This case study traces the first 60 minutes of care: the recognition of compensated shock, the fluid bolus strategy (20 mL/kg isotonic crystalloid, reassessment after each aliquot), the decision to start broad-spectrum antibiotics within 30 minutes, and the escalation to PICU when perfusion did not normalise. De-identified and used here with permission to illustrate clinical reasoning under time pressure.",
  },
  {
    title: "Salbutamol: Paediatric Drug Monograph",
    category: "Drug Monographs",
    audience: "Formulary committees",
    blurb:
      "Pharmacology, weight-based dosing, adverse effects and monitoring, referenced to current formularies.",
    preview:
      "A standardised monograph covering salbutamol (albuterol) for paediatric use: mechanism of action (β₂-adrenergic agonism), pharmacokinetics specific to children, weight-based dosing tables for nebulised, MDI and IV routes, adverse effect profile (tachycardia, tremor, hypokalaemia), drug interactions and monitoring parameters. Special sections cover use in children under 2 years, dose adjustment in hepatic impairment, and storage requirements. Referenced to the WHO Model Formulary for Children, BNFC and current institutional formularies.",
  },
  {
    title: "Digital Therapeutics in Childhood Asthma",
    category: "White Papers",
    audience: "Digital health · Investors",
    blurb:
      "Market and evidence landscape for connected inhalers, adherence data and regulatory pathways.",
    preview:
      "Childhood asthma affects over 14 million children in the US alone, and medication adherence remains below 50% in most populations. This white paper maps the digital therapeutics landscape for paediatric asthma — connected inhalers with usage tracking, app-based symptom diaries, AI-driven exacerbation prediction — against the clinical evidence for adherence improvement and the regulatory pathways (FDA SaMD, CE marking) that digital health companies must navigate. Commercial analysis includes reimbursement codes, payer landscape and competitive positioning.",
  },
  {
    title: "Vitamin D Supplementation in Infancy: Narrative Review",
    category: "Literature Reviews",
    audience: "Clinical audience",
    blurb:
      "Transparent search strategy across 42 sources with an evidence table and practice implications.",
    preview:
      "A narrative review synthesising 42 primary sources (systematic reviews, RCTs and position statements from 2020–2026) on vitamin D supplementation in infants and young children. The review covers rickets prevention, bone mineral density outcomes, respiratory infection reduction and immune modulation. A transparent search strategy (PubMed, Cochrane, WHO guidelines) is documented, with inclusion/exclusion criteria. An evidence table grades each source by study design, sample size and effect magnitude. Practice implications reconcile divergent recommendations from AAP, ESPGHAN and WHO into a single dosing framework.",
  },
  {
    title: "Antibiotic Stewardship for Paediatric Practices",
    category: "Medical Blogs",
    audience: "Clinic marketing · SEO",
    blurb:
      "Search-optimised, physician-authored article balancing E-E-A-T signals with genuine clinical depth.",
    preview:
      "An SEO-optimised article targeting 'paediatric antibiotic stewardship' and related queries, structured for featured snippets with a clear definition section, a 'when antibiotics are (and aren't) needed' comparison table, and parent-facing FAQs. The article satisfies E-E-A-T requirements through physician authorship, citation of AAP and IDSA guidelines, and transparent discussion of evidence limitations. Word count: 1,800. Schema markup for FAQ and HowTo structured data is included in the page template.",
    fullContent: `## What is paediatric antibiotic stewardship?

Paediatric antibiotic stewardship is a structured approach to prescribing antibiotics in children that aims to use the right antibiotic, at the right dose, for the right duration — and to avoid antibiotics entirely when they are not needed. It is not about withholding treatment from children who need it. It is about ensuring that every antibiotic prescription does genuine good and avoids preventable harm.

Antibiotics are among the most commonly prescribed medications in children worldwide. Studies consistently show that 30–50% of outpatient antibiotic prescriptions in paediatrics are unnecessary or inappropriate — prescribed for viral infections that antibiotics cannot treat, given at incorrect doses, or continued for longer than the evidence supports.

## Why it matters

The harms of unnecessary antibiotics in children are not theoretical:

- **Antibiotic resistance:** Every antibiotic course selects for resistant bacteria. Children who receive multiple courses of antibiotics in early childhood are more likely to carry resistant organisms, and these organisms can spread within families and communities.
- **Side effects:** Diarrhoea, rash, allergic reactions and Clostridioides difficile infection are all more common in children who receive antibiotics. For every 10 courses of antibiotics prescribed in primary care, approximately 1–2 children will experience a side effect significant enough to require a follow-up visit.
- **Microbiome disruption:** Emerging evidence suggests that repeated antibiotic exposure in early life may affect the developing gut microbiome, with potential implications for immune development. While this research is still evolving, it adds weight to the principle of avoiding unnecessary courses.

## When antibiotics are needed — and when they are not

The most important stewardship decision is the first one: does this child need an antibiotic at all?

| Condition | Antibiotics indicated? | Notes |
|-----------|----------------------|-------|
| Common cold / viral URTI | No | Self-limiting; antibiotics do not shorten duration or prevent complications |
| Acute otitis media (AOM) | Sometimes | Under 6 months: always. 6–24 months: if bilateral or severe. Over 2 years: observe if mild and unilateral |
| Strep throat | Yes — if confirmed | Rapid antigen test or culture required before prescribing. Most sore throats are viral |
| Community-acquired pneumonia | Yes | Amoxicillin first-line in most guidelines. Duration 5 days is sufficient for uncomplicated cases |
| Bronchiolitis | No | Viral illness. Antibiotics do not change the course and may cause harm |
| Viral gastroenteritis | No | Hydration is the treatment. Antibiotics can prolong bacterial shedding in Salmonella |
| Urinary tract infection | Yes — if confirmed | Urinalysis and culture required. Empirical treatment while awaiting culture is appropriate |
| Sinusitis | Sometimes | Acute bacterial sinusitis: symptoms >10 days without improvement, or severe onset with high fever and purulent discharge >3 days |

## Practical steps for parents

If your child has been prescribed antibiotics, here are evidence-based steps to ensure the prescription is appropriate:

**Ask three questions:**
1. What infection are we treating? (If the answer is "just in case" or "it might be bacterial," ask whether a watchful-waiting approach is safe.)
2. What is the narrowest antibiotic that will work? (Broad-spectrum antibiotics are not always better — they disrupt more of the normal flora and select for more resistant organisms.)
3. How many days are needed? (Shorter courses are as effective as longer ones for most common childhood infections. Five days for pneumonia, 5–7 days for otitis media in older children, 3 days for uncomplicated UTI.)

**Do not:**
- Request antibiotics for a viral illness — they will not help and may cause harm
- Save leftover antibiotics for next time
- Stop antibiotics early without consulting your doctor (unless your doctor has advised a shorter course)

**Do:**
- Give the antibiotic at the correct dose and interval
- Complete the prescribed course unless your doctor advises otherwise
- Watch for side effects and report them promptly

## What clinics can do

Paediatric practices that implement stewardship programmes typically see a 20–30% reduction in antibiotic prescribing without any increase in complications or parent dissatisfaction. Key strategies include:

- **Delayed prescribing:** Give the prescription but ask the family to wait 48–72 hours before filling it. Many viral illnesses resolve in this window, and the prescription is never used. Studies show this reduces antibiotic use by 40% in AOM and URTI consultations.
- **Audit and feedback:** Track prescribing rates by clinician and compare against peers. Clinicians who see their own data are more likely to adjust practice.
- **Parent education materials:** Waiting room posters, handouts and website content that explain why antibiotics don't work for viruses — and that frame stewardship as protecting the child, not rationing care.
- **Point-of-care testing:** CRP rapid tests or procalcitonin (where available) can help distinguish bacterial from viral infections and support shared decision-making.

## Where the evidence has limits

Antibiotic stewardship is well-supported for the conditions listed above, but there are areas where the evidence is less clear:

- **Prolonged symptoms after apparent viral illness:** Some children develop secondary bacterial infections after a viral URTI. The challenge is distinguishing "this is taking longer than usual but will still resolve" from "this has become bacterial and needs treatment." Clinical judgement, supported by safety-netting advice, is the best tool here — not a blanket rule.
- **Children with chronic conditions:** Children with cystic fibrosis, immunodeficiency or complex medical needs may have different thresholds for antibiotic use. Stewardship principles still apply, but the risk-benefit calculation is individualised.
- **Cultural and regional variation:** Resistance patterns differ significantly by geography. Local antibiograms should guide empirical antibiotic choice, and stewardship programmes should be adapted to local epidemiology.

## References
1. AAP. Principles of Judicious Use of Antimicrobial Agents. *Pediatrics.* 2024 (updated guidance).
2. IDSA/SHEA. Practice Recommendations for Antimicrobial Stewardship in Pediatrics. *Clin Infect Dis.* 2023;77(4):e1–e34.
3. Fleming-Dutra KE, et al. Prevalence of Inappropriate Antibiotic Prescriptions Among US Ambulatory Care Visits, 2010–2024. *JAMA.* 2025;333(18):1573–1582.`,
  },
  {
    title: "Immunisation Schedule Explainer (PDF)",
    category: "Downloadable PDFs",
    audience: "Clinics · Health systems",
    blurb: "Print-ready caregiver handout with schedule table, side-effect guidance and FAQs.",
    preview:
      "A print-ready, 4-page PDF handout for clinic waiting rooms. Page 1: the current immunisation schedule in a visual timeline format (birth through 6 years). Page 2: common side effects by vaccine with 'what to do' guidance. Page 3: parent FAQs — 'Can my child get too many vaccines?', 'What if we miss a dose?', 'Is the MMR-autism link real?' Page 4: space for clinic stamp, date and practitioner signature. Designed for A4 and US Letter, with high-contrast typography and icon-based navigation for low-literacy audiences.",
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

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tag: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
  keyTakeaways: string[];
};

export const POSTS: Post[] = [
  {
    slug: "eeat-medical-content",
    title: "E-E-A-T Is a Clinical Standard, Not an SEO Trick",
    date: "2026-06-18",
    readingTime: "6 min",
    tag: "Healthcare SEO",
    excerpt:
      "Why physician authorship, citation hygiene and honest uncertainty outperform keyword tactics in health search.",
    keyTakeaways: [
      "Google's E-E-A-T framework mirrors the clinical reasoning already expected in medical publishing.",
      "Physician authorship alone is not enough — the content must demonstrate first-hand clinical reasoning.",
      "Citation hygiene (primary sources, current guidelines, explicit dates) is the single highest-leverage improvement most health content can make.",
      "Stating what the evidence does not show is a ranking signal, not a weakness.",
    ],
    sections: [
      {
        heading: "What E-E-A-T actually asks for",
        body: "Google's Search Quality Rater Guidelines introduced Experience, Expertise, Authoritativeness and Trustworthiness as signals that matter most for pages with real-world consequences — and health content sits at the top of that list. For medical writers, the useful interpretation is this: E-E-A-T is not a checklist to game. It is a description of what a careful clinician already does when they write. Experience means first-hand knowledge, not just textbook familiarity. Expertise means credentials and demonstrated reasoning. Authoritativeness means other experts point to you. Trustworthiness means the content is honest about what it knows and what it doesn't.",
      },
      {
        heading: "Why physician authorship is the floor, not the ceiling",
        body: "Having an MD after your name on a byline is necessary but not sufficient. Google's algorithms and human raters can distinguish between a physician who wrote from clinical reasoning and a physician whose name was attached to keyword-optimised copy generated elsewhere. The difference shows in the structure of the argument: which studies get cited, whether limitations are named, whether the writing reflects the uncertainty that exists at the bedside. Content that reads like a guideline summary written by someone who has actually used the guideline at 2 a.m. is recognisably different from content that reads like a literature search rearranged into paragraphs.",
      },
      {
        heading: "Citation hygiene: the highest-leverage fix",
        body: "Most health content fails at the most basic level: it cites second-hand sources, outdated guidelines or studies that have been superseded. A single article that traces every clinical claim to its primary source — the actual trial, the actual guideline, the actual formulary entry — immediately outperforms 90% of competing content. This means: citing the 2024 AAP guideline, not a 2019 blog post about the 2019 guideline. Naming the specific study, not saying 'studies show.' Including publication dates so readers and raters can see the evidence is current. And linking to primary sources where possible, so the claim is verifiable in one click.",
      },
      {
        heading: "Honest uncertainty as a ranking signal",
        body: "The counterintuitive insight about E-E-A-T in medical content is that admitting what you don't know strengthens the page. A paragraph that says 'the evidence for X in children under 2 remains limited; most guidelines recommend Y based on extrapolation from older age groups, but RCT data are pending' is more trustworthy — and more useful to a clinician reader — than a paragraph that smooths over the gap with confident language. Google's raters are explicitly instructed to look for this kind of honesty in YMYL (Your Money or Your Life) content. Writing that acknowledges uncertainty signals that the author understands the evidence well enough to know its boundaries.",
      },
      {
        heading: "Practical implications for medical writers",
        body: "If you are commissioning or creating health content, the E-E-A-T framework points to a short list of concrete actions: ensure every piece has a named, verifiable physician author with relevant clinical experience; require primary-source citations with dates; include a 'what the evidence does not yet show' section in every clinical article; structure content for featured snippets with clear definitions and comparison tables; and add structured data markup (FAQ, HowTo, MedicalScholarlyArticle) so search engines can parse the content's purpose. These are not SEO tricks. They are the editorial standards that clinical content should already meet.",
      },
    ],
  },
  {
    slug: "plain-language-without-losing-precision",
    title: "Plain Language Without Losing Clinical Precision",
    date: "2026-05-02",
    readingTime: "5 min",
    tag: "Patient Education",
    excerpt:
      "A practical framework for lowering reading level while protecting the meaning of dose, risk and timing.",
    keyTakeaways: [
      "Plain language is not dumbing down — it is translating clinical reasoning for a different audience.",
      "Dose, risk and timing are the three domains where precision must never be sacrificed for readability.",
      "A structured framework (audience first, then jargon audit, then read-aloud test) produces consistently better patient materials.",
      "Health literacy is a spectrum, not a binary — the same document may need a core version and a detail layer.",
    ],
    sections: [
      {
        heading: "The false choice between accuracy and accessibility",
        body: "The most common objection to plain-language patient education is that simplifying the language will lose clinical nuance. This is a false choice. The task is not to remove nuance — it is to express the same clinical meaning in words a parent reading at a grade-7 level will understand on the first pass. A sentence like 'Administer paracetamol 15 mg/kg per dose every four to six hours as needed for fever' becomes 'Give paracetamol syrup based on your child's weight: 15 milligrams for every kilogram they weigh. You can give a dose every 4 to 6 hours if the fever is making them uncomfortable.' The clinical content is identical. The second version is just written for the audience.",
      },
      {
        heading: "The three domains where precision is non-negotiable",
        body: "When adapting clinical content for patients, there are three domains where simplification must never cross into inaccuracy: dose, risk and timing. Dose: weight-based paediatric dosing must always include the unit, the frequency and the maximum. 'Give some medicine' is not plain language — it is dangerous. Risk: relative risk and absolute risk are different statements. 'Doubles the risk' means something very different depending on whether the baseline risk is 1% or 50%. Patient materials must state the baseline. Timing: 'as soon as possible' is not a useful instruction when the clinical question is whether to give antibiotics now or wait for culture results. Plain language should be more precise about timing, not less.",
      },
      {
        heading: "A practical framework",
        body: "The framework I use for patient education has four steps. First, audience calibration: who is reading this, in what setting, under what emotional state? A discharge instruction read in a busy ward is different from a condition guide read at home. Second, jargon audit: go through the draft and flag every clinical term. For each one, decide: does the patient need this word (and if so, define it immediately), or can it be replaced with a plain equivalent? Third, structural check: are the action items — what to do, when to do it, when to seek help — visually prominent and impossible to miss? Fourth, read-aloud test: read the document aloud to a colleague who is not a clinician. Where they pause or ask 'what does that mean?' is where the next revision starts.",
      },
      {
        heading: "Layering for different literacy levels",
        body: "Health literacy is not binary. The same caregiver may be fully capable of managing a nebuliser at home but unable to parse a paragraph about immune mechanisms. The solution is not to write down to the lowest common denominator — it is to layer the content. Start with a core summary in plain language: the key actions, the red flags, the timeline. Then add a 'more detail' section for readers who want to understand the reasoning. This structure serves both the anxious parent who needs to know what to do right now and the engaged caregiver who wants to understand why. Both are legitimate audiences for the same document.",
      },
    ],
  },
  {
    slug: "reading-a-paediatric-trial",
    title: "How I Read a Paediatric Trial Before Citing It",
    date: "2026-03-21",
    readingTime: "8 min",
    tag: "Evidence",
    excerpt:
      "Sample size, surrogate endpoints and age-band generalisability — the checks that keep content defensible.",
    keyTakeaways: [
      "Paediatric trials have unique limitations that adult-focused critical appraisal frameworks often miss.",
      "Age-band generalisability is the first thing to check — a trial in adolescents does not automatically apply to toddlers.",
      "Surrogate endpoints are common in paediatric research; understanding what they do and don't tell you is essential.",
      "The clinical question the trial was designed to answer may not be the question you are citing it for.",
    ],
    sections: [
      {
        heading: "Why paediatric trials need their own appraisal framework",
        body: "Most critical appraisal training uses adult trials as the default. But paediatric research has structural differences that change how you read it. Trials in children are often smaller, because the population is smaller and ethical constraints limit recruitment. They more frequently use surrogate endpoints — laboratory markers, severity scores — because clinically meaningful outcomes like mortality may be too rare to power a study. And they often span wide age ranges, from neonates to adolescents, which means the results may not apply equally across all ages. If you appraise a paediatric trial using an adult-focused checklist, you will miss the limitations that matter most.",
      },
      {
        heading: "The first check: age-band generalisability",
        body: "The first question I ask when I open a paediatric trial is: what age band was studied, and does it match the population I am writing about? This sounds obvious, but it is the single most common error in medical content that cites paediatric evidence. A trial of bronchodilators in children aged 5–12 does not automatically apply to a 6-month-old with wheeze. A study of vaccine immunogenicity in adolescents tells you nothing about neonatal responses. The age band matters because pharmacokinetics, immune responses, disease presentation and even the definition of a clinically meaningful outcome change with development. When I cite a paediatric trial, I always state the age range studied and flag where the population differs from the audience's typical patient.",
      },
      {
        heading: "Surrogate endpoints: what they can and cannot tell you",
        body: "Paediatric trials frequently use surrogate endpoints because hard clinical outcomes — death, organ failure, hospitalisation — may be too infrequent to detect a treatment effect in a feasible sample size. A trial might measure C-reactive protein reduction rather than pneumonia resolution, or viral load rather than clinical recovery time. Surrogate endpoints are useful, but they require an extra interpretive step: does change in this marker reliably predict change in the outcome that matters to the patient? When I cite a trial with a surrogate endpoint, I name the surrogate, state what it is supposed to predict, and flag whether that prediction has been validated in the relevant population. Content that presents a surrogate outcome as if it were a clinical outcome is not plain language — it is misleading.",
      },
      {
        heading: "Sample size and the precision problem",
        body: "Small sample sizes are the norm, not the exception, in paediatric research. A trial with 60 patients is not necessarily underpowered — it may be the largest study feasible in that population. But small samples mean wide confidence intervals, and wide confidence intervals mean the point estimate may not reflect the true effect. When I read a small paediatric trial, I look first at the confidence intervals, not the p-value. If the confidence interval includes both a clinically important benefit and a clinically important harm, the trial is inconclusive regardless of statistical significance. Content that cites the point estimate without acknowledging the confidence interval is presenting an incomplete picture.",
      },
      {
        heading: "The question the trial was designed to answer",
        body: "The final check is the one most likely to be skipped: does the trial's research question match the way I am about to cite it? A trial designed to test whether a drug is superior to placebo answers a different question than one testing whether it is non-inferior to standard treatment. A pragmatic trial in real-world clinic settings answers a different question than an explanatory trial in a tertiary centre. An equivalence trial that finds 'no difference' is not the same as a superiority trial that finds 'no difference.' When I cite a trial, I check that the study design, comparator and population match the claim I am making. The most common error in medical content is not getting the numbers wrong — it is using a trial to support a claim the trial was never designed to test.",
      },
    ],
  },
];
