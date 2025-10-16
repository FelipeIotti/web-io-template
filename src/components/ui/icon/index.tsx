"use client";

import * as Icons from "@/components/ui/icon/assets";

export type IconNameType = keyof typeof Icons;

interface IconProps {
  name: IconNameType;
  size?: number;
  className?: string;
  strokeWidth?: number;
  onClick?: () => void;
}

export function Icon({ name, className, size = 24, onClick }: IconProps) {
  const SelectedIcon = Icons[name];

  if (!SelectedIcon) {
    return null;
  }

  return (
    <SelectedIcon
      className={className}
      height={size}
      width={size}
      onClick={onClick}
    />
  );
}
