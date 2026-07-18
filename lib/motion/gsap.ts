import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DURATION } from "./tokens";

export { gsap, ScrollTrigger };
export { EASE_HESYA, STAGGER } from "./tokens";

export const GSAP_EASE = {
  out: "power2.out",
  inOut: "power3.inOut",
  hero: "power3.out",
} as const;

/** GSAP-facing alias of shared DURATION (lib/motion/tokens.ts). */
export const GSAP_DURATION = DURATION;

let registered = false;

export function registerGsapPlugins(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}
