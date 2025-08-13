interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  const baseClass = "animate-spin border border-t-transparent rounded-full";

  return <div className={`${baseClass} ${className}`} />;
}
