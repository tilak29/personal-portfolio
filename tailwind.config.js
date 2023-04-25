/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {   
    extend: {
      fontFamily:{
        Open: ['Open Sans', 'sans-serif'],
        Rampart: ['Rampart One', 'cursive' ],
    },
    colors: {
      'regal-silver': '#8d8d8d',
    },
  },
  },
  plugins: [],
}