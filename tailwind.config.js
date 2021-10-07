module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile' : '280px',
      'xl' : '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
