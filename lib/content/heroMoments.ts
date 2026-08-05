/**
 * Hero product moments — real Hesya surfaces, not invented copy.
 * Screenshots from Downloads/Hesya app (Jul 2026 capture).
 */
export const RETURN_PROMPT = {
  context: "Still with you",
  intention: "Finish the proposal draft",
  actions: ["Keep going", "Step away briefly", "Not now"],
} as const;

/** Declare — the real session-start surface (PRD §6.1 / §20). */
export const DECLARE_PROMPT = {
  context: "Declare your intent",
  intention: "Finish the proposal draft",
} as const;

/** Reflect — session close: one outcome-neutral question, three marks (PRD §9). */
export const REFLECT_PROMPT = {
  context: "How did that go?",
  moods: ["Focused", "Mixed", "Off"],
} as const;

/**
 * The uncropped capture — real iPhone proportions (1260×2736), same as every
 * feature screenshot. The hero deliberately used a pre-cropped, shorter
 * variant here that dropped the bottom nav bar; that gave the phone a
 * non-device aspect ratio and read as cut/deformed. The layout crops it now
 * (phone emerges from the bottom of the hero, translated down), not the
 * source image — so the device itself always stays correctly proportioned.
 */
export const HERO_PHONE = {
  src: "/screenshots/screen-today-idle.png",
  alt: "Hesya Today screen, ready when you are",
  fallbackLabel: "Today",
  width: 1260,
  height: 2736,
} as const;

export const HERO_WIDGETS = [
  { id: "intent", label: "Today", value: "Finish the proposal draft" },
  { id: "state", label: "Session", value: "2 min · in progress" },
  { id: "return", label: "No session", value: "ready when you are" },
] as const;
