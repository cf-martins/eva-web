import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./paraglide",
      strategy: ["url", "cookie", "baseLocale"],
    }),
    reactRouter(),
    tsconfigPaths(),
  ],
});
