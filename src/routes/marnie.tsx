import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { marnie } from "@/lib/marnie";

export const Route = createFileRoute("/marnie")({
  component: MarniePage,
  head: () => ({
    meta: [{ title: "Marnie · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old woman named Marnie, Summer Wins’ girlfriend. Short tousled messy auburn crop that looks finger-combed, fair freckled skin across nose cheeks shoulders and chest, soft natural lips, warm expressive eyes. Soft feminine body with full natural breasts (not exaggerated), natural proportions, relaxed confident posture. Quiet intimate energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, realistic freckles and skin texture, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function MarniePage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #c4a07044, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #f59e0b22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="marnie" />
      <CharacterBible
        character={marnie}
        lockPrompt={lockPrompt}
        portraitSrc="/marnie-portrait.jpg"
        portraitAlt="Marnie — photoreal short auburn crop freckled girlfriend on rooftop"
        portraitCaption="Auburn crop · freckles · full natural · quiet warmth · no cartoon"
        accentLabel="Dog Bar · Marnie lock"
        defaultLookId="rooftop"
      />
    </div>
  );
}
