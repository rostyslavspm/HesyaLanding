/**
 * Screenshots — float in whitespace, 100px+ between each.
 */
const IMAGES = [
  { src: "/screenshots/screen-home.png", alt: "Home screen", caption: null },
  { src: "/screenshots/screen-lockscreen.png", alt: "Lock screen", caption: null },
  { src: "/screenshots/screen-breathing.png", alt: "Breathing ritual", caption: null },
  { src: "/screenshots/screen-affect.png", alt: "Affect", caption: null },
];

export default function ScreenshotsSection() {
  return (
    <section
      className="px-6 py-20"
      aria-label="App screenshots"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-[100px]">
        {IMAGES.map(({ src, alt, caption }) => (
          <figure key={src} className="flex flex-col items-center gap-3">
            <img
              src={src}
              alt={alt}
              width={450}
              height={920}
              className="h-auto w-[min(450px,85vw)] object-contain"
            />
            {caption && (
              <figcaption
                className="text-center text-sm"
                style={{ color: "var(--foreground-muted)" }}
              >
                {caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
