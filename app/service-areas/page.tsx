import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ServiceAreaGrid } from "@/components/service-area-grid";
import { metaDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "Golf Cart Rental Service Areas",
  description: metaDescription("Golf cart delivery for coastal service areas and beach rental communities."),
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Golf cart delivery for beach communities and coastal stays."
        intro="These placeholder locations are structured for growth as Karts for Now expands into more coastal neighborhoods."
      />
      <Section title="Current Placeholder Locations" intro="Call to confirm delivery availability for your address and rental dates.">
        <ServiceAreaGrid />
      </Section>
      <CtaBand label="Call To Book" />
    </>
  );
}
