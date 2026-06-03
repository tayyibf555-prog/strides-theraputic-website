import Image from "next/image";
import { type TeamMember } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function FounderCards({ members }: { members: TeamMember[] }) {
  return (
    <RevealGroup className="grid gap-8 md:grid-cols-2">
      {members.map((m) => (
        <RevealItem
          key={m.name}
          as="article"
          className="flex flex-col gap-5 rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50 sm:flex-row"
        >
          {m.image ? (
            <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-card sm:h-44 sm:w-40">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(min-width: 640px) 160px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <ImagePlaceholder
              label="Portrait"
              className="h-40 w-full shrink-0 sm:h-44 sm:w-40"
            />
          )}
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {m.name}
              {m.credentials && (
                <span className="ml-2 text-sm font-normal text-muted">
                  {m.credentials}
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-moss">
              {m.role}
            </p>
            {m.bio && (
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{m.bio}</p>
            )}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function TeamList({
  members,
  columns = 3,
  withPortrait = false,
}: {
  members: TeamMember[];
  columns?: 2 | 3;
  // When true, each card shows a circular portrait placeholder above the
  // name — used for Clinical Leadership so it reads like a team of faces.
  withPortrait?: boolean;
}) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <RevealGroup className={`grid gap-5 ${cols}`} stagger={0.06}>
      {members.map((m) => (
        <RevealItem
          key={m.name}
          className="flex flex-col items-center rounded-2xl bg-cream p-5 text-center shadow-sm ring-1 ring-sage-deep/50"
        >
          {withPortrait && (
            <ImagePlaceholder
              label="Portrait"
              rounded={false}
              className="mb-4 h-24 w-24 rounded-full"
            />
          )}
          <p className="font-display text-lg font-semibold text-ink">
            {m.name}
          </p>
          {m.credentials && (
            <p className="text-xs uppercase tracking-wide text-muted">
              {m.credentials}
            </p>
          )}
          <p className="mt-2 text-sm font-medium text-moss">{m.role}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
