"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DesktopNavProps = {
  variant?: "light" | "dark";
};

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/manifesto", label: "Philosophy" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

export default function DesktopNav({ variant = "dark" }: DesktopNavProps) {
  const linkClass = variant === "dark" ? "nav-link" : "nav-link-light";
  const pathname = usePathname();

  return (
    <nav className="hidden min-h-0 md:block" aria-label="Main navigation">
      <ul className="flex list-none items-center gap-1 ps-0">
        {LINKS.map(({ href, label }) => (
          <li key={href} className="list-none">
            <Link
              href={href}
              className={linkClass}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
