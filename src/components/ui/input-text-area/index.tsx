"use client";
import { applyMask } from "@/shared/utils/mask";

import React, { ChangeEvent, TextareaHTMLAttributes } from "react";

import { Label } from "../label";

export interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  fluid?: boolean;
  noThemed?: boolean;
  errors?: Record<string, string> | null;
  mask?: string;
  onChange?: (
    value: ChangeEvent<HTMLTextAreaElement> | string
  ) => Promise<void> | void;
}

export function InputTextArea({
  label,
  name,
  placeholder,
  errors,
  readOnly,
  mask,
  onChange,
  className,
  ...rest
}: InputTextAreaProps) {
  const invalid =
    errors?.[name]?.[0] ||
    (name ? errors?.[name.split(".").pop() as string]?.[0] : undefined);

  const baseClass = `
  ${invalid ? "border-red-500" : ""} 
  ${readOnly ? "opacity-70" : ""}
    shadow placeholder:text-sm rounded py-1.5 px-2 w-full flex items-center`;

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputValue = event.target.value;

    const maskedValue = mask ? applyMask(inputValue, mask) : inputValue;

    event.target.value = maskedValue;

    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
    <div className={`relative flex flex-col gap-0.5 ${className}`}>
      <Label text={label} />
      <textarea
        name={name}
        className={baseClass}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={handleInputChange}
        style={{ minHeight: 150, resize: "none" }}
        {...rest}
      />

      {invalid && (
        <div className="absolute mt-[74px] flex w-full justify-end pr-1">
          <p className="text-red-500">{invalid}</p>
        </div>
      )}
    </div>
  );
}
