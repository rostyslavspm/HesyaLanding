import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hesya — A quiet pause for your phone",
  description:
    "Hesya is a quiet pause app with a Lock Screen widget and a short ritual to reset attention. Free, private, on-device only.",
  authors: [{ name: "Rostyslav Slobodianiuk" }],
  creator: "Rostyslav Slobodianiuk",
  metadataBase: new URL("https://hesya.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hesya — A quiet pause for your phone",
    description:
      "A Lock Screen widget and a short ritual to reset your attention. Free, private, on-device only.",
    url: "https://hesya.app",
    siteName: "Hesya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — A quiet pause for your phone",
    description:
      "A Lock Screen widget and a short ritual to reset your attention. Free, private, on-device only.",
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
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
