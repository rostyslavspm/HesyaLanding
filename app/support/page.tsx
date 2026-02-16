import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "../../components/FaqAccordion";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Support & FAQ — Hesya",
  description: "Get help with Hesya. Frequently asked questions and support contact.",
};

const gettingStarted = [
  {
    question: "How does Hesya work?",
    answer:
      "Hesya gently observes your app-switching patterns (with your permission) to notice when you might benefit from a mindful pause. When patterns suggest overwhelm, sustained focus, or restlessness, Hesya invites you to take a ritual break — a guided breathing exercise with your chosen anchor word.",
  },
  {
    question: "Do I need to grant Screen Time permission?",
    answer:
      "No, it's optional. Hesya works without it using a simpler detection method based on when you complete rituals. With Screen Time permission, Hesya can provide more nuanced pattern recognition, but you can skip it if you prefer.",
  },
  {
    question: 'What is an "anchor word"?',
    answer:
      'An anchor word is a value or intention that matters to you — like "PEACE," "BALANCE," or "PRESENCE." During rituals, Hesya helps you reconnect with this word through breathing exercises and reflection.',
  },
];

const privacy = [
  {
    question: "What data does Hesya collect?",
    answer:
      "None. Everything happens on your device. Hesya never records which apps you use, and no data is sent to external servers.",
  },
  {
    question: "Why does Hesya ask for Screen Time permission?",
    answer:
      'This allows Hesya to observe your app-switching patterns (not specific app names) to detect states like "overwhelmed" or "long focus session." This permission is optional — you can skip it and still use the app.',
  },
  {
    question: "Can I revoke permissions later?",
    answer:
      "Yes. You can disable pattern detection in Hesya's Settings, or revoke Screen Time/Notification permissions through iOS Settings > Hesya.",
  },
];

const usingHesya = [
  {
    question: "How do I start a ritual?",
    answer:
      'Tap "A breath" on the home screen, tap the widget, or tap a notification when Hesya invites you to pause. The ritual includes three breathing cycles, naming your current state, and a reflective question about your anchor word.',
  },
  {
    question: "How long does a ritual take?",
    answer: "About 2–3 minutes. You can go through it at your own pace.",
  },
  {
    question: "What do the different patterns mean?",
    answer:
      "Steady pace: you're in a good rhythm. Long focus session: 60+ minutes without a break. Switching between things: 3–4 app switches recently. Many quick switches: 5+ rapid app switches, possibly seeking stimulation.",
  },
  {
    question: "How do I add the Hesya widget?",
    answer:
      "Long-press your home screen > tap the + button > search for Hesya > choose a widget size > tap Add Widget. The widget displays your anchor word and current state with a unique ring pattern for each state.",
  },
];

const troubleshooting = [
  {
    question: "Hesya isn't detecting patterns",
    answer:
      "Make sure Pattern Detection is ON in Settings, grant Screen Time permission if you haven't already, use your device normally for 15 minutes (detection updates every 15 min), and complete a ritual if you skipped Screen Time permission.",
  },
  {
    question: "I'm not receiving reminder notifications",
    answer:
      "Check that notifications are enabled in Settings > Reminders, you've granted notification permission in iOS Settings > Hesya > Notifications, you're not in Quiet Hours, and Do Not Disturb or Focus modes aren't suppressing notifications.",
  },
  {
    question: "Does Hesya work offline?",
    answer: "Yes, completely. Hesya doesn't need an internet connection to function.",
  },
];

const general = [
  {
    question: "Is Hesya free?",
    answer: "Yes, Hesya is completely free with no ads or in-app purchases.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. Hesya doesn't require any account — just download and use.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Hesya works on all iPhones and iPads running iOS/iPadOS 26.2+. Live Activities (Dynamic Island) require iPhone 14 Pro or later.",
  },
  {
    question: "Can I use Hesya on multiple devices?",
    answer:
      "Yes, but settings and history are device-specific since everything is stored locally. There's no cloud sync.",
  },
];

export default function SupportPage() {
  return (
    <>
      <main className="mx-auto max-w-2xl px-6 py-20">
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-foreground-secondary transition-opacity hover:opacity-70"
        >
          &larr; Back to Hesya
        </Link>

        <h1 className="mb-2 text-3xl font-light tracking-tight">
          Support & FAQ
        </h1>
        <p className="mb-12 text-foreground-secondary">
          Find answers to common questions about Hesya.
        </p>

        <FaqSection title="Getting Started" items={gettingStarted} />
        <FaqSection title="Privacy & Permissions" items={privacy} />
        <FaqSection title="Using Hesya" items={usingHesya} />
        <FaqSection title="Troubleshooting" items={troubleshooting} />
        <FaqSection title="General" items={general} />

        <div className="glass-elevated mt-16 rounded-2xl p-8 text-center">
          <h2 className="mb-2 text-lg font-normal">Still need help?</h2>
          <p className="mb-4 text-sm text-foreground-secondary">
            We aim to respond within 24–48 hours.
          </p>
          <a
            href="mailto:support@hesya.app"
            className="glass inline-block rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
          >
            Email support@hesya.app
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
