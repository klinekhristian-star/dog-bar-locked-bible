import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { isla } from "@/lib/isla";

export const Route = createFileRoute("/isla")({
  component: IslaPage,
  head: () => ({
    meta: [{ title: "Isla Maren · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 23-year-old woman named Isla Maren. Shoulder-length rich brunette hair with soft warm chocolate tones, loose waves, always slightly wind-tossed. Warm freckled skin on face, shoulders, and chest with realistic texture and pores. Soft rounder face shape, bright hazel eyes, full natural lips, easy open smile. Soft voluptuous hourglass figure — full natural breasts, soft waist, wide hips, thick thighs. Relaxed confident posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO thin face, NO exaggerated fantasy proportions.`;

function IslaPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #f59e0b33, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #c4a07022, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="isla" />
      <CharacterBible
        character={isla}
        lockPrompt={lockPrompt}
        portraitSrc="/isla-portrait.jpg"
        portraitAlt="Isla Maren — photoreal brunette with freckles and soft voluptuous hourglass"
        portraitCaption="Brunette waves · freckles · hazel eyes · soft curves · no cartoon"
        accentLabel="Dog Bar · Isla lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
