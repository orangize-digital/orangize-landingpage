module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f60",
          "primary-focus": "#ff751a",
        },
      },
    ],
  },
};