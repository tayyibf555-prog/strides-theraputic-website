import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/site";

type Variant = "primary" | "light" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-moss/60";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-[#434c37] shadow-sm hover:shadow-md hover:-translate-y-0.5",
  light:
    "bg-cream text-forest hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline:
    "border border-forest/40 text-forest hover:bg-forest hover:text-cream",
  ghost: "text-forest hover:text-forest-deep",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

export function CtaButton({
  children,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const arrow = withArrow ? (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  ) : null;

  // Internal route
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    );
  }

  // External link / Google Form (default)
  return (
    <a
      href={href ?? GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
      {arrow}
    </a>
  );
}
