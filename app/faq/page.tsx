import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { faqSchema } from "@/lib/schema";
import { metaDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "Golf Cart Rental FAQ",
  description: metaDescription("Answers about reserving, delivery, same-day rentals, weather, and street legal carts."),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers before you reserve."
        intro="Call any time for current availability, local delivery details, and help choosing the right cart."
      />
      <Section title="Frequently Asked Questions">
        <FaqAccordion />
      </Section>
      <CtaBand label="Call Now" />
    </>
  );
}
