"use client";

import Link from "next/link";
import { SECTIONS } from "@/lib/design-system";

const FOOTER_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "mailto:support@hesya.app", label: "Contact", mailto: true },
] as const;

export default function Footer() {
  return (
    <footer
      className={`${SECTIONS.footer} section-bleed-x px-[var(--gutter)] pt-16 md:pt-20`}
      aria-label="Site footer"
      data-header-theme="dark"
    >
      <div className="container-marketing">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[16rem] shrink-0">
            <Link
              href="/"
              className="text-brand"
              style={{ color: "var(--color-on-dark)" }}
            >
              Hesya
            </Link>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 ps-0">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href} className="list-none">
                  {"mailto" in link ? (
                    <a
                      href={link.href}
                      className="text-micro link-animated text-[var(--color-on-dark-secondary)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-micro link-animated text-[var(--color-on-dark-secondary)]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-watermark-zone relative mt-16 min-h-[clamp(8rem,20vw,14rem)] border-t border-[var(--border-dark)] pt-8 md:mt-24 md:min-h-[clamp(10rem,22vw,16rem)]">
          <p className="relative z-[1] text-micro text-[var(--color-on-dark-muted)]">
            Hesya &copy; {new Date().getFullYear()}
          </p>
          <p className="footer-watermark" aria-hidden>
            Hesya
          </p>
        </div>
      </div>
    </footer>
  );
}
