/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '0px',
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        '400px': '400px',
        '500px': '500px',
        '550px': '550px',
        '750px': '750px',
        '700px': '700px',
        '900px': '900px',
        '600px': '600px',
        '650px': '650px',
        1100: '1100px',
      },
      height: {
        '500px': '500px',
      },
      fontFamily: {
        lato: ['Lato'],
      },
    },
    colors: {
      'mt-grey': '#e5e5e5',
      'light-pink': '#f8cccc',
      'light-blue': '#f0f7fc',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
