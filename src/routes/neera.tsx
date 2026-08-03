import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { neera } from "@/lib/neera";

export const Route = createFileRoute("/neera")({
  component: NeeraPage,
  head: () => ({
    meta: [{ title: "Neera · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old woman named Neera, breathtaking young Indian beauty. Long voluminous jet-black hair flowing naturally. Smooth glowing tanned bronze skin with realistic texture, visible pores and subtle subsurface scattering. Expressive large dark brown eyes with long lashes, perfectly shaped eyebrows, high cheekbones, full natural lips, bright genuine smile showing perfect white teeth. Toned athletic yet curvy hourglass figure with slim waist, toned abs, full natural breasts. Soft confident energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI.`;

function NeeraPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c4a07044, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #f59e0b22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="neera" />
      <CharacterBible
        character={neera}
        lockPrompt={lockPrompt}
        portraitSrc="/neera-portrait.jpg"
        portraitAlt="Neera — photoreal young Indian beauty with long black hair and bronze skin"
        portraitCaption="Jet-black hair · bronze glow · bright smile · athletic curves · no cartoon"
        accentLabel="Dog Bar · Neera lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
