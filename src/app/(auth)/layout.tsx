import { Icon } from "@/components/ui/icon";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  return (
    <div className="bg-foreground flex h-screen">
      <div className="bg-primary/15 hidden w-full px-2 py-3 md:block">
        <div className="flex items-center gap-4 px-8 py-8">
          <Icon name="Server" size={22} className="fill-primary" />
          <h1 className="whitespace-nowrap">io.finances</h1>
        </div>
      </div>
      <div className="border-l-border bg-foreground w-full border-l-1">
        {children}
      </div>
    </div>
  );
}
