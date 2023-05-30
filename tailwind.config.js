/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'trabook-light': '#FEFCFB',
        'trabook-gray': '#F7F8FC',
        'trabook-orange-dark': '#FA7436',
        'trabook-orange-light': '#FD8D3A'
      },

      colors: {
        'trabook-dark': '#222222',
        'trabook-orange-dark': '#FA7436',
        'trabook-orange-light': '#FD8D3A',
        'trabook-gray': '#666'
      },

      fontFamily: {
        poppins: 'Poppins',
        volkhov: 'Volkhov'
      }
    }
  },
  plugins: []
}
