import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText, Printer, ShieldCheck, Sparkles } from "lucide-react";
import { MedicalTrustCard } from "@/components/site/MedicalTrustCard";
import { TOOL_PAGES, getTool, type ToolKind } from "@/content/tools";
import {
  AUTHOR_PERSON,
  SITE_URL,
  breadcrumbSchema,
  jsonLd,
  medicalWebPageSchema,
  pageHead,
  webPageSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => {
    const tool = loaderData?.tool;
    if (!tool) return {};
    const title = `${tool.title} | Dr Zee, Paediatrician`;
    const description = tool.description;
    return {
      ...pageHead({ title, description, path: `/tools/${tool.slug}`, keywords: tool.keywords }),
      scripts: [
        jsonLd(webPageSchema({ title, description, path: `/tools/${tool.slug}`, type: "WebPage" })),
        jsonLd(
          medicalWebPageSchema({
            title,
            description,
            path: `/tools/${tool.slug}`,
            about: tool.title,
          }),
        ),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${SITE_URL}/tools/${tool.slug}#application`,
          name: tool.title,
          url: `${SITE_URL}/tools/${tool.slug}`,
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          isAccessibleForFree: true,
          author: { "@id": `${SITE_URL}/about#person` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pediatric tools", path: "/tools" },
            { name: tool.title, path: `/tools/${tool.slug}` },
          ]),
        ),
      ],
    };
  },
  component: ToolPage,
});

function printPage() {
  if (typeof window !== "undefined") window.print();
}

function downloadText(filename: string, text: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function ToolPage() {
  const { tool } = Route.useLoaderData();
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-6">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            <ArrowLeft className="size-4" /> All pediatric tools
          </Link>
          <p className="mt-10 eyebrow">{tool.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
            {tool.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {tool.description}
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-6">
        <div>
          <ToolForm kind={tool.kind} title={tool.title} />
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6" role="note">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Safety boundary:</strong> {tool.safety}
              </p>
            </div>
          </div>
        </div>
        <aside className="space-y-5 lg:pt-2">
          <MedicalTrustCard reviewedOn="2026-08-27" />
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Privacy by design</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your entries stay in this browser session. This tool does not send your child’s
              information to a server or create a medical record.
            </p>
          </div>
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Need individual advice?</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Use the output to prepare for a conversation with your child’s clinician or childcare
              provider. For emergencies, contact local emergency services instead of using an online
              tool.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

type ToolFormProps = { kind: ToolKind; title: string };

function ToolForm({ kind, title }: ToolFormProps) {
  if (kind === "daycare-tour") return <DaycareTour />;
  if (kind === "infant-handover") return <InfantHandover />;
  if (kind === "appointment") return <AppointmentChecklist />;
  if (kind === "routine") return <RoutinePlanner />;
  if (kind === "feeding-log") return <FeedingLog />;
  return <IllnessGuide title={title} />;
}

function ToolShell({
  children,
  output,
  filename,
  outputLabel = "Generated plan",
}: {
  children: React.ReactNode;
  output: string;
  filename: string;
  outputLabel?: string;
}) {
  const [showOutput, setShowOutput] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setShowOutput(true);
      }}
      className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:p-8"
    >
      <div className="space-y-6">{children}</div>
      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        <button
          type="submit"
          className="glow-cta inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
        >
          <Sparkles className="size-4" /> Create my {outputLabel.toLowerCase()}
        </button>
        {showOutput && (
          <>
            <button
              type="button"
              onClick={printPage}
              className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-5 text-sm font-semibold"
            >
              <Printer className="size-4" /> Print
            </button>
            <button
              type="button"
              onClick={() => downloadText(filename, output)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-5 text-sm font-semibold"
            >
              <Download className="size-4" /> Download text
            </button>
          </>
        )}
      </div>
      {showOutput && (
        <div className="mt-8 border-t border-border/60 pt-8" aria-live="polite">
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-accent" />
            <h2 className="text-2xl">{outputLabel}</h2>
          </div>
          <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-muted/50 p-5 font-sans text-sm leading-relaxed text-foreground">
            {output}
          </pre>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      {hint && <span className="ml-2 font-normal text-muted-foreground">{hint}</span>}
      {children}
    </label>
  );
}
function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <Field label={label}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-normal outline-none ring-accent focus:ring-2"
      />
    </Field>
  );
}
function CheckList({
  items,
  selected,
  toggle,
}: {
  items: string[];
  selected: string[];
  toggle: (item: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <label
          key={item}
          className="flex gap-3 rounded-xl border border-border/70 p-3 text-sm font-normal"
        >
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => toggle(item)}
            className="mt-0.5 size-4 accent-primary"
          />
          {item}
        </label>
      ))}
    </div>
  );
}

function DaycareTour() {
  const [age, setAge] = useState("Infant");
  const [provider, setProvider] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const items = [
    "Licensing and inspection records",
    "Staff-to-child ratios and cover",
    "Safe sleep and settling",
    "Bottle, breastmilk, and food handling",
    "Allergy and emergency plans",
    "Illness, fever, and medication policy",
    "Outdoor play and supervision",
    "Communication with families",
    "Fees, hours, closures, and backup care",
    "How the setting supports my child’s temperament",
  ];
  const toggle = (x: string) =>
    setSelected((s) => (s.includes(x) ? s.filter((i) => i !== x) : [...s, x]));
  const output = `DAYCARE TOUR QUESTION BUILDER\nChild age group: ${age}\nProvider: ${provider || "________________"}\n\nASK AND OBSERVE\n${(selected.length ? selected : items).map((x, i) => `${i + 1}. [ ] ${x}\n   Notes: ______________________________________________`).join("\n")}\n\nBEFORE DECIDING\n[ ] I received the written health and illness policy.\n[ ] I know who to contact about an urgent concern.\n[ ] I understand how the provider handles my child’s individual needs.\n[ ] I checked local licensing and inspection information.\n\nThis worksheet supports questions and observations. It does not certify a childcare provider.`;
  return (
    <ToolShell
      output={output}
      filename="daycare-tour-question-builder.txt"
      outputLabel="Daycare tour plan"
    >
      <div>
        <h2 className="text-2xl">Build your tour questions</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Choose the age group and the topics you want to cover. The tool creates a printable
          discussion sheet.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child’s age group">
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-normal"
          >
            <option>Infant</option>
            <option>Toddler</option>
            <option>Preschooler</option>
          </select>
        </Field>
        <TextInput
          label="Provider or centre name"
          value={provider}
          onChange={setProvider}
          placeholder="Optional"
        />
      </div>
      <Field label="Topics for this visit" hint="select all that apply">
        <CheckList items={items} selected={selected} toggle={toggle} />
      </Field>
    </ToolShell>
  );
}

function InfantHandover() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [feeding, setFeeding] = useState("");
  const [sleep, setSleep] = useState("");
  const [comfort, setComfort] = useState("");
  const [allergies, setAllergies] = useState("");
  const [emergency, setEmergency] = useState("");
  const output = `INFANT HANDOVER SHEET\nChild: ${name || "________________"}\nDate of birth: ${dob || "________________"}\n\nFEEDING\n${feeding || "Record the provider-approved feeding plan, cues, bottle labels, and what to do if a feed is missed."}\n\nSLEEP\n${sleep || "Record usual cues, settling preferences, and the provider’s safe-sleep arrangement."}\n\nCOMFORT AND COMMUNICATION\n${comfort || "What helps my baby settle: _________________________________"}\n\nALLERGIES OR HEALTH INFORMATION\n${allergies || "Use the childcare provider’s formal health-plan process for allergies or medical needs."}\n\nEMERGENCY CONTACTS\n${emergency || "Parent/guardian: __________________  Phone: __________________"}\n\nPlease update this sheet when the plan changes. Share sensitive health information through the provider’s secure process.`;
  return (
    <ToolShell
      output={output}
      filename="infant-handover-sheet.txt"
      outputLabel="Infant handover sheet"
    >
      <div>
        <h2 className="text-2xl">Create a daily handover sheet</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Keep entries practical and share sensitive medical information through your provider’s
          official process.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Child’s name" value={name} onChange={setName} />
        <TextInput label="Date of birth" value={dob} onChange={setDob} placeholder="Optional" />
      </div>
      <TextArea
        label="Feeding plan and cues"
        value={feeding}
        onChange={setFeeding}
        placeholder="Feeds, bottles, cues, and questions for the provider"
      />
      <TextArea
        label="Sleep cues and settling"
        value={sleep}
        onChange={setSleep}
        placeholder="Usual signs of tiredness and calming preferences"
      />
      <TextArea
        label="Comfort and communication"
        value={comfort}
        onChange={setComfort}
        placeholder="Comfort items, words, gestures, and pickup notes"
      />
      <TextArea
        label="Allergies or individual health needs"
        value={allergies}
        onChange={setAllergies}
        placeholder="Do not use this field instead of a formal health plan"
      />
      <TextArea
        label="Emergency contact reminder"
        value={emergency}
        onChange={setEmergency}
        placeholder="Names and phone numbers"
      />
    </ToolShell>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <Field label={label}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-none ring-accent focus:ring-2"
      />
    </Field>
  );
}

function AppointmentChecklist() {
  const [age, setAge] = useState("Infant");
  const [reason, setReason] = useState("");
  const [timeline, setTimeline] = useState("");
  const [meds, setMeds] = useState("");
  const [questions, setQuestions] = useState("");
  const [records, setRecords] = useState<string[]>([]);
  const output = `PEDIATRIC APPOINTMENT PREPARATION CHECKLIST\nChild age group: ${age}\nMain reason for visit: ${reason || "________________"}\nWhen it started or changed: ${timeline || "________________"}\n\nBRING OR RECORD\n${records.length ? records.map((x) => `[ ] ${x}`).join("\n") : "[ ] Medication and supplement list\n[ ] Vaccination or health record\n[ ] Feeding, sleep, stool, or symptom notes\n[ ] Questions and concerns"}\n\nMEDICINES\n${meds || "Write the name, strength, amount, timing, and reason for each medicine; bring packaging when possible."}\n\nQUESTIONS\n${questions || "1. What should I watch for?\n2. What is the follow-up plan?\n3. When should I call again or seek urgent help?"}\n\nDo not delay urgent or emergency care while completing this checklist.`;
  return (
    <ToolShell
      output={output}
      filename="pediatric-appointment-checklist.txt"
      outputLabel="Appointment checklist"
    >
      <div>
        <h2 className="text-2xl">Prepare useful information for the visit</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A clear timeline and focused questions can make a visit more useful.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child’s age group">
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-normal"
          >
            <option>Newborn</option>
            <option>Infant</option>
            <option>Toddler</option>
            <option>Preschooler</option>
            <option>School-age child</option>
          </select>
        </Field>
        <TextInput label="Main reason for visit" value={reason} onChange={setReason} />
      </div>
      <TextArea label="When did it start or change?" value={timeline} onChange={setTimeline} />
      <Field label="Records to bring" hint="select all that apply">
        <CheckList
          items={[
            "Medication packaging or list",
            "Vaccination or health record",
            "Feeding or sleep notes",
            "Symptom photographs or videos",
            "School or childcare report",
            "Previous test or specialist letters",
          ]}
          selected={records}
          toggle={(x) => setRecords((s) => (s.includes(x) ? s.filter((i) => i !== x) : [...s, x]))}
        />
      </Field>
      <TextArea label="Medicines and supplements" value={meds} onChange={setMeds} />
      <TextArea label="Questions I want answered" value={questions} onChange={setQuestions} />
    </ToolShell>
  );
}

function RoutinePlanner() {
  const [wake, setWake] = useState("07:00");
  const [drop, setDrop] = useState("08:30");
  const [pickup, setPickup] = useState("17:00");
  const [bed, setBed] = useState("19:30");
  const [notes, setNotes] = useState("");
  const output = `TODDLER DAYCARE ROUTINE PLANNER\nWake: ${wake}\nDaycare drop-off: ${drop}\nDaycare pickup: ${pickup}\nBedtime routine begins: ${bed}\n\nFLEXIBLE PLAN\n[ ] Wake, toilet/nappy, dressing, breakfast\n[ ] Calm transition and goodbye ritual\n[ ] Ask caregiver about food, fluids, play, rest, and mood\n[ ] Reconnect after pickup before rushing to the next task\n[ ] Dinner, hygiene, quiet play, and bedtime cues\n\nFamily notes\n${notes || "What helps my child transition: ______________________________"}\n\nUse this as a flexible sequence, not a promise that every day will look the same.`;
  return (
    <ToolShell
      output={output}
      filename="toddler-daycare-routine-planner.txt"
      outputLabel="Routine plan"
    >
      <div>
        <h2 className="text-2xl">Set a flexible daily rhythm</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Times are starting points. Adjust them to your child, family, provider, and local routine.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Wake time">
          <input
            type="time"
            value={wake}
            onChange={(e) => setWake(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4"
          />
        </Field>
        <Field label="Daycare drop-off">
          <input
            type="time"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4"
          />
        </Field>
        <Field label="Daycare pickup">
          <input
            type="time"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4"
          />
        </Field>
        <Field label="Bedtime routine begins">
          <input
            type="time"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4"
          />
        </Field>
      </div>
      <TextArea
        label="Individual transition notes"
        value={notes}
        onChange={setNotes}
        placeholder="Comfort item, goodbye phrase, food preferences, or questions"
      />
    </ToolShell>
  );
}

function FeedingLog() {
  const [rows, setRows] = useState([{ time: "", type: "", amount: "", diaper: "", notes: "" }]);
  const add = () =>
    setRows((r) => [...r, { time: "", type: "", amount: "", diaper: "", notes: "" }]);
  const update = (index: number, key: keyof (typeof rows)[number], value: string) =>
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  const output = `BABY FEEDING AND DIAPER OBSERVATION LOG\n${rows.map((r, i) => `${i + 1}. Time: ${r.time || "____"} | Feed: ${r.type || "____"} | Amount (if relevant): ${r.amount || "____"} | Wet/stool: ${r.diaper || "____"}\n   Notes: ${r.notes || "________________________________"}`).join("\n")}\n\nUse this record to support a conversation with a caregiver or clinician. It does not determine hydration or feeding adequacy.`;
  return (
    <ToolShell output={output} filename="baby-feeding-diaper-log.txt" outputLabel="Observation log">
      <div>
        <h2 className="text-2xl">Record one day of observations</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Record patterns without turning the log into a diagnosis or a target to chase.
        </p>
      </div>
      <div className="space-y-4">
        {rows.map((row, index) => (
          <div key={index} className="rounded-2xl border border-border/70 p-4">
            <p className="mb-3 text-sm font-semibold">Entry {index + 1}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                aria-label={`Entry ${index + 1} time`}
                type="time"
                value={row.time}
                onChange={(e) => update(index, "time", e.target.value)}
                className="min-h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Time"
              />
              <input
                aria-label={`Entry ${index + 1} feed type`}
                value={row.type}
                onChange={(e) => update(index, "type", e.target.value)}
                className="min-h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Breast, bottle, solids…"
              />
              <input
                aria-label={`Entry ${index + 1} amount`}
                value={row.amount}
                onChange={(e) => update(index, "amount", e.target.value)}
                className="min-h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Amount if known"
              />
              <input
                aria-label={`Entry ${index + 1} diaper`}
                value={row.diaper}
                onChange={(e) => update(index, "diaper", e.target.value)}
                className="min-h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Wet, stool, both…"
              />
            </div>
            <input
              aria-label={`Entry ${index + 1} notes`}
              value={row.notes}
              onChange={(e) => update(index, "notes", e.target.value)}
              className="mt-3 min-h-10 w-full rounded-lg border border-border bg-background px-3 text-sm"
              placeholder="Notes"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:border-accent"
      >
        + Add another entry
      </button>
    </ToolShell>
  );
}

function IllnessGuide({ title }: { title: string }) {
  const [topic, setTopic] = useState("Fever");
  const [age, setAge] = useState("Infant");
  const [policy, setPolicy] = useState("");
  const [notes, setNotes] = useState("");
  const questionMap: Record<string, string[]> = {
    Fever: [
      "What temperature method and threshold does your written policy use?",
      "How is a child monitored while waiting for collection?",
      "What recovery and participation criteria are required before return?",
    ],
    "Vomiting or diarrhoea": [
      "How many episodes require collection under your policy?",
      "How are fluids and hand hygiene handled?",
      "What return-to-care criteria and documentation apply?",
    ],
    "Cough or runny nose": [
      "How do you assess whether a child can participate comfortably?",
      "What breathing or behavior changes prompt collection?",
      "What cleaning and ventilation measures are used?",
    ],
    Rash: [
      "What information should I provide about onset and exposure?",
      "When does the provider require medical clearance?",
      "What symptoms would make this urgent?",
    ],
    Medication: [
      "What written authorization and labelled medication process do you require?",
      "Who administers and records a dose?",
      "What happens if a dose is missed or refused?",
    ],
  };
  const questions = questionMap[topic];
  const output = `CHILDCARE ILLNESS CONVERSATION GUIDE\nChild age group: ${age}\nTopic: ${topic}\n\nQUESTIONS FOR THE PROVIDER\n${questions.map((q, i) => `${i + 1}. [ ] ${q}`).join("\n")}\n\nYOUR PROVIDER’S WRITTEN POLICY\n${policy || "Record the relevant wording here: ______________________________"}\n\nCLINICAL NOTES TO DISCUSS\n${notes || "Onset, symptoms, fluids, activity, breathing, exposures, and questions: __________________"}\n\nSAFETY\nThis guide does not diagnose illness or decide whether a child may attend. Seek urgent medical help for emergency symptoms and follow your clinician’s advice.`;
  return (
    <ToolShell
      output={output}
      filename="childcare-illness-conversation-guide.txt"
      outputLabel="Illness conversation guide"
    >
      <div>
        <h2 className="text-2xl">Prepare a responsible conversation</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This tool creates questions; it never provides a “safe to attend” decision.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child’s age group">
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-normal"
          >
            <option>Newborn</option>
            <option>Infant</option>
            <option>Toddler</option>
            <option>Preschooler</option>
            <option>School-age child</option>
          </select>
        </Field>
        <Field label="Topic">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-normal"
          >
            {Object.keys(questionMap).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="rounded-2xl bg-muted/50 p-5">
        <p className="font-semibold">Questions generated for {topic}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          {questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </div>
      <TextArea
        label="Relevant provider policy wording"
        value={policy}
        onChange={setPolicy}
        placeholder="Copy or summarise the provider’s written policy"
      />
      <TextArea
        label="Notes to discuss with a clinician"
        value={notes}
        onChange={setNotes}
        placeholder="Symptoms, timing, activity, fluids, breathing, exposures"
      />
    </ToolShell>
  );
}
