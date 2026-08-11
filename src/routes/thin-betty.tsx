import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CharacterBible } from "@/components/CharacterBible";
import { thinBetty } from "@/lib/thin-betty";

export const Route = createFileRoute("/thin-betty")({
  component: ThinBettyPage,
  head: () => ({
    meta: [{ title: "Thin Betty · Dog Bar Character Bible" }],
  }),
});

const lockPrompt = `Ultra-photorealistic 8K live-action photograph of a real 24-year-old woman named Thin Betty (Betty Callahan), the same girl as Thick Betty after losing 100 pounds while studying Computer Science at college. Long vibrant orange-red ginger wavy hair with soft bangs, cascading over shoulders. Dense freckles across nose, cheeks, shoulders, and chest. Fair freckled skin with realistic pores. Big expressive blue eyes, warm genuine smile showing teeth. Always wearing signature bright pink cat-eye glasses. Slim athletic hourglass figure — toned narrow waist, smaller but still full natural breasts, lean hips and legs, healthy post-weight-loss glow. NOT extreme thinness. Shot on ARRI Alexa Mini LF, 50mm lens, f/2.0, natural filmic color, subsurface scattering, maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI, NO stylized features, NO emaciated body.`;

function ThinBettyPage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 15% -5%, #ff4d8d33, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 5%, #e85d0422, transparent 50%)",
        }}
        aria-hidden
      />
      <Nav character="thin-betty" />
      <CharacterBible
        character={thinBetty}
        lockPrompt={lockPrompt}
        portraitSrc="/betty-portrait.jpg"
        portraitAlt="Thin Betty — photoreal ginger CS student with pink cat-eye glasses and freckles after college weight loss"
        portraitCaption="Same freckles · same pink glasses · same ginger waves · 100 lbs lighter · no cartoon"
        accentLabel="Dog Bar · Thin Betty lock (post-college)"
        defaultLookId="floral"
      />
    </div>
  );
}
