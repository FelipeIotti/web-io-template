import { useContext } from "react";
import { SettingsContext } from "../contexts/settings-context";

export function useSettings() {
  const context = useContext(SettingsContext);
  return context;
}
