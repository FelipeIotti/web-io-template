import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-full w-full space-y-4">
      <div className="flex gap-4">
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-60 w-full" />
      </div>
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
    </div>
  );
}
