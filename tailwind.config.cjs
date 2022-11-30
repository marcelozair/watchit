/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        site: {
          primary: "#FFD600",
          footer: "#252525"
        },
        letters: {
          black: "#242424"
        }
      },
      backgroundImage: {
        hero: "url('/images/jpg/watchit-hero.jpg')"
      }
    }
  },
  plugins: []
};
