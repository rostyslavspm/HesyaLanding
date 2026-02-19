/**
 * Deeper Value — contemplative, editorial, designed.
 */
export default function DeeperValueSection({ id = "deeper" }: { id?: string }) {
  return (
    <section id={id} className="section-standard" aria-label="Deeper value">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="text-eyebrow">DEEPER VALUE</p>

          <div className="glass mt-6 rounded-[var(--radius-lg)] px-8 py-10">
            <p className="text-body text-reading" style={{ color: "var(--foreground)" }}>
              Presence is learned slowly.
            </p>

            <p className="mt-6 text-body text-reading">
              Hesya helps you cultivate the ability to notice yourself —
              and to direct your attention, intentionally.
            </p>

            <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
              Designed for iPhone. Built to feel calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
