/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0B0D',
          soft: '#121317',
          card: '#16171C',
          border: '#26272E',
        },
        paper: {
          DEFAULT: '#F4F3EF',
          dim: '#B9B9B4',
        },
        signal: {
          DEFAULT: '#3D6BFF',
          dim: '#7C93D9',
          glow: '#5A7FFF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -10px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
