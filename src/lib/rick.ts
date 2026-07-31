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

export const rick = {
  name: "Rick",
  fullTitle: 'Rick "Daddy"',
  role: "VIP regular · Dog Bar",
  age: 38,
  tagline:
    "Full beard, thick chest hair, blue jeans, balcony neon — classic centerfold daddy energy.",
  summary:
    "Dog Bar’s favorite VIP regular — everyone calls him Daddy. Extremely muscular hairy white man with olive-tan skin, full thick black beard and mustache, dark curly hair (often longer at the nape), dense chest and body hair, massive bodybuilder physique. Signature look: shirtless in tight blue jeans under night city lights. Warm confident smile or smoldering stare. Photoreal 80s–now magazine energy — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Thick dark nearly-black curly/wavy hair — full volume on top, sometimes longer at the nape or soft mullet; dense natural chest, arm, and torso hair",
    },
    {
      label: "Face",
      value:
        "Full thick black beard and mustache covering jaw, strong masculine brows, warm brown eyes, confident half-smile or smolder",
    },
    {
      label: "Skin",
      value:
        "Olive-tan / warm Mediterranean-toned white skin with realistic texture, pores, and natural body hair — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Extreme classic bodybuilder physique — massive peaked delts, thick hairy chest, carved abs under the fur, powerful arms and legs; dense not cartoon-inflated",
    },
    {
      label: "Signature",
      value:
        "Tight medium-wash blue jeans (often no shirt); optional brown leather belt; night balcony / city bokeh vibe",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO plastic skin. Keep full beard + dense chest hair + massive physique",
    },
  ] as Trait[],
  personality: [
    "Confident, warm, old-school charm",
    "Protective daddy energy without the ego trip",
    "Loves the girls, tips well, never causes door drama",
    "Quiet authority next to Byron’s bulk",
    "Centerfold confidence — owns every frame",
  ],
  voice: [
    "Low, easy, slightly gravelly",
    "Calls people kid or sweetheart without being slimy",
    "Few words, big presence",
  ],
  looks: [
    {
      id: "october",
      name: "Mr. October",
      setting: "Night balcony · Playgirl-style layout",
      notes:
        "Shirtless, blue jeans, brown belt, hand on railing and hip, city lights. Canonical hero still.",
      palette: ["#1e3a5f", "#3b82f6", "#2a1810", "#c4a070"],
      image: "/rick-portrait.jpg",
    },
    {
      id: "cross",
      name: "Arms crossed",
      setting: "Rooftop railing · neon bokeh",
      notes:
        "Arms crossed over hairy chest, tight blue jeans, soft smile, night city purple/orange lights.",
      palette: ["#312e81", "#f59e0b", "#2a1810", "#3b82f6"],
      image: "/rick-cross.jpg",
    },
    {
      id: "belt",
      name: "Belt tug",
      setting: "Balcony night · film grain",
      notes:
        "Hand hooked in jeans waistband, other arm relaxed, thick chest hair, confident stance.",
      palette: ["#0a0a0c", "#3b82f6", "#c4a070", "#7c3aed"],
      image: "/rick-belt.jpg",
    },
    {
      id: "close",
      name: "Close night",
      setting: "Dark railing · city bokeh",
      notes:
        "Torso-up portrait, full beard, dense chest hair, serious eyes, blue jeans at frame edge.",
      palette: ["#0a0a0c", "#2a1810", "#3b82f6", "#e5e5e5"],
      image: "/rick-close.jpg",
    },
    {
      id: "front",
      name: "Front power",
      setting: "Metal railing · pure black night",
      notes:
        "Straight-on power stance, hands at sides, abs and V-line under hair, jeans low on hips.",
      palette: ["#0a0a0c", "#1a120c", "#3b82f6", "#c4a070"],
      image: "/rick-front.jpg",
    },
    {
      id: "lean",
      name: "Lean",
      setting: "Balcony rail · soft bokeh",
      notes:
        "Slight lean, hands near pockets, warm skin sheen on delts, full beard lock.",
      palette: ["#0a0a0c", "#2a1810", "#60a5fa", "#e8d5b5"],
      image: "/rick-lean.jpg",
    },
    {
      id: "stand",
      name: "Stand",
      setting: "Night rail · cool side light",
      notes:
        "Classic centerfold stand, dense torso hair, blue jeans, neutral smolder.",
      palette: ["#0a0a0c", "#1e3a5f", "#3b82f6", "#2a1810"],
      image: "/rick-stand.jpg",
    },
    {
      id: "night",
      name: "Night stare",
      setting: "Balcony · deep black sky",
      notes:
        "Serious brow, thick beard, chest hair catching side light — identity face lock.",
      palette: ["#0a0a0c", "#1a120c", "#3b82f6", "#c0c0c0"],
      image: "/rick-night.jpg",
    },
    {
      id: "bar",
      name: "Bar stool",
      setting: "Dog Bar VIP · low amber light",
      notes:
        "Open shirt or bare chest at the bar, jeans, whiskey rocks. Prompt only.",
      palette: ["#0a0a0c", "#c45c2a", "#3b82f6", "#1a1a20"],
    },
  ] as Look[],
  relationships: [
    { name: "Byron", note: "Mutual respect — muscle recognizes muscle at the door." },
    { name: "Luna", note: "VIP list staple; tips the house and never makes trouble." },
    { name: "Rose", note: "Soft spot for the goth rail — she rolls her eyes and smiles." },
    { name: "Summer Wins", note: "Glam meets classic daddy — camera magnets." },
    { name: "Thick Betty", note: "Betty calls him Daddy first — he owns it." },
    { name: "Kai", note: "Events nights he shows up dressed (or not)." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Full thick black beard + dense natural chest/body hair are locked",
    "Extreme classic bodybuilder muscle under the hair — not smooth waxed",
    "Signature: shirtless + tight blue jeans + night balcony / city bokeh",
    "Olive-tan warm skin with realistic pores and hair follicles",
    "Prefer ARRI Alexa / 50–85mm / neon night or tungsten magazine light",
    "Public app stills stay jeans-on balcony/gym; explicit looks are text-only",
  ],
} as const;
