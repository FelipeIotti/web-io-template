import { AuthContextProvider } from "@/contexts/auth-context";
import { SettingsContextProvider } from "@/contexts/settings-context";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SettingsContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SettingsContextProvider>
  );
}
