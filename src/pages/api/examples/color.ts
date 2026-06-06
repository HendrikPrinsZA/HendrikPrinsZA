import type { APIRoute } from "astro";

const colorNames = [
  "Cosmic Coral",
  "Nebula Navy",
  "Stardust Sage",
  "Supernova Gold",
  "Aurora Mint",
  "Pulsar Pink",
  "Quasar Quartz",
  "Orbit Orange",
];

export const GET: APIRoute = () => {
  const h = Math.floor(Math.random() * 360);
  const s = 55 + Math.floor(Math.random() * 30);
  const l = 45 + Math.floor(Math.random() * 20);
  const name = colorNames[Math.floor(Math.random() * colorNames.length)];

  const hex = hslToHex(h, s, l);

  return new Response(JSON.stringify({ name, hex, h, s, l }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

function hslToHex(h: number, s: number, l: number): string {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const a = sNorm * Math.min(lNorm, 1 - lNorm);

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = lNorm - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}
