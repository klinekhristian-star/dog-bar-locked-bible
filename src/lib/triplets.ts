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

export const triplets = {
  name: "The Triplets",
  fullTitle: "The Dog Bar Triplets",
  role: "Identical sister act · patio regulars · walking chaos",
  age: 21,
  tagline:
    "Three identical platinum-blonde sisters with pink highlights, paw-print tattoos, and matching energy — always together.",
  summary:
    "Three identical 21-year-old sisters. Long wavy platinum-blonde hair with subtle-to-strong pink highlights, flawless fair skin, striking blue eyes, full lips, matching small dog-paw tattoos on their wrists. Athletic yet curvaceous figures with toned waists and full natural breasts. High-energy, playful, flirty as a unit. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long wavy platinum-blonde hair with subtle-to-strong pink highlights (especially ends and face-framing strands). Always glossy and lived-in. Slight intensity variation between sisters is fine; pink must stay present.",
    },
    {
      label: "Face",
      value:
        "Three nearly identical faces — flawless fair skin, striking blue eyes with long lashes, full lips, soft seductive or playful expressions. Same bone structure across all three.",
    },
    {
      label: "Tattoos",
      value:
        "Matching small dog-paw print tattoos on wrists (and sometimes upper arms). Mandatory on at least the wrists.",
    },
    {
      label: "Build",
      value:
        "Athletic yet curvaceous figures with toned waists, full natural breasts, confident posture. All three share the same body type — never mismatched.",
    },
    {
      label: "Energy",
      value:
        "High-energy, playful, slightly competitive with each other, completely unbothered by attention. Move as a pack. Flirty as a unit.",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. Always generate all three together unless specifically asked for one. NO cartoon, NO anime, NO doll faces, NO plastic skin, NO mismatched faces or body types.",
    },
  ] as Trait[],
  personality: [
    "High-energy party starters",
    "Playful and slightly competitive with each other",
    "Finish each other’s sentences",
    "Flirty as a unit — commit to no one",
    "Loyal to the Dog Bar crew",
    "Treat the bar like their personal stage",
  ],
  voice: [
    "Bright, overlapping, teasing",
    "Talk over each other in a fun way",
    "Lots of shared looks and private jokes",
    "Speak as a pack more than as individuals",
  ],
  looks: [
    {
      id: "patio",
      name: "Dog Bar patio",
      setting: "Outdoor patio · golden hour",
      notes:
        "Matching black Dog Bar crop tops + denim shorts, arms around each other, soft smiles, string lights and picnic tables behind. Canonical group hero still.",
      palette: ["#1a1a20", "#f59e0b", "#e8d5b5", "#c4a070"],
      image: "/triplets-portrait.webp",
    },
    {
      id: "close",
      name: "Close group portrait",
      setting: "Outdoor golden light · head & shoulders",
      notes:
        "Tight three-shot, arms around shoulders, pink ends in hair, paw tattoos visible, warm smiles. Face lock still.",
      palette: ["#f59e0b", "#e8d5b5", "#1a1a20", "#f9a8d4"],
      image: "/triplets-close.webp",
    },
    {
      id: "beach",
      name: "Cream bikinis · beach",
      setting: "Ocean edge · golden hour",
      notes:
        "Matching tiny cream string bikinis, wet glowing skin, standing close, ocean behind. Crew beach set.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#1a1a20"],
      image: "/triplets-beach.webp",
    },
    {
      id: "neon",
      name: "Neon night out",
      setting: "City street · neon night",
      notes:
        "Sparkly party dresses — red sequin, black latex mini, gold fringe. Matching pink-blonde waves under pink neon.",
      palette: ["#ff2d55", "#1a1a20", "#d4a017", "#c084fc"],
      image: "/triplets-neon.webp",
    },
    {
      id: "hike",
      name: "Forest hike",
      setting: "Sunny forest trail",
      notes:
        "Hiking gear (tanks, cargo shorts, backpacks), slightly sweaty, pink-blonde hair, focused looks on the trail.",
      palette: ["#2d5a27", "#c4a070", "#e8d5b5", "#1a1a20"],
      image: "/triplets-hike.webp",
    },
  ] as Look[],
  relationships: [
    { name: "Summer Wins", note: "Close — share party and beach energy." },
    { name: "Rose", note: "Respect and mutual chaos; different aesthetics, same bar." },
    { name: "Thick Betty", note: "Treat Betty like a fun older sister." },
    { name: "Luna", note: "Friendly patio overlap." },
    { name: "Kai", note: "Events energy — they show up when Kai books the night." },
    { name: "Mai Lei", note: "They love her quiet smile at their chaos." },
    { name: "Rick / Byron", note: "Flirt freely; no commitment." },
  ],
  productionNotes: [
    "Always generate all three together unless specifically asked for one",
    "Keep faces extremely similar — same bone structure, eyes, lips",
    "Pink highlights can vary slightly in intensity but must stay present",
    "Paw-print tattoos mandatory on at least the wrists",
    "Prefer group compositions with one sister slightly centered",
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
