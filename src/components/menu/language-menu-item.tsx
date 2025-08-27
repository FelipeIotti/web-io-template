"use client";
import { useSettings } from "@/hooks/use-settings";
import { locales } from "@/i18n/routing";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuHeader,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../ui/toggle-menu";

export function LanguageMenuItem() {
  const { locale, changeLocale } = useSettings();

  return (
    <ToggleMenu>
      <ToggleMenuTrigger className="group px-2 py-3 peer-checked:bg-black/10 hover:bg-black/10">
        <Icon
          className="group-peer-checked:fill-text fill-text/50"
          name="Translate"
          size={18}
        />
        <Text className="opacity-50 group-peer-checked:font-bold group-peer-checked:opacity-100">
          language
        </Text>
      </ToggleMenuTrigger>

      <ToggleMenuContent orientation="right" className="bottom-0">
        <ToggleMenuHeader>
          <Text>language</Text>
        </ToggleMenuHeader>

        {locales.map((loc, index) => (
          <ToggleMenuItem key={index} onClick={() => changeLocale(loc)}>
            <Text className={locale === loc ? "text-secondary" : ""}>
              {loc}
            </Text>

            {loc === locale && <Icon name="Check" className="fill-primary" />}
          </ToggleMenuItem>
        ))}
      </ToggleMenuContent>
    </ToggleMenu>
  );
}
