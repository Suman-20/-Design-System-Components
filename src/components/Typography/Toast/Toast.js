import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../utils/cn";
const toastVariants = {
    info: "bg-blue-100 text-blue-800 border-blue-300",
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};
export const Toast = ({ message, type = "info", onClose }) => {
    return (_jsxs("div", { role: "status", className: cn("flex items-center justify-between gap-4 p-4 rounded-md border shadow-md animate-fade-in transition-all", toastVariants[type]), children: [_jsx("span", { className: "text-sm font-medium", children: message }), onClose && (_jsx("button", { onClick: onClose, className: "text-sm font-semibold hover:underline text-inherit", children: "Close" }))] }));
};
