/**
 * Deeper Value — contemplative, centered, max 640px.
 */
export default function DeeperValueSection() {
  return (
    <section
      className="px-6 pt-[140px] pb-24"
      aria-label="Deeper value"
    >
      <div className="mx-auto max-w-[640px] text-center">
        <p
          className="text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.65]"
          style={{ color: "var(--foreground)", maxWidth: "60ch", margin: "0 auto" }}
        >
          Presence is learned slowly.
          <br />
          <br />
          Hesya helps you cultivate the ability
          <br />
          to notice yourself —
          <br />
          and to direct your attention,
          <br />
          intentionally.
        </p>
      </div>
    </section>
  );
}
