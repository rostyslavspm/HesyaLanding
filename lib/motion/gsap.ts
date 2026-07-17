import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export { gsap, ScrollTrigger };

export const GSAP_EASE = {
  out: "power2.out",
  inOut: "power3.inOut",
  hero: "power3.out",
} as const;

export const GSAP_DURATION = {
  micro: 0.35,
  hover: 0.25,
  drift: 0.8,
  reveal: 0.55,
  transition: 1.1,
} as const;

let registered = false;

export function registerGsapPlugins(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}
