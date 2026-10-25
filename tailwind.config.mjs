/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
      },
      colors: {
        ink: {
          50: '#F5F7F9',
          100: '#E8ECF0',
          300: '#B8C2CC',
          500: '#5B6B7C',
          700: '#243447',
          900: '#0B1B2E',
          950: '#07111F',
        },
        surface: {
          50: '#F5F7F9',
          100: '#E8ECF0',
          200: '#E8ECF0',
          300: '#B8C2CC',
          400: '#8A99A8',
          500: '#5B6B7C',
          600: '#415162',
          700: '#243447',
          800: '#142335',
          900: '#0B1B2E',
          950: '#07111F',
        },
        brand: {
          50: '#EEF9F5',
          100: '#D9F3EA',
          200: '#B5E8D6',
          300: '#7CD4B7',
          400: '#3EBD95',
          500: '#12A57D',
          600: '#0B7F5F',
          700: '#0B6B52',
          800: '#08503D',
          900: '#05372A',
          950: '#021F17',
        },
        signal: '#D7F75B',
        success: '#12A57D',
        warning: '#F5A524',
        danger: '#E5484D',
        info: '#3B82F6',
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'hairline': '0 0 0 1px #E8ECF0',
        'soft': '0 2px 8px -2px rgba(7, 17, 31, 0.05), 0 1px 3px -1px rgba(7, 17, 31, 0.03)',
        'soft-lg': '0 12px 28px -6px rgba(7, 17, 31, 0.08), 0 4px 10px -2px rgba(7, 17, 31, 0.04)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        'shine-pulse': {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.4s ease-out forwards',
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shine-pulse': 'shine-pulse var(--shine-pulse-duration, 14s) infinite linear',
      },
    },
  },
  plugins: [],
};
