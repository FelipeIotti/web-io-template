import { redirect } from "next/navigation";
import { AppError } from "./app-error";

export function isAppError(data: any): data is ReturnType<AppError["toJSON"]> {
  if (data?.status === 401) {
    if (typeof window === "undefined") {
      redirect("/api/auth/sign-out");
    } else if (typeof window !== "undefined") {
      window.location.href = "/api/auth/sign-out";
    }
  }

  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.status === "number" &&
    (data.message === undefined || typeof data.message === "string")
  );
}
