module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#001d3d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
