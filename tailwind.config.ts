import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C10",
        surface: "#12151C",
        surface2: "#171B24",
        border: "#232833",
        ink: "#E7EAEE",
        muted: "#8B93A3",
        faint: "#5C6472",
        amber: {
          DEFAULT: "#F2B84B",
          soft: "#F2B84B1A",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          soft: "#4FD1C51A",
        },
      },
      fontFamily: {
        display: [
          "Segoe UI",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1A1F2A 1px, transparent 1px), linear-gradient(to bottom, #1A1F2A 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        scan: "scan 3.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
        blink: "blink 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
