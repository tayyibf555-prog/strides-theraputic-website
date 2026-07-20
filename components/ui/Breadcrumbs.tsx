import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Visible breadcrumb trail. Pair with breadcrumbSchema() so the visible trail
// and the BreadcrumbList JSON-LD always match. `onDark` styles it for the
// moss hero bands; default styling sits on cream.
export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: Array<{ name: string; path: string }>;
  onDark?: boolean;
}) {
  const base = onDark ? "text-cream/70" : "text-muted";
  const link = onDark
    ? "transition-colors hover:text-cream"
    : "transition-colors hover:text-moss";
  const current = onDark ? "text-cream/95" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className={`text-[0.8rem] font-medium ${base}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              {last ? (
                <span aria-current="page" className={current}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={link}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
