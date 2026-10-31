import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090b12",
        panel: "#111521",
        violet: "#8b7cff",
        mint: "#a5f3d0"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 90px rgba(139,124,255,.22)"
      }
    }
  },
  plugins: []
};

export default config;
