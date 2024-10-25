module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Sulphur Point"', "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#9B5DE5",
        secondary: "#e22d93",
        dark: {
          100: "#212529",
        },
        light: {
          100: "#fdfcf7",
        },
      },
    },
  },
  plugins: [],
};
