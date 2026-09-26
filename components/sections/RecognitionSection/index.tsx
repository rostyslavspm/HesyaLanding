import { SECTIONS, TYPE } from "@/lib/design-system";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      aria-label="Recognizing drift"
      className={`${SECTIONS.mist} section-bleed-x relative border-y border-[var(--border-subtle)] section-pad-compact raw-silk-sheen`}
    >
      <div className="container-marketing">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <p className="text-eyebrow text-[var(--color-on-dark-muted)] tracking-[0.24em] mb-3">
            Awareness
          </p>

          <h2 className={`${TYPE.marketingDisplay} text-[var(--color-silver)] font-light`}>
            Drift is not a failing.
          </h2>
        </div>
      </div>
    </section>
  );
}
