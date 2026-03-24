import Link from "next/link";

/**
 * Footer — minimal, quiet. Support, Privacy, Contact, brand.
 */
export default function Footer() {
  return (
    <footer
      className="px-[var(--gutter)] py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-hesya flex flex-col items-center gap-8 text-center">
        <nav
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          aria-label="Footer navigation"
        >
          <Link
            href="/support"
            className="underline text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="underline text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Privacy
          </Link>
          <a
            href="mailto:support@hesya.app"
            className="underline text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            Contact
          </a>
        </nav>

        <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
          Hesya &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
