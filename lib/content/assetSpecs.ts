/**
 * Required marketing assets — filenames, dimensions, and creative brief.
 * Drop files into public/ at the paths below.
 */

/**
 * The hero and manifesto photography specs were retired when both sections
 * moved to generative fields ported from the app surfaces — the Clearing
 * (Figma 2093:2013) and the Reaching Hand (Figma 2093:1976). Brand brief §04
 * rules out looking at a scene through a window, and §12 retires the forest
 * metaphor outright, so neither section takes a photograph any more.
 */

export const FEATURE_SCREENSHOTS = {
  width: 1290,
  height: 2796,
  aspect: "9:19.5 (iPhone 6.7″)",
  format: "PNG",
  maxBytes: 800_000,
  brief:
    "Native-resolution iPhone screenshots (1260×2736). One screen per feature: declare, return cue, journal, home widget.",
  files: [
    { id: "declare", path: "/screenshots/screen-declare.png" },
    { id: "return", path: "/screenshots/screen-return.png" },
    { id: "reflect", path: "/screenshots/screen-journal.png" },
    { id: "presence", path: "/screenshots/screen-homescreen.png" },
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
