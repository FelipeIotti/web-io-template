"use client";

import {
  forwardRef,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  useId,
} from "react";
import { Icon } from "../icon";

interface ToggleMenuRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ToggleMenu = forwardRef<HTMLDivElement, ToggleMenuRootProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`relative z-50 flex ${className}`} {...props}>
      {children}
    </div>
  )
);
ToggleMenu.displayName = "ToggleMenu";

interface ToggleMenuTriggerProps extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  onClear?: () => void;
  notClear?: boolean;
  selectButtons?: boolean;
  defaultMenuId?: string | null;
}

const ToggleMenuTrigger = forwardRef<HTMLLabelElement, ToggleMenuTriggerProps>(
  (
    {
      className = "",
      children,
      disabled,
      onClear,
      selectButtons = false,
      notClear = false,
      defaultMenuId = null,
      ...props
    },
    ref
  ) => {
    const menuId = useId();

    const identifier = defaultMenuId || menuId;

    return (
      <>
        <input
          type="checkbox"
          id={identifier}
          className="peer hidden"
          data-toggle-menu-input
          onChange={(e) => {
            const me = e.currentTarget;
            if (me.checked) {
              document
                .querySelectorAll<HTMLInputElement>(
                  "input[data-toggle-menu-input]"
                )
                .forEach((el) => {
                  if (el !== me && el.checked) {
                    el.checked = false;
                    el.dispatchEvent(new Event("change", { bubbles: true }));
                  }
                });
            }
          }}
        />
        <label
          htmlFor={identifier}
          className="fixed inset-0 z-40 hidden peer-checked:block"
        />
        <label
          ref={ref}
          htmlFor={identifier}
          className={`group relative z-50 flex w-full cursor-pointer items-center justify-between gap-1.5 rounded 
            ${disabled ? "cursor-not-allowed opacity-50" : ""}
            ${className}`}
          {...props}
        >
          <div className="flex w-full max-w-[80%] gap-3">{children}</div>

          {selectButtons && (
            <div className="flex h-full items-center gap-1">
              {notClear && (
                <button
                  type="button"
                  className="z-50"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClear?.();
                  }}
                >
                  <Icon
                    name="Close"
                    className="cursor-pointer fill-black/40 stroke-black/40 transition-all duration-200 hover:fill-black hover:stroke-black"
                    size={10}
                  />
                </button>
              )}
              <div className="bg-border mr-0.5 h-[80%] w-0.25" />
              <Icon
                name="ChevronDown"
                className="fill-black/40 stroke-black/40 stroke-[1px] transition-all duration-150 group-hover:fill-black group-hover:stroke-black peer-checked:fill-black"
                size={11}
              />
            </div>
          )}
        </label>
      </>
    );
  }
);
ToggleMenuTrigger.displayName = "ToggleMenuTrigger";

const orientationConfig = {
  right: "left-full ml-1",
  left: "right-full mr-1",
  top: "bottom-full mb-1",
  bottom: "top-full mt-1",
};

interface ToggleMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: keyof typeof orientationConfig;
}

const ToggleMenuContent = forwardRef<HTMLDivElement, ToggleMenuContentProps>(
  ({ className = "", orientation = "bottom", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute ${orientationConfig[orientation]} 
          scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-white
          invisible  z-[9999] w-auto 
          origin-top overflow-y-auto rounded border bg-white p-1 opacity-0 shadow
          transition-all duration-200 ease-out
          peer-checked:pointer-events-auto peer-checked:visible peer-checked:z-50
          peer-checked:h-auto peer-checked:opacity-100 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ToggleMenuContent.displayName = "ToggleMenuContent";

const ToggleMenuItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex w-full cursor-pointer items-center gap-1 rounded-sm px-2 py-1 text-nowrap hover:bg-black/6 ${className}`}
    {...props}
  >
    {children}
  </div>
));
ToggleMenuItem.displayName = "ToggleMenuItem";

const ToggleMenuHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-2 px-2 py-2 ${className}`}
    {...props}
  >
    {children}
    <div className="bg-border h-0.25 w-full" />
  </div>
));
ToggleMenuHeader.displayName = "ToggleMenuHeader";

const ToggleMenuFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-2 px-2 py-2 ${className}`}
    {...props}
  >
    <div className="bg-border h-0.25 w-full" />
    {children}
  </div>
));
ToggleMenuFooter.displayName = "ToggleMenuFooter";

export {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuFooter,
  ToggleMenuHeader,
  ToggleMenuItem,
  ToggleMenuTrigger,
};
