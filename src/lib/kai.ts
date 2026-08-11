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

export const kai = {
  name: "Kai",
  fullTitle: "Kai · Events Manager",
  role: "Cute feminine Korean woman · rebellious e-girl · Dog Bar events",
  age: 21,
  tagline:
    "Cute feminine Korean woman — pink streaks, snake bites, tongue out. Never boyish.",
  summary:
    "Dog Bar events manager and resident chaotic e-girl. A real 21-year-old cute feminine Korean woman (never male, never androgynous, never boyish). Medium-length shaggy messy black hair with strong vibrant pink streaks on bangs and sides, heavy black liner and long lashes, soft feminine jawline, full soft lips, snake-bite lip piercings, playful tongue-out energy. Clear female body: perky round natural breasts, slim toned waist, feminine hips, thick juicy ass. Neon nights, street shoots, and after-hours attitude. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Medium-length shaggy messy voluminous black hair with strong vibrant pink streaks heavily concentrated on front bangs and sides; wind-blown strands over face; choppy layered bangs",
    },
    {
      label: "Face",
      value:
        "Cute feminine Korean woman — soft feminine jawline, soft cheeks, big expressive feminine East Asian eyes with heavy black eyeliner and long lashes, full soft lips, often playful tongue-out expression. NEVER male, NEVER androgynous, NEVER boyish",
    },
    {
      label: "Piercings",
      value:
        "Snake-bite lip piercings (two silver studs under lower lip), optional nose stud, tongue piercing often visible when tongue out",
    },
    {
      label: "Skin",
      value:
        "Smooth glowing realistic East Asian skin with natural texture and pores — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Clearly female hourglass — perky round natural breasts, slim toned waist, feminine hips, thick juicy ass, confident rebellious posture. Never flat-chested, never masculine",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. ALWAYS a feminine Korean woman. NO cartoon, NO anime, NO doll face, NO plastic skin, NO male face, NO boyish features, NO androgynous, NO flat chest, NO masculine jaw. Keep pink streaks + snake bites + e-girl makeup",
    },
  ] as Trait[],
  personality: [
    "Rebellious, playful, high-energy e-girl chaos",
    "Events queen — lives for drop nights and neon chaos",
    "Flirty tongue-out energy, never shy on camera",
    "Loyal to the Dog Bar crew; teases everyone",
    "Street fashion maximalist — mesh, chains, pink accents",
  ],
  voice: [
    "Quick, playful, slightly bratty",
    "Lots of teasing and emoji-energy in real life",
    "Confident, never apologetic about being loud",
  ],
  looks: [
    {
      id: "street-peace",
      name: "Street peace",
      setting: "Cherry-blossom side street · OPEN 24H neon",
      notes:
        "Pink mesh crop over black bra, black cargo with chain, “Kai” belt tab, tongue out + peace sign. Canonical outdoor hero.",
      palette: ["#ff2d95", "#0a0a0c", "#f5e6f0", "#ff4d8d"],
      image: "/kai-portrait.webp",
    },
    {
      id: "street-phone",
      name: "Street phone",
      setting: "Night sidewalk · 24H Ramen neon",
      notes:
        "Black/pink fishnet crop, black lace bra, pink hoop, flip phone, tongue out smile, checkered belt straps.",
      palette: ["#ff2d95", "#0a0a0c", "#c084fc", "#1a1a20"],
      image: "/kai-street.webp",
    },
    {
      id: "brat",
      name: "BRAT run",
      setting: "Graffiti alley · golden hour petals",
      notes:
        "Black mesh long-sleeve + BRAT crop, micro pleated skirt, torn fishnets, combat boots, padlock choker.",
      palette: ["#0a0a0c", "#ff2d95", "#e8d5b5", "#6b7280"],
      image: "/kai-brat.webp",
    },
    {
      id: "car-mirror",
      name: "Car mirror",
      setting: "Night street · Dog Bar neon in mirror",
      notes:
        "White Dog Bar crop tank, red plaid mini, applying lipstick in rear-view. Events night energy.",
      palette: ["#ffffff", "#b91c1c", "#ff2d95", "#0a0a0c"],
      image: "/kai-car.webp",
    },
    {
      id: "bar-rail",
      name: "Bar rail",
      setting: "Dog Bar · pink neon",
      notes:
        "Black micro crop, shorts, leaning on marble bar under DOG BAR neon, messy pink-black hair flying.",
      palette: ["#ff2d95", "#0a0a0c", "#c084fc", "#1a1a20"],
      image: "/kai-bar.webp",
    },
    {
      id: "wet-lock",
      name: "Wet face lock",
      setting: "Rain / club rain machine · red bokeh",
      notes:
        "Close-up wet hair, pink streaks, snake bites, tongue out, water droplets on skin. Primary face lock still.",
      palette: ["#7f1d1d", "#ff2d95", "#0a0a0c", "#e5e5e5"],
      image: "/kai-wet.webp",
    },
    {
      id: "face-close",
      name: "Face close",
      setting: "Studio soft light",
      notes:
        "Extreme close-up identity lock — pink bang streak, heavy liner, tongue piercing, glossy lips.",
      palette: ["#ff2d95", "#0a0a0c", "#f5d0c5", "#1a1a20"],
      image: "/kai-face.webp",
    },
    {
      id: "bedroom",
      name: "Bedroom shorts",
      setting: "String lights bedroom · posters",
      notes:
        "Black tank, frayed denim micro shorts, kneeling on rug, tongue out over shoulder. Soft warm lamp light.",
      palette: ["#f5e6d3", "#0a0a0c", "#ff2d95", "#c4a070"],
      image: "/kai-bedroom.webp",
    },
    {
      id: "dancefloor",
      name: "Dancefloor chaos",
      setting: "Dog Bar dance floor · LED tiles",
      notes:
        "Underboob/cutout top, wind-blown hair, tongue out, neon crowd bokeh. Prompt from lock + notes (no public still).",
      palette: ["#ff2d95", "#3b82f6", "#a855f7", "#0a0a0c"],
    },
  ] as Look[],
  relationships: [
    { name: "Rose", note: "Goth rail sister — opposite aesthetic, same chaos." },
    { name: "Luna", note: "Reports events plans to the bar manager." },
    { name: "Thick Betty", note: "Hype duo on busy weekends." },
    { name: "Summer Wins", note: "Glam vs e-girl — mutual camera hogs." },
    { name: "Zuri", note: "Petite contrast; loves Kai’s event drops." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Pink streaks on black shaggy hair + snake-bite piercings are locked",
    "Heavy black winged liner / e-girl makeup required",
    "Tongue-out playful expression is signature energy (not required every shot)",
    "Prefer ARRI Alexa / 50–85mm / neon cinematic or street golden-hour language",
    "Public app stills stay clothed; explicit looks are text-only scene cards",
  ],
} as const;
