/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-main": "#121212",
        "dark-secondary": "#1A1A1A",
        "dark-tertiary": "#212121",
        "light-main": "#E6E6E6",
        "light-secondary": "#A7A7A7",
        "spotify-green": "#1DB954",
      },
    },
  },
  plugins: [],
};
