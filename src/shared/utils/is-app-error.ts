import { AppError } from "./app-error";

export function isAppError(data: Record<string, string>[] | AppError) {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as AppError)?.status === "number" &&
    ((data as AppError)?.message === undefined ||
      typeof (data as AppError)?.message === "string")
  );
}
