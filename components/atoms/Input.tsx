import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 ${props.className ?? ""}`}
    />
  );
}
