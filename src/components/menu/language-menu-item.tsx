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
import { MenuItem } from "./menu-item";

export function LanguageMenuItem() {
  const { locale, changeLocale } = useSettings();

  return (
    <ToggleMenu>
      <ToggleMenuTrigger className="peer-checked:bg-black/10 ">
        <MenuItem icon={"Translate"} label={"language"} noNavigate />
      </ToggleMenuTrigger>

      <ToggleMenuContent orientation="right" className="bottom-0">
        <ToggleMenuHeader>
          <Text className="font-bold">language</Text>
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
