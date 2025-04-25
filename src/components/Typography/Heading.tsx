import React from "react";
import clsx from "clsx"; // Optional: for merging classes

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
};

const Heading: React.FC<HeadingProps> = ({ level, children, className = "" }) => {
  const tagName = `h${level}` as HeadingLevel;

  return React.createElement(
    tagName,
    {
      className: clsx(levelStyles[tagName], className),
    },
    children
  );
};

export default Heading;




