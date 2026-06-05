import { PHONE_DISPLAY, SITE_NAME, TAGLINE } from "@/lib/site";
import { faqs, fleet } from "@/lib/data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: TAGLINE,
    telephone: PHONE_DISPLAY,
    areaServed: "Coastal vacation communities",
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-19:00",
    serviceType: "Golf cart rentals",
  };
}

export function rentalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Golf Cart Rentals",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_DISPLAY,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Golf Cart Rental Fleet",
      itemListElement: fleet.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: item.name,
          description: item.features.join(", "),
        },
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
