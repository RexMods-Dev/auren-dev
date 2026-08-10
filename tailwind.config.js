/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "var(--onyx)",
        alabaster: "var(--alabaster)",
        champagne: "var(--champagne)",
        charcoal: "var(--charcoal)",
        ivory: "var(--ivory)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
