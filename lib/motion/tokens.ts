/**
 * Shared motion constants — mirrors CSS tokens in design-tokens.css
 * (--ease-hesya, --dur-*). GSAP runtime imports these via gsap.ts.
 */

/** Signature cubic-bezier: smooth with a slightly elastic tail. */
export const EASE_HESYA: [number, number, number, number] = [0.32, 0.72, 0, 1];

/** Named duration scale (seconds). Keep in sync with --dur-* tokens. */
export const DURATION = {
  micro: 0.25,
  hover: 0.35,
  chrome: 0.28,
  reveal: 0.45,
  revealCopy: 0.35,
  drift: 0.8,
  transition: 1.1,
  section: 1.2,
} as const;

/** Named stagger scale (seconds between children). */
export const STAGGER = {
  tight: 0.04,
  default: 0.05,
  loose: 0.1,
} as const;
