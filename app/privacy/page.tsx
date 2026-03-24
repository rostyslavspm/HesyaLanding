import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Hesya",
  description: "Hesya privacy policy. All data stays on your device.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-[var(--color-mist-white)] py-32 px-6" aria-label="Privacy policy">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-block text-sm text-[var(--color-soft-obsidian)]/50 tracking-widest uppercase hover:text-[var(--color-soft-obsidian)] transition-colors mb-12"
          >
            &larr; Back to Hesya
          </Link>

          <div className="mb-16">
            <h1 className="text-display-italic text-[var(--color-soft-obsidian)] mb-4">Privacy Policy</h1>
            <p className="text-body text-[var(--color-soft-obsidian)]/60">
              Last updated: February 16, 2026
            </p>
          </div>

          <div className="space-y-12 text-[var(--color-soft-obsidian)]/80 text-lg leading-[1.8]">
            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Overview</h2>
              <p>
                Hesya is a mindfulness app designed to help you maintain awareness of
                your digital habits through gentle pattern detection and optional
                ritual pauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">What We Collect</h2>
              <p className="font-medium text-[var(--color-soft-obsidian)]">
                We do not collect, store, or transmit any personal data from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Local Data Storage</h2>
              <p className="mb-4">All app functionality operates entirely on your device:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Pattern Detection:</strong> When enabled, Hesya observes
                  your app switching patterns to detect behavioral states (calm,
                  pushing, overwhelmed, restless). This analysis happens entirely on
                  your device using Apple&apos;s Screen Time API.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Anchor Word:</strong> Your chosen anchor word is stored
                  locally on your device and in your device&apos;s widget data.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Ritual History:</strong> Your ritual completion times are
                  stored locally to help schedule appropriate reminders.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Settings:</strong> All preferences (reminders, quiet hours,
                  etc.) are stored locally on your device.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Screen Time Permission</h2>
              <p className="mb-4">
                Hesya uses Apple&apos;s Screen Time API (FamilyControls framework) to
                observe your app usage patterns. This permission allows the app to:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>Detect when you switch between apps</li>
                <li>Identify patterns in your device usage (not specific app content)</li>
                <li>Present contextual wellness suggestions</li>
              </ul>
              <div className="bg-[var(--color-pearl-glow)] p-6 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <p>
                  <strong className="text-[var(--color-soft-obsidian)]">Important:</strong> Hesya never records which specific apps
                  you use. No app names or website URLs are stored. All pattern
                  detection is anonymous and happens on your device. Nothing is sent to
                  external servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Third-Party Services & Children</h2>
              <p className="mb-4">
                Hesya does not integrate with any third-party analytics, advertising,
                or data collection services. Hesya does not knowingly collect any information from children. The
                app is rated 4+.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Your Rights & Retention</h2>
              <p className="mb-4">
                Since no data leaves your device, you maintain complete control.
                Deleting the app removes all associated data from your device.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Disable pattern detection at any time in Settings</li>
                <li>Revoke Screen Time permission through iOS Settings</li>
                <li>Delete all app data by deleting the app</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-[var(--color-soft-obsidian)]/10">
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Contact</h2>
              <p>
                For questions about privacy practices, please contact:{" "}
                <a href="mailto:support@hesya.app" className="underline decoration-1 underline-offset-4 hover:text-[var(--color-soft-obsidian)] transition-colors">support@hesya.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
