import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

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
    extend: {
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [forms, typography],
};
export default config;
