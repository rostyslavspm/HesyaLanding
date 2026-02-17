import type { Metadata } from "next";
import { Lato, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
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
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Hesya — Notice when you drift. Return when you choose." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — Notice when you drift. Return when you choose.",
    description:
      "Hesya notices when you drift and offers a gentle ritual to return to presence. Free, private, on-device only.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
