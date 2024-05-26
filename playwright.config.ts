import path from "path";
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

const testEnvPath = path.resolve(process.cwd(), ".env.test");

dotenv.config({
  path: testEnvPath,
});

const SITE_PORT = 8080;

export default defineConfig({
  testDir: "./e2e",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 2,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    [
      "html",
      {
        outputFolder: "./e2e/coverage",
        filename: "index.html",
        open: "on-failure",
      },
    ],
  ],

  use: {
    baseURL: `http://localhost:${SITE_PORT}`,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],

  webServer: {
    command: `rm -rf .next && npx next dev -p ${SITE_PORT}`,
    port: SITE_PORT,
    reuseExistingServer: !process.env.CI,
  },
});
