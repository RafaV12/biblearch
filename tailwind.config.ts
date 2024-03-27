import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#353535',
          secondary: '#1F1F1F',
          tertiary: '#000000',
          cta: '#4169E1'
      }
    },
  },
  plugins: [],
};
export default config;
