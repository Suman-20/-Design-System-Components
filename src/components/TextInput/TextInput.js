var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TextInput = (_a) => {
    var { label, error, size = "md" } = _a, props = __rest(_a, ["label", "error", "size"]);
    const sizeClasses = {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-3",
        lg: "text-lg py-3 px-4",
    };
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && _jsx("label", { className: "font-medium", children: label }), _jsx("input", Object.assign({}, props, { className: `border rounded-md ${sizeClasses[size]} ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500` })), error && _jsx("span", { className: "text-sm text-red-500", children: error })] }));
};
