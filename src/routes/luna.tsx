import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { luna } from "@/lib/luna";

export const Route = createFileRoute("/luna")({
  component: LunaPage,
  head: () => ({
    meta: [{ title: "Luna · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 28-year-old woman named Luna, thick and buxom Black bar manager of strong African descent. Extremely full, dense, huge rounded voluminous natural afro with rich texture, impressive height and volume, defined curls. Rich deep warm dark chocolate skin tone with realistic texture, visible pores, subtle natural imperfections, and radiant sheen. Symmetrical face with high cheekbones, full plump lips, dark brown eyes with natural catchlights. Thick voluptuous hourglass figure with very large full heavy natural breasts, narrow waist, wide hips, thick thighs, large round firm ass, strong curvy athletic build, proud confident posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function LunaPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #c4a07033, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #e0204022, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="luna" />
      <CharacterBible
        character={luna}
        lockPrompt={lockPrompt}
        portraitSrc="/luna-portrait.jpg"
        portraitAlt="Luna — photoreal Dog Bar manager, voluminous afro, dark chocolate skin"
        portraitCaption="Huge afro · deep chocolate skin · manager presence · photoreal only"
        accentLabel="Dog Bar · Luna lock · Manager"
        defaultLookId="manager"
      />
    </div>
  );
}
