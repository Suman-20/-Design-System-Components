// src/components/Feedback/Toast.tsx
import React from "react";
import { cn } from "../../../utils/cn"; 

type ToastType = "info" | "success" | "error" | "warning";

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose?: () => void;
}

const toastVariants: Record<ToastType, string> = {
  info: "bg-blue-100 text-blue-800 border-blue-300",
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

export const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
  return (
    <div
      role="status"
      className={cn(
        "flex items-center justify-between gap-4 p-4 rounded-md border shadow-md animate-fade-in transition-all",
        toastVariants[type]
      )}
    >
      <span className="text-sm font-medium">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-sm font-semibold hover:underline text-inherit"
        >
          Close
        </button>
      )}
    </div>
  );
};




