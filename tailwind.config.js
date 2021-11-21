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
        'portrait-img': 'url(/src/assets/portrait.jpeg)',
      },
      backgroundPosition: {
        'right-4': 'center right -12rem',
      },
      fontSize: {
        huge: '180px',
      },
      height: {
        portrait: '402px',
      },
      width: {
        portrait: '268px',
      },
      gridTemplateColumns: {
        'job-entry': '1fr auto 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
