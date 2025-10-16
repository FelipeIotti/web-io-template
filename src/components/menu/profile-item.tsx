"use client";
import { useAuth } from "@/hooks/use-auth";
import { useSettings } from "@/hooks/use-settings";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";
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
  const { signOut } = useAuth();

  return (
    <ToggleMenu className="z-300">
      <ToggleMenuTrigger className=" peer-checked:bg-black/10 hover:bg-black/10">
        <div className="flex w-full items-center gap-3 px-2 py-3">
          <div className="w-[80%]">
            <ProfileInformation />
          </div>
          <div className="hidden w-[20%] sm:flex">
            <Icon className="fill-black" name="ThreeDotsVertical" size={18} />
          </div>
        </div>
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

            <Text>{theme}</Text>
          </ToggleMenuItem>
        </div>

        <ToggleMenuFooter>
          <ToggleMenuItem
            className="flex gap-2"
            onClick={async () => await signOut()}
          >
            <Icon name="BoxArrowRight" size={16} className="fill-text" />

            <Text>exit</Text>
          </ToggleMenuItem>
        </ToggleMenuFooter>
      </ToggleMenuContent>
    </ToggleMenu>
  );
}
