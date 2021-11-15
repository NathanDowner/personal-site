module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'bg-blue': '#0B1120',
      red: '#F60512',
      light: '#ffffff',
      'card-bg': '#111A32',
      'container-bg': '#1D222F',
      overlay: '#2A4078',
    },
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
      mono: ['"Fira Code"', 'mono'],
    },
    extend: {
      backgroundImage: {
        'landing-img': "url('/src/assets/landing-bg.png')",
      },
      backgroundPosition: {
        'right-4': 'center right -12rem',
      },
      fontSize: {
        huge: '180px',
      },
      height: {
        98: '402px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
