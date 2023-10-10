/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily:{
      headz : ["Yatra One", "cursive"],
      titlez : ['Noto Sans Devanagari', 'sans-serif'],
      bodyz : ['Noto Serif Devanagari', 'serif'],
      abcz : ['Sarala', 'sans-serif'] 
    },
  },
  plugins: [
    
  ],
}
