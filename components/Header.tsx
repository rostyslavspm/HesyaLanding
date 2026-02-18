import Link from "next/link";

/**
 * Header — sticky nav with logo and links.
 * Matches Skylight/Mirror pattern. Glass background.
 */
export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 px-6 py-4 backdrop-blur-xl"
      style={{ background: "color-mix(in srgb, var(--base) 88%, transparent)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="text-heading"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
        >
          Hesya
        </Link>
        <nav className="flex gap-8" aria-label="Main navigation">
          <Link
            href="/privacy"
            className="text-micro transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground-muted)" }}
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-micro transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground-muted)" }}
          >
            Support
          </Link>
          <a
            href="mailto:support@hesya.app"
            className="text-micro transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground-muted)" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
