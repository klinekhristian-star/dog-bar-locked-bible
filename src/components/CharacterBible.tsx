import { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy, Check, Sparkles } from "lucide-react";

export type CharacterData = {
  name: string;
  fullTitle: string;
  role: string;
  age: number;
  tagline: string;
  summary: string;
  identity: readonly { label: string; value: string }[];
  personality: readonly string[];
  voice: readonly string[];
  looks: readonly {
    id: string;
    name: string;
    setting: string;
    notes: string;
    palette: readonly string[];
    image?: string;
  }[];
  relationships: readonly { name: string; note: string }[];
  productionNotes: readonly string[];
};

export function CharacterBible({
  character,
  lockPrompt,
  portraitSrc,
  portraitAlt,
  portraitCaption,
  accentLabel,
  defaultLookId,
  seriesLabel = "Dog Bar",
}: {
  character: CharacterData;
  lockPrompt: string;
  portraitSrc: string;
  portraitAlt: string;
  portraitCaption: string;
  accentLabel: string;
  defaultLookId?: string;
  seriesLabel?: string;
}) {
  const [activeLook, setActiveLook] = useState(
    defaultLookId ?? character.looks[0]?.id ?? "",
  );
  const [copied, setCopied] = useState(false);
  const look =
    character.looks.find((l) => l.id === activeLook) ?? character.looks[0];
  const roleShort = character.role.split("·")[0]?.trim() || character.role;

  async function copyLock() {
    try {
      await navigator.clipboard.writeText(lockPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {accentLabel}
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {character.name}
          </h1>
          <p className="mt-2 font-display text-xl italic text-muted sm:text-2xl">
            {character.fullTitle}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {character.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle sm:text-base">
            {character.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent" onClick={copyLock} className="min-h-11">
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied lock prompt
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy identity lock
                </>
              )}
            </Button>
            <Button variant="secondary" asChild className="min-h-11">
              <a href="#looks">Browse looks</a>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                Age
              </dt>
              <dd className="mt-1 font-display text-2xl text-fg">{character.age}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                Role
              </dt>
              <dd className="mt-1 font-display text-lg leading-snug text-fg">
                {roleShort}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                Series
              </dt>
              <dd className="mt-1 font-display text-lg leading-snug text-fg">{seriesLabel}</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border-strong bg-elevated shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)]">
            <div className="aspect-[3/4] relative bg-bg">
              <img
                src={look?.image ?? portraitSrc}
                alt={portraitAlt}
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
            </div>
            <div className="border-t border-border px-4 py-3 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                {look?.image ? look.name : "Visual lock"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {look?.image ? look.setting : portraitCaption}
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-xl border border-border bg-surface"
            aria-hidden
          />
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <Section id="identity" eyebrow="Appearance" title="Identity lock">
          <p className="mb-6 max-w-2xl text-sm text-muted sm:text-base">
            Keep every generation on this face and body language. Photoreal only.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {character.identity.map((t) => (
              <li
                key={t.label}
                className="rounded-lg border border-border bg-surface/80 p-4 sm:p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent-soft">
                  {t.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg sm:text-[15px]">
                  {t.value}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="mt-16 sm:mt-24">
        <Section id="personality" eyebrow="Character" title="Personality & voice">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <h3 className="font-display text-xl text-fg">Core traits</h3>
              <ul className="mt-4 space-y-3">
                {character.personality.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <h3 className="font-display text-xl text-fg">Voice</h3>
              <ul className="mt-4 space-y-3">
                {character.voice.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      <div className="mt-16 sm:mt-24">
        <Section id="looks" eyebrow="Reference pack" title="Signature looks">
          <p className="mb-4 max-w-2xl text-sm text-muted">
            Select a look — hero image swaps when a still is attached. Looks without a still
            keep the identity lock description only.
          </p>
          <div className="flex flex-wrap gap-2">
            {character.looks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setActiveLook(l.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors min-h-11",
                  activeLook === l.id
                    ? "border-accent bg-accent/15 text-fg"
                    : "border-border bg-surface text-muted hover:border-border-strong hover:text-fg",
                )}
              >
                {l.name}
                {l.image ? (
                  <span className="ml-1.5 text-[10px] text-accent-soft">ref</span>
                ) : null}
              </button>
            ))}
          </div>
          {look ? (
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-elevated">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-5 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                    {look.setting}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-fg sm:text-3xl">
                    {look.name}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                    {look.notes}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {look.palette.map((c) => (
                      <div key={c} className="flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-md border border-border-strong"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                        <span className="font-mono text-[10px] text-subtle">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {look.image ? (
                  <div className="relative min-h-56 border-t border-border lg:border-l lg:border-t-0">
                    <img
                      src={look.image}
                      alt={`${look.name} reference`}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-40 items-center justify-center border-t border-border bg-surface p-6 lg:border-l lg:border-t-0">
                    <p className="max-w-xs text-center text-sm text-subtle">
                      Scene notes only — use the identity lock + this look when prompting.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {character.looks.map((l) => (
              <button
                key={`card-${l.id}`}
                type="button"
                onClick={() => setActiveLook(l.id)}
                className={cn(
                  "rounded-lg border p-4 text-left transition-colors min-h-11",
                  activeLook === l.id
                    ? "border-accent bg-accent/10"
                    : "border-border bg-surface hover:border-border-strong",
                )}
              >
                <p className="font-display text-lg text-fg">{l.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-subtle">
                  {l.setting}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                  {l.notes}
                </p>
              </button>
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-16 sm:mt-24">
        <Section id="crew" eyebrow="Dog Bar" title="Crew connections">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {character.relationships.map((r) => (
              <div
                key={r.name}
                className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
              >
                <p className="font-display text-lg text-fg">{r.name}</p>
                <p className="mt-1 text-sm text-muted">{r.note}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-16 sm:mt-24">
        <Section id="production" eyebrow="Prompt craft" title="Production notes">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Consistency checklist
              </span>
            </div>
            <ol className="space-y-3">
              {character.productionNotes.map((n, i) => (
                <li key={n} className="flex gap-3 text-sm text-muted">
                  <span className="font-mono text-xs text-subtle tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{n}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg border border-border bg-bg p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                Full identity lock prompt
              </p>
              <pre className="mt-3 max-h-48 overflow-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-muted">
                {lockPrompt}
              </pre>
              <Button variant="secondary" size="sm" className="mt-4" onClick={copyLock}>
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </Section>
      </div>

      <footer className="mt-20 border-t border-border pt-8 text-center">
        <p className="font-display text-lg text-muted">Dog Bar</p>
        <p className="mt-1 text-xs text-subtle">
          Character bible · photoreal lock · no cartoon
        </p>
      </footer>
    </main>
  );
}
