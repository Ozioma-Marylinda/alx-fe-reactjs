/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // for Vite
    "./public/index.html",    // for CRA (safe to include)
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class' if required
  theme: {
    extend: {},
  },
  plugins: [],
}