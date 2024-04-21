/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/*.{html,js}"],
  theme: {
    fontFamily: {
      worksans: ["WorkSans", "sans-serif"],
      "work-sans-italic": ["WorkSans"],
    },
    extend: {
      backgroundImage: {
        "desktop-bg": "url('assets/images/background-pattern-desktop.svg')",

        // colors: {

        //   lightPink: "hsl(275, 100%, 97%)",
        //   grayishPurple: "hsl(292, 16%, 49%)",
        //   darkPurple: "hsl(292, 42%, 14%)",
        // },
      },
    },
  },
  plugins: [],
};
