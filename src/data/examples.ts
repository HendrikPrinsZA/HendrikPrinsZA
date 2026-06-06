export type Example = {
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export const examples: Example[] = [
  {
    slug: "islands",
    title: "Island Party",
    emoji: "🏝️",
    tagline: "Three frameworks, one page, zero default JS",
    description:
      "React, Svelte, and Vue components coexist on a single page. Each island hydrates only when needed — Astro ships static HTML for everything else.",
    highlights: [
      "Islands architecture",
      "client:load / visible / idle",
      "Framework mixing",
    ],
  },
  {
    slug: "time-warp",
    title: "Time Warp",
    emoji: "⏳",
    tagline: "Server time vs. client time",
    description:
      "See the difference between a timestamp baked in at request time and a live clock that only runs in the browser.",
    highlights: [
      "Server-side rendering",
      "Selective hydration",
      "Zero-JS fallback",
    ],
  },
  {
    slug: "transitions",
    title: "Cosmic Transitions",
    emoji: "🌌",
    tagline: "Morph between pages like magic",
    description:
      "Astro View Transitions animate shared elements across routes. Click a cosmic body and watch it glide into its detail view.",
    highlights: ["View Transitions API", "transition:name", "ClientRouter"],
  },
  {
    slug: "api-playground",
    title: "API Playground",
    emoji: "🎲",
    tagline: "Endpoints you can poke",
    description:
      "Hit Astro API routes from the browser and watch JSON flow back. No backend framework required — just endpoints in your pages directory.",
    highlights: ["API routes", "fetch from islands", "Dynamic responses"],
  },
  {
    slug: "composition",
    title: "Component Orchestra",
    emoji: "🎼",
    tagline: "Slots, props, and nested Astro components",
    description:
      "Pure Astro components compose like LEGO. Props flow down, slots flow up, and nothing ships JavaScript unless you ask for it.",
    highlights: ["Slots & props", "Scoped CSS", "Static by default"],
  },
];

export type CosmicBody = {
  slug: string;
  name: string;
  emoji: string;
  color: string;
  fact: string;
  transitionName: string;
};

export const cosmicBodies: CosmicBody[] = [
  {
    slug: "nebula",
    name: "Nebula",
    emoji: "🌌",
    color: "#7c3aed",
    fact: "Nebulae are stellar nurseries — vast clouds of gas and dust where new stars are born.",
    transitionName: "cosmic-nebula",
  },
  {
    slug: "pulsar",
    name: "Pulsar",
    emoji: "💫",
    color: "#0ea5e9",
    fact: "Pulsars are rapidly spinning neutron stars that beam radio waves like a cosmic lighthouse.",
    transitionName: "cosmic-pulsar",
  },
  {
    slug: "quasar",
    name: "Quasar",
    emoji: "✨",
    color: "#f59e0b",
    fact: "Quasars are among the brightest objects in the universe, powered by supermassive black holes.",
    transitionName: "cosmic-quasar",
  },
];

export const devQuotes = [
  {
    text: "Ship less JavaScript. Your users will thank you.",
    author: "The Astro team",
  },
  {
    text: "Islands architecture: static HTML with sprinkles of interactivity.",
    author: "Astro docs",
  },
  {
    text: "The best code is the code you never had to ship.",
    author: "Every performance engineer",
  },
  {
    text: "Content is king, but delivery is the kingdom.",
    author: "Web perf wisdom",
  },
  {
    text: "Hydrate only what needs to hydrate. Let the rest be HTML.",
    author: "Island philosophy",
  },
  {
    text: "View transitions make the web feel native again.",
    author: "CSS WG fans",
  },
  {
    text: "Astro: the framework that gets out of your way.",
    author: "Happy developer",
  },
  {
    text: "Server-first, client when necessary. That's the way.",
    author: "Full-stack minimalism",
  },
];
