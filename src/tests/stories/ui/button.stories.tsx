import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

export default {
  component: Button,
  title: "ui/button",
  tags: ["ui", "autodocs"],
  args: {
    children: "Button",
    variant: "default",
  },
  argTypes: {
    asChild: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: "multi-select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};
