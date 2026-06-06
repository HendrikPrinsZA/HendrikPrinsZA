import type { APIRoute } from "astro";
import { devQuotes } from "@data/examples";

export const GET: APIRoute = () => {
  const quote = devQuotes[Math.floor(Math.random() * devQuotes.length)];

  return new Response(JSON.stringify(quote), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
