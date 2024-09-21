/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          700: "#18181b",
        },
        gray: {
          100: "#f4f4f5",
          150: "#a1a1aa",
          200: "#71717a",
        },
      },
    },
  },
  plugins: [],
};
