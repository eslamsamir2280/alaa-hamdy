/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // هنا ممكن نضيف خطوط عربية زي "Cairo" مستقبلاً
      fontFamily: {
        sans: ['Cairo', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}