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

export const isla = {
  name: "Isla",
  fullTitle: "Isla Maren",
  role: "Daytime patio lead · weekend brunch energy",
  age: 23,
  tagline:
    "Rich brunette waves, warm freckles, easy smile — soft voluptuous hourglass, golden-hour girl.",
  summary:
    "23-year-old patio lead at Dog Bar. Shoulder-length rich brunette hair with warm chocolate tones, loose waves, always slightly wind-tossed. Warm freckled skin on face, shoulders, and chest. Soft rounder face, bright hazel eyes, full natural lips, easy open smile. Soft voluptuous hourglass — full natural breasts, soft waist, wide hips, thick thighs. Warm, messy, a little chaotic. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Shoulder-length rich brunette with soft warm chocolate tones, loose waves, always slightly wind-tossed — never stiff or overstyled",
    },
    {
      label: "Face",
      value:
        "Soft rounder face shape, bright hazel eyes, full natural lips, easy open smile. Warm freckled skin across nose and cheeks. Soft, never thin or gaunt",
    },
    {
      label: "Skin",
      value:
        "Warm freckled skin on face, shoulders, and chest — realistic texture and pores; freckles are locked",
    },
    {
      label: "Build",
      value:
        "Soft voluptuous hourglass — full natural breasts, soft waist, wide hips, thick thighs. Relaxed confident posture. Never slim-athletic, never exaggerated fantasy",
    },
    {
      label: "Energy",
      value:
        "Warm, messy, a little chaotic — remembers every regular’s name, forgets the specials. Daylight and brunch energy",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep brunette waves + freckles + hazel eyes + soft voluptuous body",
    },
  ] as Trait[],
  personality: [
    "Warm and a little chaotic",
    "Remembers names, forgets specials",
    "Easy open smile — never performative glam",
    "Daytime / patio counterweight to late-night cool",
    "Loyal to the crew without needing the spotlight",
  ],
  voice: [
    "Bright, friendly, slightly rushed",
    "Laughs mid-sentence",
    "Casual, never formal",
  ],
  looks: [
    {
      id: "portrait",
      name: "Patio portrait",
      setting: "Dog Bar patio · golden hour",
      notes:
        "Canonical lock — brunette waves, freckles, hazel eyes, white tank + denim shorts, easy smile.",
      palette: ["#c4a070", "#e8d5b5", "#1a1a20", "#f59e0b"],
      image: "/isla-portrait.webp",
    },
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "White cropped tank + cut-off denim shorts, soft patio light, real laugh at camera.",
      palette: ["#f59e0b", "#e8d5b5", "#1a1a20", "#c4a070"],
      image: "/isla-patio.webp",
    },
    {
      id: "beach",
      name: "Brown bikini · beach",
      setting: "Warm beach light · close-up",
      notes:
        "Mauve-brown triangle bikini, wind in hair, freckles locked, soft voluptuous body.",
      palette: ["#e8d5b5", "#f59e0b", "#8b6914", "#1a1a20"],
      image: "/isla-beach.webp",
    },
    {
      id: "street",
      name: "Yellow dress · city",
      setting: "NYC sidewalk · golden hour",
      notes:
        "Yellow floral sundress, big open smile, freckles, soft curves — daytime energy.",
      palette: ["#f5d76e", "#e8d5b5", "#c4a070", "#1a1a20"],
      image: "/isla-street.webp",
    },
    {
      id: "surf",
      name: "Silver bikini · surfboard",
      setting: "Beach · late afternoon",
      notes:
        "Metallic silver micro bikini with surfboard, freckled skin, bright smile.",
      palette: ["#c0c0c0", "#e8d5b5", "#3b82f6", "#f59e0b"],
      image: "/isla-surf.webp",
    },
    {
      id: "climb",
      name: "Coastal climb",
      setting: "Cliff above beach · golden hour",
      notes:
        "Climbing harness and gear, athletic energy, freckles and smile locked.",
      palette: ["#6b7c5c", "#c4a070", "#f59e0b", "#1a1a20"],
      image: "/isla-climb.webp",
    },
    {
      id: "road",
      name: "Coastal drive",
      setting: "Red convertible · Pacific highway",
      notes:
        "Silver bikini, driving a red convertible along the coast at golden hour.",
      palette: ["#c41e3a", "#c0c0c0", "#f59e0b", "#3b82f6"],
      image: "/isla-road.webp",
    },
    {
      id: "soft",
      name: "Soft studio",
      setting: "Warm indoor light",
      notes:
        "Brown soft top, fuller body read, freckles and smile — quieter intimate still.",
      palette: ["#6b4423", "#e8d5b5", "#c4a070", "#1a1a20"],
      image: "/isla-soft.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Thick Betty", note: "Day shift overlap — messy warmth meets bubbly thick energy." },
    { name: "Summer Wins", note: "Different register; Isla handles the brunch crowd Summer ignores." },
    { name: "Marnie", note: "Quiet mutual ease when Marnie shows up daytime." },
    { name: "Luna", note: "Reports up; Luna trusts her with the patio floor." },
    { name: "The Triplets", note: "They blow through brunch; she laughs them off." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Rich brunette waves + freckles on face/shoulders/chest + hazel eyes are locked",
    "Soft voluptuous hourglass — full natural breasts, soft waist, wide hips, thick thighs",
    "Prefer golden-hour and bright patio light",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
