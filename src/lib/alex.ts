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

export const alex = {
  name: "Alex",
  fullTitle: "Alex Kane",
  role: "Rose’s partner · future husband · cabin & bar orbit",
  age: 22,
  tagline:
    "Messy dark brown hair, light stubble, steady brown eyes — lean-athletic, quiet anchor next to Rose.",
  summary:
    "22-year-old man, Rose Agent’s love and future husband. Medium messy dark brown hair, light stubble, symmetrical face, steady brown eyes, calm expression that softens around Rose. Lean-athletic build — natural definition from real work, not a gym. Dark tees, worn jackets, boots. Steady, dry humor, protective without controlling. Photoreal only.",
  identity: [
    {
      label: "Hair",
      value:
        "Medium-length dark brown, slightly messy, often pushed back with strands falling forward — never stiff or overstyled",
    },
    {
      label: "Face",
      value:
        "Symmetrical face, steady brown eyes, straight nose, light stubble along the jaw, calm default expression that softens for Rose",
    },
    {
      label: "Skin",
      value:
        "Fair-to-light warm skin with realistic texture — sun and work, not studio polish",
    },
    {
      label: "Build",
      value:
        "Lean-athletic — broad enough shoulders, defined but not bodybuilder, natural chest and arms from real activity. Never overbuilt, never skinny",
    },
    {
      label: "Energy",
      value:
        "Steady, dry humor, protective without controlling — quiet anchor opposite Rose’s goth heat",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO plastic skin, NO male-model perfection, NO overbuilt gym body. Keep messy dark hair + stubble + brown eyes + lean-athletic lock",
    },
  ] as Trait[],
  personality: [
    "Quiet until he’s sure of someone — then fully in",
    "Practical under stress",
    "Matches Rose’s intensity without competing",
    "Loyal, not performative — future husband energy at 22",
    "Lets her lead the aesthetic; he holds the ground",
  ],
  voice: [
    "Low, even, few wasted words",
    "Dry one-liners, especially with Rose",
    "Softens only for her — noticeable to anyone listening",
  ],
  looks: [
    {
      id: "portrait",
      name: "Close portrait",
      setting: "Soft neutral light · head & shoulders",
      notes:
        "Canonical face lock — messy dark brown hair, light stubble, steady brown eyes, soft almost-smile.",
      palette: ["#1a1a20", "#c4a070", "#e8d5b5", "#4a5560"],
      image: "/alex-portrait.jpg",
    },
    {
      id: "porch",
      name: "Porch · shirtless",
      setting: "Cabin porch · golden hour",
      notes: "Shirtless, towel on shoulder, lean-athletic lock, sunset light.",
      palette: ["#f59e0b", "#c4a070", "#1a1a20", "#e8d5b5"],
      image: "/alex-porch.jpg",
    },
    {
      id: "kitchen",
      name: "Cabin kitchen",
      setting: "Morning window light",
      notes: "Grey tee, coffee mug, quiet half-smile, domestic calm.",
      palette: ["#c4a070", "#e8d5b5", "#6b7c5c", "#1a1a20"],
      image: "/alex-kitchen.jpg",
    },
    {
      id: "drive",
      name: "Coastal drive",
      setting: "Car interior · golden hour",
      notes: "One hand on wheel, open window, coastal road behind, calm focus.",
      palette: ["#f59e0b", "#c4a070", "#3b82f6", "#1a1a20"],
      image: "/alex-drive.jpg",
    },
    {
      id: "wood",
      name: "Chopping wood",
      setting: "Mountain cabin yard · overcast",
      notes: "Shirtless mid-swing with axe, wood chips, real work muscle.",
      palette: ["#6b7c5c", "#a8b0b8", "#c4a070", "#1a1a20"],
      image: "/alex-wood.jpg",
    },
    {
      id: "repair",
      name: "Cabin repair",
      setting: "Porch work · daylight",
      notes: "Shirtless with hammer and tool belt, focused on a board.",
      palette: ["#c4a070", "#6b7c5c", "#e8d5b5", "#1a1a20"],
      image: "/alex-repair.jpg",
    },
    {
      id: "couch",
      name: "Reading",
      setting: "Lamp-lit living room",
      notes: "Worn sweater, book in hand, quiet domestic still.",
      palette: ["#c4a070", "#1a1a20", "#6b5c4c", "#e8d5b5"],
      image: "/alex-couch.jpg",
    },
    {
      id: "rose-bar",
      name: "With Rose · bar",
      setting: "Dog Bar rail · warm practicals",
      notes: "Beside Rose (twin pigtails, purple streaks), hand near her waist, couple lock.",
      palette: ["#1a1a20", "#7c3aed", "#c4a070", "#ff2d6a"],
      image: "/alex-rose-bar.jpg",
    },
    {
      id: "rose-cabin",
      name: "With Rose · cabin",
      setting: "Cabin kitchen · soft morning",
      notes: "Forehead near Rose’s, quiet intimate calm, her in open flannel.",
      palette: ["#c4a070", "#e8d5b5", "#7c3aed", "#1a1a20"],
      image: "/alex-rose-cabin.jpg",
    },
  ] as Look[],
  relationships: [
    { name: "Rose Agent", note: "Partner and future wife — met as a regular, stayed. Knows the pigtails, piercing, tattoo as her, not costume." },
    { name: "Byron", note: "Respects the door; different register — Alex is quieter, not security." },
    { name: "Luna", note: "Known as Rose’s person when he shows up." },
    { name: "Rick", note: "Older male orbit contrast — Alex is peer-age to Rose, not Daddy energy." },
  ],
  productionNotes: [
    "Photoreal only — reject anime, cartoon, plastic skin, male-model perfection",
    "Messy dark brown hair + light stubble + steady brown eyes + lean-athletic build are locked",
    "Never overbuilt gym body; natural work definition only",
    "Couple framing with Rose: her black/purple against his neutrals",
    "Strong range: cabin work, coastal drive, bar with Rose, quiet domestic",
    "Prefer ARRI Alexa / 35–85mm / natural filmic color",
  ],
} as const;
