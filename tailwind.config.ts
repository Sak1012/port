import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      grey: "#B5B5B5",
      white: "#FAFAFA",
      black: "#0A0A0A",
      yellow: "#ECFD21",
    },
    fontFamily: {
      helvetica: "helvetica",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
