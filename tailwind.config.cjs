/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        letters: {
          black: "#242424"
        }
      },
      backgroundImage: {
        hero: "url('/images/svg/watchit-hero.svg')"
      }
    }
  },
  plugins: []
};
