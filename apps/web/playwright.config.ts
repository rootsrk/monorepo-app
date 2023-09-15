import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],
  timeout: 50000,

  expect: {
    timeout: 10000,
    toMatchSnapshot: {
      // Account for minor difference in e.g. text rendering and resolution
      // between headless and in-browser tests.
      threshold: 0.5,
    },
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  //workers: process.env.CI ? 1 : undefined,

  reporter: [process.env.CI ? ['github'] : ['list', 'html']],

  use: {
    baseURL: 'http://localhost:3030',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
};

if (process.env.CI) {
  config.webServer = {
    url: 'http://localhost:3030',
    command: 'pnpm run start',
    cwd: __dirname,
    timeout: 30000,
  };
}

export default config;
