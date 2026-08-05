import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { amara } from "@/lib/amara";

export const Route = createFileRoute("/amara")({
  component: AmaraPage,
  head: () => ({
    meta: [{ title: "Amara · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old South Asian woman named Amara. Long flowing jet-black hair with thick waves, warm deep bronze skin with realistic texture and natural sheen, striking dark eyes, full lips, confident smile. Athletic-curvy hourglass figure with full natural breasts, toned waist, strong legs and glutes. Confident posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO thin face, NO exaggerated fantasy proportions.`;

function AmaraPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #d4af3733, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #ff2d6a22, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="amara" />
      <CharacterBible
        character={amara}
        lockPrompt={lockPrompt}
        portraitSrc="/amara-portrait.jpg"
        portraitAlt="Amara — photoreal South Asian beauty with long black hair and gold bikini"
        portraitCaption="Long black hair · warm bronze skin · athletic-curvy · no cartoon"
        accentLabel="Dog Bar · Amara lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
