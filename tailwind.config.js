const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#166534",
        sage: "#a7f3d0",
        "off-white": "#fefce8",
        beige: "#fef9c3",
        charcoal: "#111827",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", ...defaultTheme.fontFamily.serif],
        caveat: ["Caveat", "cursive"],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
