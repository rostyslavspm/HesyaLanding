import type { Metadata } from "next";
import Link from "next/link";
import MarketingChrome from "../../components/MarketingChrome";
import Footer from "../../components/Footer";
import { LAYOUT_CLASS, TYPE } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Manifesto — Hesya",
  description:
    "On attention, agency, and presence. Why Hesya exists — and what it refuses to become.",
};

const SECTIONS = [
  {
    title: "The environment",
    paragraphs: [
      "We live in an environment that constantly competes for our attention.",
      "Much of modern technology is designed to exploit our biological reward systems — not because we are weak, but because we are human. When we feel overwhelmed, pressured, or emotionally depleted, we often escape into passive consumption. Not out of choice, but out of reflex.",
      "At the same time, the dominant response to distraction has been control: blockers, metrics, discipline systems, optimisation frameworks.",
      "These approaches often miss the point.",
      "They treat attention as something to be managed, restricted, or engineered — rather than something to be understood.",
    ],
  },
  {
    title: "My belief",
    paragraphs: [
      "Attention is awareness before it is control.",
      "People do not primarily lack discipline.",
      "They lack space — space to notice what is happening inside them, and space to choose intentionally rather than react automatically.",
      "Distraction is rarely the core problem.",
      "Emotional overwhelm is.",
      "When awareness is absent, tools become substitutes for responsibility.",
      "When intention is absent, optimisation becomes another form of escape.",
    ],
  },
  {
    title: "The middle path",
    paragraphs: [
      "I believe there is a narrow but essential path between unconscious escapism and obsessive productivity.",
      "This path is presence.",
      "Presence allows rest without guilt.",
      "Presence allows effort without self-violence.",
      "Presence restores agency — not by forcing behaviour, but by revealing choice.",
    ],
  },
  {
    title: "What I am building toward",
    paragraphs: [
      "I aim to create support that helps people notice when they are slipping into unconscious behaviour, offers a gentle pause rather than a command, and restores a sense of agency instead of taking it away.",
      "This is not about making people more productive.",
      "It is about helping them act with intention.",
      "The role of the system is not to decide.",
      "The role of the system is to step in briefly — and step back.",
    ],
  },
  {
    title: "What I refuse to do",
    paragraphs: [
      "I will not use guilt, urgency, or loss framing.",
      "I will not optimize for engagement at the cost of autonomy.",
      "I will not turn metrics into moral judgments.",
      "I will not replace self-trust with external control.",
      "If a tool becomes another voice telling people what they should do, it has already failed.",
    ],
  },
  {
    title: "The measure of success",
    paragraphs: [
      "Success is not captured by time saved or tasks completed.",
      "Success is when a person feels calmer in moments of overwhelm, less ashamed of tuning out, and more capable of choosing what matters to them.",
      "Ultimately, success is when the need for the tool diminishes — because awareness has been internalised.",
    ],
  },
  {
    title: "A final note",
    paragraphs: [
      "This work is not about fixing people.",
      "People are not broken.",
      "What is broken is an environment that profits from their numbness and a culture that mistakes control for care.",
      "I believe attention is not something to be conquered — but something to be returned to.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      <MarketingChrome variant="light" />
      <main id="main" className="bg-[var(--color-mist-white)] pt-8 pb-20 md:pb-32">
        <article className={`${LAYOUT_CLASS.prose} px-6`}>
          <Link href="/" className={TYPE.pageBack}>
            ← Back to Hesya
          </Link>

          <header className="mt-8 border-b border-black/5 pb-10">
            <p className={TYPE.pageLabel}>Manifesto</p>
            <h1 className={`${TYPE.editorialItalic} mt-4 text-[var(--color-soft-obsidian)]`}>
              On Attention, Agency, and Presence
            </h1>
          </header>

          <div className="mt-12 space-y-14">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className={TYPE.editorialSection}>{section.title}</h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className={TYPE.proseBody}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
