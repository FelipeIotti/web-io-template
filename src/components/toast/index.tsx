"use client";

import { toast as sonnerToast } from "sonner";
import { Icon } from "../ui/icon";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast id={id} title={toast.title} description={toast.description} />
  ));
}

function Toast(props: ToastProps) {
  const { title, description } = props;

  return (
    <div className="bg-foreground flex w-full items-center rounded border p-4 shadow  md:max-w-[364px]">
      <div className="flex flex-1 items-center gap-2">
        <div className="flex items-center justify-center rounded-full bg-green-500 p-2">
          <Icon name="Check" className="fill-white dark:fill-black" />
        </div>
        <div className="w-full">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
}
