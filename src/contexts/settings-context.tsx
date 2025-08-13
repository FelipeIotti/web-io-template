"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

import {
  cookiesThemeGet,
  cookiesThemeSave,
} from "@/shared/cookies/theme-cookies";
import { ThemeDTO } from "@/shared/dtos/theme-DTO";

export type SettingsContextDataProps = {
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
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
