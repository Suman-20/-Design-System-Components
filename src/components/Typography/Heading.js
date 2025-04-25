import React from "react";
import clsx from "clsx"; // Optional: for merging classes
const levelStyles = {
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-semibold tracking-tight",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
};
const Heading = ({ level, children, className = "" }) => {
    const tagName = `h${level}`;
    return React.createElement(tagName, {
        className: clsx(levelStyles[tagName], className),
    }, children);
};
export default Heading;
