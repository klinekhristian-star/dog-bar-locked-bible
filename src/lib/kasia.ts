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

export const kasia = {
  name: "Kasia",
  fullTitle: "Kasia Novak",
  role: "Late floor · vodka & beer rail",
  age: 24,
  tagline:
    "Ash-blonde, grey-blue eyes, cool last-call energy — slim-athletic hourglass, dry smile.",
  summary:
    "24-year-old Eastern European (Polish/Czech) bartender at Dog Bar. Long straight ash-blonde hair with cool undertones, center part. Fair cool-toned skin, light freckling on nose only. High soft cheekbones, cool grey-blue eyes, full natural lips, restrained almost-smile. Slim-athletic hourglass — full natural breasts, narrow waist, long legs. Cool, dry, a little dangerous when she smiles. Sister to Nastia. Photoreal only.",
  identity: [
    {
      label: "Hair",
      value:
        "Long straight ash-blonde with cool undertones, center part — loose or low sleek ponytail; never warm golden blonde",
    },
    {
      label: "Face",
      value:
        "Fair cool-toned skin, light freckles on nose only, high soft cheekbones, cool grey-blue eyes, full natural lips with neutral-rose tone, restrained almost-smile",
    },
    {
      label: "Skin",
      value:
        "Fair cool-toned with realistic texture — prefer cool window / overcast / neon-rim light; never heavy warm beauty light",
    },
    {
      label: "Build",
      value:
        "Slim-athletic hourglass — full natural breasts, narrow waist, long legs, firm posture. Never gaunt, never exaggerated fantasy",
    },
    {
      label: "Energy",
      value:
        "Cool, dry, last-call calm — doesn’t oversell. Shared silver hoops + thin black leather cord with sister Nastia",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep ash-blonde + grey-blue eyes + cool fair skin + slim-athletic lock",
    },
  ] as Trait[],
  personality: [
    "Cool and dry — a little dangerous when she smiles",
    "Doesn’t oversell; doesn’t need to",
    "Last-call and late-rail specialist",
    "Loyal to Nastia without performing it",
    "Observant, low words, high precision",
  ],
  voice: [
    "Quiet, precise English with a light Eastern European cadence",
    "Short sentences; dry humor",
    "Rare full smile — almost-smile is the default",
  ],
  looks: [
    {
      id: "portrait",
      name: "Lounge portrait",
      setting: "Velvet sofa · warm lamp",
      notes:
        "Canonical face lock — ash-blonde, grey-blue eyes, restrained almost-smile, emerald slip dress.",
      palette: ["#0f3d2e", "#c8d0d8", "#6b4c7a", "#1a1a20"],
      image: "/kasia-portrait.jpg",
    },
    {
      id: "lounge",
      name: "Green slip · lounge",
      setting: "Purple lounge · full pose",
      notes: "Emerald satin slip, legs crossed, black heels, cool almost-smile.",
      palette: ["#0f3d2e", "#5b3a6e", "#c8d0d8", "#1a1a20"],
      image: "/kasia-lounge.jpg",
    },
    {
      id: "cafe",
      name: "Cafe window",
      setting: "Overcast window light",
      notes: "White shirt unbuttoned, black waistband, coffee, Slavic window key.",
      palette: ["#c8d0d8", "#a8b0b8", "#f5f0eb", "#1a1a20"],
      image: "/kasia-cafe.jpg",
    },
    {
      id: "cafe-open",
      name: "Cafe open shirt",
      setting: "Window table · soft day",
      notes: "White shirt fully open, same cool face lock, coffee in frame.",
      palette: ["#c8d0d8", "#f5f0eb", "#1a1a20", "#a8b0b8"],
      image: "/kasia-cafe-open.jpg",
    },
    {
      id: "rain",
      name: "Rain street",
      setting: "Wet neon street · night",
      notes: "Black leather mini dress, boots, rain, full-length neon reflections.",
      palette: ["#1a1a20", "#3b82f6", "#ef4444", "#c8d0d8"],
      image: "/kasia-rain.jpg",
    },
    {
      id: "rain-kneel",
      name: "Rain kneel",
      setting: "Wet street · close",
      notes: "Black leather mini, kneeling on wet asphalt, cool gaze at camera.",
      palette: ["#1a1a20", "#3b82f6", "#ef4444", "#c8d0d8"],
      image: "/kasia-rain-kneel.jpg",
    },
    {
      id: "rooftop",
      name: "Rooftop golden hour",
      setting: "City balcony · sunset",
      notes: "Cream tank and jeans, railing, soft almost-smile, skyline bokeh.",
      palette: ["#e8d5b5", "#f59e0b", "#c8d0d8", "#1a1a20"],
      image: "/kasia-rooftop.jpg",
    },
    {
      id: "rooftop-shorts",
      name: "Rooftop shorts",
      setting: "Balcony · golden hour",
      notes: "Cream ribbed tank, denim shorts, lean-athletic lock clear.",
      palette: ["#e8d5b5", "#f59e0b", "#c8d0d8", "#1a1a20"],
      image: "/kasia-rooftop-shorts.jpg",
    },
  ] as Look[],
  relationships: [
    { name: "Nastia Novak", note: "Older sister — warmer, plus-size; shared eyes, hair family, jewelry." },
    { name: "Rose", note: "Late-shift overlap; mutual quiet respect." },
    { name: "Luna", note: "Reports up; trusted on the rail." },
    { name: "Isla", note: "Shift handoff — Isla’s day to Kasia’s night." },
    { name: "Byron", note: "Door and rail coordination on heavy nights." },
  ],
  productionNotes: [
    "Photoreal only — reject anime, cartoon, doll, plastic skin",
    "Ash-blonde cool undertones + grey-blue eyes + fair cool skin are locked",
    "Prefer Slavic lighting: cool window key, overcast outdoor, neon as rim only",
    "Restrained almost-smile default — full smile is rare",
    "Sister pair with Nastia — keep shared jewelry and eye/hair family",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
  ],
} as const;
