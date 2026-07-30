import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mb-6 sm:mb-8">
        {eyebrow ? (
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
