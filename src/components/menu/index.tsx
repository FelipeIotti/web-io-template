import { menuOptionsItems } from "@/shared/constants/menu-options-items";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";
import { LanguageMenuItem } from "./language-menu-item";
import { MenuItem } from "./menu-item";
import { ProfileItem } from "./profile-item";
export function Menu() {
  return (
    <div
      className="z-30 flex h-full w-[15%] flex-col justify-between px-2 py-1 
        peer-checked:z-10 
        peer-checked:[&_.menu-icon-wrapper]:hover:bg-black/10
        peer-checked:[&_.menu-item]:hover:bg-transparent
        peer-checked:[&_.menu-text]:opacity-0
        "
    >
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center gap-4 px-2 py-2">
          <div className="flex">
            <Icon name="Server" size={18} className="fill-primary" />
          </div>
          <Text
            className="text-primary menu-text hidden font-bold whitespace-nowrap transition-all duration-300 sm:flex"
            noTranslate
          >
            io.template
          </Text>
        </div>

        <div className="flex flex-col gap-1">
          {Object.entries(menuOptionsItems).map(([key, { label, icon }]) => (
            <MenuItem key={key} icon={icon} label={label} />
          ))}
        </div>
      </div>
      <div className="flex  flex-col gap-1">
        <LanguageMenuItem />
        <ProfileItem />
      </div>
    </div>
  );
}
