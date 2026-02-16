import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <nav className="flex gap-8 text-sm text-foreground-muted">
          <Link
            href="/privacy"
            className="transition-opacity hover:opacity-70"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="transition-opacity hover:opacity-70"
          >
            Support
          </Link>
          <a
            href="mailto:support@hesya.app"
            className="transition-opacity hover:opacity-70"
          >
            Contact
          </a>
        </nav>
        <p className="text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} Rostyslav Slobodianiuk
        </p>
      </div>
    </footer>
  );
}
