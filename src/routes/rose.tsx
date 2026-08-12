import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { rose } from "@/lib/rose";

export const Route = createFileRoute("/rose")({
  component: RosePage,
  head: () => ({
    meta: [{ title: "Rose · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 22-year-old woman named Rose Agent, goth bartender. High twin pigtails with jet black hair and bright purple streaks through the ends, straight bangs, rich individual hair strands. Dense freckles across nose, cheeks, and body. Natural fair skin with realistic pores. Realistic blue eyes with sharp black winged eyeliner, full lips with dark matte burgundy-black lipstick, silver ball tongue piercing. Small black rose tattoo with stem and leaves on the right side of the lower belly, next to the navel and above the pants line. Realistic voluptuous hourglass figure, large full heavy natural breasts, narrow waist, strong confident posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function RosePage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% -10%, var(--color-accent-soft), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 10%, #2a1a30, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="rose" />
      <CharacterBible
        character={rose}
        lockPrompt={lockPrompt}
        portraitSrc="/rose-service.webp"
        portraitAlt="Rose — photoreal Dog Bar goth bartender, twin pigtails, purple streaks"
        portraitCaption="Freckles · twin tails · purple streaks · rose tattoo right of navel · tongue piercing · no cartoon"
        accentLabel="Dog Bar · Photoreal lock · Ref pack v2"
        defaultLookId="service"
      />
    </div>
  );
}
