import { format } from "date-fns";

export function formatDate(date: string | Date) {
  return format(date, "DD/MM/YYYY [às] HH:mm");
}
