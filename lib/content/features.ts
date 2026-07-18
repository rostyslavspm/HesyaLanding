import type { LucideIcon } from "lucide-react";
import { Eye, PenLine, RotateCcw, Sparkles } from "lucide-react";
import { URLS } from "@/lib/design-system";

export type HesyaFeature = {
  id: string;
  title: string;
  heading: string;
  description: string;
  features: string[];
  screenshot: string;
  screenshotAlt: string;
  linkText: string;
  linkHref: string;
  icon: LucideIcon;
  accent: string;
};

export const HESYA_FEATURES: HesyaFeature[] = [
  {
    id: "declare",
    title: "Declare",
    accent: "var(--feature-declare)",
    heading: "Name what matters, in your own words",
    description:
      "One intention, kept verbatim. Not a goal system. Not a streak. Just the thing you want to have done, held where you can see it.",
    features: [
      "Your words, never rewritten",
      "One focus at a time",
      "Start a session in seconds",
      "No dashboards or scores",
    ],
    screenshot: "/screenshots/screen-intention.png",
    screenshotAlt: "Hesya declare your intention",
    linkText: "See it in the beta",
    linkHref: URLS.testflight,
    icon: PenLine,
  },
  {
    id: "return",
    title: "Return",
    accent: "var(--feature-return)",
    heading: "A gentle cue when attention drifts",
    description:
      "When you slip into something else, Hesya brings you back quietly, in your own words. Never a scold. Never a block.",
    features: [
      "Notice drift without judgment",
      "Return in your own language",
      "Lock Screen and Live Activity",
      "No guilt-based messaging",
    ],
    screenshot: "/screenshots/screen-lockscreen.png",
    screenshotAlt: "Hesya quiet return on the Lock Screen",
    linkText: "See it in the beta",
    linkHref: URLS.testflight,
    icon: RotateCcw,
  },
  {
    id: "reflect",
    title: "Reflect",
    accent: "var(--feature-reflect)",
    heading: "Close with presence, not performance",
    description:
      "When the session ends, mark how it felt. A private note, outcome-neutral, never a score. Success is choosing, not optimizing.",
    features: [
      "Outcome-neutral reflection",
      "No streaks or badges",
      "Private by default",
      "Designed to step back over time",
    ],
    screenshot: "/screenshots/screen-ready.png",
    screenshotAlt: "Hesya quiet reflection after a session",
    linkText: "Read the philosophy",
    linkHref: "/manifesto",
    icon: Sparkles,
  },
  {
    id: "presence",
    title: "Presence",
    accent: "var(--feature-presence)",
    heading: "Your intent, always in view",
    description:
      "The one thing you named follows you on the Lock Screen, in the Live Activity, and on your widget. Quietly present. Never urgent.",
    features: [
      "Home Screen widget",
      "Live Activity while you work",
      "Always visible, never nagging",
      "No attention-grabbing alerts",
    ],
    screenshot: "/screenshots/Homescreen-widget.png",
    screenshotAlt: "Hesya widget showing today's intent",
    linkText: "See it in the beta",
    linkHref: URLS.testflight,
    icon: Eye,
  },
];
