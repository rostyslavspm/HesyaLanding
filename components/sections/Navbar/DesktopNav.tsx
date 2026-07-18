"use client";

import Link from "next/link";

type DesktopNavProps = {
  variant?: "light" | "dark";
};

export default function DesktopNav({ variant = "dark" }: DesktopNavProps) {
  const linkClass = variant === "dark" ? "nav-link" : "nav-link-light";

  return (
    <nav className="hidden min-h-0 md:block" aria-label="Main navigation">
      <ul className="flex list-none items-center gap-1 ps-0">
        <li className="list-none">
          <Link href="/#features" className={linkClass}>
            Features
          </Link>
        </li>
        <li className="list-none">
          <Link href="/manifesto" className={linkClass}>
            Philosophy
          </Link>
        </li>
        <li className="list-none">
          <Link href="/support" className={linkClass}>
            Support
          </Link>
        </li>
        <li className="list-none">
          <Link href="/privacy" className={linkClass}>
            Privacy
          </Link>
        </li>
      </ul>
    </nav>
  );
}
