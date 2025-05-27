import { css } from "~/styled-system/css";
import { center } from "~/styled-system/patterns";
import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern:
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function IndexPage() {
  return (
    <div className={center({ minHeight: "dvh" })}>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Welcome to the home page
      </h1>
    </div>
  );
}
