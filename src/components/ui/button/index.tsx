"use client";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`text flex cursor-pointer items-center justify-between gap-2 rounded border px-2 py-1.5 shadow transition-all duration-200 hover:opacity-50 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
