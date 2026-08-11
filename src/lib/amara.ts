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

export const amara = {
  name: "Amara",
  fullTitle: "Amara",
  role: "Weekend presence · neon nights & golden hour",
  age: 24,
  tagline:
    "Long jet-black waves, warm deep bronze skin, athletic-curvy hourglass — gold, neon, and soft hotel light.",
  summary:
    "24-year-old South Asian beauty connected to Dog Bar’s wider orbit. Long flowing jet-black hair, warm deep bronze skin with realistic sheen, striking dark eyes, full lips, bright confident smile. Athletic-curvy hourglass — full natural breasts, toned waist, strong legs and glutes. Moves between beach skate energy, rooftop evenings, and neon streets. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long flowing jet-black hair, thick waves, often wind-blown — never stiff or overstyled",
    },
    {
      label: "Face",
      value:
        "Warm deep bronze South Asian features, striking dark eyes, full lips, confident smile or soft seductive look. Symmetrical, never thin or gaunt",
    },
    {
      label: "Skin",
      value:
        "Warm deep bronze with realistic texture and natural sheen — sun-kissed, never plastic or over-smoothed",
    },
    {
      label: "Build",
      value:
        "Athletic-curvy hourglass — full natural breasts, toned waist, strong legs and glutes, confident posture. Never skinny, never exaggerated fantasy",
    },
    {
      label: "Energy",
      value:
        "Confident, playful, magnetic — beach daylight and neon nights equally",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep long black hair + warm bronze skin + athletic-curvy lock",
    },
  ] as Trait[],
  personality: [
    "Confident without trying too hard",
    "Playful on the boardwalk, composed at night",
    "Magnetic in a crowd — doesn’t need the mic",
    "Comfortable in gold, black, white, or red",
    "Orbit of Dog Bar more than full-time staff",
  ],
  voice: [
    "Warm, clear, lightly playful",
    "Short confident lines",
    "Laughs easily in daylight scenes",
  ],
  looks: [
    {
      id: "portrait",
      name: "Gold bikini · boardwalk",
      setting: "Palm beach promenade · midday",
      notes:
        "Canonical lock — long black hair, warm bronze skin, gold sequin bikini, roller skates, hands on hips, confident smile.",
      palette: ["#d4af37", "#1a1a20", "#3b82f6", "#c4a070"],
      image: "/amara-portrait.webp",
    },
    {
      id: "skate",
      name: "Skate pose",
      setting: "Beach path · bright sun",
      notes: "Gold sequin bikini, gold roller skates, hair in the wind, big smile.",
      palette: ["#d4af37", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/amara-skate.webp",
    },
    {
      id: "skate-run",
      name: "Skate glide",
      setting: "Boardwalk · ocean side",
      notes: "Rolling toward camera, arms out, gold bikini, palms and sea behind.",
      palette: ["#d4af37", "#3b82f6", "#e8d5b5", "#1a1a20"],
      image: "/amara-skate-run.webp",
    },
    {
      id: "skate-kick",
      name: "Skate kick",
      setting: "Beach promenade · action",
      notes: "One leg kicked high, gold skate in air, joyful full-body energy.",
      palette: ["#d4af37", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/amara-skate-kick.webp",
    },
    {
      id: "skate-sunset",
      name: "Sunset skate",
      setting: "Palm path · golden hour",
      notes: "Looking back over shoulder, gold micro bikini, sunset ocean light.",
      palette: ["#d4af37", "#f59e0b", "#c4a070", "#1a1a20"],
      image: "/amara-skate-sunset.webp",
    },
    {
      id: "lingerie",
      name: "Red lingerie · hotel",
      setting: "Luxury hotel room · warm lamps",
      notes: "Red satin bra and panties, kneeling on white bed, soft seductive look.",
      palette: ["#b91c1c", "#f5f0eb", "#c4a070", "#1a1a20"],
      image: "/amara-lingerie.webp",
    },
    {
      id: "waterfall",
      name: "Waterfall",
      setting: "Jungle falls · wet shirt",
      notes: "Soaked white button-down, denim shorts, wet black hair, bright smile.",
      palette: ["#2d5a3d", "#e8d5b5", "#3b82f6", "#1a1a20"],
      image: "/amara-waterfall.webp",
    },
    {
      id: "rooftop",
      name: "Rooftop sunset",
      setting: "City rooftop bar · dusk",
      notes: "White deep-V sundress, wind in hair, skyline and ocean behind.",
      palette: ["#f5f0eb", "#f59e0b", "#1a1a20", "#c4a070"],
      image: "/amara-rooftop.webp",
    },
    {
      id: "neon",
      name: "Neon street",
      setting: "Night city · wet asphalt",
      notes: "Tight black mini dress, heels, long black hair, neon pink and blue.",
      palette: ["#1a1a20", "#ff2d6a", "#00e5c0", "#7c3aed"],
      image: "/amara-neon.webp",
    },
    {
      id: "neon-walk",
      name: "Neon walk",
      setting: "Empty wet street · neon signs",
      notes: "Walking toward camera, black mini dress, full-length neon reflections.",
      palette: ["#1a1a20", "#ff2d6a", "#3b82f6", "#7c3aed"],
      image: "/amara-neon-walk.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Neera", note: "Shared South Asian presence in the orbit — different energy; Amara more glam/neon, Neera more grounded bar." },
    { name: "Vixen", note: "Night-out energy overlap." },
    { name: "Summer Wins", note: "Daylight show-off register; different palette." },
    { name: "Luna", note: "Respects the floor when she passes through." },
    { name: "Rose", note: "Occasional late-night crossover; aesthetic contrast." },
  ],
  productionNotes: [
    "Photoreal only — reject anime, cartoon, doll, plastic skin",
    "Long jet-black hair + warm deep bronze South Asian skin are locked",
    "Athletic-curvy hourglass — full natural breasts, toned waist, strong legs/glutes",
    "Strong range: gold beach skate, hotel lingerie, waterfall, rooftop, neon street",
    "Prefer ARRI Alexa / 35–50mm / natural filmic color",
    "Public app stills stay as provided set; explicit looks text-only if added later",
  ],
} as const;
