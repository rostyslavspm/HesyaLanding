/**
 * How It Works — three vertically stacked blocks.
 */
export default function HowItWorksSection() {
  const blocks = [
    {
      title: "Observe",
      text: "Hesya pays attention to patterns in how you move through your phone.",
    },
    {
      title: "Notice",
      text: "When your rhythm shifts — long stretches, restless switching — it becomes visible.",
    },
    {
      title: "Invite",
      text: (
        <>
          A quiet prompt to pause.
          <br />
          A breath.
          <br />
          A moment of rest.
        </>
      ),
    },
  ];

  return (
    <section
      className="px-6 py-20"
      aria-label="How it works"
    >
      <div className="mx-auto max-w-[600px]">
        <h2
          className="mb-16 text-center text-lg font-normal"
          style={{ color: "var(--foreground)" }}
        >
          How It Works
        </h2>
        <div className="flex flex-col gap-16">
          {blocks.map(({ title, text }) => (
            <div key={title}>
              <h3
                className="mb-4 font-serif text-xl font-normal"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
              >
                {title}
              </h3>
              <p
                className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.65]"
                style={{ color: "var(--foreground-secondary)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
