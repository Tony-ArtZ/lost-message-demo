import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        correct: "#538d4e",
        present: "#b59f3b",
        absent: "#3a3a3c",
        vintage: {
          paper: "#e8d5b7",
          dark: "#1a0f0f",
          ink: "#2c1810",
          frame: {
            light: "#583e35",
            dark: "#2c1810",
            border: "#412920",
          },
        },
      },
      dropShadow: {
        glow: "0 0 12px rgba(232, 213, 183, 0.3)",
        "glow-strong": "0 0 20px rgba(232, 213, 183, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
