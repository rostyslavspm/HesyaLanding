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
  title: "Hesya — Notice when you drift. Return when you choose.",
  description:
    "Hesya notices when you drift — long focus sessions, rapid switching, restless seeking — and offers a gentle ritual to return to presence. Inspired by hesychia, the ancient practice of inner stillness. Free, private, on-device only.",
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  metadataBase: new URL("https://hesya.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hesya — Notice when you drift. Return when you choose.",
    description:
      "Hesya notices when you drift and offers a gentle ritual to return to presence. Inspired by hesychia, the ancient practice of inner stillness. Free, private, on-device only.",
    url: "https://hesya.app",
    siteName: "Hesya",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hesya — Notice when you drift. Return when you choose." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — Notice when you drift. Return when you choose.",
    description:
      "Hesya notices when you drift and offers a gentle ritual to return to presence. Free, private, on-device only.",
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
