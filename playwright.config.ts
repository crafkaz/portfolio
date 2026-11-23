import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./test/e2e",
  use: { baseURL, browserName: "chromium", reducedMotion: "reduce" },
  webServer: {
    command: "bun run start --hostname 127.0.0.1 --port 3100",
    url: baseURL,
  },
});
