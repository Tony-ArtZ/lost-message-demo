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
        glow: [
          "0 0 15px rgba(232, 213, 183, 0.5)",
          "0 0 30px rgba(232, 213, 183, 0.3)",
        ],
        "glow-strong": [
          "0 0 20px rgba(232, 213, 183, 0.7)",
          "0 0 40px rgba(232, 213, 183, 0.5)",
          "0 0 60px rgba(232, 213, 183, 0.3)",
        ],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
