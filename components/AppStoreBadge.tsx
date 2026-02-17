export default function AppStoreBadge() {
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <span
        className="inline-block rounded-full px-6 py-2.5 text-sm font-medium"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        Coming Soon to App Store
      </span>
      <p className="text-xs text-foreground-muted">
        Free &middot; No tracking &middot; iOS
      </p>
    </div>
  );
}
