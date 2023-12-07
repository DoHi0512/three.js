import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
