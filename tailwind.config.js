module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      'bg-blue': '#0B1120',
      red: '#F60512',
      light: '#ffffff',
      violet: '#B7CBFF',
      'card-bg': '#111A32',
      'container-bg': '#1D222F',
      overlay: '#2A4078',
      'project-link-bg': '#22325C',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
