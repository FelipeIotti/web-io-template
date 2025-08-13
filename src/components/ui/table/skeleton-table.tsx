import { Skeleton } from "../skeleton";

interface SkeletonTableProps {
  row: number;
}

export function SkeletonTable({ row }: SkeletonTableProps) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {Array.from({ length: row }).map((_, index) => (
        <Skeleton key={index} className="h-[40px] w-full" />
      ))}
    </div>
  );
}
