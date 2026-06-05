import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coastal: {
          blue: "#0E5A6F",
          seafoam: "#5FA8A0",
          sand: "#F5C26B",
          paper: "#FAFAF8",
          ink: "#263238",
          mist: "#EAF4F2",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(14, 90, 111, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
