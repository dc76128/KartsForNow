"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-8 divide-y divide-coastal-blue/10 overflow-hidden rounded-md border border-coastal-blue/10 bg-white shadow-sm">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-xl font-semibold text-coastal-ink">{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-coastal-blue transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <div className="px-5 pb-5 leading-7 text-coastal-ink/70">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
