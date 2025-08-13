import { ReactNode } from "react";
import { IconButton } from "../icon-button";

interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
  children: ReactNode;
  onClose?: () => void;
  width?: "medium" | "large";
  className?: string;
}

export function Modal({
  show,
  setShow,
  children,
  onClose,
  width = "medium",
  className,
}: ModalProps) {
  return (
    <div
      className={`
        fixed inset-0 z-[1000] flex items-center justify-center
        bg-black/40 transition-opacity
        duration-300 dark:bg-white/40
        ${
          show
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
      onClick={() => {
        onClose?.();
        setShow(false);
      }}
    >
      <div
        className={`
          relative rounded-xl border bg-white 
          px-4 py-4 text-start shadow transition-all duration-300
          ${
            width === "medium"
              ? "h-auto w-[50%]"
              : "h-full max-h-[80vh] w-[80%]"
          }
          ${
            show
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }
          ${className}
        `}
        onClick={(event) => event.stopPropagation()}
      >
        <IconButton
          className="absolute top-4 right-4 z-2"
          iconName="Close"
          iconSize={20}
          iconClassName="stroke-black stroke-[0.25px]"
          onClick={() => {
            onClose?.();
            setShow(false);
          }}
        />
        {children}
      </div>
    </div>
  );
}
