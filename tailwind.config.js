/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Sfizia", ...defaultTheme.fontFamily.sans],
        sans: ["Wotfard", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        skin: {
          base: "var(--colour-text-base)",
          muted: "var(--colour-text-muted)",
          accent: "var(--colour-accent)",
          highlight: "var(--colour-highlight)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--colour-fill)",
          "fill-muted": "var(--colour-fill-muted)",
          accent: "var(--colour-accent)",
          highlight: "var(--colour-highlight)",
        },
      },
      stroke: {
        skin: {
          base: "var(--colour-text-base)",
          accent: "var(--colour-accent)",
          highlight: "var(--colour-highlight)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--colour-text-base)",
          accent: "var(--colour-accent)",
          highlight: "var(--colour-highlight)",
          muted: "var(--colour-text-muted)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} 