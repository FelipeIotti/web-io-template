import { ButtonHTMLAttributes } from "react";
import { Icon, IconNameType } from "../icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconNameType;
  iconClassName?: string;
  iconSize?: number;
  htmlFor?: string;
  className?: string;
}

export function IconButton({
  iconName,
  iconClassName,
  iconSize = 12,
  htmlFor,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`flex menu-icon-button items-center justify-center rounded-sm p-1 transition-all duration-200 ${
        !rest.disabled ? "cursor-pointer hover:bg-black/10" : "opacity-60"
      } ${className}`}
      {...rest}
    >
      <label htmlFor={htmlFor}>
        <Icon
          name={iconName}
          className={`fill-black ${
            !rest.disabled ? "cursor-pointer" : ""
          } ${iconClassName}`}
          size={iconSize}
        />
      </label>
    </button>
  );
}
