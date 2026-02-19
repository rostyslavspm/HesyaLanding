/**
 * What Hesya Does — centered text block, max 640px.
 */
export default function WhatHesyaDoesSection() {
  return (
    <section
      className="px-6 pt-[120px] pb-16"
      aria-label="What Hesya does"
    >
      <div className="mx-auto max-w-[640px] text-center">
        <h2
          className="mb-10 text-sm font-normal"
          style={{ color: "var(--foreground-muted)", letterSpacing: "0.08em" }}
        >
          What Hesya Does
        </h2>
        <p
          className="text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.65]"
          style={{ color: "var(--foreground)", maxWidth: "60ch", margin: "0 auto" }}
        >
          We create a moment of space
          <br />
          between distraction and response.
          <br />
          <br />
          In that moment,
          <br />
          you breathe —
          <br />
          and decide where to place your attention.
        </p>
      </div>
    </section>
  );
}
