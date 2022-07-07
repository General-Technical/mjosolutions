module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#4bbda4",
      secondary: "#ffffff",
      background: "#22293b",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      dropShadow: {
        "3xl": "3px 3px 3px rgba(75, 189, 164, 0.5)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
