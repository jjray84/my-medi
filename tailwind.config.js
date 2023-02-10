/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{handlebars}"], //insert other files that will use tailwind here
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
