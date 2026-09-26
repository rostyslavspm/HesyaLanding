import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hesya — Return to what matters",
    short_name: "Hesya",
    description:
      "A calm iPhone focus companion: name one intention, notice when attention drifts, and return without guilt.",
    start_url: "/",
    display: "standalone",
    // --color-abyss (oklch(0.118 0.022 258)) — keep in sync if that token changes
    background_color: "#02050d",
    theme_color: "#02050d",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
