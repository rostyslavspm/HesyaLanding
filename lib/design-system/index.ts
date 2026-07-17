/**
 * Design system constants for use in TS/TSX when CSS classes aren't enough.
 */
export const LAYOUT = {
  containerMarketing: "1440px",
  containerContent: "1100px",
  headerHeight: "82px",
} as const;

export const URLS = {
  testflight: "https://testflight.apple.com/join/2sE4MyhY",
} as const;

/** Marketing section background classes — pair with section-pad* utilities */
export const SECTIONS = {
  dark: "section-dark",
  stone: "section-stone",
  mist: "section-mist",
  forest: "section-forest",
  sky: "section-sky",
  footer: "section-footer",
} as const;

/** Typography role classes */
export const TYPE = {
  marketingHero: "text-marketing-hero",
  marketingDisplay: "text-marketing-display",
  marketingSubhead: "text-marketing-subhead",
  suiteHeading: "text-suite-heading",
  featureTitle: "text-feature-title",
  featureBody: "text-feature-body",
  productLabel: "text-product-label",
  editorialDisplay: "text-editorial-display",
  editorialItalic: "text-editorial-italic",
  editorialSection: "text-editorial-section",
  pageBack: "text-page-back",
  pageLabel: "text-page-label",
  proseBody: "text-prose-body",
  proseLead: "text-prose-lead",
  proseMuted: "text-prose-muted",
  proseQuestion: "text-prose-question",
  proseAnswer: "text-prose-answer",
  eyebrow: "text-eyebrow",
  linkAccent: "text-link-accent",
} as const;

/** Layout role classes */
export const LAYOUT_CLASS = {
  prose: "container-prose",
} as const;

/** Button role classes */
export const BTN = {
  ctaDark: "btn-cta-dark",
  ctaFilled: "btn-cta-filled",
  ctaOutline: "btn-cta-outline",
  ctaBanner: "btn-cta-banner",
  ghost: "btn-cta-ghost",
} as const;
