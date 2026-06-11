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
              Last updated: June 10, 2026
            </p>
          </div>

          <div className="space-y-12 text-[var(--color-soft-obsidian)]/80 text-lg leading-[1.8]">
            <section>
              <p>
                Hesya is built so that your data stays yours. This page explains exactly what the app
                does with information — and what it deliberately doesn&apos;t do.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">The short version</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Your sessions, reflections, intents, and settings never leave your iPhone.</li>
                <li>Hesya never knows which apps you use.</li>
                <li>
                  The only thing the app ever sends anywhere is a small set of anonymous usage counts
                  that cannot be linked to you.
                </li>
                <li>No accounts, no ads, no tracking, no third-party analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">What stays on your device</h2>
              <p className="mb-4">
                Everything you create or configure in Hesya is stored locally on your iPhone:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Focus sessions and intents</strong> — what
                  you typed, when you started and finished.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Reflections and journal</strong> — moods and
                  notes after sessions.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Settings</strong> — cue preferences, quiet
                  hours, selected apps.
                </li>
              </ul>
              <p>
                Deleting the app deletes all of it. There is no copy on any server, and we could not
                recover it for you even if you asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Screen Time access (optional)</h2>
              <p className="mb-4">
                If you grant Screen Time permission, Hesya uses Apple&apos;s FamilyControls framework for one
                purpose: during a session you started, it asks iOS to signal when time spent in apps you
                selected as distracting crosses a threshold. The mechanics matter:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  Apple&apos;s framework never tells Hesya which app you used — only that the threshold was
                  crossed.
                </li>
                <li>
                  No app names, usage history, or browsing activity are ever visible to Hesya, stored, or
                  transmitted.
                </li>
              </ul>
              <p>
                The permission is optional. Every feature except drift cues works without it, and you can
                revoke it anytime in iOS Settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Anonymous usage events</h2>
              <p className="mb-4">
                To understand whether the app&apos;s core flows work, Hesya records a few anonymous events —
                for example &ldquo;a session was started&rdquo; or &ldquo;onboarding was completed.&rdquo; Each event contains
                only: the event name, a timestamp, the app version, and a structural category (such as the
                session type).
              </p>
              <p>
                There is deliberately no identifier of any kind — no device ID, no install ID, no user ID,
                no IP logging. These events are population-level counts that cannot be linked to you, your
                device, or your session content. They are sent to our own server (a Cloudflare Worker we
                operate); no third-party analytics service is involved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">For users in the EU/EEA and UK</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Controller:</strong> Rostyslav
                  Slobodianiuk, contact:{" "}
                  <a
                    href="mailto:support@hesya.app"
                    className="underline decoration-1 underline-offset-4 hover:text-[var(--color-soft-obsidian)] transition-colors"
                  >
                    support@hesya.app
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Personal data:</strong> Hesya is
                  designed not to process personal data on our servers. The anonymous usage events described
                  above contain no identifiers and cannot reasonably be linked to a person, so they fall
                  outside the scope of the GDPR (Recital 26). All personal content remains on your device
                  under your control.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Network delivery:</strong> when the app
                  sends an anonymous event, your IP address is technically visible to our hosting provider
                  (Cloudflare) for the duration of the delivery, as with any internet request. We do not log,
                  store, or use IP addresses.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Your rights:</strong> because we hold no
                  data about you, requests for access, rectification, erasure, or portability are fulfilled
                  by the design itself — your data is on your device, and deleting the app erases it. If you
                  have any question or concern, contact{" "}
                  <a
                    href="mailto:support@hesya.app"
                    className="underline decoration-1 underline-offset-4 hover:text-[var(--color-soft-obsidian)] transition-colors"
                  >
                    support@hesya.app
                  </a>
                  ; you also have the right to lodge a complaint with your local supervisory authority.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">International transfers:</strong> none. We
                  store no personal data, so there is nothing to transfer.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Children</h2>
              <p>
                Hesya does not knowingly collect any information from anyone, including children. The app is
                rated 4+.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Live Activities and notifications</h2>
              <p>
                The Lock Screen widget, Live Activity, and Dynamic Island are updated entirely on your
                device. Reminder notifications are local — scheduled and delivered by iOS, never by a server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Changes to this policy</h2>
              <p>
                If the app&apos;s data behavior ever changes, we will update this page and note it in the App
                Store release notes before the change ships.
              </p>
            </section>

            <section className="pt-8 border-t border-[var(--color-soft-obsidian)]/10">
              <h2 className="text-2xl font-serif italic mb-4 text-[var(--color-soft-obsidian)]">Contact</h2>
              <p>
                <a
                  href="mailto:support@hesya.app"
                  className="underline decoration-1 underline-offset-4 hover:text-[var(--color-soft-obsidian)] transition-colors"
                >
                  support@hesya.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
