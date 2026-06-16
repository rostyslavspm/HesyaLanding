import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Hesya — Name what matters. Stay with it.",
  description:
    "Hesya is an iPhone focus companion: declare one intention, protect a session, and return in your own words when attention drifts. Then a quiet, outcome-neutral reflection. Free, private, no accounts.",
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  metadataBase: new URL("https://hesya.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hesya — Name what matters. Stay with it.",
    description:
      "Declare one intention, protect a focus session, and return in your own words when attention drifts. A calm iPhone companion — free, private, no accounts.",
    url: "https://hesya.app",
    siteName: "Hesya",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hesya — Name what matters. Stay with it." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — Name what matters. Stay with it.",
    description:
      "Declare one intention, protect a focus session, and return in your own words when attention drifts. Free, private, no accounts.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased noise-overlay overflow-x-hidden">
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
