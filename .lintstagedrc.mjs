import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --ignore-unknown --write ${filenames.map((f) => relative(process.cwd(), f)).join(" ")}`;

const lintstagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
  "!(*js|*jsx|*ts|*tsx)": [buildPrettierCommand],
};

export default lintstagedConfig;
