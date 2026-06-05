"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, TAGLINE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-coastal-blue/10 bg-coastal-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring rounded-md">
          <span className="block font-serif text-2xl font-semibold text-coastal-blue">
            {SITE_NAME}
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-coastal-ink/60 sm:block">
            {TAGLINE}
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-coastal-mist text-coastal-blue"
                    : "text-coastal-ink/75 hover:bg-white hover:text-coastal-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="focus-ring hidden min-h-12 items-center gap-2 rounded-md bg-coastal-blue px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#0A4758] sm:inline-flex"
          >
            <PhoneCall aria-hidden="true" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-md border border-coastal-blue/15 bg-white text-coastal-blue lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-coastal-blue/10 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-4 py-3 text-base font-semibold text-coastal-ink hover:bg-coastal-mist"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-coastal-blue px-4 py-3 text-base font-bold text-white"
            >
              <PhoneCall aria-hidden="true" className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
