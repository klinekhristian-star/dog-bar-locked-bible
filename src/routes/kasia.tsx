import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { kasia } from "@/lib/kasia";

export const Route = createFileRoute("/kasia")({
  component: KasiaPage,
  head: () => ({
    meta: [{ title: "Kasia Novak · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old Eastern European woman named Kasia Novak (Polish/Czech). Long straight ash-blonde hair with cool undertones, center part. Fair cool-toned skin with realistic texture, light freckling across the nose only. High soft cheekbones, cool grey-blue eyes, full natural lips with neutral-rose tone, restrained almost-smile. Slim-athletic hourglass — full natural breasts, narrow waist, long legs, firm posture. Small silver hoops, thin black leather cord necklace. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, cool soft window light preferred, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO thin gaunt face, NO exaggerated fantasy proportions.`;

function KasiaPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c8d0d833, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #6b7c8c22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="kasia" />
      <CharacterBible
        character={kasia}
        lockPrompt={lockPrompt}
        portraitSrc="/kasia-portrait.jpg"
        portraitAlt="Kasia Novak — photoreal Eastern European ash-blonde with grey-blue eyes"
        portraitCaption="Ash-blonde · grey-blue eyes · cool last-call · no cartoon"
        accentLabel="Dog Bar · Kasia lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
