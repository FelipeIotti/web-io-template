"use client";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ToastContextProps {
  showToast: (message: string, type?: "error" | "success" | "info") => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"error" | "success" | "info">("error");

  function showToast(
    msg: string,
    toastType: "error" | "success" | "info" = "error"
  ) {
    setMessage(msg);
    setType(toastType);
  }

  useEffect(() => {
    if (message) {
      toast[type](message);
      setMessage(null);
    }
  }, [message, type]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
}
