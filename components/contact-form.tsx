"use client";

import { FormEvent, useState } from "react";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "dates", label: "Rental Dates", type: "text" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-coastal-blue/10 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-bold text-coastal-ink">
            {field.label}
            <input
              name={field.name}
              type={field.type}
              required
              className="focus-ring min-h-12 rounded-md border border-coastal-blue/15 bg-coastal-paper px-4 py-3 font-normal text-coastal-ink"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-coastal-ink">
        Message
        <textarea
          name="message"
          rows={5}
          className="focus-ring rounded-md border border-coastal-blue/15 bg-coastal-paper px-4 py-3 font-normal text-coastal-ink"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-coastal-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0A4758] sm:w-auto"
      >
        Check Availability
      </button>
      {sent ? (
        <p className="mt-4 rounded-md bg-coastal-mist p-3 text-sm font-semibold text-coastal-blue">
          Thanks. This placeholder form is ready for a future booking workflow.
        </p>
      ) : null}
    </form>
  );
}
