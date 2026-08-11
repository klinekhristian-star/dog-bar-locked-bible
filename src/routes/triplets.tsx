import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { triplets } from "@/lib/triplets";

export const Route = createFileRoute("/triplets")({
  component: TripletsPage,
  head: () => ({
    meta: [{ title: "The Triplets · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action group photograph of the Dog Bar Triplets — three identical 21-year-old sisters. Long wavy platinum-blonde hair with subtle-to-strong pink highlights, flawless fair skin, striking blue eyes with long lashes, full lips, matching small dog-paw print tattoos on their wrists. Athletic yet curvaceous figures with toned waists and full natural breasts. High-energy playful expressions, always together, nearly identical faces. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, realistic skin texture, maximum photorealism. NO cartoon, NO anime, NO doll faces, NO plastic skin, NO CGI, NO mismatched faces, NO different body types.`;

function TripletsPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #f9a8d444, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #f59e0b22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="triplets" />
      <CharacterBible
        character={triplets}
        lockPrompt={lockPrompt}
        portraitSrc="/triplets-portrait.webp"
        portraitAlt="The Dog Bar Triplets — three identical platinum-blonde sisters with pink highlights"
        portraitCaption="Platinum + pink · paw tattoos · matching curves · always together · no cartoon"
        accentLabel="Dog Bar · Triplets lock"
        defaultLookId="patio"
      />
    </div>
  );
}
