import { defineConfig } from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  env: {
    hideElements: true, // To hide elements like XHR requests
  },
  e2e: {
    baseUrl: "http://localhost:5173", // Choose you localhost
    screenshotOnRunFailure: false, // Don't take screenshots
    video: false, // Don't record videos
    setupNodeEvents(on) {
      installLogsPrinter(on);
    },
  },
});
