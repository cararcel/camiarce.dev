const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "black-small": "2px 3px 0 0 rgba(0, 0, 0, 1)",
        "black-small-raised": "6px 6px 0 0 rgba(0, 0, 0, 1)",
        black: "4px 6px 0 0 rgba(0, 0, 0, 1)",
        "black-raised": "10px 10px 0 0 rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        handwritten: ["wc_mano", ...defaultTheme.fontFamily.sans],
        title: ["slukoni", ...defaultTheme.fontFamily.sans],
        subtitle: ["lexend", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1);" },
          "50%": { transform: "scale(1.1);" },
        },
      },
      animation: {
        scale: "scale 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
