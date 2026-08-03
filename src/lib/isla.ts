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
      setting: "Golden hour · head & shoulders",
      notes:
        "Canonical face lock — brunette waves, freckles, hazel eyes, easy smile. Hero still for identity.",
      palette: ["#c4a070", "#e8d5b5", "#1a1a20", "#f59e0b"],
    },
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "White cropped tank + cut-off denim shorts, string lights soft behind, real laugh at camera.",
      palette: ["#f59e0b", "#e8d5b5", "#1a1a20", "#c4a070"],
    },
    {
      id: "beach",
      name: "Cream bikini · beach",
      setting: "Ocean edge · golden hour",
      notes:
        "Tiny cream string bikini, freckled wet skin, soft smile, ocean behind. Crew beach set.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#1a1a20"],
    },
    {
      id: "brunch",
      name: "Brunch service",
      setting: "Sunny patio tables · morning",
      notes:
        "Soft linen button-down tied at waist over tank, denim shorts, notepad in hand, warm mid-service smile.",
      palette: ["#e8d5b5", "#c4a070", "#f5f0eb", "#1a1a20"],
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
