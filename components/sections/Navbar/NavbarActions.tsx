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
  const textLink = isDark
    ? "nav-link hidden lg:inline-flex"
    : "nav-link-light hidden lg:inline-flex";

  return (
    <div className="justify-self-end flex items-center gap-3 md:gap-4">
      <a href="mailto:support@hesya.app" className={textLink}>
        Contact
      </a>

      <a
        href={URLS.testflight}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden sm:inline-flex ${BTN.ctaFilled}`}
      >
        Get the beta
      </a>

      <button
        type="button"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
          isDark
            ? "border border-[var(--border-dark)] bg-white/5"
            : "border border-[var(--border)] bg-white/80"
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
