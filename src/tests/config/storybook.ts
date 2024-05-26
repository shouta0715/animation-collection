import { StoryObj } from "@storybook/react";

const spViewport = {
  name: "sp",
  styles: {
    width: "375px",
    height: "100%",
  },
};

const smViewport = {
  name: "sm",
  styles: {
    width: "640px",
    height: "100%",
  },
};

const mdViewport = {
  name: "md",
  styles: {
    width: "768px",
    height: "100%",
  },
};

const lgViewport = {
  name: "lg",
  styles: {
    width: "1024px",

    height: "100%",
  },
};

const xlViewport = {
  name: "xl",
  styles: {
    width: "1280px",
    height: "100%",
  },
};

const xxlViewport = {
  name: "2xl",
  styles: {
    width: "1536px",
    height: "100%",
  },
};

export const viewports = {
  sp: spViewport,
  sm: smViewport,
  md: mdViewport,
  lg: lgViewport,
  xl: xlViewport,
  "2xl": xxlViewport,
};

export const BpStory: StoryObj = {
  parameters: {
    viewport: {
      viewports,
    },
  },
};

type Viewport = keyof typeof viewports;
export const selectViewport = (viewport: Viewport) => {
  return {
    defaultViewport: viewport,
  };
};
