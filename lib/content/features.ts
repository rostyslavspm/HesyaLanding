import type { LucideIcon } from "lucide-react";
import { Eye, PenLine, RotateCcw, Sparkles } from "lucide-react";

export type HesyaFeature = {
  id: string;
  title: string;
  heading: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  linkText?: string;
  linkHref?: string;
  icon: LucideIcon;
  accent: string;
};

export const HESYA_FEATURES: HesyaFeature[] = [
  {
    id: "declare",
    title: "Declare",
    accent: "var(--feature-declare)",
    heading: "Begin by naming one thing",
    description:
      "In your own words. Kept exactly as you wrote them.",
    screenshot: "/screenshots/screen-declare.png",
    screenshotAlt: "Declaring an intention in Hesya",
    icon: PenLine,
  },
  {
    id: "return",
    title: "Return",
    accent: "var(--feature-return)",
    heading: "When you drift, one quiet cue",
    description:
      "Your own words return to you. The choosing stays yours.",
    screenshot: "/screenshots/screen-return.png",
    screenshotAlt: "Hesya return cue offering keep going, step away, or not now",
    icon: RotateCcw,
  },
  {
    id: "reflect",
    title: "Reflect",
    accent: "var(--feature-reflect)",
    heading: "At the end, a moment to notice",
    description:
      "One question. No score. Skipping is an answer too.",
    screenshot: "/screenshots/screen-journal.png",
    screenshotAlt: "Journal entry after a Hesya session",
    linkText: "Read the philosophy",
    linkHref: "/manifesto",
    icon: Sparkles,
  },
  {
    id: "presence",
    title: "Presence",
    accent: "var(--feature-presence)",
    heading: "Always in view, never in the way",
    description:
      "What you named waits on your Lock Screen. Nothing more.",
    screenshot: "/screenshots/screen-homescreen.png",
    screenshotAlt: "Hesya Home Screen widget keeping your intention in view",
    icon: Eye,
  },
];
