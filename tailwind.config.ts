import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream : "hsl(30, 38%, 92%)",
        verydarkBlue : "hsl(212, 21%, 14%)",  
        darkGrayishBlue : "hsl(228, 12%, 48%)",
        darkcyanhover : "#1A4031",
      },
    },
  },
  plugins: [],
};
export default config;








