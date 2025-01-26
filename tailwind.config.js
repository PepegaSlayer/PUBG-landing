/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#353535",
      "gray-dark": "#131313",
      yellow: "#ffdc10",
      red: "#ff7f44",
      green: "#64cd5d",
    },
    extend: {
      fontFamily: {
        sans: ["TT Interfaces", "ui-sans-serif", "system-ui"],
      },
      filter: {
        "hue-rotate-0": "hue-rotate(0deg)",
        "hue-rotate-90": "hue-rotate(90deg)",
      },
      backgroundImage: {
        "yellow-gradient":
          "linear-gradient(to bottom, rgba(255, 220, 16, 0) 35%, rgba(255, 220, 16, 0.35) 100%)",
        "red-gradient":
          "linear-gradient(to bottom, rgba(255, 220, 16, 0) 35%, rgba(255, 127, 68, 0.35) 100%)",
        "green-gradient":
          "linear-gradient(to bottom, rgba(255, 220, 16, 0) 35%, rgba(100, 205, 93, 0.35) 100%)",
      },
    },
  },
  plugins: [],
};
