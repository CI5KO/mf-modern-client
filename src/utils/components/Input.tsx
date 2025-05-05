import { type ReactNode } from "react";

interface IInput {
  type: "password" | "email" | "text";
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
}: IInput): ReactNode {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="rounded-md bg-gray-900 text-white my-2 p-2 focus:border-white"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
