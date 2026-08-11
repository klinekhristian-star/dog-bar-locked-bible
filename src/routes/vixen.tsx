import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { vixen } from "@/lib/vixen";

export const Route = createFileRoute("/vixen")({
  component: VixenPage,
  head: () => ({
    meta: [{ title: "Vixen · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 25-year-old woman named Vixen Vale (Valentina “Val” Reyes), curvy Latina bartender at Dog Bar. Long thick wavy almost-black hair usually in a high messy ponytail with loose sexy strands framing her face. Warm golden-tan skin with realistic texture and natural radiant glow. Seductive hazel eyes, smoky eye makeup, full glossy pouty lips, confident playful smirk. Small septum piercing. Athletic hourglass figure with large full heavy natural breasts, slim toned waist, wide hips, thick thighs, curvy but fit build. Subtle tattoos including small paw prints when visible. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI.`;

function VixenPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c45c2a44, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #ff2d5522, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="vixen" />
      <CharacterBible
        character={vixen}
        lockPrompt={lockPrompt}
        portraitSrc="/vixen-portrait.webp"
        portraitAlt="Vixen Vale — photoreal curvy Latina bartender with messy dark ponytail and septum"
        portraitCaption="Messy ponytail · golden-tan · hazel + septum · athletic curves · no cartoon"
        accentLabel="Dog Bar · Vixen lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
