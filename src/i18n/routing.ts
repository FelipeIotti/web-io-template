import { defineRouting } from "next-intl/routing";

export const locales = ["br", "en", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "br",
});
