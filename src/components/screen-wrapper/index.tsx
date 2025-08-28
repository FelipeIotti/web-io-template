"use client";
import { ReactNode } from "react";
import { Header } from "../header";

interface ScreenWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ScreenWrapper({ children, className }: ScreenWrapperProps) {
  return (
    <div
      className={`bg-foreground absolute right-0 z-20 flex h-full w-[85%] flex-col rounded pb-4 shadow-md transition-all duration-300 ease-in-out peer-checked:w-[100%]  ${className}`}
    >
      <Header />

      <div className="scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-white flex overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}
