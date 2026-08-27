export type ToolKind =
  "daycare-tour" | "infant-handover" | "appointment" | "routine" | "feeding-log" | "illness-guide";

export type ToolPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  kind: ToolKind;
  keywords: string;
  safety: string;
};

export const TOOL_PAGES: ToolPage[] = [
  {
    slug: "daycare-tour-question-builder",
    title: "Daycare Tour Question Builder",
    eyebrow: "Choosing childcare",
    description:
      "Create a personalised, pediatrician-led question list for your daycare or childcare tour.",
    kind: "daycare-tour",
    keywords: "daycare tour checklist, questions to ask daycare, childcare questions",
    safety:
      "This tool helps you prepare questions and observations. It does not certify a provider or replace local licensing checks.",
  },
  {
    slug: "infant-handover-sheet",
    title: "Infant Handover Sheet",
    eyebrow: "Infant care",
    description:
      "Build a printable handover sheet for feeding, sleep, comfort, allergies, and daily communication.",
    kind: "infant-handover",
    keywords: "infant daycare handover sheet, baby daycare schedule, feeding nap log",
    safety:
      "Use the provider’s secure process for sensitive health information. This browser tool does not send or store your entries.",
  },
  {
    slug: "pediatric-appointment-checklist",
    title: "Pediatric Appointment Checklist",
    eyebrow: "Preparing for care",
    description:
      "Prepare notes, medicines, records, and questions before a child’s routine or problem-focused visit.",
    kind: "appointment",
    keywords:
      "pediatric appointment checklist, what to bring pediatrician, questions for pediatrician",
    safety:
      "Do not delay urgent or emergency care while completing this checklist. It is a preparation aid, not medical advice.",
  },
  {
    slug: "toddler-daycare-routine-planner",
    title: "Toddler Daycare Routine Planner",
    eyebrow: "Daily routines",
    description:
      "Create a flexible morning, daycare, pickup, and bedtime plan for a toddler’s transition.",
    kind: "routine",
    keywords: "toddler daycare routine planner, daycare schedule printable, toddler routine",
    safety:
      "Routines should remain flexible. A planner cannot diagnose sleep, behaviour, or developmental concerns.",
  },
  {
    slug: "baby-feeding-diaper-log",
    title: "Baby Feeding and Diaper Log",
    eyebrow: "Observing patterns",
    description:
      "Record feeds, wet nappies, stools, sleep, and notes to support clearer conversations with caregivers and clinicians.",
    kind: "feeding-log",
    keywords: "baby feeding log, diaper tracker, newborn care log, feeding and wet diaper tracker",
    safety:
      "A log does not determine whether a baby is feeding or hydrating adequately. Contact your clinician if you are concerned.",
  },
  {
    slug: "childcare-illness-conversation-guide",
    title: "Childcare Illness Conversation Guide",
    eyebrow: "Childcare health",
    description:
      "Prepare responsible questions about symptoms, provider policies, collection, medication, and return to care.",
    kind: "illness-guide",
    keywords: "daycare illness policy questions, when to keep child home, return to daycare",
    safety:
      "This guide does not diagnose illness or decide whether a child is safe to attend. Follow urgent-care advice and your provider’s written policy.",
  },
];

export function getTool(slug: string) {
  return TOOL_PAGES.find((tool) => tool.slug === slug);
}
