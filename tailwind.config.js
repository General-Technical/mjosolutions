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
        display: ["Josefin Sans", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0.2, 0.6, 0.8) infinite",
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
