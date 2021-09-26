module.exports = {
  purge: [
    "public/**/*.html",
    "public/js/components/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        antonio: "Antonio",
        cabinsketch: "Cabin Sketch"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
