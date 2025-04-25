import { Toast } from "./Toast";
const meta = {
    title: "Components/Feedback/Toast",
    component: Toast,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Info = {
    args: {
        message: "This is an info toast!",
        type: "info",
    },
};
export const Success = {
    args: {
        message: "Operation successful!",
        type: "success",
    },
};
export const Error = {
    args: {
        message: "Something went wrong.",
        type: "error",
    },
};
export const Warning = {
    args: {
        message: "Be careful with this action.",
        type: "warning",
    },
};
