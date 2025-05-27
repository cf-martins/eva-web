import { m } from "~/paraglide/messages";
import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern:
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function IndexPage() {
  return m.example_message({ username: "Paraglide" });
}
