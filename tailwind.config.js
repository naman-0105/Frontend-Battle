/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          light: '#8A84FF',
          dark: '#5046E5',
        },
        secondary: {
          DEFAULT: '#00D9FF',
          light: '#4CE5FF',
          dark: '#00B8D9',
        },
        dark: {
          DEFAULT: '#0F1115',
          light: '#1A1D23',
          lighter: '#252A35',
          dark: '#090A0C',
        },
        light: {
          DEFAULT: '#E2E8F0',
          dark: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}