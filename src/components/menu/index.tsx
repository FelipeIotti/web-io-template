import { menuOptionsItems } from "@/shared/constants/menu-options-items";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";
import { LanguageMenuItem } from "./language-menu-item";
import { MenuItem } from "./menu-item";
import { ProfileItem } from "./profile-item";
export function Menu() {
  return (
    <div className="z-10 flex h-full w-45 transform flex-col justify-between px-2 py-1 transition-all duration-1000 ease-in-out peer-checked:pointer-events-none peer-checked:w-0 peer-checked:translate-x-[-130px]">
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center gap-4 px-2 py-2">
          <Icon name="Server" size={18} className="fill-primary" />
          <Text
            className="text-primary font-bold whitespace-nowrap"
            noTranslate
          >
            io.finances
          </Text>
        </div>

        <div className="flex flex-col gap-1">
          {Object.entries(menuOptionsItems).map(([key, { label, icon }]) => (
            <MenuItem key={key} icon={icon} label={label} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <LanguageMenuItem />
        <ProfileItem />
      </div>
    </div>
  );
}
