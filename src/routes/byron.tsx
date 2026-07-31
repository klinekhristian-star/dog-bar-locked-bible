import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { byron } from "@/lib/byron";

export const Route = createFileRoute("/byron")({
  component: ByronPage,
  head: () => ({
    meta: [{ title: 'Byron "Bouncer" · Dog Bar Character Bible' }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 32-year-old man named Byron "Bouncer", head of security at Dog Bar. Extremely muscular Black bodybuilder physique — massive shoulders, peaked delts, thick arms, carved abs, dense chest. Short black hair in neat waves with clean hairline, short neat goatee and mustache, strong masculine jaw. Deep rich dark brown skin with realistic texture, pores, and glossy oiled muscle highlights. Always wearing a silver dog-tag necklace on a ball chain. Warm confident smile or hard door stare. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO plastic skin, NO CGI, NO stylized features.`;

function ByronPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c4a07033, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #2a181033, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="byron" />
      <CharacterBible
        character={byron}
        lockPrompt={lockPrompt}
        portraitSrc="/byron-portrait.jpg"
        portraitAlt='Byron "Bouncer" — photoreal muscular Black security lead with dog tag'
        portraitCaption="Dog tag · massive physique · short waves · goatee · no cartoon"
        accentLabel='Dog Bar · Byron "Bouncer" lock'
        defaultLookId="gym-cross"
      />
    </div>
  );
}
