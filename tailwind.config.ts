import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F1EA",
          2: "#ECE7DC",
        },
        ink: {
          900: "#0E0E10",
          800: "#1C1C1F",
          700: "#2C2C30",
          500: "#6C6A66",
          400: "#9A968E",
          300: "#C9C3B5",
          200: "#DFD9CB",
          100: "#E8E3D6",
        },
        accent: {
          DEFAULT: "#E84A0F",
          ink: "#FFFFFF",
        },
      },
      fontFamily: {
        display: [
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
