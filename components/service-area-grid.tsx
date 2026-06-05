import Image from "next/image";
import { CallButton } from "@/components/button-link";
import { fleet, serviceAreas } from "@/lib/data";

export function ServiceAreaGrid() {
  const fleetNames = fleet.map((item) => item.name).join(", ");

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {serviceAreas.map((area) => (
        <article key={area.name} className="overflow-hidden rounded-md border border-coastal-blue/10 bg-white shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image src={area.image} alt={`${area.name} coastal service area`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="font-serif text-2xl font-semibold text-coastal-ink">{area.name}</h2>
            <p className="mt-3 leading-7 text-coastal-ink/70">{area.description}</p>
            <p className="mt-4 text-sm text-coastal-ink/65">
              <span className="font-bold text-coastal-blue">Available fleet:</span> {fleetNames}
            </p>
            <div className="mt-5">
              <CallButton label="Call To Book" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
