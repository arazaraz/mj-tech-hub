import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { brand: "#f97316", navy: "#07111f" }, boxShadow: { soft: "0 20px 60px rgba(15,23,42,.12)" } } }, plugins: [] };
export default config;
