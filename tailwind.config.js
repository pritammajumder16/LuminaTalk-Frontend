/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFFFF",
          100: "#E4FFD5",
          200: "#33EB6B",
          300: "#70827",
          400: "#010002",
        },
        secondary: {
          100: "#C5C1C7",
          200: "#838189",
          300: "#626C7E",
          400: "#333034",
        },
        grey: {
          75: "#F4F2FA",
          100: "#F0EDF1",
          200: "#E7E4E8",
          300: "#C6C3C7",
          400: "#A4A3A6",
          500: "#85838D",
          600: "#817E82",
        },
        link: "#0E7EF8",
        negative: "#EB2733",
        positive: "#3AE971",
        warning: "#FDE965",
      },
    },
  },
  plugins: [],
};
