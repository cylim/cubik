import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
    },
    extend: {
      '*': {
        //todo put this into styles.css
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  darkMode: 'class',
};
export default config;
