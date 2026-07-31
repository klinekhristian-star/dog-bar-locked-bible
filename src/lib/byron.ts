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

export const byron = {
  name: "Byron",
  fullTitle: 'Byron "Bouncer"',
  role: "Head of security · Dog Bar",
  age: 32,
  tagline:
    "Mountain of muscle, silver dog tag, calm smile that can turn steel in a blink.",
  summary:
    "Dog Bar’s head of security — everyone just calls him Bouncer. Massively muscular Black bodybuilder physique, short black waves, neat goatee, signature silver dog-tag chain. Rich dark skin with oiled muscle definition. Warm with the crew, immovable at the door. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Short black hair — neat waves / tight crop with clean hairline, sometimes subtle part design",
    },
    {
      label: "Face",
      value:
        "Strong masculine jaw, neat short goatee and mustache, warm brown eyes — range from big friendly smile to hard door stare",
    },
    {
      label: "Signature",
      value:
        "Silver dog-tag necklace on a ball chain — locked accessory every shot (blank or stamped tag)",
    },
    {
      label: "Skin",
      value:
        "Deep rich dark brown skin with realistic texture, pores, and glossy/oiled highlights on muscle — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Extreme bodybuilder physique — massive shoulders, peaked delts, thick arms, carved abs, dense chest, powerful legs; towering presence",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO plastic skin. Keep dog tag + short black waves + massive natural muscle",
    },
  ] as Trait[],
  personality: [
    "Calm authority — the door moves when he says so",
    "Warm and protective with staff and regulars",
    "Dry humor under the bulk",
    "Doesn’t need to raise his voice",
    "Loyal to Luna’s house rules and the whole Dog Bar family",
  ],
  voice: [
    "Low, steady, unhurried",
    "Few words — they land",
    "Soft with the girls, hard with trouble",
  ],
  looks: [
    {
      id: "gym-cross",
      name: "Gym cross",
      setting: "Industrial gym · overhead lights",
      notes:
        "Shirtless, grey Nike compression shorts, arms crossed, dog tag, confident half-smile. Canonical hero still.",
      palette: ["#6b7280", "#2a1810", "#e5e5e5", "#c4a070"],
      image: "/byron-portrait.jpg",
    },
    {
      id: "gym-flex",
      name: "Gym flex",
      setting: "Gym · warm tungsten",
      notes:
        "Black shorts, double bicep flex pose, dog tag, friendly smile, veins and sheen.",
      palette: ["#0a0a0c", "#2a1810", "#c4a070", "#1a1a20"],
      image: "/byron-gym.jpg",
    },
    {
      id: "smile-close",
      name: "Smile close",
      setting: "Dark studio · soft key",
      notes:
        "Chest-up portrait, big white smile, glossy skin, dog tag centered. Warm lock still.",
      palette: ["#1a120c", "#2a1810", "#c0c0c0", "#0a0a0c"],
      image: "/byron-smile.jpg",
    },
    {
      id: "intense",
      name: "Intense",
      setting: "Low-key studio",
      notes:
        "Hard door stare, no smile, jaw set, dog tag, massive delts filling frame.",
      palette: ["#0a0a0c", "#1a120c", "#8b7355", "#c0c0c0"],
      image: "/byron-intense.jpg",
    },
    {
      id: "studio",
      name: "Studio power",
      setting: "Grey seamless",
      notes:
        "Hands on hips energy, big smile, oiled chest, dog tag. Hero press still.",
      palette: ["#374151", "#2a1810", "#c0c0c0", "#e5e5e5"],
      image: "/byron-studio.jpg",
    },
    {
      id: "close-dark",
      name: "Close dark",
      setting: "Moody brown bokeh",
      notes:
        "Tight portrait, serious eyes, thick neck and shoulders, dog tag. Identity face lock.",
      palette: ["#1a120c", "#0a0a0c", "#c0c0c0", "#4a3728"],
      image: "/byron-close.jpg",
    },
    {
      id: "power",
      name: "Power stare",
      setting: "Warm studio falloff",
      notes:
        "Three-quarter torso, intense brow, dog tag, extreme muscle density.",
      palette: ["#2a1810", "#0a0a0c", "#c0c0c0", "#6b5344"],
      image: "/byron-power.jpg",
    },
    {
      id: "door",
      name: "Door duty",
      setting: "Dog Bar entrance · neon night",
      notes:
        "Black security tee or shirtless under open jacket, arms crossed, clipboard or earpiece optional. Prompt only.",
      palette: ["#0a0a0c", "#ff2d95", "#c0c0c0", "#1a1a20"],
    },
    {
      id: "bridge",
      name: "Night bridge",
      setting: "City bridge · night skyline",
      notes:
        "Full physique power stance under bridge structure, dog tag, city bokeh — explicit variants stay text-only.",
      palette: ["#0a0a0c", "#1e3a5f", "#c0c0c0", "#c4a070"],
    },
  ] as Look[],
  relationships: [
    { name: "Luna", note: "Reports to the bar manager — mutual respect, zero drama." },
    { name: "Rose", note: "Protective of the goth rail — she’s family." },
    { name: "Kai", note: "Events nights — Byron owns the door, Kai owns the chaos." },
    { name: "Summer Wins", note: "VIP glam nights; he keeps the line moving." },
    { name: "Thick Betty", note: "Soft spot for Betty’s energy — smiles more on her shifts." },
    { name: "Zuri", note: "Quiet mutual respect; he makes sure she gets home safe." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Silver dog-tag necklace is mandatory almost every shot",
    "Extreme natural bodybuilder muscle — dense, not cartoon inflated",
    "Short black hair + neat goatee locked",
    "Deep dark brown skin with realistic oil/sweat sheen on muscle",
    "Prefer ARRI Alexa / 50–85mm / gym tungsten or low-key portrait light",
    "Public app stills stay gym/portrait clothed or torso-up; explicit looks are text-only",
  ],
} as const;
