type SectionProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  intro?: string;
};

export function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-coastal-blue">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl font-semibold text-coastal-ink sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-8 text-coastal-ink/75">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
