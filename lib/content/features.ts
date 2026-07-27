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
    heading: "Begin by naming one thing",
    description:
      "Before a session starts, you write what you mean to have done — in your own words, kept exactly as you typed them. One intention, not a task list. Nothing to set up.",
    features: [
      "Your words, never rewritten",
      "One intention at a time",
      "Start in three taps or fewer",
      "Nothing pre-filled for you",
    ],
    screenshot: "/screenshots/screen-declare.png",
    screenshotAlt: "Declaring an intention in Hesya",
    linkText: "See it in the app",
    linkHref: URLS.appStore,
    icon: PenLine,
  },
  {
    id: "return",
    title: "Return",
    accent: "var(--feature-return)",
    heading: "When you drift, one quiet cue",
    description:
      "If your attention slips elsewhere mid-session, your phone buzzes once and shows you the words you chose. Then it leaves the choosing to you: keep going, step away briefly, or not now. Hesya never blocks an app.",
    features: [
      "The cue quotes your own intention",
      "Three ways to answer, all equal",
      "Shows your words, then steps back",
      "Never blocks, never scolds",
    ],
    screenshot: "/screenshots/screen-return.png",
    screenshotAlt: "Hesya return cue offering keep going, step away, or not now",
    linkText: "See it in the app",
    linkHref: URLS.appStore,
    icon: RotateCcw,
  },
  {
    id: "reflect",
    title: "Reflect",
    accent: "var(--feature-reflect)",
    heading: "At the end, a moment to notice",
    description:
      "When the session closes, you draw a finger across still water until it matches how the time settled — calm, stirred, or disturbed. Or you skip it; both are equal. Nothing is scored, and nothing you write leaves your phone.",
    features: [
      "One question: how did that go?",
      "Skip is always an equal choice",
      "No streaks, no badges, no scores",
      "Made to be needed less over time",
    ],
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
      "What you named stays where you can see it — on your Lock Screen, in the Live Activity, and on a Home Screen widget, alongside the time you have been at it. When no session is running, it says only: ready when you are.",
    features: [
      "Home Screen widget",
      "Live Activity while you work",
      "Pause or complete from the Lock Screen",
      "No alerts competing for you",
    ],
    screenshot: "/screenshots/screen-homescreen.png",
    screenshotAlt: "Hesya Home Screen widget keeping your intention in view",
    linkText: "See it in the app",
    linkHref: URLS.appStore,
    icon: Eye,
  },
];
