/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fff',
        },
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },  
    },
  },
  plugins: [],
}