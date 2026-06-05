import { CallButton } from "@/components/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-coastal-blue">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-coastal-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-coastal-ink/75">{intro}</p>
        <div className="mt-7">
          <CallButton label="Call Now" />
        </div>
      </div>
    </section>
  );
}
