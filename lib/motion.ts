/**
 * Shared motion constants for the Hesya design system.
 *
 * Single source of truth for easing curves, durations, and stagger scales
 * used across all Framer Motion components. Mirrors the CSS custom properties
 * defined in globals.css (--ease-hesya, --dur-*, --stagger-*).
 */

/** Signature cubic-bezier: smooth with a slightly elastic tail. */
export const EASE_HESYA: [number, number, number, number] = [0.32, 0.72, 0, 1];
export const EASE_SOFT_OUT: [number, number, number, number] = [0.25, 0.9, 0.2, 1];

/** Named duration scale (seconds). */
export const DURATION = {
  micro: 0.22,
  hover: 0.26,
  word: 0.46,
  reveal: 0.6,
  hero: 0.95,
  heroLayer: 0.72,
  sectionEnter: 0.8,
  transition: 1.15,
  ritual: 1.5,
  float: 5.2,
  tab: 0.38,
  tabContent: 0.45,
} as const;

/** Named stagger scale (seconds between children). */
export const STAGGER = {
  tight: 0.04,
  default: 0.075,
  loose: 0.12,
} as const;

/** GSAP-native easing aliases used across sections. */
export const GSAP_EASE = {
  standard: "power3.out",
  smooth: "power2.inOut",
  drift: "sine.inOut",
} as const;
