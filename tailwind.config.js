/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "monospace"], // Add Geist Mono as a mono font
      },
    },
  },
  plugins: [],
};
