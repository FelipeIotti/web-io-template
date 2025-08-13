"use client";

import { ComponentProps, useEffect, useRef } from "react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { Icon } from "../icon";

export function Calendar({
  className,
  classNames,
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      locale={ptBR}
      showOutsideDays
      className={`
        group/calendar bg-transparent p-3 [--cell-size:2rem] 
        rtl:**:[.rdp-button_next>svg]:rotate-180 
        rtl:**:[.rdp-button_previous>svg]:rotate-180
        [[data-slot=card-content]_&]:bg-transparent
        [[data-slot=popover-content]_&]:bg-transparent
        ${className ?? ""}
      `}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: `${defaultClassNames.root} w-full`,
        months: `relative flex flex-col gap-4 md:flex-row text-black ${defaultClassNames.months}`,
        month: `flex w-full flex-col gap-4 ${defaultClassNames.month}`,
        nav: `absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1 ${defaultClassNames.nav}`,
        button_previous: `
          h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 
          ${defaultClassNames.button_previous}
        `,
        button_next: `
          h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 
          ${defaultClassNames.button_next}
        `,
        month_caption: `
          flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]
          ${defaultClassNames.month_caption}
        `,
        dropdowns: `
          flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium
          ${defaultClassNames.dropdowns}
        `,
        dropdown_root: `
          has-focus:border-red-100 border-red-100 shadow-xs has-focus:red-100-red-100/50 has-focus:ring-[3px]
          relative rounded-md border
          ${defaultClassNames.dropdown_root}
        `,
        dropdown: `absolute inset-0 opacity-0 ${defaultClassNames.dropdown}`,
        table: `w-full border-collapse`,
        weekdays: `flex ${defaultClassNames.weekdays} `,
        weekday: `
          text-black flex-1 select-none rounded-md text-[0.8rem] font-normal
          ${defaultClassNames.weekday}
        `,
        week: `mt-2 flex w-full  ${defaultClassNames.week}`,
        week_number_header: `w-[--cell-size] select-none ${defaultClassNames.week_number_header}`,
        week_number: `text-black select-none text-[0.8rem] ${defaultClassNames.week_number}`,
        day: `
          group/day relative aspect-square h-full w-full select-none p-0 text-center
          [&:first-child[data-selected=true]_button]:rounded-l-md
          [&:last-child[data-selected=true]_button]:rounded-r-md
          ${defaultClassNames.day}
        `,
        range_start: `bg-primary rounded-l-md ${defaultClassNames.range_start}`,
        range_middle: `rounded-none ${defaultClassNames.range_middle}`,
        range_end: `bg-primary rounded-r-md ${defaultClassNames.range_end}`,
        today: `
          bg-primary/50 text-white 
          dark:bg-red-100
          data-[selected=true]:rounded-none
          data-[selected=true]:text-white
          ${defaultClassNames.today}
        `,
        outside: `
          text-black/20 aria-selected:text-black hover:text-black
          ${defaultClassNames.outside}
        `,
        disabled: `text-black/10 ${defaultClassNames.disabled}`,
        hidden: `invisible ${defaultClassNames.hidden}`,
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={className}
              {...props}
            />
          );
        },
        Chevron: ({ orientation, className, ...props }) => (
          <div className="group/chevron cursor-pointer rounded p-1.5 hover:bg-black/10">
            <Icon
              name={orientation === "right" ? "ChevronRight" : "ChevronLeft"}
              size={14}
              className={`${className} fill-black`}
              {...props}
            />
          </div>
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={`
        data-[selected-single=true]:bg-primary data-[range-start=true]:bg-primary data-[range-end=true]:bg-primary flex aspect-square h-auto w-full
        min-w-[--cell-size]
        cursor-pointer flex-col items-center justify-center gap-1 rounded leading-none font-normal transition-all duration-200 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 hover:bg-black/10 data-[range-end=true]:rounded data-[range-end=true]:text-white data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-black/5 data-[range-middle=true]:text-black/40 data-[range-start=true]:rounded data-[range-start=true]:text-white data-[selected-single=true]:text-white [&>span]:text-xs [&>span]:opacity-70
        ${defaultClassNames.day}
        ${className}
        `}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick?.(e);
      }}
      {...props}
    />
  );
}
