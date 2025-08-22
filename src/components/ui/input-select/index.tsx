import { OptionsDTO } from "@/shared/dtos/options-DTO";
import { useRef, useState } from "react";
import { Icon } from "../icon";
import { Label } from "../label";
import { Text } from "../text";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../toggle-menu";

interface SelectProps {
  options: OptionsDTO[];
  label?: string;
  placeholder?: string;
  notClear?: boolean;
  onChange?: (value: OptionsDTO | null) => void;
  value?: OptionsDTO;
}

export function InputSelect({
  options,
  label,
  placeholder = "select...",
  notClear = true,
  onChange,
  value,
}: SelectProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const [isSelected, setIsSelected] = useState<OptionsDTO | null>(null);

  function handleSelect(option: OptionsDTO | null) {
    if (hiddenInputRef.current) {
      console.log(option?.value);
      hiddenInputRef.current.value = option?.value ? String(option?.value) : "";
    }
    if (labelRef.current)
      labelRef.current.textContent = option?.label
        ? String(option?.label)
        : placeholder;
    setIsSelected(option);
    onChange?.(option);

    const checkbox = document.getElementById(
      "toggle-select"
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }

  return (
    <div className="flex flex-col gap-0.5">
      <Label text={label} />
      <ToggleMenu>
        <input
          ref={hiddenInputRef}
          name="selectComponent"
          type="hidden"
          value={JSON.stringify(value) || hiddenInputRef.current?.value}
        />
        <ToggleMenuTrigger
          className="input w-full shadow"
          selectButtons
          onClear={() => handleSelect(null)}
          notClear={notClear && !!hiddenInputRef.current?.value.length}
        >
          <Text
            ref={labelRef}
            className={`truncate ${isSelected ? "" : "opacity-40"}`}
          >
            {placeholder}
          </Text>
        </ToggleMenuTrigger>

        <ToggleMenuContent className="right-0 max-h-40 max-w-60">
          {options.map((option, index) => (
            <ToggleMenuItem
              key={index}
              onClick={() => handleSelect(option)}
              className={` justify-between ${
                isSelected && isSelected.value === option.value
                  ? "bg-black/10"
                  : ""
              }`}
            >
              <p className=" max-w-[90%] truncate text-xs whitespace-nowrap">
                {option.label}
              </p>
              {isSelected && isSelected.value === option.value && (
                <Icon name="Check" className="fill-primary" size={12} />
              )}
            </ToggleMenuItem>
          ))}
        </ToggleMenuContent>
      </ToggleMenu>
    </div>
  );
}
