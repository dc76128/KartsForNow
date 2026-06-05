import { features } from "@/lib/data";

export function FeatureGrid() {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <article key={feature.title} className="rounded-md border border-coastal-blue/10 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-coastal-mist text-coastal-blue">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-coastal-ink">
              {feature.title}
            </h3>
            <p className="mt-3 leading-7 text-coastal-ink/70">{feature.description}</p>
          </article>
        );
      })}
    </div>
  );
}
