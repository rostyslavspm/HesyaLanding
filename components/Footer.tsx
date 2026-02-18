import Link from "next/link";

/**
 * Footer — minimal, typographic.
 * Matches the app's quiet footer / settings style.
 */
export default function Footer() {
  return (
    <footer className="px-6 py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <nav className="flex gap-8" aria-label="Footer navigation">
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/support", label: "Support" },
            { href: "mailto:support@hesya.app", label: "Contact", external: true },
          ].map(({ href, label, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                className="text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                {label}
              </Link>
            )
          )}
        </nav>
        <p className="text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} Rostyslav Slobodianiuk
        </p>
      </div>
    </footer>
  );
}
