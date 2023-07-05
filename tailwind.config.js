/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#0FCFEC',
      secondary: '#19D3AE',
      acen:'#3A4256',
      neuatral: '#3D4451',
      base: '#FFFFFF',
    },
  },
  plugins: [require("daisyui")],
}

