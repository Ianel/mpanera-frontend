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
      },
    },
  },
  plugins: [],
};
