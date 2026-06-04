/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#ff6600 !important",
          "primary-focus": "#ff6600 !important",
          "primary-content": "#ffffff",
          secondary: "#ff6600",
          accent: "#ff6600",
          neutral: "#000000",
          "base-100": "#ffffff",
          "base-200": "#f7f7f7",
          "base-300": "#eeeeee",
          "base-content": "#000000",
          info: "#ff6600",
          success: "#ff6600",
          warning: "#ff6600",
          error: "#ff6600",
        },
      },
    ],
    defaultTheme: "light",
    darkTheme: "light",
  },
};
