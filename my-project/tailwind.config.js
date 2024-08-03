/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], 
      },
      colors: {
        purpleMain: '#5532EB',  
      },
      width: {
        '96': '96%',
      },
      lineHeight: {
        tighter: 1.1,
      }
    },
  },
  plugins: [],
}