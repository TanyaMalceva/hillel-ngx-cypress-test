import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
      retries: 1,
      pageLoadTimeout: 500000,
      responseTimeout: 500000,
      baseUrl: 'https://jsonplaceholder.typicode.com',
      specPattern: 'cypress/e2e/api/*.cy.{js,jsx,ts,tsx}',
      setupNodeEvents(on, config) {
     },
  },
});
