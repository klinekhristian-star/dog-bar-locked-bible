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

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 21-year-old cute feminine Korean woman named Kai (never male, never androgynous, never boyish), rebellious e-girl and Dog Bar events manager. Medium-length shaggy messy voluminous black hair with strong vibrant pink streaks heavily concentrated on front bangs and sides, wind-blown strands falling over face, choppy layered bangs. Soft feminine Korean facial features, soft jawline, soft cheeks, big expressive feminine East Asian eyes with heavy black eyeliner and long lashes, full soft lips. Snake-bite lip piercings (two silver studs under lower lip), optional tongue piercing visible when tongue out. Smooth glowing realistic skin with natural texture and pores. Clear female body: perky round natural breasts, slim toned waist, feminine hips, thick juicy ass, confident rebellious posture. Playful tongue-out e-girl energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, cinematic neon or natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO male face, NO boyish features, NO androgynous, NO flat chest, NO masculine jaw.`;

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
        portraitSrc="/kai-portrait.webp"
        portraitAlt="Kai — photoreal Korean e-girl events manager with pink-streaked black hair"
        portraitCaption="Feminine Korean woman · pink streaks · snake bites · never boyish · no cartoon"
        accentLabel="Dog Bar · Kai lock"
        defaultLookId="street-peace"
      />
    </div>
  );
}
