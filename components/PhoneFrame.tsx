export default function PhoneFrame({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Phone bezel */}
      <div className="rounded-[3rem] border-[6px] border-foreground/10 bg-surface-elevated p-2 shadow-xl">
        {/* Dynamic Island notch */}
        <div className="absolute left-1/2 top-5 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-foreground/80" />

        {/* Screen area */}
        <div className="relative overflow-hidden rounded-[2.4rem] bg-background aspect-[9/19.5]">
          {children ?? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="h-16 w-16 rounded-full bg-accent/20" />
              <p className="text-sm text-foreground-secondary">
                Screenshots coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
