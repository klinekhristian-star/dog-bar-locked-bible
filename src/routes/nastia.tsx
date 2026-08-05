import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { nastia } from "@/lib/nastia";

export const Route = createFileRoute("/nastia")({
  component: NastiaPage,
  head: () => ({
    meta: [{ title: "Nastia Novak · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 27-year-old Eastern European woman named Nastia Novak (Polish/Czech), older sister to Kasia. Long soft ash-blonde hair with cool undertones, thick waves or messy low bun. Fair cool-toned skin with realistic texture, freckles on nose and cheeks. Soft full face, high soft cheekbones, cool grey-blue eyes, full natural lips, warm open smile. Beautiful plus-size overweight hourglass — full heavy soft natural breasts, soft stomach, wide hips, thick soft thighs, strong arms. Small silver hoops, thin black leather cord necklace. Confident grounded posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, cool soft window light preferred, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO thin face, NO weight stigma, NO exaggerated deformity.`;

function NastiaPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #c8d0d833, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #a8b0b822, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="nastia" />
      <CharacterBible
        character={nastia}
        lockPrompt={lockPrompt}
        portraitSrc="/nastia-portrait.jpg"
        portraitAlt="Nastia Novak — photoreal Eastern European ash-blonde, beautiful plus-size"
        portraitCaption="Ash-blonde · grey-blue eyes · warm smile · plus-size lock · no cartoon"
        accentLabel="Dog Bar · Nastia lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
