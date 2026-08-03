import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { mailei } from "@/lib/mailei";

export const Route = createFileRoute("/mailei")({
  component: MaiLeiPage,
  head: () => ({
    meta: [{ title: "Mai Lei · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 22-year-old Chinese woman named Mai Lei. Long silky straight jet-black hair with soft face-framing strands, always glossy. Flawless fair porcelain skin with realistic texture, visible pores, and subtle natural flush. Delicate symmetrical East Asian features, large expressive dark brown eyes with long lashes, soft full lips, refined elegant beauty. Soft fuller face shape — never thin, gaunt, or angular. Slim yet softly feminine figure with a narrow waist, gentle natural curves, and natural perky breasts. Graceful posture. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, realistic subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO thin face, NO gaunt cheeks, NO Western facial structure.`;

function MaiLeiPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #f5e6d344, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #1a1a2022, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="mailei" />
      <CharacterBible
        character={mailei}
        lockPrompt={lockPrompt}
        portraitSrc="/mailei-portrait.jpg"
        portraitAlt="Mai Lei — photoreal Chinese beauty with long black hair and porcelain skin"
        portraitCaption="Long black hair · porcelain skin · delicate East Asian features · quiet elegance · no cartoon"
        accentLabel="Dog Bar · Mai Lei lock"
        defaultLookId="portrait"
      />
    </div>
  );
}
