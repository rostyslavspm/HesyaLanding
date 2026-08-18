import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Newsreader } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import MotionShell from "../components/motion/MotionShell";
import JsonLd, { websiteJsonLd, appJsonLd } from "../components/JsonLd";

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
    "iPhone focus app",
    "intention tracker",
    "mindful focus companion",
    "Screen Time drift cues",
    "distraction free focus",
    "mindfulness app without streaks",
  ],
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  metadataBase: new URL("https://hesya.app"),
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
  themeColor: "#0c0d10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} ${newsreader.variable}`}
    >
      <head>
        <JsonLd data={[websiteJsonLd, appJsonLd]} />
      </head>
      <body suppressHydrationWarning className="antialiased noise-overlay overflow-x-hidden">
        <MotionShell />
        <SmoothScroll>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
