import { BTN, URLS } from "@/lib/design-system";

type NavbarActionsProps = {
  variant?: "light" | "dark";
  menuOpen?: boolean;
  onOpenMenu?: () => void;
};

export default function NavbarActions({
  variant = "dark",
  menuOpen = false,
  onOpenMenu,
}: NavbarActionsProps) {
  const isDark = variant === "dark";
  const textLink = isDark ? "nav-link" : "nav-link-light";

  // Responsive show/hide lives on plain wrappers: `.nav-link` and
  // `.btn-cta-filled` set `display`, and design-system.css is unlayered, so a
  // component class on the same element would beat Tailwind's `hidden`.
  return (
    <div className="justify-self-end flex items-center gap-3 md:gap-4">
      <span className="hidden lg:block">
        <a href="mailto:support@hesya.app" className={textLink}>
          Contact
        </a>
      </span>

      <span className="hidden sm:block">
        <a
          href={URLS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`${BTN.ctaFilled} whitespace-nowrap`}
        >
          Get the app
        </a>
      </span>

      <button
        type="button"
        className={`inline-flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-200 ease-[var(--ease-hesya)] active:scale-[0.96] md:hidden ${
          isDark
            ? "bg-white/5 shadow-[0_0_0_1px_oklch(1_0_0/0.12)]"
            : "bg-white/80 shadow-[0_0_0_1px_oklch(0_0_0/0.08)]"
        }`}
        onClick={onOpenMenu}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        <span className="flex flex-col gap-1">
          <span
            className="block h-0.5 w-5"
            style={{
              background: isDark ? "var(--color-on-dark)" : "var(--foreground)",
            }}
          />
          <span
            className="block h-0.5 w-5"
            style={{
              background: isDark ? "var(--color-on-dark)" : "var(--foreground)",
            }}
          />
        </span>
      </button>
    </div>
  );
}
