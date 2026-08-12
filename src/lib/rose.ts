export type Look = {
  id: string;
  name: string;
  setting: string;
  notes: string;
  palette: string[];
  /** Optional public image path (SFW stills only) */
  image?: string;
};

export type Trait = {
  label: string;
  value: string;
};

export const rose = {
  name: "Rose",
  fullTitle: "Rose Agent",
  role: "Goth bartender · Dog Bar",
  age: 22,
  tagline: "Twin pigtails, purple streaks, freckles — photoreal, never cartoon.",
  summary:
    "Lead character of the Dog Bar universe. Alternative-scene bartender with a locked photoreal identity: jet-black twin pigtails with purple streaks, dense freckles, blue eyes, dark matte lips, silver tongue piercing, and a black rose tattoo on the lower abdomen. Built for AI-augmented storytelling and practice-led media research.",
  identity: [
    {
      label: "Hair",
      value:
        "High twin pigtails (or twin braids) — jet black with bright purple streaks through ends and sides, straight bangs, rich individual strands",
    },
    {
      label: "Face",
      value:
        "Photoreal only — dense freckles on nose/cheeks, blue eyes, sharp black winged eyeliner, full lips dark matte burgundy-black lipstick, silver ball tongue piercing often visible",
    },
    {
      label: "Skin",
      value:
        "Fair natural skin, realistic pores, freckles on face and body, subtle imperfections — never plastic CGI",
    },
    {
      label: "Tattoo",
      value:
        "Small black rose with stem and leaves on the RIGHT side of the lower belly, next to the navel and above the pants line — locked mark every shot",
    },
    {
      label: "Build",
      value:
        "Voluptuous hourglass · large full heavy natural breasts · narrow waist · strong hips · confident posture",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin, NO CGI sheen",
    },
  ] as Trait[],
  personality: [
    "Confident and unflappable under bar pressure",
    "Dry humor with a soft undercurrent of warmth",
    "Loyal to the Dog Bar crew and regulars",
    "Drawn to late nights, loud rooms, and honest conversation",
    "Owns her aesthetic without performing for anyone",
  ],
  voice: [
    "Short, pointed lines — never chatty for its own sake",
    "Can turn from teasing to sincere in one breath",
    "Calls regulars by nickname; strangers earn their place",
  ],
  looks: [
    {
      id: "service",
      name: "Service night",
      setting: "Dark wood Dog Bar rail, purple neon",
      notes:
        "Oversized faded black band tee (Buzzin), polishing the bar with a cloth. Twin tails with purple ends, dark matte lips, rose tattoo visible at hip. Canonical work look.",
      palette: ["#1a1218", "#2a1a30", "#b84fd4", "#3d3028"],
      image: "/rose-service.webp",
    },
    {
      id: "bar-lock",
      name: "Bar lock portrait",
      setting: "Warm bar bokeh, bottles behind",
      notes:
        "Close freckled face lock — twin tails, purple streaks, dark lipstick, rose stem tattoo centered below navel. Primary freckled identity still from ref pack.",
      palette: ["#2a2018", "#0a0a0c", "#b84fd4", "#c8a090"],
    },
    {
      id: "daypath",
      name: "Day path",
      setting: "Sunny dirt road, red car",
      notes:
        "White ribbed sports bra, beige shorts, big freckled smile. Outdoor lock from earlier canon.",
      palette: ["#f5f5f5", "#c4b5a0", "#1a1a20", "#7a3a8f"],
      image: "/rose-outdoor.webp",
    },
    {
      id: "lace-studio",
      name: "Lace studio",
      setting: "Neutral seamless studio wall",
      notes:
        "Black strappy lace lingerie set, twin tails, hands framing chest, tongue piercing visible, rose tattoo centerline. Soft even light.",
      palette: ["#e8e4e0", "#0a0a0c", "#1a1a20", "#b84fd4"],
    },
    {
      id: "braid-mirror",
      name: "Braid mirror selfie",
      setting: "Bedroom mirror, daylight window",
      notes:
        "Twin purple-black braids (not puffs), black lace bra + strappy garter harness, phone in hand, kneeling. Same face lock, alt hair construction.",
      palette: ["#c8c0b8", "#0a0a0c", "#7a3a8f", "#f0eef2"],
    },
    {
      id: "pop-wow",
      name: "Pop WOW",
      setting: "Pop-art mural couch, candy props",
      notes:
        "Red-white striped off-shoulder crop, denim shorts, white heels, big smile. High-energy playful set.",
      palette: ["#ff2d2d", "#ffcc00", "#1a1a20", "#ffffff"],
    },
    {
      id: "rain-street",
      name: "Rain street",
      setting: "Night alley in heavy rain, neon bokeh",
      notes:
        "Soaked white crop tank, water on skin, twin tails plastered wet, tongue out with piercing. Cinematic wet-down look.",
      palette: ["#0a0a12", "#3a4050", "#8a90a0", "#b84fd4"],
    },
    {
      id: "beach-volley",
      name: "Beach volleyball",
      setting: "Sunny sand court, net + players bokeh",
      notes:
        "Sky-blue micro bikini, tongue out playful, twin tails wind-blown, rose tattoo hip, ocean horizon.",
      palette: ["#5eb3e8", "#f5e6c8", "#1a3a5c", "#b84fd4"],
    },
    {
      id: "black-bikini-car",
      name: "Black bikini · red car",
      setting: "Parking lot, red sports car bokeh",
      notes:
        "Black string bikini, freckles, dark matte lips, rose tattoo lower abdomen, hard noon sun.",
      palette: ["#0a0a0c", "#c41e1e", "#e8d4b8", "#7a3a8f"],
    },
    {
      id: "devils-night",
      name: "Devil's night",
      setting: "Indoor wooden stairwell",
      notes:
        "Shiny red latex long-sleeve bodysuit, side lace-up, red horn headband, fishnets, red heels. Rose tattoo on hip/side. Playful menace.",
      palette: ["#8b1020", "#0a0a0c", "#e02040", "#c4a080"],
    },
  ] as Look[],
  relationships: [
    { name: "Bouncer", note: "Silent muscle; trusted when the room turns." },
    { name: "Luna", note: "Bar manager. Mutual respect, occasional sparring." },
    { name: "Summer Wins", note: "Blonde bombshell energy — foil and friend." },
    { name: "Kai", note: "Korean events manager; shared late shifts." },
    { name: "Thick Betty", note: "Bubbly counterpart across the rail." },
    { name: "Zuri", note: "Petite powerhouse; different energy, same crew." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, or plastic skin",
    "Dense freckles on face (and body when visible) are mandatory",
    "Always lock twin pigtails OR twin braids + purple streaks + bangs first",
    "Silver ball tongue piercing when mouth is open",
    "Tattoo: black rose with stem on lower abdomen / navel (centerline or slight side) — never sternum",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Identity anchors at start and end of every image prompt",
  ],
} as const;
