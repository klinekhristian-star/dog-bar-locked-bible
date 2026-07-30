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

export const summer = {
  name: "Summer Wins",
  fullTitle: "Summer Wins (Summer Winds)",
  role: "Blonde bombshell · Dog Bar regular / OF star energy",
  age: 24,
  tagline:
    "Voluminous blonde waves, massive natural curves, glossy glam — pure photoreal bombshell.",
  summary:
    "Ultra-busty blonde lead of the Dog Bar glam lane. Long wavy blonde hair, striking blue eyes with heavy winged liner, full glossy lips, and an extremely curvy hourglass — massive heavy natural breasts, tiny waist, wide hips, thick thighs, perfect round ass. Playful, teasing, highly confident. Photoreal only — never cartoon.",
  identity: [
    {
      label: "Hair",
      value:
        "Long wavy voluminous blonde hair cascading over shoulders and back — soft tousled waves, sometimes high messy bun; rich individual strands",
    },
    {
      label: "Face",
      value:
        "Striking blue eyes, heavy glam makeup (sharp black winged eyeliner, long lashes, contoured cheeks), full glossy plump lips, bright confident smile or bedroom smirk",
    },
    {
      label: "Skin",
      value:
        "Fair to sun-kissed glow with realistic texture and pores; often glossy/oiled sensual highlights on chest and body — never plastic CGI",
    },
    {
      label: "Build",
      value:
        "Extremely busty curvy hourglass — massive heavy natural breasts, tiny waist, wide hips, thick thighs, large round firm ass; confident posture",
    },
    {
      label: "Energy",
      value:
        "Playful, teasing, highly confident — seductive but warm; the room’s blond bombshell foil to Rose’s goth rail",
    },
    {
      label: "Style rule",
      value:
        "Maximum photorealism. NO cartoon, NO anime, NO doll face, NO plastic skin. Keep blonde waves + blue eyes + extreme curves",
    },
  ] as Trait[],
  personality: [
    "Playful, teasing, unapologetically glamorous",
    "High confidence — owns every stare",
    "Warm with the crew, flirty with the room",
    "OnlyFans / DB After Hours energy without losing photoreal human quality",
    "Competitive with Summer’s own brand; loyal friend energy with Rose & Marnie",
  ],
  voice: [
    "Soft, breathy, slightly teasing",
    "Compliments land like a wink",
    "Never shy about her body — proud and fun",
  ],
  looks: [
    {
      id: "road-smile",
      name: "Road smile",
      setting: "Sunny tree-lined road · red car",
      notes:
        "White ribbed sports bra / crop, beige high-waist shorts, long blonde waves, big white smile, hands on thighs. Canonical outdoor hero still.",
      palette: ["#f5f0e8", "#ffffff", "#c4a882", "#c41e3a"],
      image: "/summer-portrait.jpg",
    },
    {
      id: "dirt-road",
      name: "Dirt road lean",
      setting: "Sunny dirt road · red sports car bokeh",
      notes:
        "Same white sports bra + beige shorts, leaning toward camera, huge smile, wind-blown blonde waves.",
      palette: ["#d4c4a8", "#ffffff", "#c4a882", "#b91c1c"],
      image: "/summer-road.jpg",
    },
    {
      id: "sky-low",
      name: "Sky low-angle",
      setting: "Clear blue sky · low angle",
      notes:
        "White crop top, tight black shorts, looking back over shoulder, massive curves silhouetted against sky. Power pose.",
      palette: ["#3b82f6", "#ffffff", "#0a0a0c", "#f5e6d3"],
      image: "/summer-sky.jpg",
    },
    {
      id: "dog-bar",
      name: "Dog Bar rail",
      setting: "Neon Dog Bar interior · white poodle",
      notes:
        "Tight black low-cut bodysuit, glossy skin under pink/blue neon, white standard poodle on the bar. House-regular energy.",
      palette: ["#0a0a0c", "#ff2d95", "#4f46e5", "#f8f8f8"],
      image: "/summer-bar.jpg",
    },
    {
      id: "black-set",
      name: "Black satin set",
      setting: "Hotel suite · rose petals",
      notes:
        "Black satin bandeau + micro bottoms, oiled skin, hoop earrings, champagne bottle. After-hours suite look (prompt from lock + notes).",
      palette: ["#0a0a0c", "#1a1a1a", "#f5e6d3", "#c9a227"],
    },
    {
      id: "leather-mini",
      name: "Leather mini",
      setting: "Hotel suite bedroom",
      notes:
        "Black micro bra + glossy black leather mini shorts, hands on hips, long blonde waves, confident smirk.",
      palette: ["#0a0a0c", "#1c1c1c", "#f5e6d3", "#e8d5b5"],
    },
    {
      id: "towel",
      name: "Towel steam",
      setting: "Steam bathroom / shower",
      notes:
        "White towel held to chest, wet blonde waves, glossy skin, soft steam. Intimate post-shower still (prompt only).",
      palette: ["#8a8a8a", "#ffffff", "#f5e6d3", "#6b7280"],
    },
    {
      id: "suite-nude",
      name: "Suite glow",
      setting: "Warm bedroom lamp light",
      notes:
        "Fully nude kneeling on bed, glossy oiled skin, bedroom eyes — use identity lock + this setting only; no public still.",
      palette: ["#3d2a1f", "#f5e6d3", "#c4a070", "#1a1210"],
    },
  ] as Look[],
  relationships: [
    { name: "Rose", note: "Goth foil and close friend — opposite aesthetics, same bar." },
    { name: "Marnie", note: "Girlfriend — short auburn crop, freckles, couple energy." },
    { name: "Luna", note: "Respects the manager; VIP nights only." },
    { name: "Thick Betty", note: "Glam vs bubbly — mutual hype on busy shifts." },
    { name: "Kai", note: "Events photog chaos; loves Summer’s camera confidence." },
  ],
  productionNotes: [
    "Photoreal human only — reject anime, cartoon, doll, plastic skin",
    "Long voluminous blonde waves + blue eyes + heavy glam liner are locked",
    "Massive heavy natural breasts and extreme hourglass — do not slim her down",
    "Glossy/oiled skin highlights are part of her sensual language",
    "Prefer ARRI Alexa / 50–85mm / f/2.0 documentary photoreal language",
    "Public app stills stay clothed; explicit looks are text-only scene cards",
  ],
} as const;
