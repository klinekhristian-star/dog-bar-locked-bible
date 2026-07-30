import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { summer } from "@/lib/summer";

export const Route = createFileRoute("/summer")({
  component: SummerPage,
  head: () => ({
    meta: [{ title: "Summer Wins · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old woman named Summer Wins (Summer Winds), stunning ultra-busty blonde bombshell. Long wavy voluminous blonde hair cascading over shoulders and back in soft tousled waves. Striking blue eyes with heavy glam makeup — sharp black winged eyeliner, long lashes, contoured cheeks, full glossy plump lips. Fair to sun-kissed skin with realistic texture, pores, and warm glossy sensual highlights. Extremely busty curvy hourglass figure with massive heavy natural breasts, tiny waist, wide hips, thick thighs, and perfect large round ass. Playful teasing highly confident energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features, NO exaggerated fantasy proportions beyond the described body.`;

function SummerPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 20% -5%, #f5d0a033, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, #ff2d9522, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="summer" />
      <CharacterBible
        character={summer}
        lockPrompt={lockPrompt}
        portraitSrc="/summer-portrait.jpg"
        portraitAlt="Summer Wins — photoreal blonde bombshell in white sports bra outdoor"
        portraitCaption="Blonde waves · blue eyes · massive curves · glossy glam · no cartoon"
        accentLabel="Dog Bar · Summer Wins lock"
        defaultLookId="road-smile"
      />
    </div>
  );
}
