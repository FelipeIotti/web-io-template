"use client";
import { useSettings } from "@/hooks/use-settings";
import { themesOptions } from "@/shared/constants/select-options/theme-options";

import Link from "next/link";
import { Icon } from "../ui/icon";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuFooter,
  ToggleMenuHeader,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../ui/toggle-menu";
import { ProfileInformation } from "./profile-information";

export function ProfileItem() {
  const { theme, changeTheme } = useSettings();

  return (
    <ToggleMenu>
      <ToggleMenuTrigger className="gap-3 px-2 py-3 peer-checked:bg-black/10 hover:bg-black/10">
        <ProfileInformation />
        <Icon className="fill-black" name="ThreeDotsVertical" size={18} />
      </ToggleMenuTrigger>

      <ToggleMenuContent orientation="right" className="bottom-0">
        <ToggleMenuHeader>
          <ProfileInformation />
        </ToggleMenuHeader>

        <div className="flex flex-col gap-2 p-2">
          <ToggleMenuItem
            className="flex gap-2"
            onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
          >
            <Icon
              name={theme === "light" ? "Moon" : "Sun"}
              size={14}
              className="fill-text"
            />

            <p>{themesOptions[theme === "light" ? "dark" : "light"].label}</p>
          </ToggleMenuItem>
        </div>

        <ToggleMenuFooter>
          <Link href="/">
            <ToggleMenuItem className="flex gap-2">
              <Icon name="BoxArrowRight" size={16} className="fill-text" />

              <p>Sair</p>
            </ToggleMenuItem>
          </Link>
        </ToggleMenuFooter>
      </ToggleMenuContent>
    </ToggleMenu>
  );
}
