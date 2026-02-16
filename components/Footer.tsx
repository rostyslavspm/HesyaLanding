import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <nav className="flex gap-8 text-sm text-foreground-secondary">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/support" className="transition-colors hover:text-foreground">
            Support
          </Link>
          <a
            href="mailto:support@hesya.app"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
        <p className="text-xs text-foreground-secondary">
          &copy; {new Date().getFullYear()} Rostyslav Slobodianiuk
        </p>
      </div>
    </footer>
  );
}
