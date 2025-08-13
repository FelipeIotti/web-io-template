"use client";

import { format } from "date-fns";
import { HTMLAttributes, useRef, useState } from "react";
import { DateRange, Mode } from "react-day-picker";
import { Calendar } from "../calendar";
import { Label } from "../label";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuTrigger,
} from "../toggle-menu";

interface InputDatePickerProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  name: string;
  placeholder?: string;
  onChangeDate?: (value: Date | DateRange | undefined) => void;
  tooltip?: string;
  notClear?: boolean;
  mode?: Mode;
  numberOfMonths?: number;
}

export function InputDatePicker({
  label,
  className,
  name,
  onChangeDate,
  placeholder,
  notClear = true,
  numberOfMonths = 2,
  mode = "single",
}: InputDatePickerProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const [date, setDate] = useState<Date | undefined>();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  function handleChangeDate(dates: Date | DateRange | undefined) {
    if (mode === "single") {
      const selectedDate = dates as Date | undefined;
      setDate(selectedDate);
      onChangeDate?.(selectedDate);
      hiddenInputRef.current!.value = selectedDate
        ? format(selectedDate, "yyyy-MM-dd")
        : "";
    } else {
      const selectedRange = dates as DateRange | undefined;
      setDateRange(selectedRange);
      onChangeDate?.(selectedRange);
      hiddenInputRef.current!.value = selectedRange
        ? JSON.stringify({
            from: selectedRange?.from?.toISOString() ?? null,
            to: selectedRange?.to?.toISOString() ?? null,
          })
        : "";
    }
  }

  const buttonText =
    mode === "single"
      ? date
        ? format(date, "dd/MM/yyyy")
        : undefined
      : dateRange?.from
      ? `${format(dateRange.from, "dd/MM/yyyy")} ${
          dateRange.to ? `- ${format(dateRange.to, "dd/MM/yyyy")}` : ""
        }`
      : undefined;

  return (
    <div className={`relative flex flex-col gap-0.5 ${className}`}>
      <Label text={label} />
      <ToggleMenu>
        <input ref={hiddenInputRef} type="hidden" name={name} />
        <ToggleMenuTrigger
          className="input shadow"
          selectButtons
          onClear={() => {
            handleChangeDate(undefined);
          }}
          notClear={notClear && !!hiddenInputRef.current?.value.length}
          onClick={() => setShow(!show)}
        >
          <p
            className={` max-w-[90%]  truncate whitespace-nowrap ${
              buttonText ? "" : "opacity-40"
            }`}
          >
            {buttonText || placeholder}
          </p>
        </ToggleMenuTrigger>

        <ToggleMenuContent
          className={`${numberOfMonths === 2 ? "min-w-120" : "min-w-64"}`}
        >
          {mode === "single" ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => handleChangeDate(d)}
              numberOfMonths={numberOfMonths}
            />
          ) : (
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(d) => handleChangeDate(d)}
              numberOfMonths={numberOfMonths}
            />
          )}
        </ToggleMenuContent>
      </ToggleMenu>
    </div>
  );
}
