import gsap from "gsap";
import { DURATION } from "./tokens";

export { gsap };
export { EASE_HESYA, STAGGER } from "./tokens";

export const GSAP_EASE = {
  out: "power2.out",
  inOut: "power3.inOut",
  hero: "power3.out",
} as const;

/** GSAP-facing alias of shared DURATION (lib/motion/tokens.ts). */
export const GSAP_DURATION = DURATION;

// No ScrollTrigger plugin here on purpose. It was used only for two simple,
// non-pinned, non-scrubbed reveal-on-scroll timelines (ManifestoTeaser,
// DownloadSection) — but registering it installs ScrollTrigger's own global
// wheel/scroll listeners on window/document, which fought with Lenis's own
// native-scroll fallback listener under fast direction-reversal scrolling
// and caused a real, reproducible "Maximum call stack size exceeded" crash.
// Both call sites now trigger their timeline off an IntersectionObserver
// instead, which needs nothing from GSAP but the core timeline API.
