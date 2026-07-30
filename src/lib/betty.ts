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

export const betty = {
  name: "Thick Betty",
  fullTitle: 'Betty "Thick Betty" Callahan',
  role: "Bubbly bartender · Dog Bar",
  age: 24,
  tagline: "Ginger freckles, pink cat-eyes, and the nickname she owns out loud.",
  summary:
    "Dog Bar bartender who came back after one year of college thicker, brighter, and more herself. Signature pink cat-eye glasses, long orange-red hair, dense freckles, and a high-energy smile. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long vibrant orange-red (ginger) wavy hair with soft bangs — worn loose cascading over shoulders, or high playful ponytail",
    },
    {
      label: "Face",
      value:
        "Girl-next-door beauty, big expressive blue eyes, dense freckles across nose and cheeks, warm genuine smile. Always wears fun pink cat-eye or round glasses",
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
        "Extremely curvy voluptuous hourglass — thick thighs, wide hips, full heavy natural breasts, soft confident post-college build",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep pink glasses + freckles + ginger hair",
    },
  ] as Trait[],
  personality: [
    "Extremely outgoing, cheerful, energetic, flirty, playful",
    "Owns the Thick Betty nickname with pride",
    "Warm, bubbly, slightly teasing high-energy speech",
    "Genuinely happy to see people — classic great bartender energy",
    "Unapologetically confident about her curves",
  ],
  voice: [
    "High-energy, smiling through the words",
    "Teasing nicknames and easy laughs",
    "Never mean — always inviting",
  ],
  looks: [
    {
      id: "service",
      name: "Service smile",
      setting: "Behind the Dog Bar rail",
      notes: "Cropped tank, tiny denim shorts, pink glasses, hair loose or high ponytail. Always mid-laugh.",
      palette: ["#0a0a0c", "#ff4d8d", "#e85d04", "#f0eef2"],
    },
    {
      id: "selfie",
      name: "Mirror selfie",
      setting: "Bedroom mirror, soft daylight",
      notes: "Pink cat-eyes, freckles, phone in hand, big smile. Casual home energy.",
      palette: ["#f5f0eb", "#ff4d8d", "#c45c2a", "#1a1a20"],
    },
    {
      id: "window",
      name: "Window light",
      setting: "Soft indoor daylight",
      notes: "Loose ginger waves, pink frames, freckles catching the light. Warm and open.",
      palette: ["#f7f2ec", "#ff4d8d", "#e07a3d", "#6b6670"],
    },
    {
      id: "sun-shades",
      name: "Pink sunnies",
      setting: "Bright indoor / patio light",
      notes: "Same pink frames with tinted lenses as sunglasses. Arms up, big grin.",
      palette: ["#fff8f0", "#ff4d8d", "#1a1a20", "#e85d04"],
    },
    {
      id: "bangs",
      name: "Bangs out",
      setting: "Outdoor golden hour",
      notes: "Soft bangs + long ginger waves, pink cat-eyes, full smile. Peak girl-next-door.",
      palette: ["#e8d5b5", "#ff4d8d", "#c45c2a", "#2a2830"],
    },
  ] as Look[],
  relationships: [
    { name: "Rose", note: "Goth rail partner. Different energy, same bar." },
    { name: "Luna", note: "Manager who loves Betty’s energy on busy nights." },
    { name: "Summer Wins", note: "Glam foil — Betty keeps it bubbly and real." },
    { name: "Kai", note: "Events chaos buddy." },
    { name: "Zuri", note: "Petite contrast; mutual hype." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Pink cat-eye glasses are mandatory in almost every shot",
    "Dense freckles on face (and body when visible) required",
    "Long ginger / orange-red wavy hair + soft bangs",
    "Big genuine smile is part of the lock — bubbly energy",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
  ],
} as const;
