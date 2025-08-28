"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Icon, IconNameType } from "../ui/icon";
import { Text } from "../ui/text";

interface MenuItemProps {
  label: string;
  icon: string;
  noNavigate?: boolean;
}

const ItemIcon = ({
  icon,
  isSelected,
}: {
  icon: string;
  isSelected?: boolean;
}) => (
  <div className="menu-icon-wrapper rounded px-2 py-3 transition-colors duration-300">
    <Icon
      className={`${isSelected ? "fill-text" : "fill-text/50"}`}
      name={icon as IconNameType}
      size={22}
    />
  </div>
);

export function MenuItem({ label, icon, noNavigate = false }: MenuItemProps) {
  const pathname = usePathname();
  const isSelected = pathname.split("/").includes(label);

  const baseClass =
    "menu-item flex w-full items-center gap-1 pr-2 transition-all duration-300 rounded cursor-pointer hover:bg-black/10";

  return noNavigate ? (
    <div className={baseClass}>
      <ItemIcon icon={icon} isSelected={isSelected} />
      <Text
        className={`menu-text hidden transition-all duration-300 sm:flex ${
          isSelected ? "font-bold" : "opacity-50"
        }`}
      >
        {label}
      </Text>
    </div>
  ) : (
    <Link href={`/main/${label}`} className={baseClass}>
      <ItemIcon icon={icon} isSelected={isSelected} />
      <Text
        className={`menu-text hidden transition-all duration-300 sm:flex ${
          isSelected ? "font-bold" : "opacity-50"
        }`}
      >
        {label}
      </Text>
    </Link>
  );
}
