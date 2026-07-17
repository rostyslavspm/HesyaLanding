import type { Metadata } from "next";
import Link from "next/link";
import MarketingChrome from "../../components/MarketingChrome";
import FaqSection from "../../components/FaqAccordion";
import Footer from "../../components/Footer";
import { LAYOUT_CLASS, TYPE } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Support & FAQ — Hesya",
  description: "Get help with Hesya. Frequently asked questions and support contact.",
};

const gettingStarted = [
  {
    question: "How does Hesya work?",
    answer:
      "You type what you want to have done — your intent — and start a focus session. Hesya keeps that intent visible while you work: on the in-session screen, the Lock Screen widget, and the Live Activity. If you drift into apps you've marked as distracting, a quiet cue invites you back. When the session ends, a short reflection closes the loop, and finished sessions live in your private journal.",
  },
  {
    question: "What is an intent?",
    answer:
      'One short line in your own words — "Finish the proposal introduction" or "Be present at dinner." Hesya keeps it verbatim and never rewrites or interprets it. You can add up to three, or start a session with none at all.',
  },
  {
    question: "Do I need to grant Screen Time permission?",
    answer:
      "No, it's optional. Sessions, the breathing pause, reflections, the journal, and widgets all work without it. Screen Time access enables drift cues: during a session, iOS can tell Hesya when time in the apps you selected as distracting crosses a threshold — without ever revealing which app you used.",
  },
];

const privacy = [
  {
    question: "What data does Hesya collect?",
    answer:
      "Your sessions, intents, reflections, and settings stay on your device. Hesya never records which apps you use. The only thing that ever leaves your device is a small set of anonymous usage counts (for example “a session was started”) with no identifier of any kind — they cannot be linked to you. See the Privacy Policy for detail.",
  },
  {
    question: "Why does Hesya ask for Screen Time permission?",
    answer:
      "Only to power drift cues during sessions you start. Apple's framework tells Hesya that cumulative time in your selected apps crossed a threshold — never which app, never your history. It's optional and revocable anytime in iOS Settings.",
  },
  {
    question: "Can I revoke permissions later?",
    answer:
      "Yes — iOS Settings > Hesya. The app keeps working without them; drift detection simply falls back to a gentler, time-based signal.",
  },
];

const usingHesya = [
  {
    question: "How do I start a session?",
    answer:
      "Type your intent on the Focus screen (or leave it empty) and tap Begin — three taps or fewer, by design. The in-session screen shows your intent and a quiet clock; Pause and Complete are always available.",
  },
  {
    question: "What's the difference between Deep Work and Present Evening?",
    answer:
      "Two flavors of intentional time — one for focused work, one for being present off-screen. They change the framing copy, not the rules.",
  },
  {
    question: "What is the breathing pause?",
    answer:
      'Three slow cycles of the physiological sigh — inhale, a short top-up, a long exhale (about 40 seconds) — then a quiet "Ready?" with two choices: resume or stay paused. It is always skippable.',
  },
  {
    question: "How do I add the Hesya widget?",
    answer:
      "Long-press your Home Screen or Lock Screen, tap + / Customize, find Hesya, and add it. The widget shows your current intent and session state. On macOS Tahoe, your session's Live Activity can also appear in the Mac menu bar.",
  },
];

const troubleshooting = [
  {
    question: "Drift cues aren't appearing",
    answer:
      "Check three things: Screen Time permission is granted (iOS Settings > Hesya), at least one app is selected as distracting (Hesya Settings), and a session is actually active. Cues also stay quiet during pauses, quiet hours, and mute windows — silence is often the product working as designed.",
  },
  {
    question: "I'm not receiving notifications",
    answer:
      "Check that notification permission is granted in iOS Settings > Hesya, that you're not in Quiet Hours or a mute window, and that Do Not Disturb or Focus modes aren't suppressing them.",
  },
  {
    question: "Does Hesya work offline?",
    answer:
      "Yes. Everything core works without a connection. The only network traffic is anonymous, identifier-free usage counts, which simply wait until you're back online.",
  },
];

const general = [
  {
    question: "Is Hesya free?",
    answer: "Yes — free, with no ads and no in-app purchases.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. There are no accounts — download and use.",
  },
  {
    question: "What devices are supported?",
    answer:
      "iPhone on iOS 26 or later. On macOS Tahoe, your session's Live Activity can appear in the Mac menu bar while you work.",
  },
  {
    question: "Can I use Hesya on multiple devices?",
    answer:
      "Your sessions and journal are stored on each device — there's no cloud sync yet. A native Mac companion is planned.",
  },
];

export default function SupportPage() {
  return (
    <>
      <MarketingChrome variant="light" />
      <main id="main" className="min-h-[100dvh] bg-[var(--color-mist-white)] py-32 px-6" aria-label="Support and FAQ">
        <div className={LAYOUT_CLASS.prose}>
          <Link href="/" className={`${TYPE.pageBack} mb-12`}>
            &larr; Back to Hesya
          </Link>

          <div className="mb-16 text-center">
            <h1 className={`${TYPE.editorialItalic} mb-6 text-[var(--color-soft-obsidian)]`}>
              Support & FAQ
            </h1>
            <p className={TYPE.proseLead}>Find answers to common questions about Hesya.</p>
          </div>

          <div className="mb-20 space-y-12 text-[var(--color-soft-obsidian)]">
            <FaqSection title="Getting Started" items={gettingStarted} />
            <FaqSection title="Privacy & Permissions" items={privacy} />
            <FaqSection title="Using Hesya" items={usingHesya} />
            <FaqSection title="Troubleshooting" items={troubleshooting} />
            <FaqSection title="General" items={general} />
          </div>

          <div className="mt-16 rounded-[3rem] bg-[var(--color-pearl-glow)] p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className={`${TYPE.featureTitle} mb-4 text-[var(--color-soft-obsidian)]`}>
              Still need help?
            </h2>
            <p className={`${TYPE.proseMuted} mb-8`}>We aim to respond within 24–48 hours.</p>
            <a
              href="mailto:support@hesya.app"
              className="btn-pill btn-magnetic text-tracked inline-block"
            >
              Email support@hesya.app
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
