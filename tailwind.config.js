/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './app.vue',
    './app.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE6',
          light: '#FAF5EC',
          dark: '#EBE2D3'
        },
        domino: {
          DEFAULT: '#3B2F2A',
          light: '#54433A',
          dark: '#2A211D'
        },
        rose: {
          DEFAULT: '#C99AA6',
          dark: '#A47786',
          light: '#DCB5BE'
        },
        avocado: {
          DEFAULT: '#7A8A5E',
          dark: '#5C6B44',
          light: '#A2B285'
        },
        schist: {
          DEFAULT: '#A8A49C',
          light: '#C4BFB5',
          dark: '#7E7B73'
        },
        ink: {
          DEFAULT: '#2A211D',
          dim: '#6A5D54',
          faint: '#8F8378'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(24px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-18px,18px) scale(0.98)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'blob-float': 'blob-float 22s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out both'
      }
    }
  }
};
