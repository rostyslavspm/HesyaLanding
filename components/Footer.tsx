"use client";

import Link from "next/link";
import { SECTIONS, URLS } from "@/lib/design-system";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: URLS.testflight, label: "Get the beta", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/manifesto", label: "Manifesto" },
      { href: "/support", label: "Support" },
      { href: "mailto:support@hesya.app", label: "Contact", mailto: true },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy" }],
  },
] as const;

export default function Footer() {
  return (
    <footer
      className={`${SECTIONS.footer} section-bleed-x px-[var(--gutter)] pt-16 md:pt-20`}
      aria-label="Site footer"
    >
      <div className="container-marketing">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-[16rem] shrink-0">
            <Link
              href="/"
              className="text-brand"
              style={{ color: "var(--color-on-dark)" }}
            >
              Hesya
            </Link>
            <p className="mt-4 text-micro text-[var(--color-on-dark-muted)]">
              A calm focus companion for iPhone.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-14 lg:justify-items-start"
            aria-label="Footer"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-eyebrow text-[var(--color-on-dark-muted)]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-3 ps-0">
                  {column.links.map((link) => (
                    <li key={link.href} className="list-none">
                      {"external" in link || "mailto" in link ? (
                        <a
                          href={link.href}
                          className="text-micro link-animated text-[var(--color-on-dark-secondary)]"
                          {...("external" in link
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
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
              </div>
            ))}
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
