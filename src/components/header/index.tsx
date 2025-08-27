"use client";
import { usePathname } from "@/i18n/navigation";
import { menuOptionsItems } from "@/shared/constants/menu-options-items";
import { BackButton } from "../back-button";
import { IconButton } from "../ui/icon-button";
import { Text } from "../ui/text";

export function Header() {
  const pathname = usePathname();

  const path = pathname.split("/")[2];

  const label = menuOptionsItems[path as keyof typeof menuOptionsItems]?.label;

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

          <Text className="font-bold">{label}</Text>
        </div>
        {pathname.split("/").length > 3 && <BackButton />}
      </div>
      <div className="bg-border h-0.25 w-full" />
    </div>
  );
}
