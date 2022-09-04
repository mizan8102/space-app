module.exports = {
  // mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/background.jpg')",
        'dark-hero-bg': "url('./src/assets/dark-background.jpg')"
      },
      fontFamily: {
        Barlow: "Barlow Condensed, sans-serif",
        Bellefair: "Bellefair"
      },
      container: {
        padding: '3.5rem',
        center: true
      }
    },
  },
  plugins: [],
}
