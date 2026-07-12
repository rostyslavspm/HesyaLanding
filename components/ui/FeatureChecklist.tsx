import { Circle } from "lucide-react";

type FeatureChecklistProps = {
  items: string[];
  className?: string;
  onDark?: boolean;
};

export default function FeatureChecklist({
  items,
  className,
  onDark = false,
}: FeatureChecklistProps) {
  return (
    <ul className={`space-y-3 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Circle
            className={`mt-1.5 h-3 w-3 shrink-0 ${
              onDark ? "text-white/40" : "text-[var(--color-accent)]"
            }`}
            strokeWidth={1.5}
          />
          <span
            className={`text-body-sm ${
              onDark ? "text-white/70" : "text-[var(--foreground-muted)]"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
