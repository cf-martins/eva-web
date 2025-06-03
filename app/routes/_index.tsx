import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern:
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function IndexPage() {
  return <Welcome />;
}
