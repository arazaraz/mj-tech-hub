import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff6b2c",
        navy: "#07111f",
        ink: "#0b172a",
        electric: "#4ea1ff",
        mist: "#eef5ff",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(7,17,31,.10)",
        panel: "0 30px 90px rgba(2,8,23,.24)",
        glow: "0 0 0 1px rgba(78,161,255,.20), 0 24px 70px rgba(26,102,255,.16)",
      },
    },
  },
  plugins: [],
};

export default config;
