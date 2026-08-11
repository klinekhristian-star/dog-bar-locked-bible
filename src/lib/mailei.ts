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

export const mailei = {
  name: "Mai Lei",
  fullTitle: "Mai Lei",
  role: "Quiet elegant presence · newest face at Dog Bar",
  age: 22,
  tagline:
    "Long silky black hair, porcelain skin, delicate East Asian beauty — quiet confidence, photoreal only.",
  summary:
    "22-year-old Chinese woman and newest addition to Dog Bar. Long silky straight jet-black hair, flawless fair porcelain skin, delicate symmetrical East Asian features, large dark brown eyes, soft full lips. Slim feminine figure with narrow waist and natural perky breasts. Soft-spoken, graceful, low-key playful. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long silky straight jet-black hair with soft face-framing strands — always glossy and natural, never stiff or overstyled",
    },
    {
      label: "Face",
      value:
        "Flawless fair porcelain skin with realistic texture and subtle natural flush. Delicate symmetrical East Asian features, large expressive dark brown eyes with long lashes, soft full lips. Soft fuller face shape — never thin, gaunt, or angular",
    },
    {
      label: "Skin",
      value:
        "Fair porcelain with realistic pores and soft natural flush — never plastic CGI or doll-smooth",
    },
    {
      label: "Build",
      value:
        "Slim yet softly feminine figure with narrow waist, gentle natural curves, and natural perky breasts. Graceful posture — never exaggerated or cartoonish",
    },
    {
      label: "Energy",
      value:
        "Quiet confidence, soft-spoken, observant, naturally graceful. Warm once she trusts someone, slightly reserved at first. Low-key playful",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep long black hair + porcelain skin + delicate East Asian features + slim feminine body",
    },
  ] as Trait[],
  personality: [
    "Quiet confidence — soft-spoken and observant",
    "Naturally graceful; moves without needing to announce herself",
    "Warm once she trusts someone, slightly reserved at first",
    "Low-key playful, never loud",
    "Elegant without trying",
  ],
  voice: [
    "Calm, elegant, lightly playful English",
    "Short sentences; never loud",
    "Slight smile in the tone even when teasing",
  ],
  looks: [
    {
      id: "portrait",
      name: "Studio portrait",
      setting: "Soft studio light · head & shoulders",
      notes:
        "Canonical face lock — long black hair, porcelain skin, soft fuller face, quiet smile. Hero still for identity.",
      palette: ["#f5f0eb", "#1a1a20", "#c4a070", "#e8d5b5"],
      image: "/mailei-portrait.webp",
    },
    {
      id: "beach",
      name: "Cream bikini · golden hour",
      setting: "Ocean edge · golden hour",
      notes:
        "Tiny cream string bikini, wet skin with water droplets, soft serene smile, waves behind. Matches the crew beach set.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/mailei-beach.webp",
    },
    {
      id: "robe",
      name: "Black satin robe",
      setting: "Warm living room · sofa",
      notes:
        "Loosely tied black satin robe, quiet half-smile, soft indoor light. Elegant minimal energy.",
      palette: ["#1a1a20", "#c4a070", "#6b7280", "#e8d5b5"],
      image: "/mailei-robe.webp",
    },
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "Black Dog Bar crop top + denim shorts, string lights and picnic tables soft behind, quiet confident smile.",
      palette: ["#1a1a20", "#f59e0b", "#e8d5b5", "#c4a070"],
      image: "/mailei-patio.webp",
    },
    {
      id: "morning",
      name: "Morning white shirt",
      setting: "Bedroom · soft window light",
      notes:
        "Oversized white button-down only, bare legs, quiet half-smile, clean morning light.",
      palette: ["#f5f0eb", "#1a1a20", "#e8d5b5", "#c4a070"],
      image: "/mailei-morning.webp",
    },
    {
      id: "night",
      name: "Backless black dress · neon",
      setting: "City street · night neon",
      notes:
        "Simple elegant black backless mini dress, soft neon bokeh, quiet confident look, simple gold jewelry.",
      palette: ["#1a1a20", "#ff2d55", "#c084fc", "#e8d5b5"],
      image: "/mailei-night.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Kai", note: "Easy friendship — similar age, calm energy." },
    { name: "Zuri", note: "Quiet mutual recognition; both new-ish elegance at the bar." },
    { name: "Rose", note: "Respectful distance; different aesthetics, same bar." },
    { name: "Summer Wins", note: "Amused observer of Summer’s louder volume." },
    { name: "Thick Betty", note: "Warm; Betty’s bubbly meets Mai Lei’s quiet." },
    { name: "The Triplets", note: "Watches their chaos with a small smile." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Long silky jet-black hair + porcelain skin + delicate East Asian features are locked",
    "Soft fuller face — never thin/gaunt/angular",
    "Slim feminine body — never thick, never exaggerated fantasy proportions",
    "Prefer soft natural, golden-hour, or warm indoor light",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
