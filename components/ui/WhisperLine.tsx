type WhisperLineProps = {
  className?: string;
};

export default function WhisperLine({ className = "" }: WhisperLineProps) {
  return (
    <svg
      className={`whisper-line ${className}`.trim()}
      viewBox="0 0 1200 1"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line x1="0" y1="0.5" x2="1200" y2="0.5" />
    </svg>
  );
}
