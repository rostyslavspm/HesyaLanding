import Link from "next/link";
import MarketingChrome from "../components/MarketingChrome";
import Footer from "../components/Footer";
import { BTN, LAYOUT_CLASS, TYPE } from "@/lib/design-system";

export default function NotFound() {
  return (
    <>
      <MarketingChrome variant="dark" />
      <main
        id="main"
        className="flex min-h-[100dvh] flex-col items-center justify-center bg-[var(--color-abyss)] px-6 py-32 text-center text-[var(--color-silver)]"
        aria-label="Page not found"
      >
        <div className={LAYOUT_CLASS.prose}>
          <p className={TYPE.pageLabel}>404</p>
          <h1 className={`${TYPE.editorialItalic} mt-4 text-[var(--color-silver)]`}>
            This page drifted.
          </h1>
          <p className={`${TYPE.proseMuted} mt-4`}>
            The page you&apos;re looking for doesn&apos;t exist, or has moved.
          </p>
          <Link href="/" className={`${BTN.ctaOutline} mt-10 inline-flex`}>
            Back to Hesya
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
