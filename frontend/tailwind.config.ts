import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(90deg, rgba(9,9,10,1) 0%, rgba(24,23,25,1) 38%, rgba(57,54,61,1) 100%, rgba(54,52,59,1) 100%);",
        "thumb-gradient":
          "linear-gradient(180deg, rgba(54, 52, 59, 0) 0%, #09090A 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
