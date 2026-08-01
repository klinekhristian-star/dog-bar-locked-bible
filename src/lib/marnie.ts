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

export const marnie = {
  name: "Marnie",
  fullTitle: "Marnie",
  role: "Summer’s girlfriend · Dog Bar orbit",
  age: 24,
  tagline:
    "Short tousled auburn crop, freckles everywhere, soft natural energy — Summer’s quiet anchor.",
  summary:
    "Summer Wins’ girlfriend. Short finger-combed auburn crop, fair freckled skin across face shoulders and chest, soft natural lips, full natural breasts (not exaggerated), soft feminine body. Warm intimate presence. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Short tousled messy auburn / ginger crop that looks finger-combed — lived-in, wind-blown, never rigid or styled-stiff",
    },
    {
      label: "Face",
      value:
        "Fair freckled skin across nose and cheeks, soft natural lips, warm expressive eyes, quiet smile or soft half-smile — intimate not performative",
    },
    {
      label: "Skin",
      value:
        "Fair with visible freckles on face, shoulders, chest and arms — realistic texture and pores; freckles are locked",
    },
    {
      label: "Build",
      value:
        "Soft feminine body with full natural breasts (not exaggerated / not tiny), soft stomach, natural proportions, relaxed confident posture",
    },
    {
      label: "Energy",
      value:
        "Quiet warmth next to Summer’s volume — soft confidence, comfortable in silence, protective of the small circle",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep short auburn crop + freckles + full natural breasts",
    },
  ] as Trait[],
  personality: [
    "Quiet warmth next to Summer’s louder energy",
    "Soft confidence — not performative",
    "Protective of the small circle",
    "Comfortable in silence",
    "Loyal girlfriend energy without losing her own center",
  ],
  voice: [
    "Low, easy, unhurried",
    "Few words, soft delivery",
    "Calls Summer by name, not pet names in public",
  ],
  looks: [
    {
      id: "rooftop",
      name: "Rooftop golden hour",
      setting: "City skyline · golden hour",
      notes:
        "Cream deep-V crop top + denim shorts, wind in short auburn hair, big natural smile. Canonical outdoor hero still.",
      palette: ["#f59e0b", "#e8d5b5", "#1a1a20", "#c4a070"],
      image: "/marnie-rooftop.jpg",
    },
    {
      id: "dog",
      name: "Park with dog",
      setting: "Afternoon park bench",
      notes:
        "White tank + jeans, golden retriever at her side, soft smile looking down while scratching its head. Full natural breasts softly outlined under the tank.",
      palette: ["#e8d5b5", "#3b82f6", "#c4a070", "#2a1810"],
      image: "/marnie-dog.jpg",
    },
    {
      id: "beach",
      name: "Beach golden hour",
      setting: "Shoreline · sunset",
      notes:
        "Tiny cream micro bikini, wet freckled skin, soft smile, ocean and waves behind. Warm golden light.",
      palette: ["#e8d5b5", "#f59e0b", "#3b82f6", "#c4a070"],
      image: "/marnie-beach.jpg",
    },
    {
      id: "kitchen",
      name: "Morning kitchen",
      setting: "Sunlit kitchen window",
      notes:
        "Oversized faded Fleetwood Mac band tee only, coffee mug, bare legs, quiet half-smile looking out the window.",
      palette: ["#c4a070", "#2a1810", "#e8d5b5", "#1a1a20"],
      image: "/marnie-kitchen.jpg",
    },
    {
      id: "rain",
      name: "Rainy city night",
      setting: "Wet street · neon night",
      notes:
        "Black leather jacket over thin white tank, dark jeans, rain on freckles and jacket. Soft confident look at camera. Neon spill.",
      palette: ["#0a0a0c", "#3b82f6", "#c4a070", "#1a1a20"],
      image: "/marnie-rain.jpg",
    },
    {
      id: "paris",
      name: "Paris balcony",
      setting: "Paris balcony · golden hour",
      notes:
        "Thin black slip dress clinging softly to full natural breasts and hips, looking out over rooftops with a quiet half-smile. Prompt-only look.",
      palette: ["#1a1a20", "#c4a070", "#f59e0b", "#e8d5b5"],
    },
  ] as Look[],
  relationships: [
    { name: "Summer Wins", note: "Girlfriend — soft anchor to Summer’s louder energy." },
    { name: "Rose", note: "Respectful distance; different worlds, same bar." },
    { name: "Luna", note: "Quiet mutual recognition at the bar." },
    { name: "Rick", note: "Friendly; he tips well and doesn’t push." },
    { name: "Thick Betty", note: "Warm; Betty’s bubbly meets Marnie’s quiet." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Short tousled auburn crop + freckles on face/shoulders/chest are locked",
    "Full natural breasts — not exaggerated and not tiny",
    "Prefer soft natural or golden-hour light; neon for night looks",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed / bikini SFW; explicit looks are text-only",
  ],
} as const;
