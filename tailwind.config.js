module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: "rgb(94, 92, 230)",
      tintPurple: "rgb(88, 86, 214)",
      black: "rgb(44, 44, 46)",
      tintBlack: "rgb(28, 28, 30)",
      white: "rgb(255,255,255)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
