import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { betty } from "@/lib/betty";

export const Route = createFileRoute("/betty")({
  component: BettyPage,
  head: () => ({
    meta: [{ title: "Thick Betty · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old woman named Thick Betty (Betty Callahan), bubbly Dog Bar bartender. Long vibrant orange-red ginger wavy hair with soft bangs, cascading over shoulders. Dense freckles across nose, cheeks, shoulders, and chest. Fair freckled skin with realistic pores. Big expressive blue eyes, warm genuine smile showing teeth. Always wearing signature bright pink cat-eye glasses. Extremely curvy voluptuous hourglass figure — thick thighs, wide hips, full heavy natural breasts, soft confident post-college build. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function BettyPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 15% -5%, #ff4d8d33, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 5%, #e85d0422, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="betty" />
      <CharacterBible
        character={betty}
        lockPrompt={lockPrompt}
        portraitSrc="/betty-portrait.webp"
        portraitAlt="Thick Betty — photoreal ginger bartender with pink cat-eye glasses and freckles"
        portraitCaption="Ginger waves · pink cat-eyes · dense freckles · big smile · no cartoon"
        accentLabel="Dog Bar · Thick Betty lock"
        defaultLookId="window"
      />
    </div>
  );
}
