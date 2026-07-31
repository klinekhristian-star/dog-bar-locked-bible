import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { id: "identity", label: "Identity" },
  { id: "personality", label: "Personality" },
  { id: "looks", label: "Looks" },
  { id: "crew", label: "Crew" },
  { id: "production", label: "Production" },
];

export function Nav({
  character = "rose",
}: {
  character?:
    | "rose"
    | "betty"
    | "luna"
    | "summer"
    | "kai"
    | "zuri"
    | "byron"
    | "rick";
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-elevated font-display text-lg text-accent"
            aria-hidden
          >
            DB
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-lg leading-none tracking-tight text-fg">
              Dog Bar
            </p>
            <p className="truncate text-xs text-muted">Character Bible</p>
          </div>
        </Link>

        <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-1 overflow-x-auto max-w-[78vw] sm:max-w-none">
          {(
            [
              { to: "/", id: "rose", label: "Rose" },
              { to: "/betty", id: "betty", label: "Betty" },
              { to: "/luna", id: "luna", label: "Luna" },
              { to: "/summer", id: "summer", label: "Summer" },
              { to: "/kai", id: "kai", label: "Kai" },
              { to: "/zuri", id: "zuri", label: "Zuri" },
              { to: "/byron", id: "byron", label: "Byron" },
              { to: "/rick", id: "rick", label: "Rick" },
            ] as const
          ).map((c) => (
            <Link
              key={c.id}
              to={c.to}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-sm transition-colors min-h-9 inline-flex items-center shrink-0 sm:px-3",
                character === c.id
                  ? "bg-elevated text-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto border-t border-border/50 px-4 py-2 md:hidden">
        {sectionLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
          >
            {l.label}
          </a>
        ))}
      </div>
      <nav
        className="mx-auto hidden max-w-6xl items-center gap-1 px-6 py-2 md:flex"
        aria-label="Sections"
      >
        {sectionLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-elevated/60 hover:text-fg"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
