import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        "2": "0.02",
        "3": "0.03",
        "4": "0.04",
        "6": "0.06",
        "8": "0.08",
        "12": "0.12",
        "15": "0.15",
        "18": "0.18",
        "22": "0.22",
        "85": "0.85",
      },
      colors: {
        ink: {
          DEFAULT: "#0B1320",
          soft: "#1B2433",
          muted: "#3A4658",
        },
        paper: {
          DEFAULT: "#FBFAF6",
          warm: "#F4F1E8",
          edge: "#E8E3D5",
        },
        water: {
          50: "#EAF3FB",
          100: "#CFE3F4",
          200: "#9AC4E6",
          300: "#5EA1D2",
          400: "#2F7DBA",
          500: "#0F5E9A",
          600: "#0A487A",
          700: "#073759",
          800: "#052640",
          900: "#031826",
        },
        rust: {
          400: "#F1A24A",
          500: "#E0822A",
          600: "#B6651D",
          700: "#8A4C16",
        },
        leaf: {
          500: "#1F8A5A",
          600: "#176A45",
        },
        alarm: {
          500: "#B83A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(11,19,32,0.04), 0 8px 24px -8px rgba(11,19,32,0.12)",
        lift: "0 2px 0 0 rgba(11,19,32,0.05), 0 24px 48px -16px rgba(11,19,32,0.18)",
        cta: "0 1px 0 0 rgba(11,19,32,0.08), 0 12px 24px -10px rgba(224,130,42,0.45)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,19,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,19,32,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
