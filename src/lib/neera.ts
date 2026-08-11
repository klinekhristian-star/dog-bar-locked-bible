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

export const neera = {
  name: "Neera",
  fullTitle: "Neera",
  role: "Young Indian beauty · Dog Bar orbit",
  age: 24,
  tagline:
    "Long jet-black hair, bronze glow, bright smile — athletic curves with soft power.",
  summary:
    "24-year-old young Indian beauty. Long voluminous jet-black hair flowing naturally. Smooth glowing tanned bronze skin. Expressive large dark brown eyes, long lashes, high cheekbones, full natural lips, bright genuine smile. Toned athletic yet curvy hourglass — slim waist, toned abs, full natural breasts. Warm radiant energy. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long voluminous jet-black hair flowing naturally — soft waves or loose flow, always rich and full",
    },
    {
      label: "Face",
      value:
        "Expressive large dark brown eyes with long lashes, perfectly shaped eyebrows, high cheekbones, full natural lips, bright genuine smile showing perfect white teeth. Delicate yet strong feminine features",
    },
    {
      label: "Skin",
      value:
        "Smooth glowing tanned bronze with realistic texture, visible pores, subtle subsurface scattering — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Toned athletic yet curvy hourglass — slim waist, toned abs, full natural breasts, strong confident posture",
    },
    {
      label: "Energy",
      value:
        "Warm, radiant, genuine — smiles easily; soft power not loud chaos",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep jet-black hair + bronze skin + dark brown eyes + athletic-curvy build",
    },
  ] as Trait[],
  personality: [
    "Warm and genuine — smiles first",
    "Quietly confident, not performative",
    "Athletic energy with soft elegance",
    "Easy with the crew; not the loudest but never invisible",
  ],
  voice: [
    "Clear, warm, lightly melodic English",
    "Short friendly lines",
    "Genuine laughter over forced flirt",
  ],
  looks: [
    {
      id: "portrait",
      name: "Studio portrait",
      setting: "Warm studio light · head & shoulders",
      notes:
        "Canonical face lock — long black hair, bronze skin, bright genuine smile, large dark eyes.",
      palette: ["#c4a070", "#1a1a20", "#e8d5b5", "#2a1810"],
      image: "/neera-portrait.webp",
    },
    {
      id: "beach",
      name: "Cream bikini · golden hour",
      setting: "Ocean edge · golden hour",
      notes:
        "Tiny cream string bikini, wet bronze skin, bright smile, ocean behind. Crew beach set.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/neera-beach.webp",
    },
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "Black crop top + denim shorts, string lights, warm open smile at camera.",
      palette: ["#1a1a20", "#f59e0b", "#e8d5b5", "#c4a070"],
      image: "/neera-patio.webp",
    },
    {
      id: "balcony",
      name: "Silk slip · balcony",
      setting: "Balcony · golden hour",
      notes:
        "Cream silk slip dress, looking back over shoulder, warm backlight on bronze skin.",
      palette: ["#e8d5b5", "#f59e0b", "#c4a070", "#1a1a20"],
      image: "/neera-balcony.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Kai", note: "Easy friendship; shared calm-to-playful range." },
    { name: "Mai Lei", note: "Quiet mutual elegance." },
    { name: "Zuri", note: "Soft goddess energy overlap." },
    { name: "Vixen", note: "Bar-floor contrast — warmth vs heat." },
    { name: "Luna", note: "Respects Luna’s management presence." },
    { name: "The Triplets", note: "Amused by their pack chaos." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Long jet-black hair + bronze skin + large dark brown eyes + bright smile are locked",
    "Athletic-curvy hourglass — full natural breasts, slim toned waist",
    "Prefer golden-hour and warm studio light",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
