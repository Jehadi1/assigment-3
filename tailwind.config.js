/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
    },

    extend: {
      colors: {
        "text-gray": "#494949",
        "text-light": "#737373",
        "header-btn-bg": "#ABEF5F",
        "paragaph-text": "#494949",
        "hero-btn": "rgb(171 239 95 / 67%)",
      },
    },
  },
  plugins: [],
};
