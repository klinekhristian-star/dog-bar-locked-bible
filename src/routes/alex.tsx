import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { alex } from "@/lib/alex";

export const Route = createFileRoute("/alex")({
  component: AlexPage,
  head: () => ({
    meta: [{ title: "Alex Kane · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 22-year-old man named Alex Kane, Rose’s partner. Medium-length slightly messy dark brown hair, fair-to-light warm skin, light stubble, symmetrical face, steady brown eyes, calm expression. Lean-athletic build — broad enough shoulders, defined but not bodybuilder, natural from real work. Simple dark clothes or shirtless work looks. Quiet confident posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO plastic skin, NO CGI, NO male-model perfection, NO overbuilt gym body.`;

function AlexPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c4a07033, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #1a1a2022, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="alex" />
      <CharacterBible
        character={alex}
        lockPrompt={lockPrompt}
        portraitSrc="/alex-portrait.webp"
        portraitAlt="Alex Kane — photoreal 22-year-old, messy dark hair, light stubble, steady brown eyes"
        portraitCaption="Messy dark hair · stubble · lean-athletic · Rose’s partner · no cartoon"
        accentLabel="Dog Bar · Alex lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
