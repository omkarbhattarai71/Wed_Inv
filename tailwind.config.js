/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        burgundy: '#800020',
        cream: '#FFF8F0',
      },
      backgroundImage: {
        'gradient-wedding': 'linear-gradient(135deg, #800020 0%, #D4AF37 100%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
