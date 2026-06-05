import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FleetGrid } from "@/components/fleet-grid";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TrustBadges } from "@/components/trust-badges";
import { metaDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "Golf Cart Rentals",
  description: metaDescription("Browse 4 passenger, 6 passenger, 8 passenger, and Street Legal LSV rentals."),
};

export default function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Golf carts sized for the way your group explores the coast."
        intro="From easy two-person errands to larger family outings, Karts for Now keeps the rental process direct and comfortable."
      />
      <Section title="Available Fleet" intro="Each option includes local delivery coordination and a clean, ready-to-use cart.">
        <FleetGrid />
      </Section>
      <CtaBand label="Reserve Your Cart" />
      <Section className="bg-white" title="Rental confidence" intro="Our team keeps the experience simple for vacationers, retirees, and seasonal residents.">
        <TrustBadges />
      </Section>
    </>
  );
}
