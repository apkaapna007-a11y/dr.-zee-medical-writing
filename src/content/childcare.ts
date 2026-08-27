export type ChildcareSection = {
  heading: string;
  body: string;
};

export type ChildcarePost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readingTime: string;
  keyTakeaways: string[];
  sections: ChildcareSection[];
  sources: { label: string; href: string }[];
};

export const CHILDCARE_POSTS: ChildcarePost[] = [
  {
    slug: "questions-to-ask-before-choosing-daycare",
    title: "Questions to Ask Before Choosing a Daycare: A Pediatrician’s Checklist",
    excerpt:
      "A practical, pediatrician-led checklist for comparing childcare providers, including health policies, safe sleep, supervision, staffing, communication, and emergency readiness.",
    tag: "Choosing childcare",
    date: "2026-08-27",
    readingTime: "10 min",
    keyTakeaways: [
      "Visit the actual rooms your child will use and ask to see the written health and safety policies.",
      "Ask how the provider handles safe sleep, feeding, medication, illness, emergencies, visitors, and pickup authorization.",
      "Compare the provider’s answers with your child’s age, health needs, temperament, and your family’s practical routine.",
      "A good tour should leave you with clear answers, not pressure to enrol before you have reviewed the details.",
    ],
    sections: [
      {
        heading: "Start with a visit, not just a brochure",
        body: "A website can tell you the hours and philosophy, but it cannot show you how adults supervise children, how rooms are organised, or whether staff communicate calmly during busy moments. Visit at a normal operating time if possible. Ask to see the room, sleep area, outdoor space, changing area, food-preparation area, and the route used during an emergency. Notice whether children are supervised by sight and sound and whether staff can explain the daily routine clearly.\n\nAsk which adults will care for your child most often, how substitutions are handled, and how the centre communicates staff changes to families. A warm interaction is valuable, but it should be supported by clear procedures and enough trained adults for the group.",
      },
      {
        heading: "Health, illness, and medication policies",
        body: "Request the written policies rather than relying on a verbal summary. Ask how the provider handles fever, vomiting, diarrhoea, contagious illnesses, rashes, breathing symptoms, and a child who becomes unwell during the day. Ask when parents are contacted, where an unwell child waits, and what documentation is needed before returning. General medical guidance and a provider’s exclusion policy may not be identical, so read both carefully.\n\nIf your child takes medication or has allergies, ask who can administer it, how consent is recorded, how medicines are stored, how doses are checked, and how accidental exposure is prevented. For a child with a chronic condition, ask whether the staff can follow an individual health plan and what training they receive.",
      },
      {
        heading: "Safe sleep and infant care",
        body: "For an infant, ask to see the sleep space and ask staff to describe the centre’s sleep routine. Discuss where babies sleep, how they are positioned, how the sleep area is kept clear, how staff check sleeping infants, and how individual feeding and sleep information is recorded. Ask how the centre responds when a baby will not settle or has a different routine from the group.\n\nAsk how bottles, expressed milk, formula, solids, and allergy information are labelled, stored, prepared, and communicated between staff. The goal is not to demand a rigid schedule; it is to make sure the provider has a safe, documented process that respects your baby’s needs.",
      },
      {
        heading: "Staffing, supervision, and emergency readiness",
        body: "Ask about staff qualifications, first-aid and CPR training, background checks where applicable, staff turnover, group size, and the provider’s planned staffing levels. Ask what happens when a usual caregiver is absent and whether children are ever moved between rooms. Your local licensing standards may set minimum requirements, but meeting a minimum is not the same as demonstrating excellent care.\n\nAsk how the provider handles choking, breathing difficulty, serious injury, a missing child, severe weather, fire, and emergency medical transport. Confirm that the centre has current emergency contacts, authorised-pickup procedures, and a plan for contacting you quickly. The American Academy of Pediatrics recommends asking about these practical areas when families assess childcare.[1]",
      },
      {
        heading: "Communication and family fit",
        body: "Ask how updates are shared, what information you receive at pickup, who contacts you when a concern develops, and how disagreements are handled. Discuss your child’s language, sleep, feeding, comfort, toileting, cultural, and accessibility needs. Ask what the first week usually looks like and whether the provider offers a gradual transition.\n\nThere is no single perfect childcare arrangement. The best choice is one that is safe, transparent, developmentally appropriate, workable for your family, and able to respond to your child’s individual health needs. Take notes during each visit and compare written answers rather than choosing only on appearance or availability.",
      },
      {
        heading: "A short decision checklist",
        body: "Before enrolling, confirm that you have reviewed the licence or registration information required in your area, the fee and holiday schedule, health and illness policy, medication and allergy process, safe-sleep arrangements, staff qualifications, emergency procedures, visitor and pickup rules, food and bottle procedures, communication system, and transition plan. Keep a copy of the policies and ask when they are updated.\n\nThis guide is general education, not a substitute for a visit, local regulatory advice, or your child’s own pediatric care. If your child has a medical condition, ask their clinician what information the childcare provider needs in order to care for them safely.",
      },
    ],
    sources: [
      { label: "American Academy of Pediatrics — Choosing a Child Care Center", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/choosing-a-child-care-center.aspx" },
      { label: "American Academy of Pediatrics — Your Child Care Checklist", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/your-child-care-checklist.aspx" },
    ],
  },
  {
    slug: "daycare-safety-checklist-for-infants",
    title: "Daycare Safety Checklist for Infants: What Parents Should Look For",
    excerpt:
      "Use this infant-focused safety checklist to ask about sleep, supervision, feeding, hygiene, transport, emergencies, and staff preparation before choosing a daycare.",
    tag: "Childcare safety",
    date: "2026-08-27",
    readingTime: "8 min",
    keyTakeaways: [
      "Infant safety depends on everyday systems, not only on a clean room or friendly tour.",
      "Ask staff to explain what they do, where they document it, and what happens when the usual caregiver is absent.",
      "Safe sleep, feeding, supervision, hygiene, and emergency procedures should be specific and consistently followed.",
    ],
    sections: [
      {
        heading: "Infant safety begins with the sleep space",
        body: "Ask to see where your baby will sleep and how the provider prepares the space. Ask how staff position babies, what is kept in the sleep area, how sleep checks are completed, and how the provider records sleep and wake times. Ask whether staff follow the family’s safe-sleep instructions and the centre’s written policy consistently.\n\nIf your baby uses a comfort item, swaddle, monitor, or specialist equipment, discuss it in advance with both the childcare provider and your pediatrician. The provider should be able to explain what is permitted and what alternatives are used when an item is not safe or not allowed by policy.",
      },
      {
        heading: "Feeding, bottles, and allergies",
        body: "Ask how breastmilk, formula, bottles, and solid foods are labelled, refrigerated, prepared, warmed, and discarded. Confirm how staff prevent mix-ups and how feeding amounts and times are recorded. Ask how the centre introduces foods and how you are informed about new foods or reactions.\n\nFor a baby with an allergy or feeding concern, ask who is trained to recognise a reaction, where the emergency plan is kept, who can administer prescribed treatment, and how staff communicate with parents. Bring written instructions from your child’s clinician when an individual plan is needed.",
      },
      {
        heading: "Supervision, hygiene, and changing",
        body: "Ask how infants are supervised during floor play, feeding, transitions, outdoor time, and sleep. Ask how staff maintain hand hygiene, clean changing surfaces, separate clean and dirty items, and manage toys that go into a baby’s mouth. A good answer should describe a routine that is practical during busy periods, not just a general promise to keep things clean.\n\nObserve whether staff can see and hear the infants, whether babies are placed safely during transitions, and whether the room has a clear process for recording feeds, nappies, sleep, and concerns. These small systems help families notice changes early.",
      },
      {
        heading: "Emergency planning and staff readiness",
        body: "Ask whether staff hold current first-aid and CPR training and how often emergency procedures are practised. Ask how the provider responds to choking, breathing difficulty, serious injury, an allergic reaction, fire, severe weather, and urgent transport. Confirm that staff know how to reach you and your nominated backup contacts.\n\nAsk how the provider checks that only authorised adults collect children and how visitors are identified. Also ask what happens if the primary caregiver is absent. An infant should not depend on one person’s memory for safe care; important instructions should be written, shared, and checked.",
      },
      {
        heading: "Printable tour checklist",
        body: "Before you leave, record whether you saw the infant sleep area; received the written safe-sleep, illness, medication, and emergency policies; understood bottle and food handling; observed direct supervision; confirmed staff training; discussed allergies and individual needs; understood the communication system; and learned what happens during staff absence or emergency closure. Compare the same checklist across every provider you visit.\n\nIf you are uncertain about a medical issue, ask your pediatrician a specific question about your child rather than relying on a general online checklist.",
      },
    ],
    sources: [
      { label: "American Academy of Pediatrics — Choosing a Child Care Center", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/choosing-a-child-care-center.aspx" },
      { label: "CDC — Protecting Against Infections in Early Care and Education", href: "https://www.cdc.gov/early-care/prevention/protecting-against-infections.html" },
    ],
  },
  {
    slug: "prepare-baby-for-daycare",
    title: "How to Prepare Your Baby for Daycare: Feeding, Sleep, and Drop-Off",
    excerpt:
      "A realistic preparation guide for families starting daycare, covering routines, bottles, naps, separation, communication, and the first week.",
    tag: "Starting daycare",
    date: "2026-08-27",
    readingTime: "8 min",
    keyTakeaways: [
      "Prepare the childcare handover gradually; your baby does not need a perfect schedule before starting.",
      "Practise the feeding, bottle, sleep, and comfort routines that the provider will actually use.",
      "Agree on a short goodbye ritual and a reliable way to exchange updates with staff.",
    ],
    sections: [
      {
        heading: "Start with information, not a perfect routine",
        body: "Before the first day, ask the provider how they record feeds, naps, nappies, comfort, and concerns. Share your baby’s usual cues and explain what normally helps them settle. A childcare routine may not match your home routine exactly, and that does not automatically mean something is wrong. The goal is a safe, understandable handover that can adapt to your baby’s age and temperament.\n\nWrite down feeding instructions, allergies, medical conditions, emergency contacts, and the signs that your baby is tired, hungry, uncomfortable, or becoming unwell. Update the information as your baby develops.",
      },
      {
        heading: "Practise bottles and feeding communication",
        body: "If your baby will take expressed milk or formula at daycare, discuss the bottle, teat, storage, labelling, preparation, and feeding position with the provider. Practise the method that the childcare team will use, but do not force a baby to finish a bottle. Ask how staff communicate intake and what they do if your baby feeds less than usual.\n\nFor solids, ask when foods are introduced, how allergies are recorded, and whether families must supply food. Give the provider clear written instructions for any dietary restriction or prescribed plan.",
      },
      {
        heading: "Plan for sleep without expecting identical naps",
        body: "Tell the provider how your baby shows tiredness and what settling approaches are acceptable in your family. Ask where your baby sleeps, how staff follow safe-sleep procedures, and how naps are recorded. A baby may sleep differently in a new setting, especially during the first days.\n\nFocus on safe care and communication rather than requiring the provider to recreate every detail of home. If your baby has a medical or developmental reason for a specific sleep plan, obtain written advice from the clinician who knows your child.",
      },
      {
        heading: "Make drop-off brief, predictable, and kind",
        body: "A short goodbye ritual can help children understand what happens next. Use the same simple words, say when you will return in language your child can understand, and avoid leaving secretly. Ask the provider how they comfort babies after a parent leaves and how they will tell you if your baby remains distressed or cannot settle.\n\nYour own emotions matter too. It is normal for a parent to feel uncertain at the start. A clear handover, a trusted caregiver, and a predictable update can make the transition easier for the whole family.",
      },
      {
        heading: "Use the first week to adjust the plan",
        body: "Ask for a brief update about feeds, sleep, nappies, mood, and any concerns. Look for patterns rather than judging one difficult day. Discuss whether the timing of feeds, naps, or pickup needs to change. If your baby is persistently unwell, unusually sleepy, feeding poorly, or showing breathing difficulty, seek medical advice rather than assuming the adjustment is the cause.\n\nHealthyChildren.org advises families to prepare children for childcare with gradual practice, familiar comfort, and communication with the provider.[1] Use that general advice alongside your childcare centre’s procedures and your own pediatrician’s guidance.",
      },
    ],
    sources: [
      { label: "American Academy of Pediatrics — Preparing Your Child for Child Care", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/preparing-your-child-for-child-care.aspx" },
      { label: "American Academy of Pediatrics — Making Baby Drop Off at Child Care Easier", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/making-baby-drop-off-easier.aspx" },
    ],
  },
  {
    slug: "daycare-illness-policy-questions",
    title: "What Should a Daycare’s Illness Policy Include? A Parent’s Guide",
    excerpt:
      "Learn how to review a childcare illness policy, including fever, vomiting, diarrhoea, respiratory symptoms, medication, parent contact, and return-to-care rules.",
    tag: "Childcare health",
    date: "2026-08-27",
    readingTime: "9 min",
    keyTakeaways: [
      "Read the written illness policy before enrolment and ask how it is applied in practice.",
      "Ask what happens when a child becomes unwell, who contacts parents, and where the child waits.",
      "Return-to-care rules vary by provider and location; general health information does not replace the centre’s policy or medical advice.",
      "Seek urgent care for serious symptoms such as breathing difficulty, unusual unresponsiveness, or signs of severe dehydration.",
    ],
    sections: [
      {
        heading: "Why the written policy matters",
        body: "Childcare providers need a consistent way to protect children and staff when someone becomes unwell. Before enrolling, ask for the complete written policy and look for definitions of fever, vomiting, diarrhoea, contagious rash, breathing symptoms, eye discharge, and other conditions relevant to your setting. Ask how the policy applies to infants, children with chronic conditions, and children who have just started antibiotics or treatment.\n\nA policy should explain when a child must stay home, when parents are called, how the child is supervised while waiting, what information is shared with other families, and what is needed before returning. Keep a copy so you can refer to the same rules when your child is sick.",
      },
      {
        heading: "Questions about fever and common symptoms",
        body: "Ask what temperature threshold the provider uses, how temperature is measured, whether symptoms matter even without a fever, and when a child can return. Ask separately about vomiting, diarrhoea, cough, breathing symptoms, rash, conjunctivitis, and suspected contagious infections. The American Academy of Pediatrics advises families to keep children home from childcare for certain symptoms, but local policies may be more restrictive or use different wording.[1]\n\nDo not focus only on the number on a thermometer. Ask how staff assess a child’s overall condition, hydration, ability to participate, and need for one-to-one care. If your child is under three months and has a rectal temperature of 38°C (100.4°F) or higher, seek urgent medical advice rather than relying on a daycare policy.",
      },
      {
        heading: "What happens when a child becomes ill during the day?",
        body: "Ask who calls you, how quickly you are expected to collect your child, and where the child waits. Confirm that the child remains supervised and comfortable and that staff know how to reach your backup contact. Ask how the centre manages a child who has symptoms but cannot be collected immediately.\n\nAsk how families are notified about exposures or outbreaks while protecting privacy. Good communication should tell families what they need to do without identifying another child unnecessarily. For children with asthma, allergies, seizures, diabetes, or another condition, ask how the individual health plan fits into the centre’s illness and emergency procedures.",
      },
      {
        heading: "Medication and return-to-care documentation",
        body: "Ask whether the centre administers medication, what consent is required, how doses are checked, and how medicines are stored. Ask whether a clinician’s note is needed and how staff document administration. Never send medication in an unlabelled container or assume that a verbal instruction is enough.\n\nReturn-to-care requirements may include being well enough to participate, being free of certain symptoms for a specified period, completing a treatment period, or providing written clearance. These requirements depend on the provider, local regulations, and the illness. Ask the centre for its exact rule before your child becomes sick.",
      },
      {
        heading: "When to seek medical help",
        body: "Contact your child’s clinician when symptoms are persistent, worsening, or unusual for your child. Seek urgent help for breathing difficulty, blue or grey colour, severe dehydration, a seizure, unusual difficulty waking, a rapidly spreading concerning rash, or a baby who looks seriously unwell. For infants, age-specific thresholds are important.\n\nThis page provides general education only. It cannot diagnose an illness, decide whether your child is safe to attend, or override your childcare provider’s written policy. When in doubt, contact your pediatrician or local urgent-care service.",
      },
    ],
    sources: [
      { label: "American Academy of Pediatrics — When to Keep Your Child Home From Child Care", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/when-to-keep-your-child-home-from-child-care.aspx" },
      { label: "CDC — Preventing Infectious Diseases in Early Care and Education", href: "https://www.cdc.gov/early-care/prevention/index.html" },
    ],
  },
  {
    slug: "home-daycare-or-childcare-center",
    title: "Home Daycare or Childcare Center: What Should Parents Compare?",
    excerpt: "A practical comparison of home daycare and childcare centers, including group size, staffing, policies, flexibility, health oversight, and family fit.",
    tag: "Choosing care",
    date: "2026-08-27",
    readingTime: "8 min",
    keyTakeaways: ["Neither setting is automatically safer; daily supervision, written policies, and trained caregivers matter most.", "Compare the actual group your child will join rather than relying only on the provider category.", "Ask the same questions about illness, sleep, feeding, emergencies, and backup staffing in both settings."],
    sections: [
      { heading: "Compare the care your child will actually receive", body: "A home daycare may offer a smaller group and a familiar home environment, while a centre may offer multiple rooms, more staff, and a dedicated management structure. These are tendencies, not guarantees. Ask who will be with your child, how many children they supervise, how absences are covered, and whether children move between groups.\n\nVisit the real room or home area your child will use. Observe whether adults can see and hear children, whether transitions are calm, and whether staff can explain the daily routine." },
      { heading: "Compare policies, not just facilities", body: "Request the written policies for illness, medication, allergies, safe sleep, feeding, discipline, visitors, pickup, emergencies, closures, and communication. A small setting still needs a documented plan for when the usual caregiver is ill. A large centre still needs a clear plan for individual attention and family communication.\n\nAsk how the provider records feeds, naps, nappies, injuries, concerns, and parent updates. Clear documentation helps the next caregiver understand your child’s needs." },
      { heading: "Make the decision fit your child and family", body: "Consider your child’s age, health needs, temperament, sleep and feeding pattern, accessibility needs, travel time, backup care, budget, and work schedule. If your child has a chronic condition or allergy, ask whether staff can follow an individual health plan and access emergency medication when needed.\n\nThe best option is the setting that is safe, transparent, developmentally appropriate, and workable for your family. Use the same tour checklist for every provider so the comparison is fair." },
    ],
    sources: [{ label: "American Academy of Pediatrics — Choosing a Child Care Center", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/choosing-a-child-care-center.aspx" }],
  },
  {
    slug: "baby-first-week-at-daycare",
    title: "Baby’s First Week at Daycare: A Practical Parent Plan",
    excerpt: "A calm, realistic plan for the first week of daycare, including handover notes, feeding, naps, drop-off, updates, and adjustment.",
    tag: "Starting daycare",
    date: "2026-08-27",
    readingTime: "7 min",
    keyTakeaways: ["Use a short written handover and agree how the provider will update you.", "Expect routines to need adjustment while prioritising safe care and your baby’s cues.", "Look at patterns across the week rather than judging the transition by one difficult day."],
    sections: [
      { heading: "Prepare a simple handover", body: "Write down your baby’s usual feeding cues, bottle instructions, sleep signs, comfort methods, allergies, medical needs, and emergency contacts. Tell the provider what is normal for your baby and what would concern you. Update the information as your baby grows.\n\nAsk how feeds, naps, nappies, mood, and concerns are recorded and who will share the update with you." },
      { heading: "Keep the morning predictable", body: "Pack the items the provider has requested, label bottles and supplies, and use a consistent goodbye phrase. A brief, confident handover is usually more practical than a long departure. Do not leave secretly; tell your baby you are going and when you will return in simple language.\n\nIf the provider reports that your baby is persistently difficult to settle, feeding poorly, or unusually sleepy, discuss the pattern rather than assuming it is only separation." },
      { heading: "Review and adjust together", body: "At pickup, ask about intake, sleep, nappies, comfort, and any symptoms. Compare the first week with your baby’s normal behaviour, but allow time for a new environment to feel familiar. If your baby is unwell or shows breathing difficulty, poor responsiveness, dehydration, or another urgent symptom, seek medical advice.\n\nA successful transition is not a perfect schedule; it is safe care, clear communication, and gradual confidence." },
    ],
    sources: [{ label: "American Academy of Pediatrics — Making Baby Drop Off at Child Care Easier", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/making-baby-drop-off-easier.aspx" }],
  },
  {
    slug: "what-to-pack-for-daycare",
    title: "What to Pack for Daycare: Infant and Toddler Checklist",
    excerpt: "A practical packing guide for daycare supplies, including labelled food, spare clothing, comfort items, health information, and seasonal needs.",
    tag: "Practical childcare",
    date: "2026-08-27",
    readingTime: "6 min",
    keyTakeaways: ["Ask the provider what it supplies before packing duplicates.", "Label food, bottles, medicines, clothing, and comfort items clearly.", "Keep medical and emergency information current rather than relying on a bag note."],
    sections: [
      { heading: "Start with the provider’s list", body: "Every setting has different rules for nappies, wipes, food, bottles, bedding, sunscreen, and comfort items. Ask what the provider supplies, what must stay at the centre, and what comes home each day. Keep the bag simple enough for staff to check quickly." },
      { heading: "Useful daily items", body: "Depending on age and policy, families may need labelled bottles or food, nappies and wipes, spare clothes, weather-appropriate layers, a sun hat, bibs, and an approved comfort item. Label each item with your child’s name. Ask how expressed milk, formula, and prepared food must be transported and stored.\n\nDo not pack unapproved medicines, unsafe sleep items, or food that conflicts with the provider’s allergy process." },
      { heading: "Keep the health handover separate", body: "Emergency contacts, allergy plans, medication consent, and individual health instructions should be recorded through the provider’s formal process. Do not assume a note inside a bag is enough. Update contacts when anything changes and ask staff to confirm they have received new instructions." },
    ],
    sources: [{ label: "American Academy of Pediatrics — Your Child Care Checklist", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/your-child-care-checklist.aspx" }],
  },
  {
    slug: "when-to-keep-child-home-from-daycare",
    title: "When Should a Child Stay Home From Daycare? A Parent’s Guide",
    excerpt: "How to think through common daycare symptoms, participation, hydration, provider policies, and when medical advice is needed.",
    tag: "Childcare health",
    date: "2026-08-27",
    readingTime: "9 min",
    keyTakeaways: ["Use your provider’s written policy together with your child’s overall condition.", "A child who cannot comfortably participate or needs one-to-one care may need to stay home even when symptoms seem mild.", "Seek urgent help for breathing difficulty, severe dehydration, a seizure, or unusual difficulty waking."],
    sections: [
      { heading: "Read the policy before illness starts", body: "Ask what the provider considers a reason to stay home, when parents are called, how an unwell child is supervised, and what is required before return. Policies vary by provider and location and may be stricter than general medical guidance. Keep the policy available when making a morning decision." },
      { heading: "Consider the whole child", body: "Ask whether your child can participate comfortably in normal activities, drink adequately, rest when needed, and avoid requiring one-to-one care that the setting cannot provide. Fever, vomiting, diarrhoea, breathing symptoms, a concerning rash, or unusual sleepiness should be discussed according to the policy and your clinician’s advice.\n\nA temperature number is only one part of the assessment. Age, medical history, hydration, behaviour, and symptom progression matter." },
      { heading: "Know when medical care is urgent", body: "Seek urgent medical help for breathing difficulty, blue or grey colour, severe dehydration, a seizure, unusual difficulty waking, or a child who looks seriously unwell. For young infants, fever thresholds are age-specific. This article cannot diagnose illness or decide attendance for your individual child; contact your pediatrician when uncertain." },
    ],
    sources: [{ label: "American Academy of Pediatrics — When to Keep Your Child Home From Child Care", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/when-to-keep-your-child-home-from-child-care.aspx" }, { label: "CDC — Preventing Infectious Diseases in Early Care and Education", href: "https://www.cdc.gov/early-care/prevention/index.html" }],
  },
  {
    slug: "return-to-daycare-after-fever",
    title: "When Can a Child Return to Daycare After a Fever?",
    excerpt: "How to review return-to-care decisions after fever, including provider rules, symptom improvement, participation, and red flags.",
    tag: "Childcare health",
    date: "2026-08-27",
    readingTime: "7 min",
    keyTakeaways: ["Follow the childcare provider’s written return-to-care rule and local public-health requirements.", "Consider whether your child is well enough to participate, not only whether the temperature has fallen.", "A fever in a very young infant needs age-specific medical advice."],
    sections: [
      { heading: "There is no single universal return rule", body: "Daycare providers and local authorities may use different requirements for fever and associated symptoms. Ask what temperature method and threshold the provider uses, how long a child must be free of fever or symptoms, and whether treatment or written clearance is required.\n\nDo not rely on a general online rule if it conflicts with the written policy for your child’s setting." },
      { heading: "Look at recovery and participation", body: "A child may need to stay home if they remain unusually tired, cannot drink adequately, need more comfort or supervision than the setting can provide, or have ongoing vomiting, diarrhoea, breathing symptoms, or another concerning symptom. Improvement is helpful, but it does not replace the provider’s rule or a clinician’s assessment." },
      { heading: "When to contact a clinician", body: "Contact your child’s clinician when fever is persistent, recurrent, associated with concerning symptoms, or unusual for your child. If an infant under three months has a rectal temperature of 38°C (100.4°F) or higher, seek urgent medical advice. Seek emergency help for breathing difficulty, severe dehydration, seizure, or unusual difficulty waking." },
    ],
    sources: [{ label: "American Academy of Pediatrics — When to Keep Your Child Home From Child Care", href: "https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/when-to-keep-your-child-home-from-child-care.aspx" }],
  },
  {
    slug: "daycare-nap-and-sleep-questions",
    title: "Daycare Nap and Sleep Questions for Infants",
    excerpt: "What parents should ask about infant sleep spaces, safe sleep checks, routines, settling, and communication before starting daycare.",
    tag: "Infant sleep",
    date: "2026-08-27",
    readingTime: "7 min",
    keyTakeaways: ["Ask to see the actual sleep space and request the written sleep policy.", "Safe sleep procedures should be clear, consistent, and documented.", "Home routines may not transfer exactly; safety and responsive communication come first."],
    sections: [
      { heading: "Ask to see the sleep space", body: "Ask where your baby sleeps, how the space is prepared, how babies are positioned, what is kept out of the sleep area, and how staff complete and record checks. Ask what happens when a baby does not settle or has a different nap pattern from the group." },
      { heading: "Share cues without demanding a rigid schedule", body: "Tell staff how your baby shows tiredness and what settling approaches are acceptable in your family. A new environment may change nap timing. The important questions are whether staff follow safe procedures, respond to cues, and communicate changes rather than trying to reproduce every detail of home." },
      { heading: "Discuss special circumstances in writing", body: "If your baby uses specialist equipment or has a medical or developmental sleep plan, discuss it with the provider and the clinician who knows your child. Obtain written instructions when appropriate. Do not assume a monitor or comfort item makes an unsafe sleep arrangement safe." },
    ],
    sources: [{ label: "American Academy of Pediatrics — Safe Sleep and Child Care", href: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx" }],
  },
];
