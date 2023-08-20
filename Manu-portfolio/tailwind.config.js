/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgb-blue': 'rgb(1, 48, 64)',
      }
    },
  },
  plugins: [],
  
}

