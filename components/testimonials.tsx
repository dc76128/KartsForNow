import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((review) => (
        <figure key={`${review.name}-${review.quote}`} className="rounded-md border border-coastal-blue/10 bg-white p-5 shadow-sm">
          <div className="flex gap-1 text-coastal-sand" aria-label="5 star review">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-4 leading-7 text-coastal-ink/80">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 font-bold text-coastal-blue">{review.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
