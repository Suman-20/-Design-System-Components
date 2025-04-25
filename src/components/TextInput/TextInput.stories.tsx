import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";


// Storybook config

const meta: Meta<typeof TextInput> = {

    
  title: "Data Entry/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
  parameters: {
    docs: {
      description: {
        component: "A basic text input component with label, error state and responsiveness.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// ✅ Default input
export const Default: Story = {};

// ✅ Input with value
export const WithValue: Story = {
  args: {
    value: "Suman Raul",
  },
};

// ✅ Error state
export const Error: Story = {
  args: {
    error: "Name is required",
  },
};

// ✅ Disabled input
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// ✅ Small variant
export const Small: Story = {
  args: {
    size: "sm",
  },
};

// ✅ Large variant
export const Large: Story = {
  args: {
    size: "lg",
  },
};