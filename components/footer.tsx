import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { navItems, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-coastal-blue px-4 pb-24 pt-12 text-white sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">{SITE_NAME}</p>
          <p className="mt-2 max-w-md text-white/75">{TAGLINE}</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="focus-ring mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-coastal-blue transition hover:bg-coastal-mist"
          >
            <PhoneCall aria-hidden="true" className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Pages</p>
          <nav className="mt-4 grid gap-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-md text-white/85 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Hours</p>
          <p className="mt-4 text-white/85">Monday-Sunday</p>
          <p className="text-white/85">8:00 AM - 7:00 PM</p>
          <p className="mt-6 text-sm text-white/65">
            Sample rates and placeholder business details are used for this first version.
          </p>
        </div>
      </div>
    </footer>
  );
}
