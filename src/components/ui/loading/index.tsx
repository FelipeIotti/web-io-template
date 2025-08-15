interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  const baseClass =
    "animate-spin border border-3 border-primary border-t-transparent rounded-full";

  return <div className={`${baseClass} ${className}`} />;
}
