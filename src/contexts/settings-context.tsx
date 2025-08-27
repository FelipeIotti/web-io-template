"use client";
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useTransition,
} from "react";

import {
  cookiesLanguageGet,
  cookiesLanguageSave,
} from "@/shared/cookies/language-cookies";
import {
  cookiesThemeGet,
  cookiesThemeSave,
} from "@/shared/cookies/theme-cookies";
import { LocaleDTO } from "@/shared/dtos/locale-DTO";
import { ThemeDTO } from "@/shared/dtos/theme-DTO";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export type SettingsContextDataProps = {
  locale: LocaleDTO;
  changeLocale: (value: LocaleDTO) => void;
  theme: ThemeDTO;
  changeTheme: (value: ThemeDTO) => Promise<void>;
};

type SettingsContextProviderProps = {
  children: ReactNode;
};

export const SettingsContext = createContext<SettingsContextDataProps>(
  {} as SettingsContextDataProps
);

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [theme, setTheme] = useState<ThemeDTO>("light");
  // const [locale, setLocale] = useState<LocaleDTO>("br");
  const locale = useLocale() as LocaleDTO;

  const pathname = usePathname();
  const router = useRouter();

  const [_, startTransition] = useTransition();

  function changeLocale(value: LocaleDTO) {
    //moment.locale(momentLocales[value]);

    const newPathname = pathname.replace(/^\/(en|br|es)/, `/${value}`);

    startTransition(async () => {
      await cookiesLanguageSave(value);
      // setLocale(value);
      router.replace(newPathname);
      router.refresh();
    });
  }

  async function loadLocale() {
    const cookiesLocale = await cookiesLanguageGet();
    //  moment.locale(momentLocales[cookiesLocale]);
    changeLocale(cookiesLocale);
  }

  async function changeTheme(value: ThemeDTO) {
    await cookiesThemeSave(value);
    setTheme(value);
  }
  async function getTheme() {
    const cookiesTheme = await cookiesThemeGet();
    setTheme(cookiesTheme);
  }
  useEffect(() => {
    getTheme();
    loadLocale();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        changeTheme,
        locale,
        changeLocale,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
