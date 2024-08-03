/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'verde-ensou': '#313d25',
        'verde-claro-ensou': '#9e9a36',
        'rojo-ensou': '#450d27',
        'naranja-ensou': '#b3522e',
        'back-ensou': '#baae9d'
      },
      fontFamily: {
          'singa': ['aliens', 'sans-serif'],
          'rampiro': ['rampiro', 'sans-serif'],
          'acello': ['acello', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

