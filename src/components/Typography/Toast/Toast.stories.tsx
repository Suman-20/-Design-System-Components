// src/components/Feedback/Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    message: "This is an info toast!",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    message: "Operation successful!",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong.",
    type: "error",
  },
};

export const Warning: Story = {
  args: {
    message: "Be careful with this action.",
    type: "warning",
  },
};
