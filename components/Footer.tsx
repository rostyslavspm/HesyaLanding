import Link from "next/link";

/**
 * Footer — minimal.
 * Support, Privacy, Contact, small brand name.
 */
export default function Footer() {
  return (
    <footer className="px-6 py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <nav className="flex gap-8" aria-label="Footer navigation">
          <Link
            href="/support"
            className="text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Privacy
          </Link>
          <a
            href="mailto:support@hesya.app"
            className="text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Contact
          </a>
        </nav>
        <p className="text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.6 }}>
          Hesya &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
