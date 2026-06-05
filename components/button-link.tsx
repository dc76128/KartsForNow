import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { PHONE_TEL } from "@/lib/site";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  icon?: React.ReactNode;
};

const variants = {
  primary:
    "bg-coastal-blue text-white shadow-soft hover:bg-[#0A4758] focus-visible:outline-coastal-sand",
  secondary:
    "border border-coastal-blue/20 bg-white text-coastal-blue hover:border-coastal-blue hover:bg-coastal-mist",
  light:
    "bg-white text-coastal-blue hover:bg-coastal-mist focus-visible:outline-coastal-sand",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
}: ButtonLinkProps) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  const className = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]}`;

  if (href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function CallButton({
  label = "Call Now",
  variant = "primary",
}: {
  label?: string;
  variant?: ButtonLinkProps["variant"];
}) {
  return (
    <ButtonLink
      href={`tel:${PHONE_TEL}`}
      variant={variant}
      icon={<PhoneCall aria-hidden="true" className="h-4 w-4" />}
    >
      {label}
    </ButtonLink>
  );
}
