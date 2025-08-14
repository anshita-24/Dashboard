import * as React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 ${props.className ?? ""}`}
    />
  );
}
