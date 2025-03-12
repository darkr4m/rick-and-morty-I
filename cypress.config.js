import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
