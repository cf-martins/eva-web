import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --ignore-unknown --write ${filenames.map((f) => relative(process.cwd(), f)).join(" ")}`;

const lintStagedConfig = {
  "*.{js,mjs,jsx,ts,mts,tsx}": [buildEslintCommand, buildPrettierCommand],
  "!(*js|*mjs|*jsx|*ts|*mts|*tsx)": [buildPrettierCommand],
};

export default lintstagedConfig;
