export type Look = {
  id: string;
  name: string;
  setting: string;
  notes: string;
  palette: string[];
};

export type Trait = {
  label: string;
  value: string;
};

export const thinBetty = {
  name: "Thin Betty",
  fullTitle: 'Betty "Thin Betty" Callahan',
  role: "College CS student · Dog Bar alum · thinner version of Thick Betty",
  age: 24,
  tagline: "Same freckles, same pink glasses, same ginger waves — 100 lbs lighter after a year of Computer Science.",
  summary:
    "Betty Callahan left Dog Bar for college to study Computer Science and came back 100 pounds lighter. Same face, same dense freckles, same signature pink cat-eye glasses, same long vibrant orange-red wavy hair. The crew now calls her Thin Betty. Slim athletic hourglass with a toned waist, smaller but still full natural breasts, lean legs and hips, healthy post-weight-loss glow. Still bubbly, still owns the nickname. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long vibrant orange-red (ginger) wavy hair with soft bangs — worn loose cascading over shoulders, or high playful ponytail. Identical to Thick Betty.",
    },
    {
      label: "Face",
      value:
        "Girl-next-door beauty, big expressive blue eyes, dense freckles across nose and cheeks, warm genuine smile. Always wears fun pink cat-eye or round glasses. Same face as Thick Betty.",
    },
    {
      label: "Skin",
      value:
        "Fair freckled skin with realistic pores and freckles on face, shoulders, and chest — never plastic or airbrushed",
    },
    {
      label: "Glasses",
      value: "Signature bright pink cat-eye frames — locked accessory every shot unless sunglasses variant",
    },
    {
      label: "Build",
      value:
        "Slim athletic hourglass after losing 100 pounds at college — toned narrow waist, smaller but still full natural breasts, lean hips and legs, healthy post-weight-loss glow. NOT extreme thinness. Still curvy, just much leaner than Thick Betty.",
    },
    {
      label: "Backstory",
      value:
        "Same girl as Thick Betty. Left Dog Bar for one year of Computer Science at college, lost ~100 lbs through the lifestyle change, returned home. Crew renamed her Thin Betty. Still works shifts when she's back.",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep pink glasses + freckles + ginger hair. Never make her emaciated or model-thin — she is lean but still soft and feminine.",
    },
  ] as Trait[],
  personality: [
    "Still extremely outgoing, cheerful, energetic, flirty, playful",
    "Owns the Thin Betty nickname with the same pride she owned Thick Betty",
    "Warm, bubbly, slightly teasing high-energy speech",
    "Genuinely happy to see people — classic great bartender energy",
    "Confident about her new body without being vain",
    "CS major energy mixed with bartender charm",
  ],
  voice: [
    "High-energy, smiling through the words",
    "Teasing nicknames and easy laughs",
    "Never mean — always inviting",
    "Occasional coding joke or campus story",
  ],
  looks: [
    {
      id: "floral",
      name: "Floral summer dress",
      setting: "Sunny street or garden",
      notes: "Light floral mini or midi dress, pink glasses, freckles catching the light, soft smile. Peak Thin Betty outdoor look.",
      palette: ["#f5f0eb", "#ff4d8d", "#c45c2a", "#e8d5b5"],
    },
    {
      id: "dorm",
      name: "Dorm teddy",
      setting: "College dorm bedroom",
      notes: "Black lace teddy or lingerie, pink glasses, soft lamp light, twin bed and posters. Intimate but still bubbly.",
      palette: ["#f5f0eb", "#1a1a20", "#ff4d8d", "#c45c2a"],
    },
    {
      id: "campus",
      name: "Campus walk",
      setting: "College campus daylight",
      notes: "Crop top + jeans or casual summer dress, backpack optional, pink glasses, mid-laugh between classes.",
      palette: ["#e8d5b5", "#ff4d8d", "#2a2830", "#f0eef2"],
    },
    {
      id: "bar-shift",
      name: "Dog Bar shift",
      setting: "Patio or rail at Dog Bar",
      notes: "Black Dog Bar staff shirt (logo + pink paw), pink glasses, leaner silhouette but same energy. Home again.",
      palette: ["#0a0a0c", "#ff4d8d", "#e85d04", "#f0eef2"],
    },
    {
      id: "night-out",
      name: "Night out",
      setting: "Campus bar / city street night",
      notes: "Tight black mini dress, pink glasses, big smile under string lights. Still the life of the group.",
      palette: ["#1a1a20", "#ff4d8d", "#e8d5b5", "#0a0a0c"],
    },
  ] as Look[],
  relationships: [
    { name: "Thick Betty", note: "Same person — pre-college body. Thin Betty is the post-weight-loss version." },
    { name: "Rose", note: "Goth rail partner when Betty is back on shift." },
    { name: "Luna", note: "Manager who noticed the change but still loves the energy." },
    { name: "Summer Wins", note: "Glam foil — Betty keeps it bubbly and real." },
    { name: "Kai", note: "Events chaos buddy." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Pink cat-eye glasses are mandatory in almost every shot",
    "Dense freckles on face (and body when visible) required",
    "Long ginger / orange-red wavy hair + soft bangs",
    "Big genuine smile is part of the lock — bubbly energy",
    "Body is slim athletic hourglass after 100 lb loss — NOT extreme thinness",
    "Still soft and feminine; never emaciated or fashion-model skeletal",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
  ],
} as const;
