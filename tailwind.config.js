/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chelsea-blue': '#034694',
        'primary-orange': 'orange',
    },
    backgroundImage: {
      'main': "url('@/assets/bg-img.jpg')",
    },
    fontSize: {
      'main-heading': '2.75rem',
      'main-heading-mobile': '2.25rem',
      'card-heading': '1.75rem',
    },
    lineHeight: {
      'heading': 1,
    }
  },
  plugins: [],
},
}