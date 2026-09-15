import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.1)'
      },
      colors: {
        stone: {
          950: '#1d1d1d'
        }
      }
    }
  },
  plugins: []
};

export default config;
