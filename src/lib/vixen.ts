export type Look = {
  id: string;
  name: string;
  setting: string;
  notes: string;
  palette: string[];
  image?: string;
};

export type Trait = {
  label: string;
  value: string;
};

export const vixen = {
  name: "Vixen",
  fullTitle: "Vixen Vale (Valentina “Val” Reyes)",
  role: "Curvy Latina bartender · Dog Bar",
  age: 25,
  tagline:
    "Messy high ponytail, golden-tan glow, hazel eyes and septum — athletic curves, playful heat.",
  summary:
    "25-year-old curvy Latina bartender. Long thick wavy almost-black hair usually in a high messy ponytail with loose sexy strands. Warm golden-tan skin, seductive hazel eyes, smoky makeup, full glossy pouty lips, small septum piercing. Athletic hourglass — large full heavy natural breasts, slim toned waist, wide hips, thick thighs. Confident playful energy. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long thick wavy almost-black hair, usually high messy ponytail with loose sexy strands framing the face — lived-in, never stiff",
    },
    {
      label: "Face",
      value:
        "Warm golden-tan skin, seductive hazel eyes, smoky eye makeup, full glossy pouty lips, confident playful smirk or seductive smile. Small septum piercing locked",
    },
    {
      label: "Skin",
      value:
        "Warm golden-tan with realistic texture, visible pores, natural radiant glow — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Athletic hourglass — large full heavy natural breasts, slim toned waist, wide hips, thick thighs, curvy but fit",
    },
    {
      label: "Tattoos / piercings",
      value:
        "Small septum piercing; subtle tattoos including small paw prints and script on collarbone/ribs when visible",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep messy dark ponytail + tan + hazel + septum + athletic curves",
    },
  ] as Trait[],
  personality: [
    "Confident and playfully seductive",
    "Flirty without being try-hard",
    "Owns the bar floor — moves like she belongs",
    "Loyal to the crew, competitive with Summer’s volume in a fun way",
  ],
  voice: [
    "Warm, teasing, slightly smoky",
    "Short playful lines",
    "Spanish slang sparingly when it lands",
  ],
  looks: [
    {
      id: "portrait",
      name: "Bar neon portrait",
      setting: "Dim neon bar · head & shoulders",
      notes:
        "Canonical face lock — messy high ponytail, hazel eyes, smoky makeup, septum, golden-tan glow.",
      palette: ["#1a1a20", "#c4a070", "#ff2d55", "#e8d5b5"],
      image: "/vixen-portrait.webp",
    },
    {
      id: "beach",
      name: "Cream bikini · golden hour",
      setting: "Ocean edge · sunset",
      notes:
        "Tiny cream string bikini, wet tan skin, high ponytail, playful smirk, ocean behind. Crew beach set.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/vixen-beach.webp",
    },
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "Black crop top + denim shorts, leaning on wooden counter, string lights, confident smirk.",
      palette: ["#1a1a20", "#f59e0b", "#e8d5b5", "#c4a070"],
      image: "/vixen-patio.webp",
    },
    {
      id: "bar",
      name: "Behind the bar",
      setting: "Dim neon bar interior",
      notes:
        "Black tank + jeans, wiping the bar, red/blue neon spill, seductive look at camera.",
      palette: ["#1a1a20", "#ff2d55", "#3b82f6", "#c4a070"],
      image: "/vixen-bar.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Summer Wins", note: "Friendly rivalry / shared volume energy." },
    { name: "Rose", note: "Different aesthetics; mutual respect at the bar." },
    { name: "Luna", note: "Works under Luna’s bar management." },
    { name: "Kai", note: "Events overlap — she shows up when the night is booked." },
    { name: "The Triplets", note: "Party pack energy on patio nights." },
    { name: "Rick / Byron", note: "Flirts freely; keeps it light." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Messy high dark ponytail + septum + hazel eyes + golden-tan are locked",
    "Athletic hourglass — large natural breasts, slim waist, thick thighs",
    "Prefer neon bar, golden patio, or golden-hour beach light",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
