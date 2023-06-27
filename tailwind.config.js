module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#32CD5D",
        accent: "#FFFFFF",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
