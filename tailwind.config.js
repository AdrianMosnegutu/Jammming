/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "text-suspense": {
          "0%": { content: "'Loading'" },
          "25%": { content: "'Loading.'" },
          "50%": { content: "'Loading..'" },
          "75%": { content: "'Loading...'" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        loading: "spin 1s infinite",
        "text-loading": "text-suspense 2s steps(4, end) infinite",
      },
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
