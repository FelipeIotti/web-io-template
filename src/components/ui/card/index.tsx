import { HTMLAttributes } from "react";

export function Card({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className=" dark:from-input dark:to-input/90 flex w-full flex-col rounded border bg-linear-to-t from-black/5 to-white p-4 shadow"
      {...props}
    />
  );
}
