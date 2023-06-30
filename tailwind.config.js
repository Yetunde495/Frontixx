/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx,}',
  './src/app/**/*.{js,ts,jsx,tsx, mdx}',],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(80, 102, 144, 0.1) 25px 60px 125px -25px, rgba(0, 0, 0, 0.2) 16px 40px 75px -40px',
      },
    },
  },
  plugins: [],
}

