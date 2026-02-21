import MagneticButton from "./motion/MagneticButton";

/**
 * AppStoreBadge — CTA pill. "Get notified on launch" (no App Store implication).
 * When href: link. When no href: button (opens modal via onClick).
 */
type AppStoreBadgeProps = {
  href?: string;
  onClick?: () => void;
  label?: string;
  size?: "sm" | "md";
  /** When false: hide meta line (for header). Default true. */
  showMeta?: boolean;
  /** When undefined: default "Free · No tracking · iOS". When null: hide. When string: use it. */
  footer?: string | null;
};

const pillClass =
  "focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] hover:-translate-y-[1px] active:translate-y-0 outline-none transition-transform";

export default function AppStoreBadge({
  href,
  onClick,
  label = "Get notified on launch",
  size = "md",
  showMeta = true,
  footer,
}: AppStoreBadgeProps) {
  const isSm = size === "sm";
  const pill = (
    <span
      className={`glass inline-flex items-center justify-center rounded-full whitespace-nowrap outline-none transition-transform ${
        isSm ? "px-5 py-2 text-micro" : "px-7 py-3 text-body-sm"
      }`}
      style={{
        color: "var(--foreground)",
        boxShadow: isSm ? "none" : "var(--shadow-soft)",
      }}
    >
      {label}
    </span>
  );

  return (
    <div className={`inline-flex flex-col items-center ${isSm ? "" : "gap-3"}`}>
      <MagneticButton>
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
      </MagneticButton>
      {showMeta !== false && footer !== null && (
        <p
          className="text-micro whitespace-nowrap"
          style={{ color: "var(--foreground-muted)" }}
        >
          {footer ?? (
            <>
              Free&nbsp;&middot;&nbsp;No tracking&nbsp;&middot;&nbsp;iOS
            </>
          )}
        </p>
      )}
    </div>
  );
}
