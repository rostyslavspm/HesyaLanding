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
  title: "Hesya — A gentle pause when you need it",
  description:
    "A quiet pause app with a Lock Screen widget and a short ritual to reset your attention. Your word. Your rhythm. Free, private, on-device only.",
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  metadataBase: new URL("https://hesya.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hesya — A gentle pause when you need it",
    description:
      "Your word. Your rhythm. A Lock Screen widget and a short ritual to reset your attention. Free, private, on-device only.",
    url: "https://hesya.app",
    siteName: "Hesya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — A gentle pause when you need it",
    description:
      "Your word. Your rhythm. A Lock Screen widget and a short ritual to reset your attention. Free, private, on-device only.",
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
