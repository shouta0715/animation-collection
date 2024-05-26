/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

const alias = {
  "@": `${__dirname}/src`,
};

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./__tests__/setup.ts"],
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      all: false,
      reporter: ["html", "text", "json", "json-summary"],
      reportOnFailure: true,
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      reportsDirectory: "./coverage",
      exclude: ["**/node_modules/**"],
    },
    exclude: [...configDefaults.exclude, "e2e/**/*", "*.config.{ts,js,tsx}"],
  },
  resolve: { alias },
});
