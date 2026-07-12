/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        surface: '#1E293B',
        'surface-light': '#27364B',
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
        accent: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
        },
        text: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-mesh':
          'radial-gradient(at 20% 20%, rgba(59,130,246,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(34,197,94,0.10) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.3)',
        'glow-green': '0 0 40px rgba(34, 197, 94, 0.25)',
        card: '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'spin-slow': 'spin 14s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        gradient: 'gradient 8s ease infinite',
        blob: 'blob 12s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '33%': { borderRadius: '65% 35% 40% 60% / 55% 65% 35% 45%' },
          '66%': { borderRadius: '35% 65% 55% 45% / 40% 50% 50% 60%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
