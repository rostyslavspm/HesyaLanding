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
      <main id="main" className="mx-auto max-w-2xl px-6 py-20" aria-label="Privacy policy">
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-foreground-secondary transition-opacity hover:opacity-70"
        >
          &larr; Back to Hesya
        </Link>

        <article className="prose">
          <h1>Privacy Policy</h1>
          <p className="text-foreground-secondary">
            Last updated: February 16, 2026
          </p>

          <h2>Overview</h2>
          <p>
            Hesya is a mindfulness app designed to help you maintain awareness of
            your digital habits through gentle pattern detection and optional
            ritual pauses.
          </p>

          <h2>What We Collect</h2>
          <p>
            <strong>We do not collect, store, or transmit any personal data from
            your device.</strong>
          </p>

          <h2>Local Data Storage</h2>
          <p>All app functionality operates entirely on your device:</p>
          <ul>
            <li>
              <strong>Pattern Detection:</strong> When enabled, Hesya observes
              your app switching patterns to detect behavioral states (calm,
              pushing, overwhelmed, restless). This analysis happens entirely on
              your device using Apple&apos;s Screen Time API.
            </li>
            <li>
              <strong>Anchor Word:</strong> Your chosen anchor word is stored
              locally on your device and in your device&apos;s widget data.
            </li>
            <li>
              <strong>Ritual History:</strong> Your ritual completion times are
              stored locally to help schedule appropriate reminders.
            </li>
            <li>
              <strong>Settings:</strong> All preferences (reminders, quiet hours,
              etc.) are stored locally on your device.
            </li>
          </ul>

          <h2>Screen Time Permission</h2>
          <p>
            Hesya uses Apple&apos;s Screen Time API (FamilyControls framework) to
            observe your app usage patterns. This permission allows the app to:
          </p>
          <ul>
            <li>Detect when you switch between apps</li>
            <li>
              Identify patterns in your device usage (not specific app content)
            </li>
            <li>Present contextual wellness suggestions</li>
          </ul>
          <p>
            <strong>Important:</strong> Hesya never records which specific apps
            you use. No app names or website URLs are stored. All pattern
            detection is anonymous and happens on your device. Nothing is sent to
            external servers.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Hesya does not integrate with any third-party analytics, advertising,
            or data collection services.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Hesya does not knowingly collect any information from children. The
            app is rated 4+.
          </p>

          <h2>Data Retention</h2>
          <p>
            Since no data leaves your device, you maintain complete control.
            Deleting the app removes all associated data from your device.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li>Disable pattern detection at any time in Settings</li>
            <li>Revoke Screen Time permission through iOS Settings</li>
            <li>Delete all app data by deleting the app</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We will update this policy as needed and notify users through app
            updates.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about privacy practices, please contact:{" "}
            <a href="mailto:support@hesya.app">support@hesya.app</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
