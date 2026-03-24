/**
 * Shared motion constants for the Hesya design system.
 *
 * Single source of truth for easing curves, durations, and stagger scales
 * used across all Framer Motion components. Mirrors the CSS custom properties
 * defined in globals.css (--ease-hesya, --dur-*, --stagger-*).
 */

/** Signature cubic-bezier: smooth with a slightly elastic tail. */
export const EASE_HESYA: [number, number, number, number] = [0.32, 0.72, 0, 1];

/** Named duration scale (seconds). */
export const DURATION = {
  micro: 0.35,
  hover: 0.25,
  word: 0.5,
  reveal: 0.55,
  hero: 0.8,
  transition: 1.2,
  ritual: 1.5,
} as const;

/** Named stagger scale (seconds between children). */
export const STAGGER = {
  tight: 0.035,
  default: 0.06,
  loose: 0.1,
} as const;
