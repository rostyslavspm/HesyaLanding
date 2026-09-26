import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Newsreader, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import MotionShell from "../components/motion/MotionShell";
import JsonLd, { rootKnowledgeGraph } from "../components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// The app's own timer face — used only for live in-phone UI in the hero.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-app",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hesya: Return to what matters",
  description:
    "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts.",
  keywords: [
    "Hesya",
    "Hesya app",
    "iPhone focus app",
    "intention tracker",
    "mindful focus companion",
    "Screen Time drift cues",
    "distraction free focus",
    "mindfulness app without streaks",
    "physiological sigh focus app",
    "private focus app iOS",
    "calm focus timer",
    "single intention focus",
  ],
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  publisher: "Hesya",
  metadataBase: new URL("https://hesya.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hesya: Return to what matters",
    description:
      "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts.",
    url: "https://hesya.app",
    siteName: "Hesya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hesya: Return to what matters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya: Return to what matters",
    description:
      "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02050d", // --color-abyss (oklch(0.118 0.022 258)) — keep in sync if that token changes
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} ${newsreader.variable} ${jost.variable}`}
    >
      <head>
        <JsonLd data={rootKnowledgeGraph} />
      </head>
      <body suppressHydrationWarning className="antialiased noise-overlay overflow-x-hidden">
        <MotionShell />
        <SmoothScroll>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
