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
      className={`bg-foreground flex h-full w-full flex-col rounded pb-4 shadow-md ${className}`}
    >
      <Header />

      <div className="scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-white flex overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}
