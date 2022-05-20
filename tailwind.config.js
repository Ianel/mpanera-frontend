module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url("./src/assets/images/register.jpeg")',
      },
      colors: {
        primary: "#8EA5D9",
        secondary: "#414E73",
        accent: "#536DFE",

        primaryWhite: "#f6f6f6",
        secondaryWhite: "#fefefe",
        accentWhite: "#fdfeff",

        primaryDark: "#303030",
        secondaryDark: "#2b2b2b",
        accentDark: "1f1f1f",
      },
    },
  },
  plugins: [],
};
