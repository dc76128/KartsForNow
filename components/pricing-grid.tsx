import { CallButton } from "@/components/button-link";
import { fleet } from "@/lib/data";

export function PricingGrid() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-4">
      {fleet.map((item) => (
        <article key={item.name} className="rounded-md border border-coastal-blue/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-coastal-ink">{item.name}</h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-coastal-blue">
            {item.passengers}
          </p>
          <dl className="mt-6 grid gap-4">
            {Object.entries(item.pricing).map(([term, price]) => (
              <div key={term} className="flex items-baseline justify-between border-b border-coastal-blue/10 pb-3">
                <dt className="capitalize text-coastal-ink/65">{term}</dt>
                <dd className="text-2xl font-bold text-coastal-blue">{price}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <CallButton label="Speak With Our Team" />
          </div>
        </article>
      ))}
    </div>
  );
}
