/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: '#0d1117',
          'dark-light': '#161b22',
          'header-link-hover': 'rgba(255,255,255,0.7)',
        },
      },
    },
  },
  plugins: [],
}

