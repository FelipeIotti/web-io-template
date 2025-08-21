"use client";

import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Icon } from "../icon";
import { Label } from "../label";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  noThemed?: boolean;
  errors?: Record<string, string[]> | null;
  mask?: string;
  onChange?: (
    value: ChangeEvent<HTMLInputElement> | string
  ) => Promise<void> | void;
}

export function Input({
  label,
  type = "text",
  name,
  placeholder,
  errors,
  readOnly,
  mask,
  onChange,
  className,
  ...rest
}: InputProps) {
  const [show, setShow] = useState<boolean | null>(null);

  const invalid =
    errors?.[name]?.[0] ||
    (name ? errors?.[name.split(".").pop() as string]?.[0] : undefined);

  const baseClass = `
  ${invalid ? "border-red-500 dark:border-red-400" : ""} 
  ${readOnly ? "opacity-70" : ""}
   shadow placeholder:text-sm rounded w-full flex items-center`;

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = event.target.value;

    if (type === "number") {
      inputValue = inputValue.replace(/[^0-9]/g, "");
      if (onChange) {
        onChange(inputValue);
      }
      return;
    }

    const maskedValue = mask ? applyMask(inputValue, mask) : inputValue;

    if (onChange) {
      onChange(maskedValue);
    }
  }

  return (
    <div className={`relative flex flex-col gap-0.5 ${className}`}>
      <Label text={label} />
      <div className="relative flex items-center justify-center">
        <input
          name={name}
          className={baseClass}
          placeholder={placeholder}
          type={type === "password" ? (show ? "text" : "password") : type}
          readOnly={readOnly}
          onChange={handleInputChange}
          {...rest}
        />
        {type === "password" && (
          <div className="absolute right-2" onClick={() => setShow(!show)}>
            {show ? (
              <Icon
                name="EyeSlash"
                className="cursor-pointer fill-black/40 hover:fill-black"
                size={16}
              />
            ) : (
              <Icon
                name="Eye"
                className="cursor-pointer fill-black/40 hover:fill-black"
                size={16}
              />
            )}
          </div>
        )}
      </div>
      {invalid && (
        <div className="absolute mt-[54px] flex w-full justify-end pr-1">
          <p className="dark: text-xs text-red-500 dark:text-red-400">
            {invalid}
          </p>
        </div>
      )}
    </div>
  );
}

function applyMask(value: string, mask: string): string {
  let maskedValue = "";
  let rawIndex = 0;
  const rawValue = value.replace(/\D/g, "");

  const maskLength = mask.split("_").length - 1;

  if (rawValue.length < maskLength) {
    return rawValue;
  }

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "_") {
      if (rawIndex < rawValue.length) {
        maskedValue += rawValue[rawIndex];
        rawIndex++;
      } else {
        break;
      }
    } else {
      maskedValue += mask[i];
    }
  }

  return maskedValue;
}
