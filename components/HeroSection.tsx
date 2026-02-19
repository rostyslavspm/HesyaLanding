/**
 * Hero — 75–85vh, centered, max 680px.
 * No subheading. No CTA.
 */
export default function HeroSection() {
  return (
    <section
      className="flex min-h-[75vh] flex-col items-center justify-center px-6"
      aria-label="Hero"
    >
      <h1
        className="max-w-[680px] text-center font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.15]"
        style={{ letterSpacing: "0.02em", fontFamily: "var(--font-serif)" }}
      >
        When your attention slips,
        <br />
        Hesya invites you back.
      </h1>
    </section>
  );
}
