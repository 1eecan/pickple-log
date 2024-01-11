import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        GRAY_100: '#F3F4F6',
        GRAY_200: '#E5E7EB',
        GRAY_300: '#D1D5DB',
        GRAY_400: '#9CA3AF',
        GRAY_500: '#6B7280',
        GRAY_600: '#4B5563',
        GRAY_700: '#374151',
        GRAY_800: '#1F2937',
        GRAY_900: '#111827',
        RED_100: '#FEE2E2',
        RED_200: '#FECACA',
        RED_300: '#FCA5A5',
        RED_400: '#F87171',
        RED_500: '#EF4444',
        RED_600: '#DC2626',
        RED_700: '#B91C1C',
        RED_800: '#991B1B',
        RED_900: '#7F1D1D',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
export default config;
