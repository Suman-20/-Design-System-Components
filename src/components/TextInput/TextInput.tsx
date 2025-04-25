import React from "react";



export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}
export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  size = "md",
  ...props
}) => {
  const sizeClasses = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-3",
    lg: "text-lg py-3 px-4",
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <input
        {...props}
        className={`border rounded-md ${sizeClasses[size]} ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};