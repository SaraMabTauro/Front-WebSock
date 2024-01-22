/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#e5fcf8',
          100: '#cceeeb',
          200: '#99dddb',
          300: '#66ccc9',
          400: '#33bbb8',
          500: '#00aaa7',
          600: '#008b8e',
          700: '#006c74',
          800: '#004d5b',
          900: '#002e41',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

