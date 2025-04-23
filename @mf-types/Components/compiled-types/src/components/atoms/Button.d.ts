import { type ReactNode } from "react";
interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    children: ReactNode;
}
export default function Button({ disabled, onClick, children, }: ButtonProps): ReactNode;
export {};
