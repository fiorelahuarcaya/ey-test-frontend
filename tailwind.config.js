/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ffe600',
          600: '#e6cf00',
          700: '#ccb800',
          800: '#b3a100',
          900: '#998a00',
        },
    }},
  },
  plugins: [],
}