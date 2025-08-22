"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Icon, IconNameType } from "../ui/icon";
import { Text } from "../ui/text";

interface MenuItemProps {
  label: string;
  icon: IconNameType;
  path?: string;
}

const Item = ({
  label,
  icon,
  isSelected = false,
}: {
  label: string;
  icon: IconNameType;
  isSelected?: boolean;
}) => {
  return (
    <>
      <Icon
        className={isSelected ? "fill-text" : "fill-text/50"}
        name={icon as IconNameType}
        size={22}
      />
      <Text
        className={`whitespace-nowrap  ${
          isSelected ? "font-bold" : "opacity-50"
        }`}
      >
        {label}
      </Text>
    </>
  );
};

export function MenuItem({ label, icon }: MenuItemProps) {
  const pathname = usePathname();

  const isSelected = pathname.split("/").includes(label);

  const baseClass =
    "flex flex-nowrap items-center gap-3 px-2 py-3 transition-all duration-200 hover:bg-black/10 rounded cursor-pointer";

  return (
    <>
      {label ? (
        <Link href={`/main/${label}`} className={baseClass}>
          <Item label={label} icon={icon} isSelected={isSelected} />
        </Link>
      ) : (
        <div className={baseClass}>
          <Item label={label} icon={icon} />
        </div>
      )}
    </>
  );
}
