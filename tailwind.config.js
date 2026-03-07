/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bae5cd',
          300: '#8ad1ad',
          400: '#56b687',
          500: '#339b6a',
          600: '#247d54',
          700: '#1d6445',
          800: '#195038',
          900: '#16422f',
        },
        accent: {
          50: '#fdf8f6',
          100: '#f8ebe3',
          200: '#f0d5c7',
          300: '#e4b7a0',
          400: '#d69173',
          500: '#c87654',
          600: '#b45c3f',
          700: '#964a34',
          800: '#7b3f2f',
          900: '#66372a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
