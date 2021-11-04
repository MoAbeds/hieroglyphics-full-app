module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/files/Bg.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),
],
}
