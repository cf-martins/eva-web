import { paraglide } from "@inlang/paraglide-next/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./paraglide",
  },
  ...nextConfig,
});
