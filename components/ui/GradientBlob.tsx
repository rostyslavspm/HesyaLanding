type GradientBlobProps = {
  color: string;
  className?: string;
};

export default function GradientBlob({ color, className }: GradientBlobProps) {
  return (
    <div
      className={`gradient-blob ${className ?? ""}`}
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}
