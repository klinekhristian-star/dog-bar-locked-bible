import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { zuri } from "@/lib/zuri";

export const Route = createFileRoute("/zuri")({
  component: ZuriPage,
  head: () => ({
    meta: [{ title: "Zuri · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 22-year-old woman named Zuri, breathtaking petite Black African beauty. Extremely voluminous huge natural afro hairstyle with rich beautiful curl texture and massive height and volume. Warm deep chocolate skin with realistic texture, visible pores, radiant glow and subsurface scattering. Delicate striking symmetrical face, expressive captivating dark eyes, full elegant lips, radiant genuine smile. Extremely slim petite figure with dramatic tiny waist, small perky breasts, slim hips, long toned legs — delicate hourglass under a massive afro. Soft confident goddess energy. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features.`;

function ZuriPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 18% -5%, #c45c2a33, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 8%, #e8d5a322, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="zuri" />
      <CharacterBible
        character={zuri}
        lockPrompt={lockPrompt}
        portraitSrc="/zuri-portrait.webp"
        portraitAlt="Zuri — photoreal petite Black beauty with huge natural afro in white slip dress"
        portraitCaption="Huge afro · tiny waist · deep chocolate skin · radiant smile · no cartoon"
        accentLabel="Dog Bar · Zuri lock"
        defaultLookId="field-gold"
      />
    </div>
  );
}
