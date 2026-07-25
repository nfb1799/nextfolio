import { ButtonHTMLAttributes } from "react";

export const buttonBase = "px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed inline-flex items-center justify-center";

export const buttonVariants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-300",
  secondary: "border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50",
  ghost: "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants;
};

export default function Button({
  variant = "secondary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    />
  );
}