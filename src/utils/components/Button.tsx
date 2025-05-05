import { type ReactNode } from "react";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  disabled = false,
  onClick,
  children,
}: ButtonProps): ReactNode {
  return (
    <button
      className={`${
        disabled ? "bg-gray-700 text-gray-400" : "bg-gray-900 text-white"
      } rounded-md my-2 p-2`}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
}
