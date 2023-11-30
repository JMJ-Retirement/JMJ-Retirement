/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoBlue: "#26328c",
        logoGold: "#b4aa89",
        ButtonBlackHover: "#374151",
      },
    },
  },
  plugins: [],
};
