import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        removeDuplicates: true,

        whitelist: [".*(primary|secondary|foreground|menu-icon-wrapper|background|menu-text|input|scrollbar|scrollbar-thumb-black|scrollbar-track-white|border|fill|fill-text)(/\\d+)?$", "fill-text", "text", "input", "scrollbar-thin"],
        // classRegex: "^class(primary)?$",
      },
    },
  },
];

export default eslintConfig;
