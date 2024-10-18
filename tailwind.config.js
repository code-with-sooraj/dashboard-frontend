/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        grayCustom: '#B2B2B2',
        grayCustom2: '#686868', // Add custom gray color
      },
    },
  },
  plugins: [],
}



