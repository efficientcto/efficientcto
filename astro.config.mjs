import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://efficientcto.com',
  output: 'static',
  integrations: [],
  vite: {
    server: {
      port: 4321
    }
  }
});
