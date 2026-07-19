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
        cream: 'hsl(38 50% 95%)',
        ink: 'hsl(25 30% 18%)',
        rose: {
          DEFAULT: 'hsl(348 60% 50%)',
          deep: 'hsl(348 65% 35%)',
        },
        'gold-soft': 'hsl(36 60% 75%)',
        sage: {
          deep: 'hsl(95 25% 45%)',
          soft: 'hsl(95 30% 88%)',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'Cinzel', 'serif'],
        'serif-display': ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        cursive: ['var(--font-great-vibes)', 'Great Vibes', 'cursive'],
      },
      boxShadow: {
        soft: '0 8px 30px -10px hsl(25 30% 18% / 0.15)',
        elegant: '0 20px 60px -20px hsl(95 25% 25% / 0.25)',
      },
      backgroundImage: {
        'envelope-scene': 'linear-gradient(135deg, hsl(95 30% 80%) 0%, hsl(95 22% 68%) 100%)',
      },
    },
  },
  plugins: [],
}
