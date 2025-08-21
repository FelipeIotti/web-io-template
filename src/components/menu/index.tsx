import { menuOptionsItems } from "@/shared/constants/menu-options-items";
import { Icon } from "../ui/icon";
import { MenuItem } from "./menu-item";
import { ProfileItem } from "./profile-item";
export function Menu() {
  return (
    <div className="z-10 flex h-full w-70 transform flex-col justify-between px-2 py-1 transition-all duration-300 ease-in-out peer-checked:pointer-events-none peer-checked:w-0 peer-checked:-translate-x-full peer-checked:opacity-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 px-2 py-2">
          <Icon name="Server" size={18} className="fill-primary" />
          <p className="text-primary font-bold whitespace-nowrap">
            io.finances
          </p>
        </div>

        <div className="flex flex-col gap-1">
          {menuOptionsItems.map(({ path, label, icon }, index) => (
            <MenuItem key={index} path={path} icon={icon} label={label} />
          ))}
        </div>
      </div>

      <ProfileItem />
    </div>
  );
}
