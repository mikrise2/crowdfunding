import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
