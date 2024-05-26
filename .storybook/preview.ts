import { BpStory } from "./../src/tests/config/storybook";
import type { Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import "../src/styles/tailwind.css";

const nextNavigation = {
  push: fn((...args: any[]) => {
    action("nextNavigation.push")(...args);
  }),
  replace: fn((...args: any[]) => {
    action("nextNavigation.replace")(...args);
  }),
  forward: fn((...args: any[]) => {
    action("nextNavigation.forward")(...args);
  }),
  back: fn((...args: any[]) => {
    action("nextNavigation.back")(...args);
  }),
  prefetch: fn((...args: any[]) => {
    action("nextNavigation.prefetch")(...args);
  }),
  refresh: fn(() => {
    action("nextNavigation.refresh")();
  }),
};

const preview: Preview = {
  parameters: {
    ...BpStory.parameters,
    nextjs: {
      appDirectory: true,
      navigation: nextNavigation,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
