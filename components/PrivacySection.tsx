import Link from "next/link";

/**
 * Privacy — short, confident trust block.
 */
export default function PrivacySection({ id = "privacy" }: { id?: string }) {
  return (
    <section id={id} className="section-standard" aria-label="Privacy">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="text-eyebrow">PRIVACY</p>

          <h2 className="mt-4 text-display-sm" style={{ fontStyle: "italic" }}>
            Private by design.
          </h2>

          <p className="mt-4 text-body text-reading">
            Hesya doesn&apos;t harvest your attention.
            It&apos;s built to stay respectful — and quiet.
          </p>

          <div className="mt-8 grid gap-3">
            <p className="text-body-sm" style={{ color: "var(--foreground-secondary)" }}>
              • Everything stays on your device.
            </p>
            <p className="text-body-sm" style={{ color: "var(--foreground-secondary)" }}>
              • No selling data. No ads.
            </p>
            <p className="text-body-sm" style={{ color: "var(--foreground-secondary)" }}>
              • You control notifications.
            </p>
          </div>

          <Link
            href="/privacy"
            className="mt-6 inline-block text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Read the privacy details
          </Link>
        </div>
      </div>
    </section>
  );
}
