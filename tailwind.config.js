/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#f7d8cc",
          200: "#f0b099",
          300: "#e88966",
          400: "#e16133",
          500: "#d93a00",
          600: "#ae2e00",
          700: "#822300",
          800: "#571700",
          900: "#2b0c00",
        },
        link: {
          100: "#cce4f6",
          200: "#99c9ed",
          300: "#66afe5",
          400: "#3394dc",
          500: "#0079d3",
          600: "#0061a9",
          700: "#00497f",
          800: "#003054",
          900: "#00182a",
        },
      },
      fontFamily: {
        body: ["Noto Sans", "sans-serif"],
        title: ["IBM Plex Sans", "sans-serif"],
      },
      screens: {
        xs: "368px",
      },
    },
  },
  plugins: [],
};
