const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // presets: [require('./my-tailwind-preset.js')],
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
    screens: {
      'max-sm': { max: '1023px' },
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'landing-img': "url('/src/assets/landing-bg.png')",
        'portrait-img': 'url(/src/assets/portrait.jpeg)',
      },
      backgroundPosition: {
        'right-4': 'center right -12rem',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(96px)' },
          '100%': { transform: 'translateX(calc(calc(100%)*-1))' },
        },
        ticker2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(calc(100%)*-1))' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        ticker2: 'ticker 30s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
