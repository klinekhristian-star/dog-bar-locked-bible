import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { kai } from "@/lib/kai";

export const Route = createFileRoute("/kai")({
  component: KaiPage,
  head: () => ({
    meta: [{ title: "Kai · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 21-year-old woman named Kai, cute feminine rebellious Korean e-girl and Dog Bar events manager. Medium-length shaggy messy voluminous black hair with strong vibrant pink streaks heavily concentrated on front bangs and sides, wind-blown strands falling over face, choppy layered bangs. Soft feminine East Asian / Korean facial features, big expressive eyes with heavy black eyeliner and long lashes. Snake-bite lip piercings (two silver studs under lower lip), optional tongue piercing visible when tongue out. Smooth glowing realistic skin with natural texture and pores. Perky round breasts, slim toned waist, thick juicy ass, confident rebellious posture. Playful tongue-out e-girl energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, cinematic neon or natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function KaiPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #ff2d9533, transparent 55%), radial-gradient(ellipse 50% 40% at 92% 8%, #a855f722, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="kai" />
      <CharacterBible
        character={kai}
        lockPrompt={lockPrompt}
        portraitSrc="/kai-portrait.jpg"
        portraitAlt="Kai — photoreal Korean e-girl events manager with pink-streaked black hair"
        portraitCaption="Pink streaks · snake bites · heavy liner · tongue-out chaos · no cartoon"
        accentLabel="Dog Bar · Kai lock"
        defaultLookId="street-peace"
      />
    </div>
  );
}
