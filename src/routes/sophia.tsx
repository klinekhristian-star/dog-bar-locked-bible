import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { sophia } from "@/lib/sophia";

export const Route = createFileRoute("/sophia")({
  component: SophiaPage,
  head: () => ({
    meta: [{ title: "Sophia Chen · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 23-year-old short petite East Asian woman named Sophia Chen. Long dark brown hair with soft lighter ends, warm light-tan skin with realistic texture, symmetrical face, expressive dark brown eyes, full glossy lips. Short petite frame — small natural breasts, slim waist, slim hips, slender legs. NOT buxom, NOT heavy-chested. Playful confident energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO large breasts, NO buxom body, NO tall proportions.`;

function SophiaPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #f59e0b33, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #0f3d2e22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="sophia" />
      <CharacterBible
        character={sophia}
        lockPrompt={lockPrompt}
        portraitSrc="/sophia-portrait.webp"
        portraitAlt="Sophia Chen — short petite East Asian, long dark hair, Dog Relations"
        portraitCaption="Short petite · not buxom · long dark hair · Dog Relations · no cartoon"
        accentLabel="Dog Bar · Sophia lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
