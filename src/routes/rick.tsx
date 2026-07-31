import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { rick } from "@/lib/rick";

export const Route = createFileRoute("/rick")({
  component: RickPage,
  head: () => ({
    meta: [{ title: 'Rick "Daddy" · Dog Bar Character Bible' }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 38-year-old man named Rick "Daddy", VIP regular at Dog Bar. Extremely muscular classic bodybuilder physique with dense natural dark chest hair, arm hair, and torso hair. Full thick black beard and mustache, dark curly nearly-black hair with volume (sometimes longer at the nape). Olive-tan warm Mediterranean skin with realistic texture and pores. Strong masculine face, warm brown eyes, confident smile or smolder. Often shirtless in tight medium-wash blue jeans under night city balcony lights. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO plastic skin, NO CGI, NO stylized features, NO smooth waxed body.`;

function RickPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #3b82f633, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #7c3aed22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="rick" />
      <CharacterBible
        character={rick}
        lockPrompt={lockPrompt}
        portraitSrc="/rick-portrait.jpg"
        portraitAlt='Rick "Daddy" — photoreal bearded muscular VIP in blue jeans'
        portraitCaption="Full beard · dense chest hair · blue jeans · night balcony · no cartoon"
        accentLabel='Dog Bar · Rick "Daddy" lock'
        defaultLookId="october"
      />
    </div>
  );
}
