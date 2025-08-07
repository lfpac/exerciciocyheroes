import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'nd8nd1',
  e2e: {
    baseUrl: 'http://localhost:3000',
    async setupNodeEvents(on, config) {
      const { createHero, deleteHero } = await import('./cypress/support/data.ts');

      on('task', {
        createHero,
        deleteHero,
      });

      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});