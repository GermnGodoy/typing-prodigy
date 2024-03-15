/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': {
            '--tw-bg-opacity': '100%'
          },
          '50%': {
            '--tw-bg-opacity': '50%'
          }
        }
      },
      animation: {
        'blink' : 'blink 0.75s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

