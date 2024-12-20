import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}", // Include NextUI
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000319",
        secondary: "#000319",
        accent: "#000319",
      },
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
      },
      fontSize: {
        custom: "16px",
        basic: "14px",
        smdd: "18px",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
