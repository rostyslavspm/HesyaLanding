/**
 * AppStoreBadge — CTA pill. "Get notified on launch" (no App Store implication).
 * When href: link. When no href: button (opens modal via onClick).
 */
type AppStoreBadgeProps = {
  href?: string;
  onClick?: () => void;
  label?: string;
  /** When undefined: default "Free · No tracking · iOS". When null: hide. When string: use it. */
  footer?: string | null;
};

const pillClass =
  "focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] hover:-translate-y-[1px] active:translate-y-0 outline-none transition-transform";

export default function AppStoreBadge({
  href,
  onClick,
  label = "Get notified on launch",
  footer,
}: AppStoreBadgeProps) {
  const pill = (
    <span
      className="glass inline-flex items-center justify-center rounded-full px-7 py-3 text-body-sm outline-none transition-transform"
      style={{
        color: "var(--foreground)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {label}
    </span>
  );

  return (
    <div className="inline-flex flex-col items-center gap-3">
      {href ? (
        <a href={href} className={pillClass} aria-label={label}>
          {pill}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={pillClass}
          aria-label={label}
        >
          {pill}
        </button>
      )}
      {footer !== null && (
        <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
          {footer ?? "Free &middot; No tracking &middot; iOS"}
        </p>
      )}
    </div>
  );
}
