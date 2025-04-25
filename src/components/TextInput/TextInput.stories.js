import { TextInput } from "./TextInput";
// Storybook config
const meta = {
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
// ✅ Default input
export const Default = {};
// ✅ Input with value
export const WithValue = {
    args: {
        value: "Suman Raul",
    },
};
// ✅ Error state
export const Error = {
    args: {
        error: "Name is required",
    },
};
// ✅ Disabled input
export const Disabled = {
    args: {
        disabled: true,
    },
};
// ✅ Small variant
export const Small = {
    args: {
        size: "sm",
    },
};
// ✅ Large variant
export const Large = {
    args: {
        size: "lg",
    },
};
