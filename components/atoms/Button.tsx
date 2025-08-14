import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "rounded-2xl px-4 py-2 text-sm transition shadow-sm";
  const styles =
    variant === "ghost"
      ? "bg-transparent hover:bg-gray-100 border"
      : "bg-gray-900 text-white hover:bg-gray-800";
  return <button {...props} className={`${base} ${styles} ${className}`} />;
}
