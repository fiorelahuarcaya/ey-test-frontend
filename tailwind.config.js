/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fffde6",
          100: "#fffacc",
          200: "#fff599",
          300: "#fff066",
          400: "#ffeb33",
          500: "#ffe600",
          600: "#e6cf00",
          700: "#ccb800",
          800: "#b3a100",
          900: "#998a00",
        },
      },
    },
  },
  plugins: [],
};
