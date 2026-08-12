export const SERVICES = [
  {
    slug: "pediatrics",
    title: "Pediatric Clinical Writing",
    summary:
      "Specialised paediatric content bridging evidence-based medicine and clinical practice for hospitals, clinics, and health-tech platforms.",
    deliverables: ["Clinical guidelines", "Paediatric care pathways", "Growth & development guides", "Subspecialty overviews"],
  },
  {
    slug: "patient-education",
    title: "Patient Education",
    summary:
      "Empathetic, health-literacy tested materials written at controlled reading levels to engage families and improve health outcomes.",
    deliverables: ["Condition leaflets", "Discharge instructions", "Parenting guides", "App microcopy"],
  },
  {
    slug: "hcp-articles",
    title: "HCP & Clinical Articles",
    summary:
      "Rigorous, peer-referenced articles for physicians, nurses, and allied healthcare professionals covering diagnostics and management.",
    deliverables: ["CME articles", "Journal roundups", "Clinical reviews", "Conference reports"],
  },
  {
    slug: "medical-seo",
    title: "Medical SEO Writing",
    summary:
      "Search-optimised clinical content built on Google E-E-A-T principles — physician-authored, meticulously cited, and structured for visibility.",
    deliverables: ["Pillar content", "Clinical blog posts", "FAQ optimization", "Authoritative guides"],
  },
  {
    slug: "drug-monographs",
    title: "Drug & Therapeutics Monographs",
    summary:
      "Comprehensive pharmacology, dosing (including paediatric weight-based calculations), adverse profiles, and safety summaries.",
    deliverables: ["Clinical monographs", "Formulary guides", "Prescriber safety briefs", "Drug comparison tables"],
  },
  {
    slug: "literature-reviews",
    title: "Literature Reviews & Evidence Syntheses",
    summary:
      "Systematic and narrative evidence reviews with transparent search methodology, critical appraisal, and graded evidence tables.",
    deliverables: ["Narrative reviews", "Rapid evidence syntheses", "Evidence tables", "Critical appraisals"],
  },
  {
    slug: "case-studies",
    title: "Clinical Case Studies",
    summary:
      "Engaging case reports highlighting diagnostic reasoning, differential diagnoses, management steps, and clinical pearls.",
    deliverables: ["Paediatric case studies", "Diagnostic challenge reports", "Treatment pathways", "Clinical reasoning essays"],
  },
  {
    slug: "white-papers",
    title: "Healthcare White Papers",
    summary:
      "Authoritative thought-leadership documents for health-tech, pharma, and medical societies exploring future healthcare paradigms.",
    deliverables: ["Industry white papers", "Technology impact reports", "Preventive care strategies", "Executive summaries"],
  },
  {
    slug: "medical-editing",
    title: "Medical Editing & Review",
    summary:
      "Substantive and copy editing by a practising physician ensuring absolute clinical accuracy, AMA/Vancouver styling, and logical flow.",
    deliverables: ["Clinical accuracy audit", "AMA style editing", "Manuscript polish", "Reference verification"],
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  "Patient Education",
  "HCP / Clinical Articles",
  "Pediatrics",
  "SEO Medical Blogs",
  "Drug Monographs",
  "Literature Reviews",
  "Case Studies",
  "White Papers",
] as const;

export type PortfolioItem = {
  title: string;
  category: (typeof PORTFOLIO_CATEGORIES)[number];
  audience: string;
  blurb: string;
  preview?: string;
  fullContent?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  // ==================== 1. PATIENT EDUCATION (4) ====================
  {
    title: "Fever in Children: What Parents Should Know",
    category: "Patient Education",
    audience: "Parents & Caregivers · Reading Level Grade 7",
    blurb: "Plain-language guidance on measuring temperature, safe antipyretic dosing by weight, home care strategies, and emergency red flags.",
    fullContent: `## What is a Fever?

A fever means your child's body temperature is higher than normal. For children under five, a temperature of **38.0 °C (100.4 °F) or above** is considered a fever. You can check this accurately using a digital thermometer placed under the arm or in the ear.

A fever is not a disease in itself. It is a sign that your child's immune system is actively fighting off an infection—most commonly a harmless virus. Most fevers resolve completely within two to three days with simple supportive home care.

## When to Consider Medicine

Fever-reducing medications do not cure the underlying infection. Their main purpose is to make your child more comfortable so they can rest and drink fluids. You should consider giving medicine if:
- Your child is visibly uncomfortable, irritable, or in pain.
- Their temperature is above 38.5 °C (101.3 °F).
- They are refusing fluids due to discomfort.

**You do not need to medicate a fever simply because the thermometer number is high.** If your child is alert, smiling, and drinking well, you can safely monitor them without medication.

## Weight-Based Dosing Guidelines

Always calculate doses based on your child's **weight in kilograms**, not their age.
- **Paracetamol (Acetaminophen):** 15 mg/kg per dose, every 4 to 6 hours as needed (maximum 4 doses in 24 hours).
- **Ibuprofen:** 10 mg/kg per dose, every 6 to 8 hours as needed (maximum 3 doses in 24 hours; do not give if dehydrated or under 3 months).

## Emergency Red Flags

Seek emergency medical evaluation immediately if you observe any of the following:
| Symptom | What to Look For |
|---|---|
| **Breathing Difficulty** | Breathing much faster than normal, chest pulling in, or grunting |
| **Non-Blanching Rash** | A rash that does not fade when pressed with a clear glass |
| **Extreme Lethargy** | Unusually sleepy, difficult to wake up, or unresponsive |
| **Signs of Dehydration** | No wet diaper for 8 hours, dry mouth, no tears when crying |
| **Neurological Signs** | Stiff neck, severe headache, or a seizure lasting over 5 minutes |
| **Infant Age** | Any fever of 38.0 °C or higher in an infant under 3 months old |`
  },
  {
    title: "10 Warning Signs That Your Baby May Be Seriously Ill",
    category: "Patient Education",
    audience: "New Parents · Reading Level Grade 6",
    blurb: "An essential checklist for parents to distinguish between common infant fussiness and critical red flags requiring urgent medical care.",
    fullContent: `## Navigating Infant Health Concerns

Babies communicate primarily through crying, feeding patterns, and subtle behavioral cues. For new parents, discerning normal fussiness from signs of serious illness can be challenging. This guide outlines ten critical clinical warning signs in infants.

### The Top 10 Red Flags
1. **Extreme Lethargy:** Difficulty waking up, poor muscle tone (floppy), or lack of eye contact.
2. **Persistent Inconsolable Crying:** A continuous, high-pitched cry that cannot be soothed by feeding or holding.
3. **Respiratory Distress:** Tachypnoea (over 60 breaths/min), nasal flaring, chest retractions, or grunting.
4. **Abnormal Skin Color:** Pale, mottled, blue (cyanotic), or ashen skin tone.
5. **Fever in Neonates:** Any rectal temperature above 38.0 °C in an infant younger than 3 months.
6. **Dehydration Indicators:** Sunken fontanelle, dry mucous membranes, absence of tears, and fewer than 4 wet diapers in 24 hours.
7. **Persistent Vomiting:** Forceful (projectile) vomiting or green/bilious emesis.
8. **Bulging Fontanelle:** The soft spot on the head appearing tense or bulging while the baby is upright.
9. **Seizures or Spasms:** Brief unresponsiveness, rhythmic twitching, or sudden stiffening.
10. **Refusing All Feeds:** Inability to nurse or take bottle feeds for more than two consecutive feeding cycles.

### Trust Your Instincts
If your baby simply does not look right to you, trust your parental intuition and seek medical advice immediately.`
  },
  {
    title: "A Parent's Guide to Childhood Asthma",
    category: "Patient Education",
    audience: "Families & Caregivers · Reading Level Grade 7",
    blurb: "Comprehensive handbook on recognizing asthma triggers, understanding controller vs. reliever inhalers, and managing acute flare-ups.",
    fullContent: `## Understanding Childhood Asthma

Asthma is a chronic inflammatory condition affecting the airways, causing them to narrow, swell, and produce excess mucus. This results in recurrent episodes of wheezing, coughing, chest tightness, and shortness of breath.

### Controller vs. Reliever Medications
- **Relievers (Rescue Inhalers):** Fast-acting bronchodilators (e.g., salbutamol) used during acute symptoms to open airways rapidly.
- **Controllers (Preventer Inhalers):** Daily anti-inflammatory medications (e.g., low-dose inhaled corticosteroids) that prevent airway inflammation and reduce chronic hyper-responsiveness.

### Common Environmental Triggers
Viral respiratory infections, tobacco smoke, dust mites, pollen, pet dander, cold air, and vigorous physical activity can trigger asthma symptoms. Environmental mitigation at home is essential for maintaining control.`
  },
  {
    title: "Childhood Vaccines: A Practical Guide for Parents",
    category: "Patient Education",
    audience: "Parents & Expectant Mothers · Reading Level Grade 7",
    blurb: "Evidence-based overview of immunisation schedules, vaccine safety, immunology basics, and how vaccines protect communities.",
    preview: "Childhood immunisation is one of the greatest triumphs of modern medicine, saving millions of lives globally. This guide addresses common parental questions about vaccine safety, adjuvants, herd immunity, and the science behind how vaccines safely train the developing immune system.",
    fullContent: `## How Vaccines Train the Immune System

Vaccines introduce inactivated or attenuated antigens into the body, safely stimulating the immune system to produce antibodies and memory cells without causing disease. When exposed to the pathogen later, the immune system responds swiftly.

### Safety and Rigorous Testing
Vaccines undergo rigorous preclinical and clinical testing before approval and continuous post-marketing surveillance. Decades of robust global research confirm that vaccines do not cause autism or overwhelm the immune system.

### Community Protection
Maintaining high vaccination coverage establishes herd immunity, protecting vulnerable infants who are too young to receive specific immunisations.`
  },

  // ==================== 2. HCP / CLINICAL ARTICLES (4) ====================
  {
    title: "Approach to Fever Without a Source in Children",
    category: "HCP / Clinical Articles",
    audience: "Paediatricians & Emergency Physicians",
    blurb: "Evidence-based clinical review of risk stratification, diagnostic algorithms, and management of febrile infants and children.",
    fullContent: `## Clinical Definition and Diagnostic Challenge

Fever without a source (FWS) in children aged 0 to 36 months remains a central diagnostic challenge. The primary objective is identifying invasive bacterial infections (IBI)—such as urinary tract infection (UTI), bacteraemia, and bacterial meningitis—while avoiding unnecessary invasive testing and antimicrobial exposure in low-risk patients.

### Age-Based Stratification Protocols
1. **Neonates (<28 days):** Mandatory full septic workup (blood culture, urinalysis/culture, cerebrospinal fluid analysis and culture) paired with empirical parenteral broad-spectrum antibiotics (ampicillin and gentamicin or cefotaxime).
2. **Infants 29–60 days:** Evaluated using standardized risk criteria (Rochester, Philadelphia, or step-by-step algorithms incorporating procalcitonin, C-reactive protein, and urinalysis) to guide lumbar puncture and hospital admission.
3. **Children 3–36 months:** Widespread conjugate vaccination has dramatically reduced occult Streptococcus pneumoniae bacteraemia. Urinalysis is recommended for febrile girls under 24 months and uncircumcised boys under 12 months.`
  },
  {
    title: "Evaluation and Management of Acute Bronchiolitis in Infants",
    category: "HCP / Clinical Articles",
    audience: "Clinicians & Hospitalists",
    blurb: "Critique of current AAP guidelines, supportive care protocols, high-flow nasal cannula (HFNC) indications, and inappropriate therapies.",
    fullContent: `## Pathophysiology and Evidence-Based Management

Acute bronchiolitis is characterised by inflammation, epithelial necrosis, and oedema of the small airways, most frequently caused by respiratory syncytial virus (RSV).

### Supported Interventions vs. Inappropriate Care
- **Supportive Care:** Nasopharyngeal suctioning and maintenance of hydration are cornerstone therapies.
- **High-Flow Nasal Cannula (HFNC):** Recommended for moderate-to-severe respiratory distress failing standard oxygen therapy, significantly reducing intubation rates.
- **Unsupported Therapies:** Routine bronchodilators (salbutamol), systemic corticosteroids, nebulised hypertonic saline, and chest physiotherapy lack consistent evidence and are discouraged by international guidelines.`
  },
  {
    title: "Approach to Pediatric Dehydration",
    category: "HCP / Clinical Articles",
    audience: "Emergency Medicine & Primary Care",
    blurb: "Assessment of clinical deficit scales, selection of oral rehydration therapy (ORT) vs. IV fluids, and electrolyte management.",
    fullContent: `## Assessing Clinical Deficits

Paediatric dehydration secondary to acute gastroenteritis requires precise clinical assessment of fluid deficit percentage using validated clinical scoring systems (e.g., Gorelick scale evaluating general appearance, eyes, mucous membranes, and skin turgor).

### Rehydration Strategies
- **Mild-to-Moderate Dehydration:** Oral Rehydration Therapy (ORT) using low-osmolarity oral rehydration solution administered in frequent small aliquots (5 mL every 1–2 minutes) is superior to intravenous therapy.
- **Severe Dehydration / Shock:** Immediate vascular access (peripheral IV or intraosseous) and rapid infusion of isotonic crystalloid boluses (10–20 mL/kg), titrated against clinical perfusion.`
  },
  {
    title: "Recognition and Initial Management of Pediatric Sepsis",
    category: "HCP / Clinical Articles",
    audience: "Paediatric ICU & Emergency Clinicians",
    blurb: "Implementation of the Surviving Sepsis Campaign guidelines, early recognition bundles, vascular access, and fluid resuscitation.",
    fullContent: `## Time-Critical Resuscitation

Paediatric sepsis is a medical emergency where delays in recognition and antimicrobial administration increase mortality. Early physiological indicators include tachycardia out of proportion to fever, altered mental status, prolonged capillary refill, and abnormal peripheral pulses.

### The Golden Hour Bundle
1. Establish vascular access within 15 minutes (utilising intraosseous access if IV fails within 90 seconds) and obtain blood cultures.
2. Administer broad-spectrum intravenous antimicrobials within 30 minutes.
3. Initiate goal-directed fluid resuscitation (10–20 mL/kg isotonic crystalloids) and commence inotropic support (epinephrine or norepinephrine) for fluid-refractory shock.`
  },

  // ==================== 3. PEDIATRICS (4) ====================
  {
    title: "WHO Growth Charts Explained: Weight, Height and BMI in Children",
    category: "Pediatrics",
    audience: "Paediatricians & Allied Health Professionals",
    blurb: "Detailed analysis of World Health Organization growth standards, z-scores, velocity curves, and screening for growth faltering.",
    fullContent: `## Standardised Growth Monitoring

The WHO growth standards (0–5 years) and references (5–19 years) establish normative growth trajectories based on optimal international cohorts. Growth monitoring evaluates nutritional status and detects early systemic pathology.

### Centiles and Z-Scores
Clinical evaluation relies on z-scores rather than static centile lines:
- **Stunting:** Height-for-age z-score < -2.
- **Wasting:** Weight-for-height z-score < -2.
- **Overweight/Obesity:** BMI-for-age > +2 and > +3 z-scores respectively.
Longitudinal velocity tracking remains more diagnostically sensitive than single cross-sectional measurements.`
  },
  {
    title: "Failure to Thrive in Children: Clinical Approach",
    category: "Pediatrics",
    audience: "Paediatricians & Nutritionists",
    blurb: "Differential diagnosis of faltering growth, organic vs. non-organic causes, nutritional rehabilitation, and multidisciplinary management.",
    fullContent: `## Defining Faltering Growth

Failure to thrive (FTT) describes infants and children exhibiting suboptimal weight gain crossing two major centile lines downward.

### Diagnostic Categorisation
- **Non-Organic Causes:** Inadequate caloric intake due to poverty, maternal depression, improper formula dilution, or feeding dynamics.
- **Organic Causes:** Gastroesophageal reflux, celiac disease, cystic fibrosis, congenital heart disease, or chronic renal insufficiency.`
  },
  {
    title: "Common Pediatric Emergencies: Recognition of Red Flags",
    category: "Pediatrics",
    audience: "Emergency Nurses & Paediatric Residents",
    blurb: "Rapid triage protocols for acute paediatric emergencies including anaphylaxis, status epilepticus, acute poisoning, and upper airway obstruction.",
    fullContent: `## The Paediatric Assessment Triangle (PAT)

The PAT allows rapid, non-touch physiological evaluation across three domains: Appearance, Work of Breathing, and Circulation to Skin.

### Core Emergency Management
- **Anaphylaxis:** Immediate intramuscular adrenaline (0.01 mg/kg, max 0.5 mg) into the anterolateral thigh.
- **Status Epilepticus:** Benzodiazepines (IV/IO lorazepam or diazepam) as first-line therapy, progressing to second-line agents if seizures persist beyond 5 minutes.`
  },
  {
    title: "Pediatric Nutrition: Assessment and Management of Malnutrition",
    category: "Pediatrics",
    audience: "Paediatric Gastroenterologists & Clinical Dietitians",
    blurb: "Comprehensive review of protein-energy malnutrition (marasmus and kwashiorkor), micronutrient deficiencies, and therapeutic feeding protocols.",
    fullContent: `## Classification and Staged Rehabilitation

Severe Acute Malnutrition (SAM) is defined by weight-for-height z-score < -3, MUAC < 115 mm, or bilateral pitting oedema.

### WHO Staged Management
1. **Stabilisation Phase:** Address hypoglycaemia, hypothermia, and electrolyte imbalance using F-75 therapeutic formula.
2. **Rehabilitation Phase:** Transition to F-100 or Ready-to-Use Therapeutic Food (RUTF) to achieve rapid catch-up growth.`
  },

  // ==================== 4. SEO MEDICAL BLOGS (4) ====================
  {
    title: "Why Does My Child Have a Cough at Night?",
    category: "SEO Medical Blogs",
    audience: "Parents Searching Online · SEO Health Content",
    blurb: "Search-optimised clinical blog post exploring nocturnal cough triggers in children, post-nasal drip, asthma, and when to seek care.",
    fullContent: `## The Physiology of Nocturnal Coughing

Nighttime coughing is one of the most frequent reasons parents lose sleep. When a child lies flat, upper airway mucus pools in the pharynx, triggering cough receptors. Furthermore, normal nocturnal drops in cortisol and cooler bedroom air increase airway resistance.

### Common Clinical Culprits
- **Post-Nasal Drip:** Secondary to viral upper respiratory infections or allergic rhinitis.
- **Asthma:** Bronchospasm provoked by cool air and allergen accumulation in bedding.
- **Environmental Dryness:** Inadequate indoor humidity irritating inflamed mucosa.`
  },
  {
    title: "Baby Teething Symptoms: What Is Normal and What Isn't?",
    category: "SEO Medical Blogs",
    audience: "New Parents · Health Search",
    blurb: "Evidence-based SEO article separating normal teething signs (drooling, gum soreness) from red flags like high fever and diarrhoea.",
    fullContent: `## Separating Fact From Fiction in Teething

Teething is a normal developmental milestone starting around 6 months. While mild gum discomfort and increased drooling are expected, attributing systemic illnesses to teething can delay critical diagnoses.

### What Is Normal vs. Abnormal
- **Normal:** Mild gum tenderness, excessive mouthing, disrupted sleep, mild irritability.
- **Abnormal (Not Teething):** High fever (>38.5 °C), persistent vomiting, diarrhoea, and lethargy. These warrant investigation for acute infections such as otitis media or urinary tract infection.`
  },
  {
    title: "Why Does My Child Keep Getting Fevers?",
    category: "SEO Medical Blogs",
    audience: "Parents & Families · Search-Optimised",
    blurb: "Reassuring, physician-reviewed guide explaining recurrent viral infections in nursery school children and immune system development.",
    fullContent: `## The Daycare Infection Cycle

Parents often worry when toddlers in nursery school experience 6 to 8 viral infections annually. Each self-limiting viral illness contributes to adaptive immune system maturation.

### When to Consult an Immunologist
While frequent viral fevers are normal, recurrent severe bacterial infections, chronic fungal infections, or failure to thrive warrant screening for primary immunodeficiencies.`
  },
  {
    title: "When Should Parents Take a Child to the Emergency Room?",
    category: "SEO Medical Blogs",
    audience: "General Public · Emergency Health",
    blurb: "Clear, authoritative triage guide helping parents make calm, rapid decisions during paediatric medical emergencies.",
    fullContent: `## Triage Guidance for Parents

Knowing when an illness requires emergency department (ED) evaluation reduces anxiety and ensures timely care.

### Definitive Emergency Indicators
- **Respiratory:** Severe chest retractions, cyanosis, stridor at rest.
- **Neurological:** Unresponsiveness, lethargy, new seizures, acute confusion.
- **Trauma:** Head injury with vomiting, suspected fractures, severe burns.
- **Gastrointestinal:** Bilious vomiting, severe abdominal pain, bloody stools.`
  },

  // ==================== 5. DRUG MONOGRAPHS (2) ====================
  {
    title: "Amoxicillin: Clinical Drug Monograph",
    category: "Drug Monographs",
    audience: "Pharmacists, Physicians & Medical Writers",
    blurb: "Comprehensive pharmacological monograph covering mechanism of action, paediatric dosing tables, adverse reactions, and antimicrobial stewardship.",
    fullContent: `## Pharmacology and Clinical Dosing

Amoxicillin is an aminopenicillin inhibiting bacterial cell wall synthesis via penicillin-binding protein (PBP) binding.

### Paediatric Regimens
- **Acute Otitis Media:** High-dose regimen of 80–90 mg/kg/day divided BID to overcome penicillin-resistant Streptococcus pneumoniae.
- **Streptococcal Pharyngitis:** 50 mg/kg once daily (or 25 mg/kg BID) for 10 days.

### Adverse Profile
Common adverse events include gastrointestinal upset and non-allergic maculopapular rash. Contraindicated in immediate beta-lactam hypersensitivity.`
  },
  {
    title: "Ibuprofen: Clinical Drug Monograph",
    category: "Drug Monographs",
    audience: "Clinical Pharmacologists & Prescribers",
    blurb: "Standardised monograph detailing NSAID pharmacology, COX inhibition, paediatric antipyretic/analgesic dosing, and renal safety.",
    fullContent: `## Mechanism and Pharmacokinetics

Ibuprofen inhibits cyclooxygenase (COX-1 and COX-2) enzymes, decreasing prostaglandin synthesis. Rapidly absorbed orally with peak plasma levels in 1–2 hours.

### Paediatric Dosing & Safety
- **Dose:** 10 mg/kg per dose orally every 6 to 8 hours (max 40 mg/kg/day).
- **Contraindications:** Infants under 3 months, active GI bleeding, hypersensitivity, and dehydration due to risk of pre-renal acute kidney injury.`
  },

  // ==================== 6. LITERATURE REVIEWS (2) ====================
  {
    title: "Vitamin D Supplementation in Children: An Evidence-Based Review",
    category: "Literature Reviews",
    audience: "Academic Researchers & Paediatricians",
    blurb: "Critical synthesis of recent clinical trials examining vitamin D requirements, rickets prevention, immune modulation, and supplementation guidelines.",
    fullContent: `## Evidence Synthesis on Skeletal and Immune Health

Vitamin D deficiency remains a global health concern linked to nutritional rickets and impaired mineralisation.

### Clinical Findings
Randomised controlled trials confirm universal supplementation (400 IU/day) in exclusively breastfed infants prevents rickets. Emerging evidence also suggests potential immunomodulatory benefits in reducing acute respiratory infections in deficient populations.`
  },
  {
    title: "Probiotics in Pediatric Gastrointestinal Disorders: Current Evidence",
    category: "Literature Reviews",
    audience: "Gastroenterologists & Academic Writers",
    blurb: "Evidence-based appraisal of probiotic strains (Lactobacillus rhamnosus GG, Saccharomyces boulardii) in acute gastroenteritis and colic.",
    fullContent: `## Strain Specificity in Clinical Trials

Probiotic efficacy is strictly strain-dependent.

### Key Evidence
- **Acute Gastroenteritis:** Lactobacillus rhamnosus GG (LGG) and Saccharomyces boulardii moderately shorten acute diarrhoeal illness duration by ~24 hours when initiated early.
- **Antibiotic-Associated Diarrhoea:** High-quality trials support preventive efficacy, while functional bowel disorder data remain heterogeneous.`
  },

  // ==================== 7. CASE STUDIES (2) ====================
  {
    title: "Severe Dehydration in a Young Child: Clinical Case Study",
    category: "Case Studies",
    audience: "Paediatric Residents & Emergency Clinicians",
    blurb: "Detailed case report of an 18-month-old with rotavirus gastroenteritis, severe hypovolemic shock, intraosseous access, and rapid resuscitation.",
    fullContent: `## Case Presentation

An 18-month-old male presented with hypovolemic shock secondary to rotavirus gastroenteritis, exhibiting lethargy, mottled skin, delayed capillary refill (4s), and undetectable blood pressure.

### Resuscitation Outcome
Intraosseous access was secured immediately. Rapid isotonic crystalloid boluses (20 mL/kg) restored normal perfusion, normalized heart rate, and corrected metabolic acidosis within 45 minutes.`
  },
  {
    title: "A Child With Persistent Fever: Diagnostic Approach and Clinical Reasoning",
    category: "Case Studies",
    audience: "Clinicians & Medical Educators",
    blurb: "Diagnostic conundrum of a 4-year-old with FUO (Fever of Unknown Origin), differential diagnosis, imaging modalities, and final diagnosis.",
    fullContent: `## Diagnostic Workup of Paediatric FUO

A 4-year-old female presented with 21 days of daily fevers up to 39.5 °C with elevated inflammatory markers and negative initial cultures.

### Clinical Resolution
Systematic evaluation ruling out infectious and neoplastic etiologies via advanced imaging and rheumatologic panels established a definitive diagnosis of systemic Juvenile Idiopathic Arthritis (sJIA).`
  },

  // ==================== 8. WHITE PAPERS (2) ====================
  {
    title: "The Future of Preventive Pediatric Healthcare",
    category: "White Papers",
    audience: "Health-Tech Executives, Policymakers & Investors",
    blurb: "Strategic white paper exploring paradigm shifts from reactive treatment to proactive, genomic-driven preventive paediatric medicine.",
    fullContent: `## Strategic Paradigm Shift

Preventive paediatrics is transitioning from reactive acute care to proactive, predictive medicine.

### Key Pillars
1. Expanded newborn genomic screening.
2. Longitudinal digital phenotyping via wearable sensors.
3. Value-based paediatric reimbursement models aligned with lifelong metabolic health outcomes.`
  },
  {
    title: "Digital Health and AI in Modern Pediatric Care",
    category: "White Papers",
    audience: "Health-Tech Innovators & Clinical Leaders",
    blurb: "In-depth analysis of AI diagnostic tools, telemedicine workflows, ethical considerations, and clinical validation standards in paediatrics.",
    fullContent: `## AI Integration in Clinical Practice

Artificial intelligence offers transformative potential in paediatric diagnostic support, neonatal imaging analysis, and early sepsis prediction algorithms.

### Governance and Validation
Rigorous multi-site demographic validation and stringent minor data privacy compliance (COPPA, HIPAA) are mandatory prerequisites for clinical AI deployment.`
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Dr. Zee's clinical background shines through every piece. Rigorous referencing, perfect terminology, and zero hand-holding required.",
    name: "Sarah Jenkins",
    role: "Editorial Director, HealthComms Agency",
  },
  {
    quote: "Finding an SEO writer who actually understands paediatric pathophysiology and E-E-A-T guidelines is rare. Absolute gold standard.",
    name: "Dr. Marcus Vance",
    role: "Head of Content, Pediatric Health Tech",
  },
  {
    quote: "The drug monographs and clinical reviews were delivered on time and sailed through our internal medical legal review without a single flag.",
    name: "Elena Rostova",
    role: "VP of Regulatory Communications",
  },
] as const;

export type PostSection = {
  heading: string;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readingTime: string;
  keyTakeaways: string[];
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "e-eat-in-medical-writing",
    title: "Why Google's E-E-A-T Is a Clinical Standard, Not an SEO Trick",
    excerpt: "How first-hand physician experience and rigorous primary-source referencing separate credible health content from generic summaries.",
    tag: "SEO & E-E-A-T",
    date: "2026-08-12",
    readingTime: "5 min",
    keyTakeaways: [
      "Health content needs an identifiable author with relevant clinical expertise.",
      "References should support the claim being made, not simply decorate the page.",
      "Transparent editorial review and clear medical disclaimers build reader trust.",
    ],
    sections: [
      {
        heading: "Who wrote this matters in health content",
        body: "A medical article is not just a collection of keywords. Readers need to know who created it, what clinical perspective they bring, and where to find more information about that author. A physician byline does not replace evidence, but it makes the accountability pathway visible.",
      },
      {
        heading: "Evidence is part of the writing, not an afterthought",
        body: "A credible workflow begins with a focused clinical question, prioritises guidelines and primary research, and records important uncertainty. The final copy should make it easy for a reviewer to trace important statements back to the source that supports them.",
      },
      {
        heading: "The practical E-E-A-T checklist",
        body: "On each health page, I look for a clear author or reviewer, a useful About page, clinically appropriate references, a visible update or review process, and language that distinguishes general information from personal medical advice. Those elements serve people first and also help search systems understand the page.",
      },
    ],
  },
  {
    slug: "plain-language-clinical-precision",
    title: "Plain Language Without Diluting Clinical Precision",
    excerpt: "How to reduce reading burden while preserving the clinical meaning parents and caregivers need to make safer decisions.",
    tag: "Patient Education",
    date: "2026-07-29",
    readingTime: "6 min",
    keyTakeaways: [
      "Plain language is a clinical safety tool, not a replacement for accuracy.",
      "Short explanations work best when the action and the reason are close together.",
      "Red flags should be specific, observable, and easy to act on.",
    ],
    sections: [
      {
        heading: "Start with the reader's decision",
        body: "A parent leaflet should answer the question the reader is actually trying to solve: what can I do now, what should I watch for, and when should I call for help? The clinical detail is then selected to support those decisions rather than to display everything the writer knows.",
      },
      {
        heading: "Translate terms without deleting meaning",
        body: "I prefer a plain-English term followed by the clinical term when the distinction matters. For example, 'a rash that does not fade when pressed (a non-blanching rash)' is more useful than either phrase alone. It preserves precision while giving the reader an observable test.",
      },
      {
        heading: "Safety-netting is the core deliverable",
        body: "Good patient education does not over-reassure. It explains what is usually expected, names the features that change urgency, and gives an appropriate next step. That structure supports health literacy without turning a leaflet into a substitute for an examination.",
      },
    ],
  },
  {
    slug: "reading-paediatric-trials",
    title: "How I Read a Paediatric Trial Before Citing It",
    excerpt: "A clinician's framework for appraising sample size, outcomes, bias, and applicability before a paediatric study enters a medical article.",
    tag: "Evidence Review",
    date: "2026-07-15",
    readingTime: "7 min",
    keyTakeaways: [
      "A statistically significant result may still be clinically unimportant.",
      "Paediatric applicability depends on age, setting, baseline risk, and outcome definition.",
      "Trial limitations belong in the synthesis when they could change interpretation.",
    ],
    sections: [
      {
        heading: "Clarify the question and the population",
        body: "Before reading the result, I identify the trial's population, intervention, comparator, and outcome. In paediatrics, age bands, developmental stage, disease severity, and care setting can materially change whether the findings transfer to the intended reader.",
      },
      {
        heading: "Separate effect size from statistical significance",
        body: "I record the absolute effect, confidence interval, and number needed to treat when available. A relative reduction can sound impressive while producing little absolute benefit in a low-risk population. Conversely, a modest-looking effect may matter when the outcome is serious or the intervention is low burden.",
      },
      {
        heading: "Check how the outcome was measured",
        body: "Surrogate outcomes can be useful, but they are not interchangeable with outcomes families or clinicians value directly. I check who measured the outcome, whether assessors were blinded, how missing data were handled, and whether the analysis followed the prespecified intention-to-treat population.",
      },
    ],
  },
];

export const PUBLICATIONS = [
  {
    type: "Portfolio evidence summary",
    title: "Clinical Outcomes in Paediatric Bronchiolitis: A Multicentre Evaluation",
    summary: "A clinical research summary examining outcome measures and care variation in infants admitted with acute bronchiolitis.",
    venue: "Journal of Paediatric Child Health",
    journal: "Journal of Paediatric Child Health",
    year: "2024",
    role: "Lead Author",
  },
  {
    type: "Evidence synthesis sample",
    title: "Evidence-Based Antipyretic Stewardship in Outpatient Paediatrics",
    summary: "A focused review of safe, comfort-led antipyretic counselling and weight-based dosing communication in outpatient paediatrics.",
    venue: "Paediatric Therapeutics & Clinical Pharmacology",
    journal: "Paediatric Therapeutics & Clinical Pharmacology",
    year: "2023",
    role: "Co-Author",
  },
] as const;
