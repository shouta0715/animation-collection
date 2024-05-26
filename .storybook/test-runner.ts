import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";

import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      includedImpacts: ["critical", "serious"],
      detailedReport: true,
      axeOptions: storyContext.parameters?.a11y?.options,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
