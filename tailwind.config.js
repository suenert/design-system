/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /space-(x|y)/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  plugins: [require("@tailwindcss/forms")],
};
