import { CallButton } from "@/components/button-link";
import { PHONE_DISPLAY } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
  label?: string;
};

export function CtaBand({
  title = "Ready to reserve your cart?",
  text = `Call ${PHONE_DISPLAY} and our team will help match your stay with the right rental.`,
  label = "Check Availability",
}: CtaBandProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-md bg-coastal-blue p-6 text-white shadow-soft sm:flex-row sm:items-center sm:justify-between lg:p-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-white/80">{text}</p>
        </div>
        <div className="shrink-0">
          <CallButton label={label} variant="light" />
        </div>
      </div>
    </section>
  );
}
