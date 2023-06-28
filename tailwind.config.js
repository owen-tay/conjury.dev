/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: {
          conjury: "#F198FF",
        },
        yellow: {
          conjury: "#F2BC27",
        },
        blue: {
          conjury: "#27F2B7",
        },
      },
    },
  },
  plugins: [],
};
