import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      gray: colors.zinc,
      primary: colors.pink,
      secondary: colors.orange,
    },
    aspectRatio: {
      square: '1 / 1',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};
export default config;
