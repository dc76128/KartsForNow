import type { Metadata } from "next";
import { Clock, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { metaDescription, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Karts for Now",
  description: metaDescription("Call Karts for Now or send a rental availability request."),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call for the fastest rental availability."
        intro="Share your rental dates, location, and group size. We will help you choose the right cart and delivery option."
      />
      <Section title="Reach our team">
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="focus-ring flex items-center gap-4 rounded-md border border-coastal-blue/10 bg-white p-5 shadow-sm hover:bg-coastal-mist"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-coastal-blue text-white">
                <PhoneCall aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.12em] text-coastal-blue">Phone</span>
                <span className="block text-2xl font-bold text-coastal-ink">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-md border border-coastal-blue/10 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-coastal-mist text-coastal-blue">
                <Clock aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.12em] text-coastal-blue">Hours</span>
                <span className="block text-lg font-bold text-coastal-ink">Monday-Sunday</span>
                <span className="block text-coastal-ink/70">8:00 AM - 7:00 PM</span>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
      <CtaBand label="Call Now" />
    </>
  );
}
