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
      name: "Bar portrait",
      setting: "Dog Bar rail · neon rim",
      notes:
        "Canonical face lock — soft ash-blonde waves, freckles, grey-blue eyes, warm open smile, black deep-V top.",
      palette: ["#1a1a20", "#c8d0d8", "#ff2d6a", "#00e5c0"],
      image: "/nastia-portrait.webp",
    },
    {
      id: "lounge",
      name: "Lounge lingerie",
      setting: "Velvet sofa · warm indoor",
      notes: "Black lace set under open cardigan, warm smile, plus-size lock clear.",
      palette: ["#5b3a6e", "#1a1a20", "#c8d0d8", "#c4a070"],
      image: "/nastia-lounge.webp",
    },
    {
      id: "rooftop",
      name: "Rooftop dusk",
      setting: "City balcony · blue hour",
      notes: "Emerald satin slip, soft waves, warm smile, skyline bokeh.",
      palette: ["#0f3d2e", "#c8d0d8", "#1a1a20", "#f59e0b"],
      image: "/nastia-rooftop.webp",
    },
    {
      id: "rooftop-side",
      name: "Rooftop side",
      setting: "Balcony · evening",
      notes: "Emerald slip, three-quarter turn, city lights behind.",
      palette: ["#0f3d2e", "#c8d0d8", "#1a1a20", "#6b7c8c"],
      image: "/nastia-rooftop-side.webp",
    },
    {
      id: "cafe",
      name: "Cafe seat",
      setting: "Sidewalk cafe · mixed light",
      notes: "Cream tank and jeans, warm open smile, freckles locked.",
      palette: ["#e8d5b5", "#c8d0d8", "#ff2d6a", "#1a1a20"],
      image: "/nastia-cafe.webp",
    },
    {
      id: "cafe-lean",
      name: "Cafe lean",
      setting: "Outdoor table · day",
      notes: "Cream tank, jeans, leaning at table, big real smile.",
      palette: ["#e8d5b5", "#c8d0d8", "#3b82f6", "#1a1a20"],
      image: "/nastia-cafe-lean.webp",
    },
    {
      id: "soft",
      name: "Soft studio",
      setting: "Neutral indoor · close",
      notes: "Hair half-up, silver hoops, leather cord, warm smile, soft top.",
      palette: ["#c8d0d8", "#a8b0b8", "#e8d5b5", "#1a1a20"],
      image: "/nastia-soft.webp",
    },
    {
      id: "nude",
      name: "Nude portrait",
      setting: "Soft studio · confident",
      notes: "Topless portrait, hands on hips, warm smile, plus-size lock — public still as provided.",
      palette: ["#e8d5b5", "#c8d0d8", "#1a1a20", "#a8b0b8"],
      image: "/nastia-nude.webp",
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
