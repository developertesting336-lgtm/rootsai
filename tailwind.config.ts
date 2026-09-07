import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy
        'roots-navy': {
          900: '#1A2A4A',
          800: '#2A4060',
          700: '#3A5080',
        },
        // Charcoal/Dark
        'roots-charcoal': '#1A1A1A',
        // White/Off-white
        'roots-white': '#FAFAF8',
        'roots-white-pure': '#FFFFFF',
        // Grays/Muted
        'roots-muted': '#6B7280',
        'roots-border': '#D8DEE8',
        'roots-light': '#F3F4F6',
        // Status
        'roots-success': '#27AE60',
        'roots-warning': '#F39C12',
        'roots-error': '#C0392B',
        'roots-info': '#3B82F6',
      },
      fontFamily: {
        sans: ['"Inter"', '"Arial"', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '34px',
        '5xl': '48px',
      },
      lineHeight: {
        'body': '1.625',
        'h1': '1.25',
        'h1lg': '1.167',
        '2xl': '1.4',
        '3xl': '1.333',
        'xl': '1.5',
      },
      spacing: {
        'touch': '44px',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
      maxWidth: {
        'container': '1440px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '120px',
      },
      zIndex: {
        'skip': '999',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
