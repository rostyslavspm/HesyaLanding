/**
 * The hero phone — a real Running Session capture from the app's Figma
 * (Hesya-App, node 5043:3668), exported at 3× with the timer label removed so
 * <HeroTimer> can render it live. Same 1260×2736 proportions as every feature
 * screenshot; the layout crops it (translated down), never the source image.
 */
export const HERO_PHONE = {
  src: "/screenshots/screen-session-running-v2.png",
  alt: "Hesya during a focus session: “Morning orientation and prioritization”, 15 minutes in",
  fallbackLabel: "Session",
  width: 1260,
  height: 2736,
} as const;

/** Live timer over the capture's glass pill — elapsed time, counting up. */
export const HERO_SESSION = {
  startMinutes: 15,
  tickMs: 8000,
} as const;
