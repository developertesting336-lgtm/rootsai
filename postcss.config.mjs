import tailwindConfig from './tailwind.config.js';

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: tailwindConfig,
    },
  },
};

export default config;
