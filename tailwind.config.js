/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffdfa',
          100: '#fff9f2',
          200: '#fef3e7',
          300: '#fae3ce',
          400: '#edd0b7',
        },
        frosting: {
          light: '#fff0f4',
          pink: '#ffd1dc',
          rose: '#ff9ebb',
          berry: '#f472b6',
          strawberry: '#e11d48',
        },
        chocolate: {
          subtle: '#8d6e63',
          DEFAULT: '#5d4037',
          dark: '#3e2723',
          rich: '#27140e',
        },
        caramel: {
          light: '#fef5ea',
          soft: '#fbe7c6',
          DEFAULT: '#e67e22',
          gold: '#f39c12',
          dark: '#b35400',
        },
        pistachio: {
          light: '#f0fdf4',
          soft: '#dcfce7',
          DEFAULT: '#86efac',
          accent: '#22c55e',
        },
        lavender: {
          soft: '#f3e8ff',
          DEFAULT: '#d8b4fe',
        }
      },
      fontFamily: {
        display: ['"Fredoka"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'sweet': '0 10px 25px -5px rgba(244, 114, 182, 0.25), 0 8px 10px -6px rgba(62, 39, 35, 0.06)',
        'sweet-lg': '0 20px 35px -10px rgba(244, 114, 182, 0.3), 0 10px 15px -3px rgba(62, 39, 35, 0.08)',
        'pastry': '0 15px 35px -5px rgba(62, 39, 35, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
        'pastry-hover': '0 25px 50px -12px rgba(62, 39, 35, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.9)',
        'glow-pink': '0 0 30px rgba(255, 158, 187, 0.5)',
        'glow-caramel': '0 0 30px rgba(243, 156, 18, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-2deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(0.97)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.6' },
          '50%': { transform: 'translateY(-15px) scaleX(1.2)', opacity: '0.4' },
          '100%': { transform: 'translateY(-30px) scaleX(1.5)', opacity: '0' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
        steam: 'steam 3s ease-out infinite',
      }
    },
  },
  plugins: [],
};
