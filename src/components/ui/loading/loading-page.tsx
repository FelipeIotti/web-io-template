import { Loading } from ".";

export function LoadingPage() {
  return (
    <div className="flex h-[85vh] w-full flex-1 items-center justify-center ">
      <Loading className="h-15 w-15 border-5" />
    </div>
  );
}
