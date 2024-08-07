/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-grid': "linear-gradient(to right, #f1f1f1 2px, transparent 2px), linear-gradient(to bottom, #f1f1f1 2px, transparent 2px);",
      },
      fontFamily: {
        OuterSans: ['OuterSans', 'sans-serif'],
      },
      colors: {
        'dyblue': '#698DF7',
        'dyblack': '#435058',
        'dywhite': '#F1F2EE',
        'dybluealpha': '#698DF750',
        'otomblue': '#8FE4FF',
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}