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
        '320px': '320px',
        '400px': '400px',
        '500px': '500px',
        '550px': '550px',
        '640px': '640px',
        '750px': '750px',
        '700px': '700px',
        '900px': '900px',
        '600px': '600px',
        '650px': '650px',
        1100: '1100px',
      },
      height: {
        '260px': '260px',
        '320px': '320px',
        '400px': '400px',
        '500px': '500px',
        '640px': '640px',
      },
      fontFamily: {
        Gilroy: ['Gilroy'],
      },
    },
    colors: {
      'primary-btn': '#438FFE',
      'primary-grey': '#4E4D4B',
      'mt-grey': '#e5e5e5',
      'light-pink': '#f8cccc',
      'accent-grey': '#bfbfbf',
      'light-blue': '#f0f7fc',
      'light-gret': '#d3d3d3',
      'text-bron': '#B58863',
      'off-bron': '#F0D9B5',
      'player-tag': '#383531',
      colors
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
