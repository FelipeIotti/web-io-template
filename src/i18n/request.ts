import { cookiesLanguageGet } from "@/shared/cookies/language-cookies";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await cookiesLanguageGet();

  return {
    locale,
    messages: (await import(`../shared/translations/${locale}.json`)).default,
  };
});
