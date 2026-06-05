import Image from "next/image";
import { Users } from "lucide-react";
import { CallButton } from "@/components/button-link";

type FleetCardProps = {
  item: {
    name: string;
    passengers: string;
    image: string;
    alt: string;
    features: string[];
    preview: string;
  };
};

export function FleetCard({ item }: FleetCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-coastal-blue/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-2xl font-semibold text-coastal-ink">{item.name}</h3>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-coastal-mist px-3 py-2 text-sm font-bold text-coastal-blue">
            <Users aria-hidden="true" className="h-4 w-4" />
            {item.passengers}
          </span>
        </div>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-coastal-ink/70">
          {item.features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
        <p className="mt-5 text-lg font-bold text-coastal-blue">{item.preview}</p>
        <div className="mt-5">
          <CallButton label="Reserve Your Cart" />
        </div>
      </div>
    </article>
  );
}
