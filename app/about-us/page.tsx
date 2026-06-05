import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TrustBadges } from "@/components/trust-badges";
import { metaDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Karts for Now",
  description: metaDescription("Learn about Karts for Now and our simple coastal golf cart rental service."),
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A dependable local rental experience for coastal visitors."
        intro="Karts for Now was built for people who want their vacation transportation to feel easy, familiar, and well handled."
      />
      <Section title="Local service with a simple promise">
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-lg leading-8 text-coastal-ink/75">
            <p>
              We help families, retirees, seasonal residents, and beach-house guests get around coastal communities without making the rental process complicated.
            </p>
            <p>
              Our focus is clean carts, reliable delivery, clear communication, and practical guidance. When you call, you talk with a team that understands vacation timing, neighborhood access, and the need for a smooth arrival.
            </p>
            <p>
              Whether you need a cart for a long weekend, a full beach week, or an extended seasonal stay, Karts for Now keeps the experience friendly and professional from the first call.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
              alt="Bright coastal shoreline near beach communities"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      <CtaBand label="Speak With Our Team" />
      <Section className="bg-white" title="Why guests call us first">
        <TrustBadges />
      </Section>
    </>
  );
}
