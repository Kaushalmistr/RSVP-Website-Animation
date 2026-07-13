/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8F8',
          100: '#FBEBEB',
          200: '#F7D6D6',
          300: '#F0B7B7',
          400: '#E68F8F',
          500: '#D4A5A5', // Blush Rose Gold
          600: '#C28585',
          700: '#A86060',
          800: '#8E4343',
          900: '#752F2F',
        },
        accent: {
          50: '#F4F7F9',
          100: '#E4ECF2',
          200: '#C4D5E3',
          300: '#94B4CD',
          400: '#5F8CB2',
          500: '#1B3A5C', // Navy Blue
          600: '#152F4B',
          700: '#10243B',
          800: '#0C1A2B',
          900: '#07101B',
        },
        gold: {
          100: '#FAF1DE',
          500: '#C9A961', // Gold Accent
          700: '#9B7F43',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        cursive: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
}
