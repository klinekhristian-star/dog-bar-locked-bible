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

export const zuri = {
  name: "Zuri",
  fullTitle: "Zuri",
  role: "Petite Black African goddess · Dog Bar regular",
  age: 22,
  tagline:
    "Huge natural afro, tiny waist, radiant smile — delicate power, photoreal only.",
  summary:
    "Breathtaking 22-year-old petite Black African beauty. Extremely voluminous huge natural afro with rich texture and massive height/volume. Warm deep chocolate skin with radiant glow. Delicate striking symmetrical face, captivating eyes, full elegant lips, radiant smile. Extremely slim petite figure — dramatic tiny waist, small perky breasts, long toned legs. Soft goddess energy with playful beach-and-field range. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Extremely voluminous huge natural afro — rich defined curls, impressive height and width, soft halo silhouette in every shot",
    },
    {
      label: "Face",
      value:
        "Delicate striking symmetrical features, expressive captivating dark eyes, full elegant lips, radiant genuine smile (or soft goddess stare)",
    },
    {
      label: "Skin",
      value:
        "Warm deep chocolate skin with flawless realistic texture, visible pores, radiant sheen and subsurface scatter — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Extremely slim petite figure — dramatic tiny waist, small perky breasts, slim hips, long toned legs; delicate hourglass under a massive afro",
    },
    {
      label: "Energy",
      value:
        "Soft goddess confidence — playful tongue-out beach energy or serene golden-hour smile; never stiff or doll-like",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep huge afro + tiny waist + deep chocolate skin",
    },
  ] as Trait[],
  personality: [
    "Warm, radiant, quietly magnetic",
    "Playful with the crew — beach and party energy",
    "Soft-spoken confidence; doesn’t need to shout",
    "Photogenic without trying — camera loves the afro silhouette",
    "Loyal friend energy with Rose, Kai, and Luna",
  ],
  voice: [
    "Soft, warm, lightly teasing",
    "Smiles through half her lines",
    "Calm presence next to louder bar personalities",
  ],
  looks: [
    {
      id: "field-gold",
      name: "Field gold",
      setting: "Tall grass field · golden hour sun",
      notes:
        "White silk slip mini dress, barefoot in grass, huge afro backlit, radiant smile. Canonical hero still.",
      palette: ["#e8d5a3", "#ffffff", "#2a1810", "#c45c2a"],
      image: "/zuri-portrait.jpg",
    },
    {
      id: "field-walk",
      name: "Field walk",
      setting: "Golden meadow · low sun",
      notes:
        "Same white slip, walking toward camera through tall grass, afro rim-lit, soft smile.",
      palette: ["#d4b88a", "#f5f0e8", "#1a120c", "#e07a3d"],
      image: "/zuri-field.jpg",
    },
    {
      id: "pop-wow",
      name: "Pop WOW",
      setting: "Candy comic mural · lollipops",
      notes:
        "Red/white striped off-shoulder crop, micro denim shorts, looking back over shoulder. High-fashion pop energy.",
      palette: ["#ef4444", "#fbbf24", "#3b82f6", "#0a0a0c"],
      image: "/zuri-pop.jpg",
    },
    {
      id: "beach-volley",
      name: "Beach volley",
      setting: "Sandy volleyball court · ocean",
      notes:
        "Tiny sky-blue micro bikini, tongue out playful, legs apart, huge afro, net and players soft bokeh.",
      palette: ["#7dd3fc", "#f5e6c8", "#0c4a6e", "#2a1810"],
      image: "/zuri-beach.jpg",
    },
    {
      id: "savannah",
      name: "Savannah white",
      setting: "Golden savanna · sunset hills",
      notes:
        "Sheer white sports bra + white briefs, looking back over shoulder, afro against warm sky.",
      palette: ["#e8c48a", "#ffffff", "#2a1810", "#7c4a1a"],
      image: "/zuri-savannah-back.jpg",
    },
    {
      id: "savannah-front",
      name: "Savannah front",
      setting: "Dry grass plain · soft dusk",
      notes:
        "White set front 3/4, hand on hip, radiant smile, huge afro silhouette.",
      palette: ["#d4b070", "#ffffff", "#1a120c", "#c45c2a"],
      image: "/zuri-savannah.jpg",
    },
    {
      id: "robe",
      name: "Silk robe",
      setting: "Bright white bedroom · window light",
      notes:
        "Champagne silk robe slipped off shoulders, seated on bed edge, long legs, soft serious eyes.",
      palette: ["#e8d5c4", "#ffffff", "#2a1810", "#c4a070"],
      image: "/zuri-robe.jpg",
    },
    {
      id: "overalls",
      name: "Overalls garden",
      setting: "White picket fence · green trees",
      notes:
        "Unzipped denim short overalls (topless variant) — use identity lock + notes only; no public still.",
      palette: ["#3b82f6", "#86efac", "#2a1810", "#f5f0e8"],
    },
    {
      id: "boots",
      name: "Platform boots",
      setting: "Minimal couch studio",
      notes:
        "Nude + black platform thigh boots, legs up, playful smile — prompt only.",
      palette: ["#0a0a0c", "#e5e5e5", "#2a1810", "#1a1a20"],
    },
  ] as Look[],
  relationships: [
    { name: "Rose", note: "Petite contrast to Rose’s goth curves — mutual hype." },
    { name: "Kai", note: "Loves Kai’s event drops; opposite silhouette, same camera love." },
    { name: "Luna", note: "Sister energy — different ages, shared pride in the afro." },
    { name: "Summer Wins", note: "Glam bombshell vs soft goddess — fun foil pair." },
    { name: "Thick Betty", note: "Petite vs thick — both own their shapes hard." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Huge voluminous natural afro is non-negotiable every shot",
    "Keep her petite — tiny waist, small perky breasts, long legs",
    "Warm deep chocolate skin with realistic pores and glow",
    "Prefer ARRI Alexa / 50–85mm / golden hour or soft window light",
    "Public app stills stay clothed or lightly styled; explicit looks are text-only",
  ],
} as const;
