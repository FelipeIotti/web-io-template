"use client";
import { menuOptionsItems } from "@/shared/constants/menu-options-items";
import { usePathname } from "next/navigation";
import { Icon } from "../ui/icon";
import { IconButton } from "../ui/icon-button";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../ui/toggle-menu";

export function Header() {
  const pathname = usePathname();

  const label =
    menuOptionsItems.find((item) => item.path === pathname)?.label ||
    "Dashboard";

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-2 px-4">
        <div className="flex h-full items-center gap-2 py-2">
          <IconButton
            iconSize={16}
            iconName="LayoutSidebar"
            htmlFor="toggle-menu-sidebar"
          />

          <div className="h-full py-1">
            <div className="bg-border h-full w-0.25" />
          </div>

          <p>{label}</p>
        </div>

        <ToggleMenu>
          <ToggleMenuTrigger className="bg-input border-input-border gap-2 border px-2 py-1 hover:opacity-50">
            <p>empresa 1</p>
            <Icon name="ChevronDown" size={10} className="fill-text" />
          </ToggleMenuTrigger>
          <ToggleMenuContent className="right-0">
            <ToggleMenuItem>
              <Icon name={"Sun"} size={14} className="fill-text" />

              <p>Empresa 1 asd</p>
            </ToggleMenuItem>
            <ToggleMenuItem>
              <Icon name={"Sun"} size={14} className="fill-text" />

              <p>Empresa 2</p>
            </ToggleMenuItem>
            <ToggleMenuItem>
              <Icon name={"Sun"} size={14} className="fill-text" />

              <p>Empresa 3</p>
            </ToggleMenuItem>
          </ToggleMenuContent>
        </ToggleMenu>
      </div>
      <div className="bg-border h-0.25 w-full" />
    </div>
  );
}
