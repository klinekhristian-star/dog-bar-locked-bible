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

export const sophia = {
  name: "Sophia",
  fullTitle: "Sophia Chen",
  role: "Dog Relations · guest experience & community",
  age: 23,
  tagline:
    "Short petite East Asian, long dark hair with lighter ends — slim, not buxom, warm patio energy.",
  summary:
    "23-year-old short petite East Asian woman who manages Dog Relations at Dog Bar — guest experience, regulars, community. Long dark brown hair with soft lighter ends, warm light-tan skin, expressive dark brown eyes, full glossy lips. Slim petite frame, small natural breasts, not buxom. Playful, camera-aware, a little bratty. Photoreal only.",
  identity: [
    {
      label: "Hair",
      value:
        "Long dark brown with soft lighter ends, straight-to-wavy, often loose and slightly messy — never stiff",
    },
    {
      label: "Face",
      value:
        "Soft East Asian features, symmetrical, expressive dark brown eyes, full glossy lips, soft cheeks, warm smile or playful look",
    },
    {
      label: "Skin",
      value:
        "Warm light-tan with realistic texture — golden-hour friendly, never plastic",
    },
    {
      label: "Build",
      value:
        "Short petite frame — small natural breasts, slim waist, slim hips, slender legs. NOT buxom, NOT heavy-chested, NOT exaggerated hourglass",
    },
    {
      label: "Energy",
      value:
        "Playful, expressive, camera-aware, a little bratty — Dog Relations: makes guests feel known",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep short petite + small natural breasts + long dark hair with lighter ends. NO large breasts, NO buxom body, NO tall proportions",
    },
  ] as Trait[],
  personality: [
    "Warm with regulars — remembers names and orders",
    "Playful and a little bratty off-shift",
    "Camera-aware without being performative",
    "Protective of the patio vibe",
    "Bridge between guests and floor",
  ],
  voice: [
    "Light, clear, lightly playful",
    "Quick jokes, soft laugh",
    "Professional on shift, looser after",
  ],
  looks: [
    {
      id: "portrait",
      name: "Patio portrait",
      setting: "Dog Bar patio · golden hour",
      notes:
        "Canonical lock — long dark hair lighter ends, black crop top, lean on rail, soft smile, string lights.",
      palette: ["#f59e0b", "#1a1a20", "#c4a070", "#e8d5b5"],
      image: "/sophia-portrait.webp",
    },
    {
      id: "rail",
      name: "Rail lean",
      setting: "Patio rail · sunset",
      notes: "Black crop and jeans, arms on wood rail, warm sun on face.",
      palette: ["#f59e0b", "#1a1a20", "#c4a070", "#6b7c5c"],
      image: "/sophia-rail.webp",
    },
    {
      id: "walk",
      name: "Patio walk",
      setting: "Picnic tables · daylight",
      notes: "Black mini dress, walking toward camera, string lights and tables bokeh.",
      palette: ["#1a1a20", "#6b7c5c", "#f59e0b", "#e8d5b5"],
      image: "/sophia-walk.webp",
    },
    {
      id: "lean",
      name: "Forward lean",
      setting: "Patio · playful",
      notes: "Black mini, leaning toward camera, hair in motion, soft smile.",
      palette: ["#1a1a20", "#6b7c5c", "#f59e0b", "#c4a070"],
      image: "/sophia-lean.webp",
    },
    {
      id: "close",
      name: "Close portrait",
      setting: "Soft window light",
      notes: "Face lock — dark eyes, glossy lips, long hair with lighter ends.",
      palette: ["#c4a070", "#e8d5b5", "#1a1a20", "#a8b0b8"],
      image: "/sophia-close.webp",
    },
    {
      id: "soft",
      name: "Soft smile",
      setting: "Warm indoor bokeh",
      notes: "Close three-quarter, glossy lips, soft expression.",
      palette: ["#c4a070", "#1a1a20", "#e8d5b5", "#6b5c4c"],
      image: "/sophia-soft.webp",
    },
    {
      id: "tank",
      name: "Black tank",
      setting: "Indoor wall · soft light",
      notes: "Black tank, shoulder lean, warm smile, petite lock clear.",
      palette: ["#1a1a20", "#c4a070", "#e8d5b5", "#4a5560"],
      image: "/sophia-tank.webp",
    },
    {
      id: "green",
      name: "Green lace",
      setting: "Hotel bed · window light",
      notes: "Green lace lingerie, tongue out, playful, city view.",
      palette: ["#0f3d2e", "#e8d5b5", "#3b82f6", "#1a1a20"],
      image: "/sophia-green.webp",
    },
    {
      id: "green-sheer",
      name: "Green sheer",
      setting: "Hotel bed · daytime",
      notes: "Sheer green lace bodysuit, playful tongue, arms in hair.",
      palette: ["#0f3d2e", "#e8d5b5", "#3b82f6", "#1a1a20"],
      image: "/sophia-green-sheer.webp",
    },
    {
      id: "prone",
      name: "Prone bed",
      setting: "White sheets · soft day",
      notes: "Prone on bed, green thong, looking at camera — petite not buxom.",
      palette: ["#e8d5b5", "#0f3d2e", "#c4a070", "#1a1a20"],
      image: "/sophia-prone.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Luna", note: "Reports guest/community notes up; Luna trusts her read on regulars." },
    { name: "Isla", note: "Patio overlap — Isla runs daytime floor energy, Sophia owns relations." },
    { name: "Kai", note: "Events and relations coordinate on big nights." },
    { name: "Rose", note: "Late-night crossover; different registers." },
    { name: "Mai Lei", note: "East Asian presence contrast — Sophia short petite, Mai Lei different lock." },
  ],
  productionNotes: [
    "Photoreal only — reject anime, cartoon, doll, plastic skin",
    "SHORT PETITE + small natural breasts are locked — never buxom, never tall model",
    "Long dark brown hair with lighter ends is locked",
    "Dog Relations role: patio, guests, community — not primary bartender",
    "Strong range: patio golden hour, indoor soft, green lingerie hotel",
    "Prefer ARRI Alexa / 35–85mm / natural filmic color",
  ],
} as const;
