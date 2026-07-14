/**
 * Required marketing assets — filenames, dimensions, and creative brief.
 * Drop files into public/ at the paths below.
 */

export const HERO_IMAGE = {
  path: "/images/hero-forest.jpg",
  filename: "hero-forest.jpg",
  width: 3840,
  height: 2160,
  aspect: "16:9",
  format: "JPG or WebP",
  maxBytes: 500_000,
  brief:
    "Misty forest at dusk. No people. Trees and atmosphere in the lower two-thirds; darker sky or canopy in the upper third for headline legibility. Calm, not dramatic. Purple-green tones that work under a subtle violet overlay.",
  focalPoint: "center 52%",
  safeZone:
    "Keep the upper 35% relatively uncluttered (sky, mist, or soft canopy) for headline overlay.",
} as const;

export const MANIFESTO_IMAGE = {
  path: "/images/manifesto-scene.jpg",
  filename: "manifesto-scene.jpg",
  width: 2400,
  height: 1600,
  aspect: "3:2",
  format: "JPG or WebP",
  maxBytes: 400_000,
  brief:
    "Distinct from the hero — darker forest green, more enclosed, editorial mood. No people required; optional distant silhouette only. Composed for the left half of a split section (subject weighted left-center).",
  focalPoint: "left center",
} as const;

export const FEATURE_SCREENSHOTS = {
  width: 1290,
  height: 2796,
  aspect: "9:19.5 (iPhone 6.7″)",
  format: "PNG",
  maxBytes: 800_000,
  brief:
    "Native-resolution iPhone screenshots on a neutral or transparent background. One screen per feature: intention, lock screen return, reflection, widget.",
  files: [
    { id: "declare", path: "/screenshots/screen-intention.png" },
    { id: "return", path: "/screenshots/screen-lockscreen.png" },
    { id: "reflect", path: "/screenshots/screen-ready.png" },
    { id: "presence", path: "/screenshots/Homescreen-widget.png" },
  ],
} as const;

export const FEATURE_VIDEOS = {
  width: 1080,
  height: 1920,
  aspect: "9:16 portrait",
  format: "MP4 (H.264)",
  durationSec: "8–15 loop",
  maxBytes: 3_000_000,
  audio: "none (muted)",
  brief:
    "Portrait phone loops showing each feature in use. Seamless loop, no UI chrome outside the device frame.",
  files: [
    { id: "declare", path: "/videos/feature-declare.mp4" },
    { id: "return", path: "/videos/feature-return.mp4" },
    { id: "reflect", path: "/videos/feature-reflect.mp4" },
    { id: "presence", path: "/videos/feature-presence.mp4" },
  ],
} as const;
