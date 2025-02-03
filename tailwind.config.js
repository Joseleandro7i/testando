/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './app/components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#8ca0e1',
        dark: '#080a0e',
        'ligth-blue': '#2a2961',
        'bg-default-dark': '#0D1117',
        'custom-white': '#2f3b45',
        'dark-clear': '#0d1216b3',
        'ligth-dark': '#15191c',
        'ligth-gray': '#16161c',
      },
      boxShadow: {
        customShadow: '#000000e8 0px 20px 30px -10px',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        serif: ['Noto Serif JP', 'serif'],
        domine: ['Domine', 'serif'], 
      },
    },
  },
  plugins: [],
};
