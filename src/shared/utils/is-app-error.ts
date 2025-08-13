import { redirect } from "next/navigation";
import { AppError } from "./app-error";

export function isAppError(data: Record<string, string>[] | AppError) {
  if ((data as AppError)?.status === 401) {
    if (typeof window === "undefined") {
      redirect("/api/auth/sign-out");
    } else if (typeof window !== "undefined") {
      window.location.href = "/api/auth/sign-out";
    }
  }

  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as AppError)?.status === "number" &&
    ((data as AppError)?.message === undefined ||
      typeof (data as AppError)?.message === "string")
  );
}
