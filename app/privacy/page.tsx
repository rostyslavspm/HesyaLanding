import type { Metadata } from "next";
import Link from "next/link";
import HeaderV2 from "../../components/HeaderV2";
import FooterV2 from "../../components/FooterV2";

export const metadata: Metadata = {
  title: "Privacy Policy — Hesya",
  description: "Your sessions, intents, and reflections stay on your device. The only thing that ever leaves is a small set of anonymous, identifier-free usage counts.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeaderV2 />
      <main id="main" className="section-light min-h-screen section-standard-sm pt-24" aria-label="Privacy policy">
        <div className="container-hesya max-w-3xl">
          <Link
            href="/"
            className="mb-10 inline-block text-micro uppercase tracking-[0.12em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            &larr; Back to Hesya
          </Link>

          <div className="mb-16">
            <h1 className="text-display-sans mb-4 text-[var(--color-soft-obsidian)]">Privacy Policy</h1>
            <p className="text-body text-[var(--color-soft-obsidian)]/60">
              Last updated: June 16, 2026
            </p>
          </div>

          <div className="space-y-12 text-[var(--color-soft-obsidian)]/80 text-lg leading-[1.8]">
            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Overview</h2>
              <p>
                Hesya is a focus companion: you declare an intention, protect a
                session, and reflect when it ends. It is built so that your data
                stays yours. This page explains exactly what the app does with
                information — and what it deliberately doesn&apos;t do.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">What stays on your device</h2>
              <p className="mb-4">
                Everything you create or configure lives only on your iPhone:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Sessions &amp; intents:</strong> what you typed,
                  when you started and finished.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Reflections &amp; journal:</strong> moods and
                  notes after a session.
                </li>
                <li>
                  <strong className="text-[var(--color-soft-obsidian)]">Settings:</strong> cue preferences, quiet hours,
                  the apps you select as distracting.
                </li>
              </ul>
              <p className="mt-4">
                Deleting the app deletes all of it. There is no copy on any server.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Screen Time (optional)</h2>
              <p className="mb-4">
                If you grant Screen Time access, Hesya uses Apple&apos;s FamilyControls
                framework for one purpose: during a session you started, it asks iOS
                to signal when time in apps <em>you selected</em> crosses a threshold,
                so it can offer a gentle cue back to your intent.
              </p>
              <div className="panel-elevated rounded-[2rem] p-6">
                <p>
                  <strong className="text-[var(--color-soft-obsidian)]">Important:</strong> Apple&apos;s framework never tells
                  Hesya <em>which</em> app you used — only that the threshold was crossed.
                  No app names, usage history, or browsing activity are ever visible to
                  Hesya, stored, or transmitted. The permission is optional; every
                  feature except drift cues works without it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Anonymous usage events</h2>
              <p className="mb-4">
                To understand whether the app&apos;s core flows work, Hesya records a
                few anonymous events — for example &ldquo;a session was started&rdquo;
                or &ldquo;onboarding was completed.&rdquo; Each event contains only the
                event name, a timestamp, the app version, and a structural category
                (such as the session type).
              </p>
              <p>
                There is deliberately <strong className="text-[var(--color-soft-obsidian)]">no identifier of any kind</strong> —
                no device ID, install ID, user ID, or IP logging. These are
                population-level counts that cannot be linked to you or your device.
                They are sent to our own first-party server; no third-party analytics
                service is involved. Reflection notes and intent text never leave your
                device.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Third-Party Services &amp; Children</h2>
              <p className="mb-4">
                Hesya does not integrate with any third-party analytics, advertising,
                or tracking SDKs. There is no cross-app or cross-site tracking. Hesya
                does not knowingly collect information from children; the app is rated 4+.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Your Rights &amp; Retention</h2>
              <p className="mb-4">
                Your personal content stays on your device and you control it.
                Deleting the app removes it entirely. The only information that ever
                leaves — the anonymous usage events above — contains nothing that
                identifies you.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Choose your distracting apps, or none, anytime in Settings</li>
                <li>Revoke Screen Time or Notification permissions through iOS Settings</li>
                <li>Delete all app data by deleting the app</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-[var(--color-soft-obsidian)]/10">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">Contact</h2>
              <p>
                For questions about privacy practices, please contact:{" "}
                <a href="mailto:support@hesya.app" className="underline decoration-1 underline-offset-4 hover:text-[var(--color-soft-obsidian)] transition-colors">support@hesya.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterV2 />
    </>
  );
}
