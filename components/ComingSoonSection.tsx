/**
 * Coming Soon — centered, no email capture, no buttons.
 */
export default function ComingSoonSection() {
  return (
    <section
      className="px-6 pt-[140px] pb-24"
      aria-label="Coming soon"
    >
      <div className="mx-auto max-w-[640px] text-center">
        <p
          className="text-lg font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Coming Soon
        </p>
        <p
          className="mt-2 text-base"
          style={{ color: "var(--foreground-muted)" }}
        >
          Available on the App Store.
        </p>
      </div>
    </section>
  );
}
