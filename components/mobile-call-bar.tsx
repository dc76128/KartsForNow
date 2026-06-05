import { PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-coastal-blue/10 bg-white/95 p-3 shadow-soft backdrop-blur sm:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-md bg-coastal-blue px-4 py-3 text-base font-bold text-white"
      >
        <PhoneCall aria-hidden="true" className="h-5 w-5" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
