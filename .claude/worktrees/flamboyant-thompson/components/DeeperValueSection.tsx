import FadeIn from "./FadeIn";

/**
 * Deeper Value — contemplative, editorial, designed.
 */
export default function DeeperValueSection({ id = "deeper" }: { id?: string }) {
  return (
    <section id={id} className="section-standard bg-chapter-warm" aria-label="Deeper value">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <FadeIn delay={0}>
            <p className="text-eyebrow">DEEPER VALUE</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="glass mt-6 rounded-[var(--radius-lg)] px-8 py-10">
            <p className="text-body text-reading" style={{ color: "var(--foreground)" }}>
              Attention is a skill.
            </p>

            <p className="mt-6 text-body text-reading">
              A practice, not a fix.
            </p>

            <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
              Designed for iPhone. Built to feel calm.
            </p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
