import { useCallback, useEffect, useState } from "react";
import { z } from "zod";

const STORAGE_KEY = "drzeewrites:review-access";

export const accessSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  organisation: z
    .string()
    .trim()
    .max(120, { message: "Organisation must be less than 120 characters" })
    .optional(),
});

export type AccessDetails = z.infer<typeof accessSchema>;

function read(): AccessDetails | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = accessSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

/** Client-side gate: remembers who asked for a premium review PDF. */
export function useReviewAccess() {
  const [details, setDetails] = useState<AccessDetails | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDetails(read());
    setHydrated(true);
  }, []);

  const grant = useCallback((value: AccessDetails) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* storage unavailable — access still applies for this session */
    }
    setDetails(value);
  }, []);

  return { details, unlocked: details !== null, hydrated, grant };
}
