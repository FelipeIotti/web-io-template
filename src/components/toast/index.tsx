"use client";

import { toast as sonnerToast } from "sonner";
import { Icon, IconNameType } from "../ui/icon";

export function toast({ text, type }: ToastProps) {
  return sonnerToast.custom(() => <Toast text={text} type={type} />);
}

function Toast(props: ToastProps) {
  const { text, type } = props;

  const typeOptions = {
    success: {
      title: "Sucesso",
      iconName: "Check" as IconNameType,
      bgColor: "bg-green-500",
    },
    error: {
      title: "Erro",
      iconName: "Close" as IconNameType,
      bgColor: "bg-red-500",
    },
    info: {
      title: "Atenção",
      iconName: "Info" as IconNameType,
      bgColor: "bg-blue-500",
    },
  };

  return (
    <div className="bg-foreground flex w-[260px]  items-center rounded border px-3 py-2 shadow">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-3 ">
          <div
            className={`flex items-center justify-center rounded-full p-1 ${typeOptions[type].bgColor}`}
          >
            <Icon
              name={typeOptions[type].iconName}
              className="rounded-full fill-white stroke-white p-1 dark:fill-black dark:stroke-black"
              size={30}
            />
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-lg font-bold">{typeOptions[type].title}</p>
            <p className="text-xs font-semibold text-black/40">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  text: string;
  type: "info" | "success" | "error";
}
