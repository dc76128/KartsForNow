import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PricingGrid } from "@/components/pricing-grid";
import { Section } from "@/components/section";
import { metaDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "Golf Cart Rental Pricing",
  description: metaDescription("Sample daily, weekly, and monthly golf cart rental pricing."),
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward sample rates for coastal golf cart rentals."
        intro="Call for current availability, seasonal details, and the best cart size for your stay."
      />
      <Section title="Sample Rates" intro="Prices shown are sample rates and may vary by location and season.">
        <PricingGrid />
      </Section>
      <CtaBand label="Check Availability" />
    </>
  );
}
