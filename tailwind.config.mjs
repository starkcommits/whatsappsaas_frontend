/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcf8c6', // WhatsApp chat bubble green
          200: '#bbf2c8',
          300: '#86efac',
          400: '#4ade80',
          500: '#25d366', // WhatsApp vibrant green
          600: '#128c7e', // WhatsApp signature teal-green
          700: '#075e54', // WhatsApp deep dark teal
          800: '#054c44',
          900: '#033a34',
          950: '#012420',
        },
        surface: {
          50: '#f0f2f5', // WhatsApp web background
          100: '#efeae2', // WhatsApp chat wallpaper tone
          200: '#e9edef', // WhatsApp light gray borders
          300: '#d1d7db', // WhatsApp dividers
          400: '#8696a0', // WhatsApp subtext
          500: '#667781',
          600: '#54656f', // WhatsApp primary secondary text
          700: '#3b4a54',
          800: '#202c33',
          900: '#111b21', // WhatsApp darkest text
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(22, 163, 74, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap, 1rem)))' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration, 40s) linear infinite',
      },
    },
  },
  plugins: [],
};
