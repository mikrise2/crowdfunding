import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/{pages,components}/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
