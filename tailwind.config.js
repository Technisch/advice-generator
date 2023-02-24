/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 55px 0 rgba(0,0,0,0.3);",
      },
      colors: {
        "primary-text": "#cee3e9",
        primary: "#52ffa8",

        background: "#1f2632",
        card: "#323a49",
        secondary: "#4e5d73",
      },
    },
  },
  plugins: [],
};
