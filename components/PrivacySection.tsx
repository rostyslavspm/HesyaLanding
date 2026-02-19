/**
 * Privacy — subtle, quiet, not promotional.
 */
export default function PrivacySection() {
  return (
    <section
      className="px-6 py-20"
      aria-label="Privacy"
    >
      <div className="mx-auto max-w-[640px] text-center">
        <h2
          className="mb-4 text-base font-normal"
          style={{ color: "var(--foreground-muted)" }}
        >
          Private by Design
        </h2>
        <p
          className="text-[1rem] leading-relaxed"
          style={{ color: "var(--foreground-muted)", opacity: 0.9 }}
        >
          Hesya does not harvest data.
          <br />
          Everything stays on your device.
        </p>
      </div>
    </section>
  );
}
