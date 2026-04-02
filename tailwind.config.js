/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        heaven: {
          pink: '#ff6b9d',
          rose: '#f472b6',
          purple: '#a855f7',
          deep: '#6d28d9',
          gold: '#e8a838',
          /** Light theme surfaces */
          cream: '#faf7fc',
          blush: '#fff5f8',
          surface: '#ffffff',
          ink: '#1a1520',
          muted: '#5c5368',
          /** Legacy alias — prefer cream for page bg */
          dark: '#faf7fc',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh':
          'linear-gradient(145deg, #fff8fb 0%, #f5effa 35%, #ede4f7 65%, #faf0f5 100%)',
      },
      boxShadow: {
        glow: '0 8px 40px rgba(255, 107, 157, 0.22), 0 4px 24px rgba(168, 85, 247, 0.12)',
        'glow-gold': '0 4px 24px rgba(232, 168, 56, 0.25)',
        glass: '0 8px 32px rgba(26, 21, 32, 0.08)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
