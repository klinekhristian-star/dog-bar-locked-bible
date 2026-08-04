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

export const nastia = {
  name: "Nastia",
  fullTitle: "Nastia Novak",
  role: "Weekend floater · kitchen-to-floor",
  age: 27,
  tagline:
    "Ash-blonde soft waves, grey-blue eyes, warm open smile — beautiful plus-size hourglass, Kasia’s sister.",
  summary:
    "27-year-old Eastern European (Polish/Czech) occasional weekend server at Dog Bar, older sister to Kasia. Long soft ash-blonde hair with cool undertones, thick waves or messy low bun. Fair cool-toned skin, freckles on nose and cheeks. Soft full face, high soft cheekbones, cool grey-blue eyes, full natural lips, warm open smile. Beautiful overweight / plus-size hourglass — full heavy soft natural breasts, soft stomach, wide hips, thick soft thighs. Warmer and louder than Kasia. Photoreal only.",
  identity: [
    {
      label: "Hair",
      value:
        "Long soft ash-blonde with cool undertones — thick waves or messy low bun; same family as Kasia, softer styling",
    },
    {
      label: "Face",
      value:
        "Soft full face, high soft cheekbones, cool grey-blue eyes, full natural lips, warm open smile (less restrained than Kasia). Freckles on nose and cheeks",
    },
    {
      label: "Skin",
      value:
        "Fair cool-toned with realistic texture and freckles — natural beautiful plus-size skin; never plastic or smoothed flat",
    },
    {
      label: "Build",
      value:
        "Beautiful overweight / plus-size hourglass — full heavy soft natural breasts, soft stomach, wide hips, thick soft thighs, strong arms. Confident grounded posture. Never thin, never caricature",
    },
    {
      label: "Energy",
      value:
        "Warmer and louder than Kasia — same dry humor, more soft edges, unapologetic. Shared silver hoops + thin black leather cord",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep ash-blonde + grey-blue eyes + beautiful plus-size lock. NO weight stigma, NO thin face",
    },
  ] as Trait[],
  personality: [
    "Warmer and louder than her sister",
    "Same dry humor, softer delivery",
    "Unapologetic about taking up space",
    "Weekend presence — when she shows up, the floor notices",
    "Protective of Kasia without hovering",
  ],
  voice: [
    "Warmer than Kasia, still precise",
    "Laughs more easily",
    "Light Eastern European cadence",
  ],
  looks: [
    {
      id: "portrait",
      name: "Window portrait",
      setting: "Cool side window · head & shoulders",
      notes:
        "Canonical face lock — soft ash-blonde waves, grey-blue eyes, warm open smile, soft full face.",
      palette: ["#c8d0d8", "#a8b0b8", "#1a1a20", "#6b7c8c"],
    },
    {
      id: "rail",
      name: "Weekend rail",
      setting: "Bar rail · mixed practicals",
      notes:
        "Black Dog Bar tank and jeans, tray in hand, warm practical + cool rim, open smile.",
      palette: ["#1a1a20", "#c8d0d8", "#c4a070", "#6b7c8c"],
    },
    {
      id: "street",
      name: "Overcast street",
      setting: "Northern daylight",
      notes:
        "Simple black dress or coat, soft overcast key, documentary still, grounded posture.",
      palette: ["#a8b0b8", "#c8d0d8", "#4a5560", "#1a1a20"],
    },
  ] as Look[],
  relationships: [
    { name: "Kasia Novak", note: "Younger sister — cooler, slim-athletic; shared eyes, hair family, jewelry." },
    { name: "Thick Betty", note: "Instant ease — both own soft full bodies without apology." },
    { name: "Luna", note: "Weekend scheduling; Luna likes the floor calm when Nastia works." },
    { name: "Isla", note: "Overlapping weekend patio energy, different register." },
  ],
  productionNotes: [
    "Photoreal only — reject anime, cartoon, doll, plastic skin",
    "Beautiful plus-size / overweight hourglass is locked — never slim her down",
    "Ash-blonde cool undertones + grey-blue eyes + soft full face are locked",
    "Warm open smile default (contrast Kasia’s almost-smile)",
    "Sister pair with Kasia — keep shared jewelry and eye/hair family",
    "Prefer Slavic lighting: cool window key, soft practicals; avoid harsh beauty light that flattens soft body texture",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
  ],
} as const;
