import { trustBadges } from "@/lib/data";

export function TrustBadges() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.label}
            className="flex min-h-20 items-center gap-3 rounded-md border border-coastal-blue/10 bg-white p-4 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-coastal-mist text-coastal-blue">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <p className="font-bold text-coastal-ink">{badge.label}</p>
          </div>
        );
      })}
    </div>
  );
}
