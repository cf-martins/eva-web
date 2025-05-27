import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import lime from "@park-ui/panda-preset/colors/lime";
import slate from "@park-ui/panda-preset/colors/slate";

export default defineConfig({
  preflight: true,
  presets: [
    createPreset({ accentColor: lime, grayColor: slate, radius: "sm" }),
  ],
  include: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: "react",
  outdir: "styled-system",
});
