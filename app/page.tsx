import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid } from "@/components/feature-grid";
import { FleetGrid } from "@/components/fleet-grid";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { Testimonials } from "@/components/testimonials";
import { TrustBadges } from "@/components/trust-badges";
import { rentalServiceSchema } from "@/lib/schema";
import { rentalSteps, quickStats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <JsonLd data={rentalServiceSchema()} />
      <Hero />
      <Section
        eyebrow="Simple coastal transportation"
        title="Everything is built around an easy phone call."
        intro="Tell us where you are staying, how many people are riding, and how long you need the cart. We handle the delivery details from there."
      >
        <FeatureGrid />
      </Section>
      <CtaBand label="Reserve Your Cart" />
      <Section
        className="bg-white"
        eyebrow="Fleet"
        title="Comfortable carts for beach weeks, family visits, and seasonal stays."
        intro="Choose the size that fits your group, your plans, and your local driving needs."
      >
        <FleetGrid />
        <div className="mt-8">
          <Link
            href="/rentals"
            className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md border border-coastal-blue/20 bg-coastal-paper px-5 py-3 text-sm font-bold text-coastal-blue hover:bg-coastal-mist"
          >
            View All Rentals
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Section>
      <Section
        eyebrow="How it works"
        title="A clear process from first call to first ride."
      >
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {rentalSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-md border border-coastal-blue/10 bg-white p-6 shadow-sm">
                <Icon aria-hidden="true" className="h-8 w-8 text-coastal-blue" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-coastal-ink/70">{step.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4 rounded-md bg-coastal-mist p-5">
                <Icon aria-hidden="true" className="h-7 w-7 text-coastal-blue" />
                <div>
                  <p className="text-2xl font-bold text-coastal-blue">{stat.value}</p>
                  <p className="text-sm font-semibold text-coastal-ink/65">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <CtaBand label="Speak With Our Team" />
      <Section
        className="bg-white"
        eyebrow="Trusted service"
        title="Professional rental support for vacation communities."
        intro="The site is designed around dependable delivery, clean carts, clear communication, and a local-business feel."
      >
        <TrustBadges />
      </Section>
      <Section
        eyebrow="Reviews"
        title="Guests appreciate how simple the rental feels."
      >
        <Testimonials />
      </Section>
      <CtaBand label="Check Availability" />
    </>
  );
}
