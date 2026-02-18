/**
 * AppStoreBadge — "Coming Soon to App Store" glass pill.
 * Matches FrostedPillButton.primary: white glass fill, subtle border.
 */
export default function AppStoreBadge() {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <span
        className="glass inline-block rounded-full px-7 py-3 text-body-sm"
        style={{ color: "var(--foreground)" }}
      >
        coming soon to app store
      </span>
      <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
        Free &middot; No tracking &middot; iOS
      </p>
    </div>
  );
}
