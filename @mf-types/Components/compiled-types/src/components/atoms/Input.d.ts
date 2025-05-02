import { type ReactNode } from "react";
interface IInput {
    type: "password" | "email" | "text";
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
}
export default function Input({ type, placeholder, value, onChange, }: IInput): ReactNode;
export {};
