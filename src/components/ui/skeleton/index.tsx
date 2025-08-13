import { HTMLAttributes } from "react";

export function Skeleton({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const baseClassName = "animate-pulse rounded bg-black/10 dark:bg-black/40/20";
  return <div className={`${baseClassName} ${className} `} {...rest} />;
}
