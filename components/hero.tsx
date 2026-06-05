"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { heroImages } from "@/lib/data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-coastal-blue/85 via-coastal-blue/58 to-coastal-blue/18" />
      <div className="absolute inset-x-0 bottom-0 -z-0 h-28 bg-gradient-to-t from-coastal-paper to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-13rem)] max-w-7xl items-center">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-coastal-sand">
            The Easy Way to Explore the Coast
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Golf Cart Rentals Made Easy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Convenient delivery, reliable service, and comfortable rides for your next coastal getaway.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-coastal-sand px-6 py-4 text-base font-bold text-coastal-ink transition hover:bg-[#EDB44F]"
            >
              <PhoneCall aria-hidden="true" className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/pricing"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-white px-6 py-4 text-base font-bold text-coastal-blue transition hover:bg-coastal-mist"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mb-10 grid max-w-7xl gap-3 sm:grid-cols-3">
        {["Doorstep delivery", "Simple phone booking", "Daily to seasonal rentals"].map((item) => (
          <div key={item} className="rounded-md bg-white/95 px-4 py-3 text-sm font-bold text-coastal-blue shadow-soft">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
