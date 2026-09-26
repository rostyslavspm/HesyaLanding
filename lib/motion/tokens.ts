/**
 * Shared motion constants — mirrors CSS tokens in design-tokens.css
 * (--ease-hesya, --dur-*). GSAP runtime imports these via gsap.ts.
 * Calibrated for "Quiet Authority": a half-beat slower, luminous, no snappy overshoot.
 */

/** Signature cubic-bezier: smooth, contemplative deceleration. */
export const EASE_HESYA: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Named duration scale (seconds). Keep in sync with --dur-* tokens. */
export const DURATION = {
  micro: 0.35,
  hover: 0.5,
  chrome: 0.38,
  reveal: 0.9,
  revealCopy: 0.7,
  drift: 1.2,
  transition: 1.4,
  section: 1.6,
  glow: 6.0,
} as const;

/** Named stagger scale (seconds between children). */
export const STAGGER = {
  tight: 0.06,
  default: 0.08,
  loose: 0.14,
} as const;
