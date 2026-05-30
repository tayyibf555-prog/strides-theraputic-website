import Image from "next/image";
import Link from "next/link";

// Official Strides lockup. Full-color version for light backgrounds; cream
// "reversed" version for dark backgrounds (e.g. the footer).
export function Logo({
  light = false,
  priority = false,
  className = "h-11",
}: {
  light?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Strides Therapeutic Services — home"
      className="group inline-flex items-center"
    >
      <Image
        src={light ? "/strides-logo-light.png" : "/strides-logo.png"}
        alt="Strides Therapeutic Services"
        width={1173}
        height={528}
        priority={priority}
        className={`${className} w-auto transition-transform duration-300 group-hover:-translate-y-0.5`}
      />
    </Link>
  );
}
