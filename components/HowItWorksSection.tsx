const BLOCKS = [
  {
    title: "Observe",
    text: "Hesya notices patterns in how you move through your phone.",
  },
  {
    title: "Notice",
    text: "When your rhythm shifts — restless switching, long stretches — it becomes visible.",
  },
  {
    title: "Invite",
    text: "A quiet prompt to pause. A breath. A moment of rest.",
  },
];

/**
 * How It Works — 3-step system (tight, consistent typography).
 */
export default function HowItWorksSection({ id = "how-it-works" }: { id?: string }) {
  return (
    <section id={id} className="section-standard" aria-label="How it works">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="text-eyebrow">HOW IT WORKS</p>
          <h2 className="mt-4 text-display-sm" style={{ fontStyle: "italic" }}>
            A gentle loop back.
          </h2>
          <p className="mt-4 text-body text-reading">
            Not to control your attention — just to help you notice when it drifts.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[56rem] gap-6 md:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <div key={b.title} className="glass rounded-[var(--radius-md)] p-6">
              <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-heading" style={{ color: "var(--foreground)" }}>
                {b.title}
              </h3>
              <p className="mt-3 text-body-sm text-reading">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
