export const PHONE_DISPLAY = "555-555-5555";
export const PHONE_TEL = "5555555555";
export const SITE_NAME = "Karts for Now";
export const TAGLINE = "The Easy Way to Explore the Coast";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/rentals", label: "Rentals" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about-us", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function pageTitle(title?: string) {
  return title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${TAGLINE}`;
}

export function metaDescription(pageFocus: string) {
  return `${pageFocus} Easy golf cart rentals with convenient delivery, reliable service, and simple booking for coastal vacations.`;
}
