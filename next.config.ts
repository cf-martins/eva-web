import { paraglide } from "@inlang/paraglide-next/plugin";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({});

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./paraglide",
  },
  ...withMDX(nextConfig),
});
