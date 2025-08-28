import { Menu } from "@/components/menu";
import { ScreenWrapper } from "@/components/screen-wrapper";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  return (
    <div className="bg-background h-screen w-full px-2 py-3">
      <div className="relative flex h-full w-full">
        <input
          type="checkbox"
          id="toggle-menu-sidebar"
          className="peer hidden"
        />

        <Menu />

        <ScreenWrapper>{children}</ScreenWrapper>
      </div>
    </div>
  );
}
