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

export const luna = {
  name: "Luna",
  fullTitle: "Luna · Bar Manager",
  role: "Bar manager · Dog Bar",
  age: 28,
  tagline: "Voluminous afro, deep chocolate skin, runs the room before it knows it needs running.",
  summary:
    "Dog Bar’s thick, buxom Black bar manager. Extremely full natural afro, rich dark chocolate skin, high cheekbones, and a proud hourglass build. Authority in neon and wood — photoreal only, never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Extremely full, dense, huge rounded natural afro — rich texture, impressive height/volume, defined curls",
    },
    {
      label: "Face",
      value:
        "Symmetrical face, high cheekbones, full plump lips, dark brown eyes with natural catchlights, confident or soft commanding expression",
    },
    {
      label: "Skin",
      value:
        "Rich deep warm dark chocolate skin — realistic texture, visible pores, subtle imperfections, radiant sheen",
    },
    {
      label: "Build",
      value:
        "Thick voluptuous hourglass — very large full heavy natural breasts, narrow waist, wide hips, thick thighs, strong curvy athletic build, proud posture",
    },
    {
      label: "Presence",
      value:
        "Manager energy — owns the rail, the neon, and the room. Often with the house black Labrador.",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI sheen",
    },
  ] as Trait[],
  personality: [
    "Calm authority under chaos — runs service without raising her voice",
    "Protective of staff (Rose, Betty, Kai) and regulars who earn it",
    "Dry wit; rarely wastes words",
    "Proud of her body and her bar — same energy",
    "Fair but firm; the room follows her lead",
  ],
  voice: [
    "Measured, warm, low — manager cadence",
    "Short directives on the floor; longer when she trusts you",
    "Nicknames for crew; full names when someone’s in trouble",
  ],
  looks: [
    {
      id: "manager",
      name: "Manager rail",
      setting: "Warm wood bar, bottles and glassware behind",
      notes:
        "Tight black short-sleeve scoop top, dark jeans, hands on thighs, full afro, direct gaze. Canonical manager lock.",
      palette: ["#1a1210", "#3d2a20", "#c4a070", "#0a0a0c"],
      image: "/luna-portrait.jpg",
    },
    {
      id: "service-shirt",
      name: "Service shirt",
      setting: "Bar rail, amber pendant lights",
      notes:
        "Black deep-V button shirt, denim shorts, leaning on rail. Soft smile, full afro volume.",
      palette: ["#2a1a14", "#0a0a0c", "#8b6914", "#c4a070"],
      image: "/luna-service.jpg",
    },
    {
      id: "house-dog",
      name: "House dog",
      setting: "Dog Bar neon, black Labrador at side",
      notes:
        "Black tank, house Labrador on the bar or beside her. Red DOG BAR neon. Brand image still.",
      palette: ["#1a0a12", "#e02040", "#0a0a0c", "#c4a070"],
      image: "/luna-dog.jpg",
    },
    {
      id: "bar-lab",
      name: "Bar + Lab",
      setting: "Purple/red neon rail, Labrador on counter",
      notes:
        "Black twist-front tank, jeans, hand on hip, Labrador beside her. Confident manager pose.",
      palette: ["#2a1030", "#e02040", "#0a0a0c", "#c4a070"],
      image: "/luna-bar-dog.jpg",
    },
    {
      id: "offduty",
      name: "Off duty",
      setting: "Hotel / bedroom, satin sheets",
      notes:
        "Black ribbed tank, frayed denim shorts, kneeling on bed, looking back over shoulder. Soft lamp light.",
      palette: ["#3d3028", "#1a1a20", "#c4a070", "#0a0a0c"],
      image: "/luna-offduty.jpg",
    },
    {
      id: "closing",
      name: "Closing shift",
      setting: "Empty Dog Bar, red neon, jukebox",
      notes:
        "After hours energy — thigh-high black boots, hands on hips, DOG BAR / NO COLLARS neon. Gloss skin, full afro.",
      palette: ["#1a0808", "#e02040", "#6a20a0", "#0a0a0c"],
    },
    {
      id: "alley",
      name: "Alley neon",
      setting: "Graffiti alley under DOG BAR sign, string lights",
      notes:
        "Night exterior — wet pavement, multicolored bulbs, fog, thigh-high boots. Cinematic after-close look.",
      palette: ["#1a0a20", "#ff40a0", "#40e0ff", "#0a0a0c"],
    },
    {
      id: "suite",
      name: "Pink suite",
      setting: "Bedroom string lights, black sheets, petals",
      notes:
        "Gloss black micro set, hand on hip, full afro with warm highlights. Intimate off-site still.",
      palette: ["#f5c0c8", "#1a0a10", "#c4a070", "#0a0a0c"],
    },
  ] as Look[],
  relationships: [
    { name: "Rose", note: "Lead bartender. Mutual respect; Luna covers when nights get rough." },
    { name: "Thick Betty", note: "Loves Betty’s energy on busy shifts; keeps her focused." },
    { name: "Kai", note: "Events manager — Luna owns floor, Kai owns calendar." },
    { name: "Summer Wins", note: "Glam regular energy; Luna keeps VIP calm." },
    { name: "Zuri", note: "Petite contrast; Luna’s protective big-sister mode." },
    { name: "House Lab", note: "Black Labrador — unofficial mascot, often in frame." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Huge voluminous natural afro is non-negotiable — height and curl texture first",
    "Rich deep dark chocolate skin with realistic pores and sheen",
    "Thick hourglass proportions — never slim her down",
    "DOG BAR neon / wood rail / house Labrador are strong environment anchors",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
  ],
} as const;
