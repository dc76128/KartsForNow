import { FleetCard } from "@/components/fleet-card";
import { fleet } from "@/lib/data";

export function FleetGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? fleet.slice(0, limit) : fleet;

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <FleetCard key={item.name} item={item} />
      ))}
    </div>
  );
}
