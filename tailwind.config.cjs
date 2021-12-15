const colors = require("tailwindcss/colors");

const config = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.svelte"],

  theme: {
    colors: {
      ...colors,
      gray: colors.gray,
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
